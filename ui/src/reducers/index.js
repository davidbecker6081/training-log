import { combineReducers } from 'redux';
import workoutsReducer from './workoutsReducer';
import peakForcesReducer from './peakForcesReducer';
import userReducer from './userReducer';
import modalsReducer from './modalsReducer';

// Combine all reducers
const rootReducer = combineReducers({
  workouts: workoutsReducer,
  peakForces: peakForcesReducer,
  user: userReducer,
  modals: modalsReducer
});

export default rootReducer;
