import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import Input from 'components/Input';
import Label from 'components/Label';
import ROUTES from 'constants/routes';

import { signIn as signInData } from 'data/forms';
import Alert from 'components/Alert';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();
  const [formProcessing, setFormProcessing] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    if (formProcessing) return;
    setError(null);
    setFormProcessing(true);

    const { ok } = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password
    });

    if (ok) {
      router.push('/');
    } else {
      setError('Not authorized. Try again.');
    }

    setFormProcessing(false);
  };
  return (
    <Layout>
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white w-full p-5 max-w-lg shadow rounded lg:p-10">
          <h1 className="mb-3 text-3xl font-semibold text-gray-700 text-center">Sign in</h1>
          <p className="text-gray-500 text-center">Sign in to access your account</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
            {signInData.map(({ label, name, placeholder, type }) => (
              <div className="mb-6" key={name}>
                <Label htmlFor={name} label={label} />
                <Input
                  type={type}
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  register={register}
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={formProcessing}
              className="disabled:oapcity-50 w-full px-3 py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none mb-3">
              {formProcessing ? 'Please wait...' : 'Sign in'}
            </button>

            <Link href={ROUTES.RESET_PASSWORD}>
              <a className="text-sm text-gray-400 focus:outline-none focus:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300">
                Forgot password?
              </a>
            </Link>
          </form>
          {error && <Alert type="error" label={error} />}
        </div>
      </div>
    </Layout>
  );
};

export default Login;
