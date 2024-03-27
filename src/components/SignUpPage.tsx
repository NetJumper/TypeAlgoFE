import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignUpPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit called");
  
    if (password !== confirmPassword) {
      console.error("Passwords do not match.");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/user', {
        username: name,
        password,
      });
  
      console.log('Signup successful', response.data);
      navigate('/type'); // Use navigate to redirect to the Type page
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-center text-2xl font-semibold text-gray-900">Sign Up</h2>
        {/* Apply consistent styles for text color, cursor, and font family */}
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 text-black caret-black"
            style={{ fontFamily: 'Arial' }}
            required
          />
        </div>
        {/* Repeat for other fields */}
        {/* Email field */}
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 text-black caret-black"
            style={{ fontFamily: 'Arial' }}
            required
          />
        </div>
        {/* Password field */}
        <div>
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 text-black caret-black"
            style={{ fontFamily: 'Arial' }}
            required
          />
        </div>
        {/* Confirm Password field */}
        <div>
          <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 text-black caret-black"
            style={{ fontFamily: 'Arial' }}
            required
          />
        </div>
        {/* Submit button */}
        <button type="submit" className="w-full bg-gray-700 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
