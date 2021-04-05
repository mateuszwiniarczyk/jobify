import React from 'react';
import classNames from 'classnames';
import Checkbox from 'components/Checkbox';

import { employmentTypes, experience, jobTypes } from 'data/filters';

const OffersFilterForm = ({ filtersStatus }) => {
  return (
    <form
      className={classNames('mt-6 lg:mt-0 lg:block', {
        hidden: !filtersStatus
      })}>
      <label>
        <span className="text-lg font-medium">Job title</span>
        <input
          type="text"
          className="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Front-end developer"
        />
      </label>
      <label className="block mt-6">
        <span className="text-lg font-medium">Location</span>
        <input
          type="text"
          className="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="London"
        />
      </label>

      <fieldset className="flex flex-col items-start mt-6">
        <legend className="text-lg font-medium">Job type</legend>

        {jobTypes.map(({ value, label }) => (
          <Checkbox value={value} label={label} name="job-type" key={value} />
        ))}
      </fieldset>

      <fieldset className="flex flex-col items-start mt-6">
        <legend className="text-lg font-medium">Experience</legend>

        {experience.map(({ value, label }) => (
          <Checkbox value={value} label={label} name="experience" key={value} />
        ))}
      </fieldset>

      <fieldset className="flex flex-col items-start mt-6">
        <legend className="text-lg font-medium">Employment type</legend>
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
