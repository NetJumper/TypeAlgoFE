import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getUserStats } from '../graphql/queries';

interface PersonalBestProps {
  signUpId: string;
}

const PersonalBest: React.FC<PersonalBestProps> = ({ signUpId }) => {
  const [personalBest, setPersonalBest] = useState<{ bestTime: number | null }>({ bestTime: null });
  const client = generateClient();

  useEffect(() => {
    const fetchPersonalBest = async () => {
      try {
        const response: any = await client.graphql({
          query: getUserStats,
          variables: { id: signUpId },
        });

        if (response.data && response.data.getUserStats) {
          setPersonalBest(response.data.getUserStats);
        } else {
          console.error('Error fetching personal best data:', response.errors);
        }
      } catch (error) {
        console.error('Error fetching personal best data:', error);
      }
    };

    fetchPersonalBest();
  }, [signUpId]); // Dependency array with signUpId ensures this runs once when signUpId changes

  return (
    <div>
      <h2>Personal Best</h2>
      {personalBest.bestTime !== null ? (
        <p>Best Time: {personalBest.bestTime} seconds</p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default PersonalBest;
