import React from 'react';

const Checkbox = ({ value, label, name, register }) => (
  <label className="inline-flex items-center" key={value}>
    <input
      type="checkbox"
      className="h-4 w-4 rounded"
      name={name}
      value={value}
      {...register(`${name}`)}
    />
    <span className="ml-2 text-gray-700">{label}</span>
  </label>
);

export default Checkbox;
