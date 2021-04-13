import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';

const AddOffer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Layout>
      <div className="bg-white p-10 w-full max-w-screen-xl mx-auto">
        <h2 className="text-2xl mb-5 font-semibold">New offer</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="grid gap-y-5 sm:gap-10 grid-cols-12">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <span className="text-lg font-medium block mb-3">Job Title</span>
            <Input
              type="text"
              placeholder="Front-end developer"
              name="job-title"
              id="job-title"
              register={register}
            />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <span className="text-lg font-medium block mb-3">Location</span>
            <Input
              type="text"
              placeholder="London"
              id="location"
              name="location"
              register={register}
            />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <span className="text-lg font-medium block mb-3">Salary</span>
            <Input type="number" placeholder="1000" id="salary" register={register} name="salary" />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <span className="text-lg font-medium block mb-3">Job type</span>
            <select
              className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
              {...register('job-type')}>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
            </select>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <span className="text-lg font-medium block mb-3">Experience</span>
            <select
              className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
              {...register('experience')}>
              <option value="trainee">Trainee</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid</option>
              <option value="senior">Senior</option>
            </select>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <span className="text-lg font-medium block mb-3">Employment type</span>
            <select
              className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
              {...register('employment-type')}>
              <option value="b2b">B2B</option>
              <option value="permanent">Permanent</option>
              <option value="mandate-contract">Mandate Contract</option>
            </select>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <span className="text-lg font-medium block mb-3">Flexible hours</span>
            <select
              className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
              {...register('flexible-hours')}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <span className="text-lg font-medium block mb-3">Remote possible</span>
            <select
              className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
              {...register('remote-possible')}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <span className="text-lg font-medium block mb-3">Paid holiday</span>
            <select
              className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
              {...register('paid-holiday')}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <span className="text-lg font-medium block mb-3">Online interview</span>
            <select
              className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
              {...register('online-interview')}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <fieldset className="col-span-12">
            <legend className="text-lg font-medium block mb-3">Experience</legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              <Checkbox value="React" label="React" name="skills" register={register} />
              <Checkbox value="Vue" label="Vue" name="skills" register={register} />
              <Checkbox value="JavaScript" label="JavaScript" name="skills" register={register} />
              <Checkbox value="Next.js" label="Next.js" name="skills" register={register} />
              <Checkbox value="Node.js" label="Node.js" name="skills" register={register} />
              <Checkbox value="TypeScript" label="TypeScript" name="skills" register={register} />
              <Checkbox value="Css" label="Css" name="skills" register={register} />
              <Checkbox value="PHP" label="PHP" name="skills" register={register} />
              <Checkbox value="Ruby" label="Ruby" name="skills" register={register} />
              <Checkbox value="Python" label="Python" name="skills" register={register} />
              <Checkbox value="Java" label="Java" name="skills" register={register} />
              <Checkbox value="C" label="C" name="skills" register={register} />
              <Checkbox value="SQL" label="SQL" name="skills" register={register} />
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
};

export default AddOffer;
