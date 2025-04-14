import { useQuery } from '@tanstack/react-query';
import axios from '../api/axios';
import { User, ApiError } from '../types';

/**
 * Custom hook to fetch all users
 */
export const useUsers = (enabled = true) => {
  return useQuery<User[], ApiError>({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axios.get<User[]>('users');
      return data;
    },
    enabled,
  });
};

/**
 * Custom hook to fetch a specific user by ID
 */
export const useUser = (userId: number, enabled = true) => {
  return useQuery<User, ApiError>({
    queryKey: ['user', userId],
    queryFn: async () => {
      const { data } = await axios.get<User>(`users/${userId}`);
      return data;
    },
    enabled,
  });
};
