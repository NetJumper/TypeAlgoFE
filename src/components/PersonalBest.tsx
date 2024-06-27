import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getUserStats } from '../graphql/queries';

const PersonalBest: React.FC<{ signUpId: string }> = ({ signUpId }) => {
  const [userStats, setUserStats] = useState<any>(null);
  const client = generateClient();

  const fetchUserStats = async () => {
    try {
      const userStatsData = await client.graphql({ query: getUserStats, variables: { id: signUpId } });
      setUserStats(userStatsData.data.getUserStats);
    } catch (error) {
      console.error('Error fetching user stats:', error);
    }
  };

  useEffect(() => {
    fetchUserStats();
  }, [signUpId]);

  return (
    <div className="personal-best-container">
      <h2>Personal Best</h2>
      {userStats && (
        <div>
          <p>Best Time: {userStats.bestTime}</p>
          <p>Best WPM: {userStats.bestWPM}</p>
          <p>Best Accuracy: {userStats.bestAccuracy}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalBest;
