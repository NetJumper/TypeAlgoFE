import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'aws-amplify/auth';

interface SignUpFormData {
  username: string;
  password: string;
  email: string;
  phone_number?: string; // Optional, assuming you might not always require it
  validationData?: Record<string, string>; // Optional, for any additional data
}

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    username: '',
    password: '',
    email: '',
    phone_number: '', // Initialize it if you plan to use it
    // validationData can be added as needed
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Destructure only the required fields if you're not using phone_number or validationData
      const { username, password, email, phone_number, validationData } = formData;
      const signUpResponse = await signUp({
        username, // or email if you use email as username
        password,
        options: {
          userAttributes: {
            email,
            ...(phone_number && { phone_number }), // Conditionally add phone_number if present
          },
          ...(validationData && { validationData }), // Conditionally add validationData if present
        },
      });

      console.log('Signup successful', signUpResponse);
      navigate('/'); // Redirect after successful signup, adjust the path as needed
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  // Update formData state for each input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4">
        {/* Form fields like email, password, etc. */}
        {/* Ensure each input has a 'name' attribute matching formData keys */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          // Add other input props as needed
        />
        {/* Repeat for other fields */}
        <button type="submit" className="w-full bg-gray-700 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
