import React, { useEffect, useState, useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listAttempts, getUserStats } from '../graphql/queries';

const UserStatsComponent: React.FC = () => {
  const [userStats, setUserStats] = useState<any>(null);
  const [attempts, setAttempts] = useState<any[]>([]);
  const currentUser = { id: 'currentUserId', signUpId: 'currentSignUpId' }; // Replace with actual current user data

  // Fetch user stats
  const fetchUserStats = useCallback(async (signUpId: string) => {
    try {
      const client = generateClient();
      const userStatsData = await client.graphql({ query: getUserStats, variables: { id: signUpId } });
      setUserStats(userStatsData.data.getUserStats);
    } catch (error) {
      console.error('Error fetching user stats:', error);
    }
  }, []);

  // Fetch attempts
  const fetchAttempts = useCallback(async (userId: string) => {
    try {
      const client = generateClient();
      const attemptsData = await client.graphql({ query: listAttempts, variables: { filter: { userId: { eq: userId } } } });
      setAttempts(attemptsData.data.listAttempts.items);
    } catch (error) {
      console.error('Error fetching attempts:', error);
    }
  }, []);

  useEffect(() => {
    fetchUserStats(currentUser.signUpId);
    fetchAttempts(currentUser.id);
  }, [fetchUserStats, fetchAttempts, currentUser.id, currentUser.signUpId]);

  return (
    <div>
      <h1>User Stats</h1>
      {userStats && (
        <div>
          <p>Name: {userStats.name}</p>
          <p>Best Time: {userStats.bestTime}</p>
          <p>Best WPM: {userStats.bestWPM}</p>
          <p>Best Accuracy: {userStats.bestAccuracy}</p>
        </div>
      )}
      <h2>Attempts</h2>
      <ul>
        {attempts.map(attempt => (
          <li key={attempt.id}>
            WPM: {attempt.wpm}, Accuracy: {attempt.accuracy}, Date: {new Date(attempt.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserStatsComponent;
