import Layout from 'components/Layout';

const Home = () => (
  <Layout>
    <div className="w-100 grid grid-cols-12 gap-2 py-5">
      <div className="lg:col-span-4">
        <form>
          <fieldset className="flex flex-col items-start">
            <legend className="text-lg font-medium">Job type</legend>
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="h-4 w-4" name="job-type" value="full-time" />
              <span className="ml-2 text-gray-700">Full time</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="h-4 w-4" name="job-type" value="part-time" />
              <span className="ml-2 text-gray-700">Part time</span>
            </label>
          </fieldset>

          <fieldset className="flex flex-col items-start mt-6">
            <legend className="text-lg font-medium">Experience</legend>
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="h-4 w-4" name="experience" value="trainee" />
              <span className="ml-2 text-gray-700">Trainee</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="h-4 w-4" name="experience" value="junior" />
              <span className="ml-2 text-gray-700">Junior</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="h-4 w-4" name="experience" value="mid" />
              <span className="ml-2 text-gray-700">Mid</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="h-4 w-4" name="experience" value="senior" />
              <span className="ml-2 text-gray-700">Senior</span>
            </label>
          </fieldset>

          <fieldset className="flex flex-col items-start mt-6">
            <legend className="text-lg font-medium">Employment type</legend>
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="h-4 w-4" name="experience" value="b2b" />
              <span className="ml-2 text-gray-700">B2B</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="h-4 w-4" name="experience" value="permanent" />
              <span className="ml-2 text-gray-700">Permanent</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="h-4 w-4"
                name="experience"
                value="mandate-contract"
              />
              <span className="ml-2 text-gray-700">Mandate Contract</span>
            </label>
          </fieldset>
        </form>
      </div>
      <div className="lg:col-span-8">test</div>
    </div>
  </Layout>
);

export default Home;
