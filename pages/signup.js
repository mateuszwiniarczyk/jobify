import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from 'components/Layout';
import Input from 'components/Input';
import Label from 'components/Label';

import { signUp } from 'data/forms';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [error, setError] = useState();
  const [formProcessing, setFormProcessing] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    if (formProcessing) return;
    setError(null);
    setFormProcessing(true);

    if (data.password !== data.passwordConfirm) {
      setError('Given passwords not match');
      setFormProcessing(false);
      return;
    }

    const payload = {
      name: data.name,
      password: data.password,
      email: data.email
    };

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      router.push('/');
    } else {
      const payload = await response.json();
      setFormProcessing(false);
      setError(payload.message);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white w-full p-5 max-w-lg shadow rounded lg:p-10">
          <h1 className="my-3 text-3xl font-semibold text-gray-700 text-center">Sign up</h1>
          <p className="text-gray-500 text-center">Create an account for your company</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
            {signUp.map(({ label, name, placeholder, type }) => (
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
              className="disabled:opacity-50 w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none mb-6">
              Sign up
            </button>

            <p className="text-sm text-center text-gray-400">
              Already have an account?
              <Link href="/signin">
                <a className="text-blue-400 focus:outline-none focus:underline focus:text-blue-500 ml-1">
                  Sign in
                </a>
              </Link>
            </p>
          </form>
          {error && (
            <div className="block justify-center w-full my-5 col-span-12">
              <span className="block bg-red-600 w-full rounded text-white text-center p-5">
                {error}
              </span>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Login;
