import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from 'components/Layout';
import Input from 'components/Input';
import Label from 'components/Label';
import { uploadImage } from 'utils';

import { signUp } from 'data/forms';

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const [error, setError] = useState();
  const [formProcessing, setFormProcessing] = useState(false);
  const [imagePreviewUrl, setImagePreview] = useState('');
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

    const file = await uploadImage(data.picture[0]);

    const payload = {
      name: data.name,
      password: data.password,
      email: data.email,
      imageUrl: file.secure_url
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

  const handleImagePreview = (e) => {
    if (!e.target.files[0]) return setImagePreview(null);
    const url = window.URL.createObjectURL(e.target.files[0]);
    setImagePreview(url);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white w-full p-5 max-w-lg shadow rounded-sm lg:p-10">
          <h1 className="my-3 text-3xl font-semibold text-gray-700 text-center">Sign up</h1>
          <p className="text-gray-500 text-center">Create an account for your company</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
            <div className="p2 w-full mb-6">
              <div className="relative">
                {imagePreviewUrl && (
                  <div className="p-2 w-full flex flex-col items-center gap-3 mb-3">
                    <span>Logo preview</span>
                    <img
                      src={imagePreviewUrl}
                      className="rounded"
                      alt="Logo"
                      width="75"
                      height="75"
                    />
                  </div>
                )}

                <div className="flex w-full items-center justify-center bg-grey-lighter">
                  <label
                    className="flex items-center gap-3 px-4 py-3 bg-white text-base rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue-600 hover:text-white"
                    htmlFor="picture">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="leading-normal">Select your logo</span>
                    <input
                      {...register(`picture`)}
                      className="hidden"
                      onChange={handleImagePreview}
                      id="picture"
                      type="file"
                    />
                  </label>
                </div>
              </div>
            </div>
            {signUp.map(({ label, name, placeholder, type }) => (
              <div className="mb-6" key={name}>
                <Label htmlFor={name} label={label} />
                {type === 'textarea' ? (
                  <textarea
                    className="form-textarea w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 resize-none"
                    id={name}
                    {...register(`${name}`)}></textarea>
                ) : (
                  <Input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    register={register}
                  />
                )}
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

export default SignUp;
