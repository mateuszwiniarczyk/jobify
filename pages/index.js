import { useState } from 'react';
import Layout from 'components/Layout';
import Offer from 'components/Offer';
import classNames from 'classnames';

const Home = () => {
  const [filtersStatus, setFiltersStatus] = useState(false);
  return (
    <Layout>
      <div className="w-full h-full grid lg:grid-cols-12 gap-10 lg:gap-20 py-5">
        <div className="lg:col-span-3 overflow-auto pr-8">
          <button
            type="button"
            className="lg:hidden bg-white border-gray-600 rounded-md py-2 px-5 shadow mb-6"
            onClick={() => setFiltersStatus(!filtersStatus)}>
            Filters
          </button>

          <form
            className={classNames('lg:block', {
              hidden: !filtersStatus
            })}>
            <label>
              <span className="text-lg font-medium">Location</span>
              <input
                type="text"
                className="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="London"
              />
            </label>

            <fieldset className="flex flex-col items-start mt-6">
              <legend className="text-lg font-medium">Job type</legend>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  name="job-type"
                  value="full-time"
                />
                <span className="ml-2 text-gray-700">Full time</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  name="job-type"
                  value="part-time"
                />
                <span className="ml-2 text-gray-700">Part time</span>
              </label>
            </fieldset>

            <fieldset className="flex flex-col items-start mt-6">
              <legend className="text-lg font-medium">Experience</legend>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  name="experience"
                  value="trainee"
                />
                <span className="ml-2 text-gray-700">Trainee</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  name="experience"
                  value="junior"
                />
                <span className="ml-2 text-gray-700">Junior</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="h-4 w-4 rounded" name="experience" value="mid" />
                <span className="ml-2 text-gray-700">Mid</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  name="experience"
                  value="senior"
                />
                <span className="ml-2 text-gray-700">Senior</span>
              </label>
            </fieldset>

            <fieldset className="flex flex-col items-start mt-6">
              <legend className="text-lg font-medium">Employment type</legend>
              <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="h-4 w-4 rounded" name="experience" value="b2b" />
                <span className="ml-2 text-gray-700">B2B</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  name="experience"
                  value="permanent"
                />
                <span className="ml-2 text-gray-700">Permanent</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  name="experience"
                  value="mandate-contract"
                />
                <span className="ml-2 text-gray-700">Mandate Contract</span>
              </label>
            </fieldset>

            <button
              type="submit"
              className="block w-full mt-10 px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Find a job
            </button>
          </form>
        </div>
        <div className="lg:col-span-9">
          <Offer />
          <Offer />
          <Offer />
          <Offer />
          <Offer />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
