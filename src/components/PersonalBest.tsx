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

        if (response.data && response.data.getUserStats) {
          setBestTime(response.data.getUserStats.bestTime);
        } else {
          console.error('Error fetching personal best data:', response.errors);
        }
      } catch (error) {
        console.error('Error fetching personal best data:', error);
      }
    };

    fetchPersonalBest();

    // Optionally, set an interval to refresh the data
    const intervalId = setInterval(fetchPersonalBest, 60000); // Refresh every 60 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [client, signUpId]);

  return (
    <div>
      <h2>Personal Best</h2>
      {bestTime !== null ? (
        <p>Best Time: {bestTime} seconds</p>
      ) : (
        <p>No personal best available</p>
      )}
    </div>
  );
};

export default PersonalBest;
