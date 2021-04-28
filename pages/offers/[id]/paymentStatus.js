import { getSession } from 'next-auth/client';
import Link from 'next/link';
import Layout from 'components/Layout';
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
      <div className="my-auto flex flex-col items-center justify-center gap-5 text-center">
        <h1 className="text-2xl font-medium leading-none text-gray-700">
          Payment status: {offer.stripeCheckoutStatus}
        </h1>

        <Link href="/">
          <a className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Go to homepage
          </a>
        </Link>
      </div>
    </Layout>
  );
}
