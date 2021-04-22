import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register(`email`)} id="password" placeholder="E-mail" />
        <button type="submit">Reset password</button>
      </form>
      {confirmation && <div>{confirmation}</div>}
      {error && <div>{error}</div>}
    </Layout>
  );
};

export default ResetPassword;
