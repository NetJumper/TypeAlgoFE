// PersonalBest.tsx
import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
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
  const [personalBest, setPersonalBest] = useState<UserStats | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await API.graphql(graphqlOperation(getUserStats, { id: signUpId }));
        setPersonalBest(response.data.getUserStats);
      } catch (err) {
        console.error('Error fetching personal best data:', err);
      }
    };

    fetchData();
  }, [signUpId]);

  return (
    <div>
      <h2>Personal Best</h2>
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
