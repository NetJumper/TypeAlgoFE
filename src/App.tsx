import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // Removed BrowserRouter alias import
import Navbar from './components/Navbar';
import './App.css';
import TypePractice from './components/TypePractice';
import SignInPage from './components/SignInPage'; // Adjust the import path as necessary
import SignUpPage from './components/SignUpPage'
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="bg-sky-200 text-white text-4xl p-4">
        TypeAlgo
      </header>
      <Routes>
        <Route path="/" element={
          <main className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-xl">
              Welcome to TypeAlgo, a place to practice typing with data structures and algorithms!
            </p>
            {/* Link to navigate to /type */}
            <Link to="/type" className="mt-4 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              Start Typing Test
            </Link>
            <UserList />
          </main>
        } />
        <Route path="/type" element={<TypePractice />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
