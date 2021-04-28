const Label = ({ htmlFor, label }) => (
  <label htmlFor={htmlFor} className="block mb-2 text-sm text-gray-600">
    {label}
  </label>
);

export default Label;
