import React from 'react';
import './LoadingSpinner.sass';

/**
 * A reusable loading spinner component
 */
export const LoadingSpinner = ({
  size = 'medium',
  color = 'primary',
  className = '',
}) => {
  const sizeClass = `is-${size}`;
  const colorClass = `has-text-${color}`;
  
  return (
    <div className={`loading-spinner ${sizeClass} ${colorClass} ${className}`}>
      <div className="spinner-icon fa-spin"></div>
      <span className="is-sr-only">Loading...</span>
    </div>
  );
};
