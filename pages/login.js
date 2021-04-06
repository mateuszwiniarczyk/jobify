import Link from 'next/link';
import Layout from 'components/Layout';

const Login = () => (
  <Layout>
    <div className="flex items-center justify-center flex-grow">
      <div className="bg-white w-full p-10 max-w-lg shadow rounded">
        <h1 className="my-3 text-3xl font-semibold text-gray-700 text-center">Sign in</h1>
        <p className="text-gray-500 text-center">Sign in to access your account</p>

        <form action="" className="mt-7">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@company.com"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
            />
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm text-gray-600">
                Password
              </label>
              <a
                href="#!"
                className="text-sm text-gray-400 focus:outline-none focus:text-blue-500 hover:text-blue-500">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
            />
          </div>

          <button
            type="button"
            className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none mb-6">
            Sign in
          </button>

          <p className="text-sm text-center text-gray-400">
            Don&#x27;t have an account yet?
            <Link href="#!">
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

export default Login;
