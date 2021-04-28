import airDB from 'services/airtableClient';
import Joi from 'joi';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import nodemailMailgun from 'nodemailer-mailgun-transport';

const auth = {
  auth: {
    apiKey: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
};

const schema = Joi.object({
  email: Joi.string().email().required()
});

const sendResetToken = async (payload) => {
  const { email } = await schema.validateAsync(payload);

  let [user] = await airDB('users')
    .select({ filterByFormula: `email="${email}"` })
    .firstPage();

  if (!user) {
    return null;
  }

  const resetToken = crypto.randomBytes(22).toString('hex');

  user = await airDB('users').update([
    {
      id: user.id,
      fields: { resetToken }
    }
  ]);

  let transporter = nodemailer.createTransport(nodemailMailgun(auth));

  const data = {
    from: 'Jobify <jobify@gmail.com>',
    to: email,
    subject: 'Change your password!',
    text: `Hey! Please change your password here: ${process.env.NEXT_PUBLIC_BASE_URL}/user/updatePassword?token=${resetToken}`
  };

  transporter.sendMail(data, function (err) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Message sent!');
    }
  });

  return resetToken;
};

export default sendResetToken;
