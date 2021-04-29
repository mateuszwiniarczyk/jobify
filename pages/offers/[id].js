import Link from 'next/link';
import moment from 'moment';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Image from 'next/image';
import getOffer from 'services/offers/get';
import getRecentOffers from 'services/offers/getRecent';
import isAuthorized from 'services/offers/isAuthorized';
import Layout from 'components/Layout';
import Badge from 'components/Badge';
import Detail from 'components/Detail';
import OfferSkills from 'components/OfferSkills';
import OfferContact from 'components/OfferContact';
import Loader from 'components/Loader';

export const getStaticPaths = async () => {
  const offers = await getRecentOffers(5);

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
  const [session] = useSession();

  if (router.isFallback) {
    return <Loader />;
  }

  const {
    id,
    companyLogo,
    title,
    createdAt,
    companyName,
    companyEmail,
    aboutCompany,
    skills,
    type,
    employmentType,
    flexibleHours,
    remotePossible,
    paidHoliday,
    onlineInterview,
    salary,
    phone,
    location,
    jobDescription,
    highlightTill
  } = offer;

  return (
    <Layout>
      <div className="flex flex-col gap-10 items-start w-full mb-48 lg:mb-0 lg:gap-20 lg:flex-row lg:max-w-7xl lg:mx-auto">
        <div className="flex flex-col gap-10 bg-white rounded-xl shadow p-6 lg:py-8 w-full lg:px-10 lg:w-7/12 xl:w-8/12">
          <div className="flex items-center gap-5">
            <Image
              src={companyLogo[0]}
              alt="logo"
              className="object-cover w-16 h-16 rounded-full"
              width="64"
              height="64"
            />
            <div className="flex-grow">
              <div className="flex items-center justify-between w-full mb-2">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <span className="hidden lg:inline-block text-gray-500">
                  {moment(createdAt).fromNow()}
                </span>
              </div>
              <span className="text-blue-600 font-semibold inline-block">{companyName}</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">About company</h3>
            <p className="mt-3">{aboutCompany && aboutCompany}</p>
            <OfferSkills skills={skills} />
            <h3 className="text-lg font-semibold mt-7">Brief job description</h3>
            <p className="mt-3">{jobDescription}</p>
            <h3 className="text-lg font-semibold mt-7">Offer details</h3>
            <div className="flex flex-col gap-3 mt-3 max-w-sm capitalize">
              <Detail label="Job type" value={type} />
              <Detail label="Employment type" value={employmentType} />
              <Detail label="Flexible hours" value={flexibleHours} />
              <Detail label="Remote possible" value={remotePossible} />
              <Detail label="Paid holiday" value={paidHoliday} />
              <Detail label="Online interview" value={onlineInterview} />
            </div>
          </div>
          {isAuthorized(offer, session) && (
            <div className="flex items-center flex-wrap gap-5 text-center">
              <Link href={`/offers/${id}/edit`}>
                <a className="inline-block flex-grow px-10 py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none">
                  Edit this offer
                </a>
              </Link>

              <Link href={`/offers/${id}/highlight`}>
                <a className="inline-block flex-grow px-10 py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none">
                  Highlight this offer
                </a>
              </Link>
              {highlightTill && (
                <span className="block w-full mt-3 text-center">
                  Highlighted till:
                  <span className="ml-1 text-red-600 font-medium">
                    {moment(highlightTill).format('MMMM Do YYYY, h:mm a')}
                  </span>
                </span>
              )}
            </div>
          )}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white shadow border border-t border-gray-300 rounded-xl p-6 w-auto mx-auto lg:static lg:border-none lg:py-8 lg:px-10 lg:mx-0 lg:w-5/12 xl:w-4/12">
          <Badge
            size="md"
            label={`${salary.toLocaleString('pl-PL')}$ / yearly`}
            additionalClasses="w-full text-center text-xl"
          />

          <OfferContact location={location} phone={phone} email={companyEmail} />
        </div>
      </div>
    </Layout>
  );
};

export default Offer;
