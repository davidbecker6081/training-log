import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define our API service using RTK Query
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000/api/v1/' 
  }),
  tagTypes: ['User', 'Workout', 'PeakForce', 'UserPeakForce'],
  endpoints: (builder) => ({
    // Users endpoints
    getUsers: builder.query({
      query: () => 'users',
      providesTags: ['User'],
    }),
    getUser: builder.query({
      query: (userId) => `users/${userId}`,
      providesTags: (result, error, userId) => [{ type: 'User', id: userId }],
    }),
    
    // Workouts endpoints
    getWorkouts: builder.query({
      query: (userId) => `users/${userId}/workouts`,
      providesTags: ['Workout'],
    }),
    getWorkout: builder.query({
      query: (workoutId) => `workouts/${workoutId}`,
      providesTags: (result, error, workoutId) => [{ type: 'Workout', id: workoutId }],
    }),
    
    // Peak Forces endpoints
    getPeakForces: builder.query({
      query: () => 'peak_forces',
      providesTags: ['PeakForce'],
    }),
    getPeakForce: builder.query({
      query: (peakForceId) => `peak_forces/${peakForceId}`,
      providesTags: (result, error, peakForceId) => [{ type: 'PeakForce', id: peakForceId }],
    }),
    
    // User Peak Forces endpoints
    getUserPeakForces: builder.query({
      query: (userId) => `users/${userId}/user_peak_forces`,
      providesTags: ['UserPeakForce'],
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetUsersQuery,
  useGetUserQuery,
  useGetWorkoutsQuery,
  useGetWorkoutQuery,
  useGetPeakForcesQuery,
  useGetPeakForceQuery,
  useGetUserPeakForcesQuery,
} = api;
