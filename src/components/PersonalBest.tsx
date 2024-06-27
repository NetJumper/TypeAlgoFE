// PersonalBest.tsx
import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getUserStats } from '../graphql/queries';

// Define the type for the user stats
interface UserStats {
  id: string;
  signUpId: string;
  name: string;
  bestTime: number;
  bestWPM: number;
  bestAccuracy: number;
  createdAt: string;
  updatedAt: string;
}

interface PersonalBestProps {
  signUpId: string;
}

const PersonalBest: React.FC<PersonalBestProps> = ({ signUpId }) => {
  const [personalBest, setPersonalBest] = useState<any | null>(null);
  const client = generateClient();

  useEffect(() => {
    const fetchPersonalBest = async () => {
      try {
        const response: any = await client.graphql({
          query: getUserStats,
          variables: { id: signUpId }
        });
        setPersonalBest(response.data.getUserStats);
      } catch (error) {
        console.error('Error fetching personal best data:', error);
      }
    };

    fetchPersonalBest();
  }, [signUpId, client]);

  return (
    <div>
      {personalBest ? (
        <div>
          <p>WPM: {personalBest.bestWPM}</p>
          <p>Accuracy: {personalBest.bestAccuracy}%</p>
        </div>
      ) : (
        <p>No personal best found.</p>
      )}
    </div>
  );
};

export default PersonalBest;