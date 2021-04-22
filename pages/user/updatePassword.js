import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="password" {...register(`password`)} id="password" placeholder="Password" />
        <input
          type="password"
          {...register('passwordConfirm')}
          id="passwordConfirm"
          placeholder="Confirm password"
        />
        <button type="submit">Change password</button>
      </form>
      {error && <div>{error}</div>}
    </Layout>
  );
};

export default UpdatePassword;
