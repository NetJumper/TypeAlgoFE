import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TypePractice from './components/TypePractice';
import './App.css';

const App: React.FC = () => {
  const currentUser = { id: 'currentUserId', signUpId: 'currentSignUpId' }; // Replace with actual current user data
  const selectedDataStructure = "linkedList"; // Replace with actual logic to get selected data structure

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<TypePractice />} />
      </Routes>
    </div>
  );
};

export default App;
