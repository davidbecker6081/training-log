import axios from '../api/axios';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './types';

// Action creators for fetching user data
export const fetchUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USER_REQUEST });
    
    const response = await axios.get(`users/${userId}`);
    
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.message || 'Failed to fetch user'
    });
  }
};
