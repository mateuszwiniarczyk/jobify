import airDB from 'services/airtableClient';
import Joi from 'joi';
import crypto from 'crypto';

const schema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required()
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
  const { email, name, password } = await schema.validateAsync(payload);

  await checkEmail(email);

  const passwordSalt = crypto.randomBytes(16).toString('hex');
  const passwordHash = crypto
    .pbkdf2Sync(password, passwordSalt, 1000, 64, `sha512`)
    .toString(`hex`);

  const user = await airDB('users').create([
    {
      fields: {
        email,
        name,
        passwordSalt,
        passwordHash,
        role: 'regular',
        type: 'company'
      }
    }
  ]);

  return user;
};

export default create;
