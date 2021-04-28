import React from 'react';

const Input = ({ type, placeholder, name, id, register, validation }) => (
  <input
    type={type}
    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
    placeholder={placeholder}
    id={id}
    {...register(`${name}`, validation)}
  />
);

export default Input;
