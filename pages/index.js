import { useState } from 'react';
import Layout from 'components/Layout';
import Offer from 'components/Offer';
import OffersFilterForm from 'components/OffersFilterForm';
import { sortingTypes } from 'data/filters';
import getRecentOffers from 'services/offers/getRecent';

export const getStaticProps = async () => {
  const offers = await getRecentOffers(4);

  return {
    props: {
      offers
    }
  };
};

const Home = ({ offers }) => {
  const [filtersStatus, setFiltersStatus] = useState(false);
  return (
    <Layout>
      <div className="grid gap-5 lg:gap-20 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <button
            type="button"
            className="flex mx-auto py-2 px-5 bg-white border-gray-600 rounded-md shadow lg:hidden"
            onClick={() => setFiltersStatus(!filtersStatus)}>
            Filters
          </button>
          <OffersFilterForm filtersStatus={filtersStatus} />
        </div>
        <div className="lg:col-span-9">
          <div className="flex justify-between items-center mb-3 lg:mb-6">
            <span className="font-medium lg:text-xl">18723 Jobs</span>
            <select className="block border-0 bg-transparent">
              {sortingTypes.map((sortingType) => (
                <option key={sortingType}>{sortingType}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-6">
            {offers.map((offer) => (
              <Offer {...offer} key={offer.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
