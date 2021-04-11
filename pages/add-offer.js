import Layout from 'components/Layout';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';

const AddOffer = () => (
  <Layout>
    <div className="bg-white p-10 w-full max-w-screen-xl mx-auto">
      <h2 className="text-2xl mb-5 font-semibold">New offer</h2>
      <form action="#" method="POST" className="grid gap-y-5 sm:gap-10 grid-cols-12">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <span className="text-lg font-medium block mb-3">Job Title</span>
          <Input type="text" placeholder="Front-end developer" id="job-title" />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <span className="text-lg font-medium block mb-3">Location</span>
          <Input type="text" placeholder="London" id="location" />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <span className="text-lg font-medium block mb-3">Salary</span>
          <Input type="number" placeholder="1000" id="salary" />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <span className="text-lg font-medium block mb-3">Job type</span>
          <select className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300">
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <span className="text-lg font-medium block mb-3">Experience</span>
          <select className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300">
            <option>Trainee</option>
            <option>Junior</option>
            <option>Mid</option>
            <option>Senior</option>
          </select>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <span className="text-lg font-medium block mb-3">Employment type</span>
          <select className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300">
            <option>B2B</option>
            <option>Permanent</option>
            <option>Mandate Contract</option>
          </select>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <span className="text-lg font-medium block mb-3">Flexible hours</span>
          <select className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <span className="text-lg font-medium block mb-3">Remote possible</span>
          <select className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <span className="text-lg font-medium block mb-3">Paid holiday</span>
          <select className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <span className="text-lg font-medium block mb-3">Online interview</span>
          <select className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <fieldset className="col-span-12">
          <legend className="text-lg font-medium block mb-3">Experience</legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            <Checkbox value="React" label="React" name="skills" />
            <Checkbox value="Vue" label="Vue" name="skills" />
            <Checkbox value="JavaScript" label="JavaScript" name="skills" />
            <Checkbox value="Next.js" label="Next.js" name="skills" />
            <Checkbox value="Node.js" label="Node.js" name="skills" />
            <Checkbox value="TypeScript" label="TypeScript" name="skills" />
            <Checkbox value="Css" label="Css" name="skills" />
            <Checkbox value="PHP" label="PHP" name="skills" />
            <Checkbox value="Ruby" label="Ruby" name="skills" />
            <Checkbox value="Python" label="Python" name="skills" />
            <Checkbox value="Java" label="Java" name="skills" />
            <Checkbox value="C" label="C" name="skills" />
            <Checkbox value="SQL" label="SQL" name="skills" />
          </div>
        </fieldset>

        <button
          type="submit"
          className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg col-span-12 sm:col-span-6 lg:col-span-3 mt-10">
          Add offer
        </button>
      </form>
    </div>
  </Layout>
);

export default AddOffer;
