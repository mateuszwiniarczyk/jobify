import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import Input from 'components/Input';
import Label from 'components/Label';

import { signIn } from 'data/forms';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Layout>
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white w-full p-5 max-w-lg shadow rounded lg:p-10">
          <h1 className="my-3 text-3xl font-semibold text-gray-700 text-center">Sign in</h1>
          <p className="text-gray-500 text-center">Sign in to access your account</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
            {signIn.map(({ label, name, placeholder, type }) => (
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
              className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none mb-6">
              Sign in
            </button>
            <p className="text-sm text-center text-gray-400">
              Don&#x27;t have an account yet?
              <Link href="/signup">
                <a className="text-blue-400 focus:outline-none focus:underline focus:text-blue-500 ml-1">
                  Sign up
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
