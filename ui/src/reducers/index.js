import { combineReducers } from 'redux';
import workoutsReducer from './workoutsReducer';
import peakForcesReducer from './peakForcesReducer';
import userReducer from './userReducer';

// Combine all reducers
const rootReducer = combineReducers({
  workouts: workoutsReducer,
  peakForces: peakForcesReducer,
  user: userReducer,
});

export default rootReducer;
