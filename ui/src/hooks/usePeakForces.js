import { useQuery } from '@tanstack/react-query';
import axios from '../api/axios';

/**
 * Custom hook to fetch all peak forces
 */
export const usePeakForces = (enabled = true) => {
  return useQuery({
    queryKey: ['peakForces'],
    queryFn: async () => {
      const { data } = await axios.get('peak_forces');
      return data;
    },
    enabled,
  });
};

/**
 * Custom hook to fetch a specific peak force by ID
 */
export const usePeakForce = (peakForceId, enabled = true) => {
  return useQuery({
    queryKey: ['peakForce', peakForceId],
    queryFn: async () => {
      const { data } = await axios.get(`peak_forces/${peakForceId}`);
      return data;
    },
    enabled,
  });
};

/**
 * Custom hook to fetch peak forces for a specific user
 */
export const useUserPeakForces = (userId, enabled = true) => {
  return useQuery({
    queryKey: ['userPeakForces', userId],
    queryFn: async () => {
      const { data } = await axios.get(`users/${userId}/user_peak_forces`);
      return data;
    },
    enabled,
  });
};
