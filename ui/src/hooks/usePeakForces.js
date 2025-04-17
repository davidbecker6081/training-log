import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeakForces, fetchPeakForce } from '../actions/peakForceActions';
import axios from '../api/axios';

/**
 * Custom hook to fetch all peak forces
 */
export const usePeakForces = (enabled = true) => {
  const dispatch = useDispatch();
  const { peakForces, loading, error } = useSelector(state => state.peakForces);

  useEffect(() => {
    if (enabled) {
      dispatch(fetchPeakForces());
    }
  }, [enabled, dispatch]);

  return {
    data: peakForces,
    isLoading: loading,
    error,
    refetch: () => dispatch(fetchPeakForces())
  };
};

/**
 * Custom hook to fetch a specific peak force by ID
 */
export const usePeakForce = (peakForceId, enabled = true) => {
  const dispatch = useDispatch();
  const { currentPeakForce, loading, error } = useSelector(state => state.peakForces);

  useEffect(() => {
    if (peakForceId && enabled) {
      dispatch(fetchPeakForce(peakForceId));
    }
  }, [peakForceId, enabled, dispatch]);

  return {
    data: currentPeakForce,
    isLoading: loading,
    error,
    refetch: () => dispatch(fetchPeakForce(peakForceId))
  };
};

/**
 * Custom hook to fetch peak forces for a specific user
 */
export const useUserPeakForces = (userId, enabled = true) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserPeakForces = async () => {
    if (!userId || !enabled) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(`users/${userId}/user_peak_forces`);
      setData(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch user peak forces');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserPeakForces();
  }, [userId, enabled]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchUserPeakForces
  };
};
