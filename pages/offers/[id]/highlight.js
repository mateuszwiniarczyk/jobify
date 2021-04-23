import { useState } from 'react';
import { getSession } from 'next-auth/client';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import getOfferById from 'services/offers/get';
import isAuthorized from 'services/offers/isAuthorized';
import getAllProducts from 'services/products/getAll';
import { loadStripe } from '@stripe/stripe-js';

export const getServerSideProps = async ({ req, query }) => {
  const session = await getSession({ req });
  const offer = await getOfferById(query.id);

  if (!isAuthorized(offer, session) || !offer) {
    return {
      notFound: true
    };
  }

  const products = await getAllProducts();

  return {
    props: {
      offer,
      products
    }
  };
};

export default function HighlightOffer({ offer, products }) {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();
  const [formProcessing, setFormProcessing] = useState(false);

  const onSubmit = async (data) => {
    if (formProcessing) return;
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

    setError(null);
    setFormProcessing(true);

    const payload = {
      id: data.productId,
      offerId: offer.id,
      quantity: 1
    };
    const response = await fetch(`/api/checkout`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const { checkout } = await response.json();
      stripe.redirectToCheckout({ sessionId: checkout.id });
    } else {
      const payload = await response.json();
      setFormProcessing(false);
      setFormProcessing(false);
      setError(payload.error?.details[0]?.message);
    }

    setFormProcessing(false);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <select {...register('productId')}>
          {products.map((product) => (
            <option value={product.airtableId} key={product.airtableId}>
              {product.name}

              {(product.priceCents / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: product.priceCurrency
              })}
            </option>
          ))}
        </select>
        <button type="submit" className="block mt-5">
          Submit
        </button>
      </form>
    </Layout>
  );
}
