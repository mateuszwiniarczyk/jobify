import Layout from 'components/Layout';
import Link from 'next/link';

const Thanks = () => {
  return (
    <Layout>
      <div className="my-auto flex flex-col items-center justify-center gap-5 text-center">
        <h1 className="text-2xl font-medium leading-none text-gray-700">
          Thanks for submitting new offer.
        </h1>
        <p className="text-xl text-gray-600 leading-none">
          Upon positive verification, it will show in our listing
        </p>
        <Link href="/">
          <a className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Go to homepage
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Thanks;
