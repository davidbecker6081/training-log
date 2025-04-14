import React from 'react';
import { Workout } from '../../types';
import { formatDate } from '../../utils';
import './WorkoutCard.sass';

interface WorkoutCardProps {
  workout: Workout;
  onClick?: (workout: Workout) => void;
  className?: string;
}

/**
 * A card component to display workout information
 */
export const WorkoutCard: React.FC<WorkoutCardProps> = ({
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
          <span className="tag is-primary is-light">{formatDate(workout.date)}</span>
        </div>
        
        {workout.description && (
          <p className="workout-description">{workout.description}</p>
        )}
      </div>
    </div>
  );
};
