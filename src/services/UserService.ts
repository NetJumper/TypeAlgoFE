import axios from 'axios';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users');
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};
