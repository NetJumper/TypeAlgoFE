import React, { useState, FormEvent } from 'react';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Signing in with:', email, password);
    // Here, you'd replace the console.log with your sign-in logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-center text-2xl font-semibold text-gray-900">Sign In</h2>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 text-black caret-black"            style={{ fontFamily: 'Arial' }}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 text-black caret-black"            style={{ fontFamily: 'Arial' }}
            required
          />
        </div>
        <button type="submit" className="w-full bg-gray-700 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
