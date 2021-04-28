const Detail = ({ label, value }) => (
  <div className="flex align-center justify-between gap-16">
    <span className="text-gray-600">{label}:</span>
    <span>{value}</span>
  </div>
);

export default Detail;
