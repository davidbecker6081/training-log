import { useGetWorkoutsQuery, useGetWorkoutQuery } from '../services/api';

/**
 * Custom hook to fetch workouts for a specific user
 */
export const useWorkouts = ({ userId, enabled = true }) => {
  return useGetWorkoutsQuery(userId, { skip: !enabled });
};

/**
 * Custom hook to fetch a specific workout by ID
 */
export const useWorkout = (workoutId, enabled = true) => {
  return useGetWorkoutQuery(workoutId, { skip: !enabled });
};
