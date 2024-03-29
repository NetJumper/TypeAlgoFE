import amplifyconfig from '../amplifyconfiguration.json';
import { UserStat } from './types'; // Ensure this path is correct
import { generateClient } from 'aws-amplify/api';
import { createUserStats, updateUserStats, deleteUserStats } from '../graphql/mutations';
import { listUserStats } from '../graphql/queries';

// Configure Amplify

const client = generateClient();

// Fetch user stats by name
export const fetchUserStatsByName = async (name: string): Promise<UserStat | undefined> => {
  const response = await client.graphql({
    query: listUserStats,
    variables: { filter: { name: { eq: name } } },
  });
  return response.data.listUserStats.items.find(stat => stat.name === name);
};

// Add or update user stats
export const addOrUpdateUserStats = async (stats: UserStat): Promise<void> => {
  const existingStats = await fetchUserStatsByName(stats.name);
  if (existingStats) {
    // Ensure 'id' is provided for update operation
    if (!existingStats.id) {
      console.error('Existing stats missing id for update operation');
      return;
    }
    await client.graphql({
      query: updateUserStats,
      variables: { input: { ...existingStats, ...stats, id: existingStats.id } },
    });
  } else {
    // Ensure 'createUserStats' operation does not expect 'id' when creating new stats
    await client.graphql({
      query: createUserStats,
      variables: { input: stats },
    });
  }
};

// Remove user stats
export const removeUserStats = async (id: string): Promise<void> => {
  if (!id) {
    console.error('Missing id for delete operation');
    return;
  }
  await client.graphql({
    query: deleteUserStats,
    variables: { input: { id } },
  });
};
