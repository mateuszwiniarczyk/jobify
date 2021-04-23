import Layout from 'components/Layout';
import { getSession } from 'next-auth/client';
import isAuthorized from 'services/offers/isAuthorized';
import finalizeCheckout from 'services/checkout/finalize';

export const getServerSideProps = async ({ req, query }) => {
  const session = await getSession({ req });
  const { offer } = await finalizeCheckout(query.id);

  if (!isAuthorized(offer, session) || !offer) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      offer: JSON.parse(JSON.stringify(offer))
    }
  };
};

export default function PaymentStatus({ offer }) {
  return (
    <Layout>
      <h1>Payment status: {offer.stripeCheckoutStatus}</h1>
    </Layout>
  );
}
