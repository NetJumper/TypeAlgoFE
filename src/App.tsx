import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TypePractice from './components/TypePractice';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import './App.css';
import ConfigureAmplifyClientSide from './ConfigureAmplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Define the App component with optional props for signOut and user
const App: React.FC = () => {
  return (
    <div className="App">
      <ConfigureAmplifyClientSide />
      <Navbar />
      <header className="bg-sky-200 text-white text-4xl p-4">
        TypeAlgo
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
