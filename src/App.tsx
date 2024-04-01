import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TypePractice from './components/TypePractice';
import './App.css';
import ConfigureAmplifyClientSide from './ConfigureAmplify';
import '@aws-amplify/ui-react/styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ConfigureAmplifyClientSide />
      <Navbar />
      <Routes>
        <Route path="/" element={<TypePractice />} />
      </Routes>
    </div>
  );
};

// Wrap your App component with the withAuthenticator HOC for authentication
export default App;