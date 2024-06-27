import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listLeaderboards } from '../graphql/queries';

interface LeaderboardProps {
  dataStructure: string;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ dataStructure }) => {
  const [leaderboardData, setLeaderboardData] = useState<any[]>([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response: any = await API.graphql(graphqlOperation(listLeaderboards, {
          filter: { dataStructure: { eq: dataStructure } }
        }));
        setLeaderboardData(response.data.listLeaderboards.items);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboard();
  }, [dataStructure]);

  return (
    <div>
      <h2>Leaderboard for {dataStructure}</h2>
      <ul>
        {leaderboardData.map((entry: any) => (
          <li key={entry.id}>{entry.userId}: {entry.bestTime}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
