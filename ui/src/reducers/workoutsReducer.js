// Action types
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
} from '../actions/types';

// Initial state
const initialState = {
  workouts: [],
  currentWorkout: null,
  loading: false,
  error: null
};

// Workouts reducer
const workoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKOUTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_WORKOUTS_SUCCESS:
      return {
        ...state,
        workouts: action.payload,
        loading: false,
        error: null
      };
    case FETCH_WORKOUTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_WORKOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_WORKOUT_SUCCESS:
      return {
        ...state,
        currentWorkout: action.payload,
        loading: false,
        error: null
      };
    case FETCH_WORKOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ADD_WORKOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ADD_WORKOUT_SUCCESS:
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
        loading: false,
        error: null
      }
    case ADD_WORKOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default workoutsReducer;
