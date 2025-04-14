import { useQuery } from '@tanstack/react-query';
import axios from '../api/axios';
import { PeakForce, UserPeakForce, ApiError } from '../types';

/**
 * Custom hook to fetch all peak forces
 */
export const usePeakForces = (enabled = true) => {
  return useQuery<PeakForce[], ApiError>({
    queryKey: ['peakForces'],
    queryFn: async () => {
      const { data } = await axios.get<PeakForce[]>('peak_forces');
      return data;
    },
    enabled,
  });
};

/**
 * Custom hook to fetch a specific peak force by ID
 */
export const usePeakForce = (peakForceId: number, enabled = true) => {
  return useQuery<PeakForce, ApiError>({
    queryKey: ['peakForce', peakForceId],
    queryFn: async () => {
      const { data } = await axios.get<PeakForce>(`peak_forces/${peakForceId}`);
      return data;
    },
    enabled,
  });
};

/**
 * Custom hook to fetch peak forces for a specific user
 */
export const useUserPeakForces = (userId: number, enabled = true) => {
  return useQuery<UserPeakForce[], ApiError>({
    queryKey: ['userPeakForces', userId],
    queryFn: async () => {
      const { data } = await axios.get<UserPeakForce[]>(`users/${userId}/user_peak_forces`);
      return data;
    },
    enabled,
  });
};
