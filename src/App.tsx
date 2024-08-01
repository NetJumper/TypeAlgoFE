import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TypePractice from './components/TypePractice';
import './App.css';

const App: React.FC = () => {

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
