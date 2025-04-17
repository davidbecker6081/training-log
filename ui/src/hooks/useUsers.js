import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/userActions';

/**
 * Custom hook to fetch a specific user by ID
 */
export const useUser = (userId, enabled = true) => {
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector(state => state.user);

  useEffect(() => {
    if (userId && enabled) {
      dispatch(fetchUser(userId));
    }
  }, [userId, enabled, dispatch]);

  return {
    data: currentUser,
    isLoading: loading,
    error,
    refetch: () => dispatch(fetchUser(userId))
  };
};
