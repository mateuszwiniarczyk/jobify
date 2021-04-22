import Layout from 'components/Layout';
import getOffer from 'services/offers/get';
import getRecentOffers from 'services/offers/getRecent';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import isAuthorized from 'services/offers/isAuthorized';

export const getStaticPaths = async () => {
  const offers = await getRecentOffers(2);

  return {
    paths: offers.map((offer) => ({ params: { id: String(offer.id) } })),
    fallback: true
  };
};

export const getStaticProps = async ({ params }) => {
  const offer = await getOffer(params.id);

  return {
    revalidate: 30,
    props: {
      offer
    }
  };
};

const Offer = ({ offer }) => {
  const router = useRouter();
  const [session, loading] = useSession();

  if (router.isFallback) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      <div className="flex flex-col gap-10 items-start lg:gap-20 lg:flex-row lg:max-w-7xl lg:mx-auto">
        <div className="flex flex-col gap-5 bg-white rounded-xl shadow p-5 lg:py-8 lg:px-10 lg:w-8/12">
          <div className="flex items-start gap-5">
            <picture className="">
              <img
                src={offer.companyLogo}
                alt="logo"
                className="object-cover w-16 h-16 rounded-full"
              />
            </picture>
            <div className="flex-grow">
              <div className="flex items-center justify-between w-full mb-2">
                <h2 className="text-2xl font-semibold">{offer.title}</h2>
                <span className="hidden lg:inline-block text-gray-500">3 days ago</span>
              </div>
              <span className="text-blue-600 font-semibold inline-block">{offer.companyName}</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mt-7">About company</h3>
            <p className="mt-3">
              Facebook is a website which allows users, who sign-up for free profiles, to connect
              with friends, work colleagues or people they don't know, online. It allows users to
              share pictures, music, videos, and articles, as well as their own thoughts and
              opinions with however many people they like.
            </p>
            <h3 className="text-lg font-semibold mt-7">Must have</h3>
            <ul className="flex flex-wrap items-center mt-3 gap-3">
              <li className="bg-blue-600 leading-none text-white rounded px-3 py-2">React</li>
              <li className="bg-blue-600 leading-none text-white rounded px-3 py-2">JavaScript</li>
              <li className="bg-blue-600 leading-none text-white rounded px-3 py-2">PHP</li>
              <li className="bg-blue-600 leading-none text-white rounded px-3 py-2">Node.js</li>
              <li className="bg-blue-600 leading-none text-white rounded px-3 py-2">Next.js</li>
              <li className="bg-blue-600 leading-none text-white rounded px-3 py-2">Tailwindcss</li>
              <li className="bg-blue-600 leading-none text-white rounded px-3 py-2">Tailwindcss</li>
              <li className="bg-blue-600 leading-none text-white rounded px-3 py-2">Tailwindcss</li>
              <li className="bg-blue-600 leading-none text-white rounded px-3 py-2">Tailwindcss</li>
            </ul>
            <h3 className="text-lg font-semibold mt-7">Brief job description</h3>
            <p className="mt-3">
              You will’ll be part of an agile software development team, providing our customers
              with the most powerful platforms for analytics, mobility, and security. You will work
              in an environment with code reviews, CI with Git Hooks, as well as unit-tests and
              end-to-end automated tests.
            </p>
            <h3 className="text-lg font-semibold mt-7">Offer details</h3>
            <div className="flex flex-col gap-3 mt-3 max-w-xs">
              <div className="flex align-center justify-between gap-16">
                <span>Job type</span>
                <span className="text-gray-500">Full time</span>
              </div>
              <div className="flex align-center justify-between gap-16">
                <span>Employment type</span>
                <span className="text-gray-500">B2B</span>
              </div>
              <div className="flex align-center justify-between gap-16">
                <span>Flexible hours</span>
                <span className="text-gray-500">Yes</span>
              </div>
              <div className="flex align-center justify-between gap-16">
                <span>Remote possible</span>
                <span className="text-gray-500">Yes</span>
              </div>
              <div className="flex align-center justify-between gap-16">
                <span>Paid holiday</span>
                <span className="text-gray-500">Yes</span>
              </div>
              <div className="flex align-center justify-between gap-16">
                <span> Online interview</span>
                <span className="text-gray-500">No</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5 lg:py-8 lg:px-10 lg:w-4/12 w-auto">
          <h3 className="text-3xl font-semibold">66,000$</h3>
          <span className="block">+ vat (B2B) per month</span>
          <h3 className="text-lg font-semibold mt-7">Contact with us</h3>
          <ul className="mt-3">
            <li>Main location: Warsaw, Główna 43</li>
            <li>Phone: 123-456-789</li>
            <li>E-mail: company@example.com</li>
          </ul>

          {isAuthorized(offer, session) && (
            <p>
              <Link href={`/offers/${offer.id}/edit`}>Edit this offer</Link>
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Offer;
