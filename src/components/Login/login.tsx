import { useState } from 'react';
import { client } from '../../supabase/client';

function Login() {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await client.auth.signInWithOtp({
        email: email,
      });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login with Magic Link</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Ingrese su email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-md mb-4 md:mb-0 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
