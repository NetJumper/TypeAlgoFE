// Leaderboard.tsx
import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listLeaderboards } from '../graphql/queries';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await API.graphql(graphqlOperation(listLeaderboards));
        setLeaderboardData(response.data.listLeaderboards.items);
      } catch (err) {
        console.error('Error fetching leaderboard data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboardData.map((entry: any) => (
          <li key={entry.id}>{entry.name}: {entry.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
