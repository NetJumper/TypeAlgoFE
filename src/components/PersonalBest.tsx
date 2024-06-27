import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getUserStats } from '../graphql/queries';

interface PersonalBestProps {
  signUpId: string;
  dataStructure: string;
}

const PersonalBest: React.FC<PersonalBestProps> = ({ signUpId, dataStructure }) => {
  const [bestTime, setBestTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchPersonalBest = async () => {
      try {
        const response: any = await API.graphql(graphqlOperation(getUserStats, { id: signUpId }));
        const userStats = response.data.getUserStats;
        if (userStats) {
          const filteredStats = userStats.filter((stat: any) => stat.dataStructure === dataStructure);
          setBestTime(filteredStats.length > 0 ? filteredStats[0].bestTime : null);
        }
      } catch (error) {
        console.error('Error fetching personal best data:', error);
      }
    };

    fetchPersonalBest();
  }, [signUpId, dataStructure]);

  return (
    <div>
      <h2>Personal Best for {dataStructure}</h2>
      <p>{bestTime !== null ? `${bestTime} seconds` : 'No record yet'}</p>
    </div>
  );
};

export default PersonalBest;
