import { useState } from 'react';
import { client } from '../../supabase/client';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const toastId = toast.loading('Sending link to your email');
      await client.auth.signInWithOtp({
        email: email,
      });
      toast.success('It has been send', {
        id: toastId,
      });
    } catch (e) {
      toast.remove();
      toast.error("This dind't work");
      console.error(e);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 p-10">
        <div className="max-w-md w-full p-4 lg:p-8 bg-gray-100 rounded-md shadow-md">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center text-gray-800">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
            <div className="mb-3 lg:mb-4">
              <label htmlFor="email" className="block text-sm lg:text-base font-semibold text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full border-2 border-gray-300 rounded-md px-3 lg:px-4 py-2 lg:py-3 focus:outline-none focus:border-indigo-500 text-sm lg:text-base placeholder-gray-500 bg-gray-200"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute top-0 right-0 -mt-px pt-2 pr-3 lg:pt-3 lg:pr-4">
                  <svg
                    className="h-5 lg:h-6 w-5 lg:w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full lg:w-auto bg-indigo-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 text-base lg:text-lg font-semibold tracking-wide"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default Login;
