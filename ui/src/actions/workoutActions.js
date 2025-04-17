import axios from '../api/axios';
import {
  FETCH_WORKOUTS_REQUEST,
  FETCH_WORKOUTS_SUCCESS,
  FETCH_WORKOUTS_FAILURE,
  FETCH_WORKOUT_REQUEST,
  FETCH_WORKOUT_SUCCESS,
  FETCH_WORKOUT_FAILURE,
  ADD_WORKOUT_REQUEST,
  ADD_WORKOUT_SUCCESS,
  ADD_WORKOUT_FAILURE
} from './types';

// Action creators for fetching all workouts
export const fetchWorkouts = (userId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_WORKOUTS_REQUEST });
    
    const response = await axios.get(`users/${userId}/workouts`);
    
    dispatch({
      type: FETCH_WORKOUTS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_WORKOUTS_FAILURE,
      payload: error.message || 'Failed to fetch workouts'
    });
  }
};

// Action creators for fetching a single workout
export const fetchWorkout = (workoutId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_WORKOUT_REQUEST });
    
    const response = await axios.get(`workouts/${workoutId}`);
    
    dispatch({
      type: FETCH_WORKOUT_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_WORKOUT_FAILURE,
      payload: error.message || 'Failed to fetch workout'
    });
  }
};

export const addWorkout = (userId, workoutData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_WORKOUT_REQUEST }); 

    const { data } = await axios.post(`users/${userId}/workouts`, workoutData);
    
    // Dispatch success action
    dispatch({
      type: ADD_WORKOUT_SUCCESS,
      payload: data
    });
    
    // After successfully adding a workout, fetch the updated list
    dispatch(fetchWorkouts(userId));
  }
  catch (error) {
    dispatch({
      type: ADD_WORKOUT_FAILURE,
      payload: error.message || 'Failed to add workout'
    });
  }
}
