import airDB from 'services/airtableClient';
import Joi from 'joi';
import crypto from 'crypto';
import { hashPassword } from 'utils';

const schema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  imageUrl: Joi.string().required(),
  aboutCompany: Joi.string().required()
});

const checkEmail = async (email) => {
  const existingUser = await airDB('users')
    .select({ filterByFormula: `email="${email}"` })
    .firstPage();

  if (existingUser && existingUser[0]) {
    throw new Error('email_taken');
  }
};

const create = async (payload) => {
  const { email, name, password, imageUrl, aboutCompany } = await schema.validateAsync(payload);

  await checkEmail(email);

  const passwordSalt = crypto.randomBytes(16).toString('hex');
  const passwordHash = hashPassword(password, passwordSalt);

  const user = await airDB('users').create([
    {
      fields: {
        email,
        name,
        passwordSalt,
        passwordHash,
        imageUrl,
        aboutCompany,
        role: 'regular',
        type: 'company'
      }
    }
  ]);

  return user;
};

export default create;
