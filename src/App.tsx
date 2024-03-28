// Import necessary modules and components
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TypePractice from './components/TypePractice';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import { Amplify } from '@aws-amplify/core'; // Ensure this import is correct
import config from './aws-exports'; // Ensure this path matches your configuration file
import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Configure Amplify with your AWS exports
Amplify.configure(config);

// Define the App component with optional props for signOut and user
type AppProps = {
  signOut?: () => void; // Simplified for this example, adjust as needed
  user?: any; // Simplified type for demonstration, specify a more precise type as needed
};

const App: React.FC<AppProps> = ({ signOut, user }) => {
  // Optional: Display user information or provide sign out option
  return (
    <div className="App">
      <Navbar />
      <header className="bg-sky-200 text-white text-4xl p-4">
        TypeAlgo
        {/* Optional: Display sign out button if user is present */}
        {user && (
          <Button onClick={signOut}>Sign Out</Button>
        )}
      </header>
      <Routes>
        <Route path="/" element={<TypePractice />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

// Wrap your App component with the withAuthenticator HOC for authentication
export default withAuthenticator(App);
