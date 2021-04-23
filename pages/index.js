import { useState, useEffect } from 'react';
// import useSWR from 'swr';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';
import Offer from 'components/Offer';
import OffersFilterForm from 'components/OffersFilterForm';
import { sortingTypes } from 'data/filters';
// import getRecentOffers from 'services/offers/getRecent';
import paginateOffers from 'services/offers/paginate';
import { jsonFetcher } from 'utils';

export const getStaticProps = async () => {
  const offers = await paginateOffers();

  return {
    props: {
      offers: offers.records.map((offer) => offer.fields),
      offset: offers.offset ?? null
    }
  };
};

const Home = ({ offers, offset }) => {
  //   const { data } = useSWR('/api/offers', jsonFetcher, { initialData: offers });
  const { query } = useRouter();
  const [filtersStatus, setFiltersStatus] = useState(false);
  const [currentOffers, setOffers] = useState(offers);
  const [currentOffset, setOffset] = useState(offset);

  const loadMore = async () => {
    const response = await jsonFetcher(`/api/offers/paginate?offset=${currentOffset}`);
    setOffset(response.offset);
    setOffers([...currentOffers, ...response.offers]);
  };

  const handleFilters = async () => {
    let filters = '';

    if (query.location) {
      filters += `?location=${query.location}`;
    }

    const response = await jsonFetcher(`/api/offers/paginate${filters}`);
    setOffset(response.offset);
    setOffers([...response.offers]);
  };

  useEffect(() => {
    handleFilters();
  }, [query]);

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
            <span className="font-medium lg:text-xl">
              {currentOffers && currentOffers.length && `${currentOffers.length} Jobs`}
            </span>
            <select className="block border-0 bg-transparent">
              {sortingTypes.map((sortingType) => (
                <option key={sortingType}>{sortingType}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-6">
            {currentOffers.map((offer) => (
              <Offer {...offer} key={offer.id} />
            ))}
          </div>
          {currentOffset && (
            <button
              type="button"
              className="mx-auto block mt-10 px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              onClick={loadMore}>
              Load more
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
