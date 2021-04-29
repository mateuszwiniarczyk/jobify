import { useState } from 'react';
import { getSession } from 'next-auth/client';
import { useForm } from 'react-hook-form';
import { loadStripe } from '@stripe/stripe-js';
import Layout from 'components/Layout';
import getOfferById from 'services/offers/get';
import isAuthorized from 'services/offers/isAuthorized';
import getAllProducts from 'services/products/getAll';
import Alert from 'components/Alert';

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
      setError(payload.error?.details[0]?.message);
    }

    setFormProcessing(false);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white w-full p-5 max-w-lg shadow rounded lg:p-10">
          <h1 className="mb-3 text-3xl font-semibold text-gray-700 text-center">
            Highlight your offer
          </h1>
          <p className="text-gray-500 text-center">Highlight your offer to be more noticeable</p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-7">
            <select
              {...register('productId')}
              className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 capitalize">
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
            <button
              type="submit"
              disabled={formProcessing}
              className="disabled:oapcity-50 w-full px-3 py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none mt-5">
              {formProcessing ? 'Please wait...' : 'Submit'}
            </button>
          </form>
          {error && <Alert type="error" label={error} />}
        </div>
      </div>
    </Layout>
  );
}
