import React from 'react';
import { formatDateTime } from '../../utils';
import './WorkoutCard.sass';

/**
 * A card component to display workout information
 */
export const WorkoutCard = ({
  workout,
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(workout);
    }
  };

  return (
    <div 
      className={`workout-card card ${className} ${onClick ? 'is-clickable' : ''}`}
      onClick={onClick ? handleClick : undefined}
    >
      <div className="card-content">
        <div className="workout-header">
          <h3 className="title is-5">{workout.name}</h3>
          <span className="tag is-primary is-light">{formatDateTime(workout.date)}</span>
        </div>
        
        {workout.description && (
          <p className="workout-description">{workout.description}</p>
        )}
      </div>
    </div>
  );
};
