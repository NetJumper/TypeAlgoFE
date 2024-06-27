import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listLeaderboards } from '../graphql/queries';

const Leaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<any[]>([]);
  const client = generateClient();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response: any = await client.graphql({ query: listLeaderboards });
        if (response.data && response.data.listLeaderboards) {
          setLeaderboardData(response.data.listLeaderboards.items);
        } else {
          console.error('Error fetching leaderboard data:', response.errors);
        }
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboard();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboardData.map((entry: any) => (
          <li key={entry.id}>{entry.userId}: {entry.maxWpm}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
