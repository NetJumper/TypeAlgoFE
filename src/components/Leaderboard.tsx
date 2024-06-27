import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listLeaderboards } from '../graphql/queries';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState<any[]>([]);
  const client = generateClient();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response: any = await client.graphql({ query: listLeaderboards });
        setLeaderboardData(response.data.listLeaderboards.items);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboard();
  }, [client]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboardData.map((entry: any) => (
          <li key={entry.id}>User ID: {entry.userId}, Max WPM: {entry.maxWpm}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
