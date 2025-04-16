import { useQuery } from '@tanstack/react-query';
import axios from '../api/axios';

/**
 * Custom hook to fetch all users
 */
export const useUsers = (enabled = true) => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axios.get('users');
      return data;
    },
    enabled,
  });
};

/**
 * Custom hook to fetch a specific user by ID
 */
export const useUser = (userId, enabled = true) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const { data } = await axios.get(`users/${userId}`);
      return data;
    },
    enabled,
  });
};
