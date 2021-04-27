import airDB from 'services/airtableClient';
import Joi from 'joi';
import { hashPassword } from 'utils';

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const authorize = async (payload) => {
  const { email, password } = await schema.validateAsync(payload);

  const [user] = await airDB('users')
    .select({ filterByFormula: `email="${email}"` })
    .firstPage();

  if (!user) {
    return null;
  }

  const passwordHash = hashPassword(password, user.fields.passwordSalt);

  if (passwordHash !== user.fields.passwordHash) {
    return null;
  }

  return {
    id: user.id,
    email: user.fields.email,
    name: user.fields.name,
    role: user.fields.role
  };
};

export default authorize;
