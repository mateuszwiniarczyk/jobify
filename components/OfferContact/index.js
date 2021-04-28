const OfferContact = ({ location, phone, email }) => (
  <>
    <h3 className="text-lg font-semibold mt-5 lg:mt-7">Contact with us</h3>
    <ul className="mt-3">
      <li>Location: {location}</li>
      <li>Phone: {phone}</li>
      <li>E-mail: {email}</li>
    </ul>
  </>
);

export default OfferContact;
