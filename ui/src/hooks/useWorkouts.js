import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkouts, fetchWorkout, addWorkout, closeModal } from '../actions';

/**
 * Custom hook to fetch workouts for a specific user
*/
export const useWorkouts = ({ userId, enabled = true }) => {
  const dispatch = useDispatch();
  const { workouts, loading, error } = useSelector(state => state.workouts);

  useEffect(() => {
    if (userId && enabled) {
      dispatch(fetchWorkouts(userId));
    }
  }, [userId, enabled, dispatch]);

  return {
    data: workouts,
    isLoading: loading,
    error,
    refetch: () => dispatch(fetchWorkouts(userId))
  };
};

/**
 * Custom hook to fetch a specific workout by ID
 */
export const useWorkout = (workoutId, enabled = true) => {
  const dispatch = useDispatch();

  const { currentWorkout, loading, error } = useSelector(state => state.workouts);

  useEffect(() => {
    if (workoutId && enabled) {
      dispatch(fetchWorkout(workoutId));
    }
  }, [workoutId, enabled, dispatch]);

  return {
    data: currentWorkout,
    isLoading: loading,
    error,
    refetch: () => dispatch(fetchWorkout(workoutId))
  };
};

export const useCreateWorkout = (userId, modalType) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.workouts);

  const createWorkout = async (workoutData) => {
    try {
      await dispatch(addWorkout(userId, workoutData));
      if (modalType) {
        dispatch(closeModal(modalType));
      }
      return true;
    } catch (error) {
      console.error('Error adding workout:', error);
      return false;
    }
  };

  return {
    createWorkout,
    isLoading: loading,
    error
  };
};
