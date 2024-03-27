import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Removed unused imports
import Navbar from './components/Navbar';
import './App.css';
import TypePractice from './components/TypePractice';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <div className="App">
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
}

export default App;
