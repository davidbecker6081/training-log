import { useGetUsersQuery, useGetUserQuery } from '../services/api';

/**
 * Custom hook to fetch all users
 */
export const useUsers = (enabled = true) => {
  return useGetUsersQuery(undefined, { skip: !enabled });
};

/**
 * Custom hook to fetch a specific user by ID
 */
export const useUser = (userId, enabled = true) => {
  return useGetUserQuery(userId, { skip: !enabled });
};
