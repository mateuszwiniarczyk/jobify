import React from 'react';
import classNames from 'classnames';
import Checkbox from 'components/Checkbox';
import Label from 'components/Label';
import Input from 'components/Input';

import { employmentTypes, experience, jobTypes } from 'data/filters';

const OffersFilterForm = ({ filtersStatus }) => {
  return (
    <form
      className={classNames('mt-6 lg:mt-0 lg:block', {
        hidden: !filtersStatus
      })}>
      <div>
        <span className="text-lg font-medium block mb-3">Job Title</span>
        <Input id="job-title" type="text" placeholder="Front-end developer" />
      </div>
      <div className="mt-6">
        <span className="text-lg font-medium block mb-3">Location</span>
        <Input type="text" placeholder="London" id="location" />
      </div>

      <fieldset className="flex flex-col items-start mt-6">
        <legend className="text-lg font-medium block mb-3">Job type</legend>

        {jobTypes.map(({ value, label }) => (
          <Checkbox value={value} label={label} name="job-type" key={value} />
        ))}
      </fieldset>

      <fieldset className="flex flex-col items-start mt-6">
        <legend className="text-lg font-medium block mb-3">Experience</legend>

        {experience.map(({ value, label }) => (
          <Checkbox value={value} label={label} name="experience" key={value} />
        ))}
      </fieldset>

      <fieldset className="flex flex-col items-start mt-6">
        <legend className="text-lg font-medium block mb-3">Employment type</legend>
        {employmentTypes.map(({ value, label }) => (
          <Checkbox value={value} label={label} name="employment" key={value} />
        ))}
      </fieldset>

      <button
        type="submit"
        className="block w-full mt-10 px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
        Find a job
      </button>
    </form>
  );
};

export default OffersFilterForm;
