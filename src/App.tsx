import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TypePractice from './components/TypePractice';
import './App.css';
import ConfigureAmplifyClientSide from './ConfigureAmplify';
import '@aws-amplify/ui-react/styles.css';
import UserStatsComponent from './components/UserStatsComponent';
import Leaderboard from './components/Leaderboard';
import PersonalBest from './components/PersonalBest';

const App: React.FC = () => {
  const currentUser = { id: 'currentUserId', signUpId: 'currentSignUpId' }; // Replace with actual current user data
  const selectedDataStructure = "linkedList"; // Replace with actual logic to get selected data structure

  return (
    <div className="App">
      <ConfigureAmplifyClientSide />
      <Navbar />
      <Routes>
        <Route path="/" element={<TypePractice />} />
        <Route path="/stats" element={<UserStatsComponent />} />
        <Route path="/leaderboard" element={<Leaderboard dataStructure={selectedDataStructure} />} />
        <Route path="/personal-best" element={<PersonalBest signUpId={currentUser.signUpId} dataStructure={selectedDataStructure} />} />
      </Routes>
    </div>
  );
};

export default App;
