import React from 'react';

const Checkbox = ({ value, label, name }) => {
  return (
    <label className="inline-flex items-center mt-3" key={value}>
      <input type="checkbox" className="h-4 w-4 rounded" name={name} value={value} />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;