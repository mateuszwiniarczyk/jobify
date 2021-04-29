import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import { useRouter } from 'next/router';
import { employmentTypes, experienceTypes, jobTypes } from 'data/types';

const OffersFilterForm = ({ filtersStatus }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let url = '?';
    if (data.location) {
      url += `location=${data.location}&`;
    }

    if (data.jobTitle) {
      url += `jobTitle=${data.jobTitle}&`;
    }

    if (data.jobType) {
      url += `jobType=${data.jobType}&`;
    }

    if (data.employment) {
      url += `employmentType=${data.employment.join()}&`;
    }

    if (data.experience) {
      url += `experience=${data.experience.join()}`;
    }
    router.push(url);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames('mt-6 lg:mt-0 lg:block bg-white px-7 py-10 shadow rounded-xl', {
        hidden: !filtersStatus
      })}>
      <div>
        <span className="text-lg font-medium block mb-3">Job Title</span>
        <Input
          id="jobTitle"
          type="text"
          placeholder="Front-end developer"
          name="jobTitle"
          register={register}
        />
      </div>
      <div className="mt-6">
        <span className="text-lg font-medium block mb-3">Location</span>
        <Input type="text" placeholder="London" id="location" name="location" register={register} />
      </div>

      <fieldset className="flex flex-col items-start mt-6 gap-1">
        <legend className="text-lg font-medium block mb-3">Job type</legend>

        {jobTypes.map((jobType) => (
          <Checkbox
            value={jobType}
            label={jobType}
            name="jobType"
            key={jobType}
            register={register}
            additionalClasses="capitalize"
          />
        ))}
      </fieldset>

      <fieldset className="flex flex-col items-start mt-6 gap-1">
        <legend className="text-lg font-medium block mb-3">Experience</legend>

        {experienceTypes.map((experienceType) => (
          <Checkbox
            value={experienceType}
            label={experienceType}
            name="experience"
            key={experienceType}
            register={register}
            additionalClasses="capitalize"
          />
        ))}
      </fieldset>

      <fieldset className="flex flex-col items-start mt-6 gap-1">
        <legend className="text-lg font-medium block mb-3">Employment type</legend>
        {employmentTypes.map((employmentType) => (
          <Checkbox
            value={employmentType}
            label={employmentType}
            name="employment"
            key={employmentType}
            register={register}
            additionalClasses="capitalize"
          />
        ))}
      </fieldset>

      <button
        type="submit"
        className="block w-full mt-10 px-3 py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none">
        Find a job
      </button>
    </form>
  );
};

export default OffersFilterForm;
