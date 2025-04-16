import axios from '../api/axios';
import {
  FETCH_PEAK_FORCES_REQUEST,
  FETCH_PEAK_FORCES_SUCCESS,
  FETCH_PEAK_FORCES_FAILURE,
  FETCH_PEAK_FORCE_REQUEST,
  FETCH_PEAK_FORCE_SUCCESS,
  FETCH_PEAK_FORCE_FAILURE
} from './types';

// Action creators for fetching all peak forces
export const fetchPeakForces = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PEAK_FORCES_REQUEST });
    
    const response = await axios.get('peak_forces');
    
    dispatch({
      type: FETCH_PEAK_FORCES_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_PEAK_FORCES_FAILURE,
      payload: error.message || 'Failed to fetch peak forces'
    });
  }
};

// Action creators for fetching a single peak force
export const fetchPeakForce = (peakForceId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PEAK_FORCE_REQUEST });
    
    const response = await axios.get(`peak_forces/${peakForceId}`);
    
    dispatch({
      type: FETCH_PEAK_FORCE_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_PEAK_FORCE_FAILURE,
      payload: error.message || 'Failed to fetch peak force'
    });
  }
};
