const Input = ({ type, placeholder, name, id, register }) => (
  <input
    type={type}
    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
    placeholder={placeholder}
    id={id}
    {...register(`${name}`)}
  />
);

export default Input;
