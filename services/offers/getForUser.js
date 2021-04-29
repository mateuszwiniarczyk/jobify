import airDB from 'services/airtableClient';

const getForUser = async (email) => {
  const offers = await airDB('offers')
    .select({
      sort: [{ field: 'id', direction: 'desc' }],
      filterByFormula: `companyEmail="${email}"`
    })
    .firstPage();

  return offers.map((offer) => offer.fields);
};

export default getForUser;
