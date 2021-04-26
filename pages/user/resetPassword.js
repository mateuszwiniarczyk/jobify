import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import Input from 'components/Input';
import Label from 'components/Label';

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();
  const [confirmation, setConfirmation] = useState();
  const [formProcessing, setFormProcessing] = useState(false);

  const onSubmit = async (data) => {
    if (formProcessing) return;
    setError(null);
    setFormProcessing(true);

    const payload = {
      email: data.email
    };

    const response = await fetch('/api/users/resetPassword', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      setConfirmation(
        'If provided e-mail exists in our database, you will receive reset link shortly'
      );
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
          <h1 className="my-3 text-3xl font-semibold text-gray-700 text-center">
            Reset your password
          </h1>
          <p className="text-gray-500 text-center">
            In order to reset your password, please provide e-mail
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-7">
            <Label label="E-mail" />
            <Input type="email" name="email" register={register} placeholder="E-mail" />
            <button
              type="submit"
              className="mt-5 disabled:oapcity-50 w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none mb-6">
              Reset password
            </button>
          </form>
          {confirmation && <div>{confirmation}</div>}
          {error && <div>{error}</div>}
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
