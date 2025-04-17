import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { api } from './services/api';

// Create the Redux store with Redux Toolkit
const store = configureStore({
  reducer: {
    // Add the api reducer to the store
    [api.reducerPath]: api.reducer,
    // Add the existing reducers from the combined rootReducer
    ...rootReducer,
  },
  // Enable Redux DevTools
  devTools: process.env.NODE_ENV !== 'production',
  // Add middleware - Redux Toolkit includes thunk by default
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
