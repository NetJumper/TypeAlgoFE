import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listLeaderboards } from '../graphql/queries';

interface LeaderboardProps {
  dataStructure: string;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ dataStructure }) => {
  const [leaderboardData, setLeaderboardData] = useState<any[]>([]);
  const client = generateClient();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response: any = await client.graphql({ query: listLeaderboards });
        if (response.data && response.data.listLeaderboards) {
          const allData = response.data.listLeaderboards.items;
          const filteredData = allData.filter((item: any) => item.dataStructure === dataStructure);
          setLeaderboardData(filteredData);
        } else {
          console.error('Error fetching leaderboard data:', response.errors);
        }
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
