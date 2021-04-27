import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import Label from 'components/Label';
import { skillTypes, jobTypes, employmentTypes, experienceTypes } from 'data/types';

const OfferForm = ({ handleSubmit, onSubmit, register, formProcessing, submitLabel }) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      className="grid gap-y-5 sm:gap-10 grid-cols-12">
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Label htmlFor="title" label="Job title" />
        <Input
          type="text"
          placeholder="Front-end developer"
          name="title"
          id="title"
          register={register}
        />
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Label htmlFor="location" label="Location" />
        <Input type="text" placeholder="London" id="location" name="location" register={register} />
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Label htmlFor="salary" label="Salary" />
        <Input type="number" placeholder="1000" id="salary" register={register} name="salary" />
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Label htmlFor="phone" label="Phone" />
        <Input type="tel" placeholder="Mobile phone" name="phone" id="phone" register={register} />
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Label htmlFor="type" label="Job type" />
        <select
          className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 capitalize"
          name="type"
          {...register('type')}>
          {jobTypes.map((jobType) => (
            <option value={jobType} key={jobType}>
              {jobType}
            </option>
          ))}
        </select>
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Label htmlFor="experience" label="Experience" />
        <select
          className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 capitalize"
          {...register('experience')}>
          {experienceTypes.map((experienceType) => (
            <option value={experienceType} key={experienceType}>
              {experienceType}
            </option>
          ))}
        </select>
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Label htmlFor="employmentType" label="Employment type" />
        <select
          className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 capitalize"
          {...register('employmentType')}>
          {employmentTypes.map((employmentType) => (
            <option value={employmentType} key={employmentType}>
              {employmentType}
            </option>
          ))}
        </select>
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Label htmlFor="flexibleHours" label="Flexible hours" />
        <select
          className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
          {...register('flexibleHours')}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Label htmlFor="remotePossible" label="Remote possible" />
        <select
          className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
          {...register('remotePossible')}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Label htmlFor="paidHoliday" label="Paid holiday" />
        <select
          className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
          {...register('paidHoliday')}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Label htmlFor="onlineInterview" label="Online interview" />
        <select
          className="w-full placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
          {...register('onlineInterview')}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="col-span-12">
        <Label htmlFor="jobDescription" label="Job description" />
        <textarea
          id="jobDescription"
          {...register('jobDescription')}
          placeholder="A few words about job"
          className="form-textarea w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 resize-none"></textarea>
      </div>

      <fieldset className="col-span-12">
        <Label htmlFor="onlineInterview" label="Skills" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {skillTypes.map((skillType) => (
            <Checkbox
              value={skillType}
              label={skillType}
              name="skills"
              register={register}
              key={skillType}
            />
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={formProcessing}
        className="disabled:opacity-50 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg col-span-12 sm:col-span-6 lg:col-span-3 mt-10">
        {formProcessing ? 'Please wait...' : submitLabel}
      </button>
    </form>
  );
};

export default OfferForm;
