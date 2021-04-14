import airDB from 'services/airtableClient';

const create = async (payload) => {
  const offer = await airDB('offers').create([
    {
      fields: {
        ...payload,
        salary: Number(payload.salary),
        status: 'inactive',
        company: 'Facebook'
      }
    }
  ]);

  return offer;
};

export default create;
