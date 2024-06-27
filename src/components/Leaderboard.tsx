import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listLeaderboards } from '../graphql/queries';

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const client = generateClient();

  const fetchLeaderboard = async () => {
    try {
      const leaderboardData = await client.graphql({ query: listLeaderboards });
      setLeaderboard(leaderboardData.data.listLeaderboards.items);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map(entry => (
          <li key={entry.id}>
            User ID: {entry.userId} - Max WPM: {entry.maxWpm}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
