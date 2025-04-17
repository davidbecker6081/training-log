import { 
  useGetPeakForcesQuery, 
  useGetPeakForceQuery, 
  useGetUserPeakForcesQuery 
} from '../services/api';

/**
 * Custom hook to fetch all peak forces
 */
export const usePeakForces = (enabled = true) => {
  return useGetPeakForcesQuery(undefined, { skip: !enabled });
};

/**
 * Custom hook to fetch a specific peak force by ID
 */
export const usePeakForce = (peakForceId, enabled = true) => {
  return useGetPeakForceQuery(peakForceId, { skip: !enabled });
};

/**
 * Custom hook to fetch peak forces for a specific user
 */
export const useUserPeakForces = (userId, enabled = true) => {
  return useGetUserPeakForcesQuery(userId, { skip: !enabled });
};
