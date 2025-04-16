// Action types
import { 
  FETCH_PEAK_FORCES_REQUEST,
  FETCH_PEAK_FORCES_SUCCESS,
  FETCH_PEAK_FORCES_FAILURE,
  FETCH_PEAK_FORCE_REQUEST,
  FETCH_PEAK_FORCE_SUCCESS,
  FETCH_PEAK_FORCE_FAILURE
} from '../actions/types';

// Initial state
const initialState = {
  peakForces: [],
  currentPeakForce: null,
  loading: false,
  error: null
};

// Peak forces reducer
const peakForcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEAK_FORCES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PEAK_FORCES_SUCCESS:
      return {
        ...state,
        peakForces: action.payload,
        loading: false,
        error: null
      };
    case FETCH_PEAK_FORCES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_PEAK_FORCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PEAK_FORCE_SUCCESS:
      return {
        ...state,
        currentPeakForce: action.payload,
        loading: false,
        error: null
      };
    case FETCH_PEAK_FORCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default peakForcesReducer;
