import airDB from 'services/airtableClient';
import Joi from 'joi';

const schema = Joi.object({
  title: Joi.string().min(5).required(),
  location: Joi.string().required(),
  salary: Joi.number().greater(0).required(),
  type: Joi.string().required(),
  experience: Joi.string().required(),
  employmentType: Joi.string().required(),
  flexibleHours: Joi.string().required(),
  remotePossible: Joi.string().required(),
  paidHoliday: Joi.string().required(),
  onlineInterview: Joi.string().required(),
  skills: Joi.array().items(Joi.string()),
  phone: Joi.number().required(),
  jobDescription: Joi.string().required()
});

const create = async (payload, userId) => {
  const validateOffer = await schema.validateAsync(payload);
  const offer = await airDB('offers').create([
    {
      fields: {
        ...validateOffer,
        status: 'inactive',
        users: [userId]
      }
    }
  ]);

  return offer;
};

export default create;
