import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
import Layout from 'components/Layout';
import Input from 'components/Input';
import Label from 'components/Label';

const UpdatePassword = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();
  const [formProcessing, setFormProcessing] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    if (formProcessing) return;
    setError(null);
    setFormProcessing(true);

    const payload = {
      resetToken: router.query.token,
      password: data.password
    };

    if (data.password !== data.passwordConfirm) {
      setError('Given passwords not match');
      setFormProcessing(false);
      return;
    }

    const response = await fetch('/api/users/resetPassword', {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const payload = await response.json();

      await signIn('credentials', {
        redirect: false,
        email: payload.user.email,
        password: data.password
      });

      router.push('/');
    } else {
      const payload = await response.json();
      setFormProcessing(false);
      setError(payload.error);
    }

    setFormProcessing(false);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white w-full p-5 max-w-lg shadow rounded lg:p-10">
          <h1 className="mb-3 text-3xl font-semibold text-gray-700 text-center">
            Reset your password
          </h1>
          <p className="text-gray-500 text-center">
            In order to reset your password, please provide e-mail
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-7">
            <div>
              <Label label="Password" />
              <Input
                type="password"
                name="password"
                register={register}
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="mt-6">
              <Label label="Confirm your password" />
              <Input
                type="password"
                name="passwordConfirm"
                register={register}
                id="passwordConfirm"
                placeholder="Confirm password"
              />
            </div>
            <button
              type="submit"
              disabled={formProcessing}
              className="mt-5 disabled:oapcity-50 w-full px-3 py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none mb-6">
              {formProcessing ? 'Please wait...' : 'Change password'}
            </button>
          </form>
          {error && <div>{error}</div>}
        </div>
      </div>
    </Layout>
  );
};

export default UpdatePassword;
