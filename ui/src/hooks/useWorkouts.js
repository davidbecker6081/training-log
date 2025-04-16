import { useQuery } from '@tanstack/react-query';
import axios from '../api/axios';

/**
 * Custom hook to fetch workouts for a specific user
 */
export const useWorkouts = ({ userId, enabled = true }) => {
  return useQuery({
    queryKey: ['workouts', userId],
    queryFn: async () => {
      const { data } = await axios.get(`users/${userId}/workouts`);
      return data;
    },
    enabled,
  });
};

/**
 * Custom hook to fetch a specific workout by ID
 */
export const useWorkout = (workoutId, enabled = true) => {
  return useQuery({
    queryKey: ['workout', workoutId],
    queryFn: async () => {
      const { data } = await axios.get(`workouts/${workoutId}`);
      return data;
    },
    enabled,
  });
};
