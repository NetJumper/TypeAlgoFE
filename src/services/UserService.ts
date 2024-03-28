// src/services/userService.ts
import axios from 'axios';

export const fetchUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`);
  return response.data;
};
