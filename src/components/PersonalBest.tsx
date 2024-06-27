import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getUserStats } from '../graphql/queries';

interface PersonalBestProps {
  signUpId: string;
}

const PersonalBest: React.FC<PersonalBestProps> = ({ signUpId }) => {
  const [bestTime, setBestTime] = useState<number | null>(null);
  const client = generateClient();

  useEffect(() => {
    const fetchPersonalBest = async () => {
      try {
        const response: any = await client.graphql({
          query: getUserStats,
          variables: { id: signUpId }
        });
        setBestTime(response.data.getUserStats.bestTime);
      } catch (error) {
        console.error('Error fetching personal best data:', error);
      }
    };

    fetchPersonalBest();
  }, [signUpId, client]);

  return (
    <div>
      <h2>Personal Best Time</h2>
      {bestTime !== null ? <p>Time: {bestTime} seconds</p> : <p>No personal best found.</p>}
    </div>
  );
};

export default PersonalBest;
