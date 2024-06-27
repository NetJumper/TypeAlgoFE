import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import PersonalBest from './components/PersonalBest';
import UserStatsComponent from './components/UserStatsComponent';

const App = () => {
  const currentUser = { signUpId: 'currentSignUpId' };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/stats" element={<UserStatsComponent />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route
            path="/personal-best"
            element={<PersonalBest signUpId={currentUser.signUpId} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
