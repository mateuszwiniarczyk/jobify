import React from 'react';

const OfferContact = ({ location }) => (
  <>
    <h3 className="text-lg font-semibold mt-7">Contact with us</h3>
    <ul className="mt-3">
      <li>Location: {location}</li>
      <li>Phone: 123-456-789</li>
      <li>E-mail: company@example.com</li>
    </ul>
  </>
);

export default OfferContact;
