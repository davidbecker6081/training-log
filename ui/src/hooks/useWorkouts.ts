import { useQuery } from '@tanstack/react-query';
import axios from '../api/axios';
import { Workout, ApiError } from '../types';

interface UseWorkoutsOptions {
  userId: number;
  enabled?: boolean;
}

/**
 * Custom hook to fetch workouts for a specific user
 */
export const useWorkouts = ({ userId, enabled = true }: UseWorkoutsOptions) => {
  return useQuery<Workout[], ApiError>({
    queryKey: ['workouts', userId],
    queryFn: async () => {
      const { data } = await axios.get<Workout[]>(`users/${userId}/workouts`);
      return data;
    },
    enabled,
  });
};

/**
 * Custom hook to fetch a specific workout by ID
 */
export const useWorkout = (workoutId: number, enabled = true) => {
  return useQuery<Workout, ApiError>({
    queryKey: ['workout', workoutId],
    queryFn: async () => {
      const { data } = await axios.get<Workout>(`workouts/${workoutId}`);
      return data;
    },
    enabled,
  });
};
