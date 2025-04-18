import React, { useState } from 'react';
import { useWorkouts } from '../../hooks';
import { LoadingSpinner, ErrorMessage, WorkoutCard } from '../../components';
import './WorkoutList.sass';

/**
 * A view component to display a list of workouts
 */
export const WorkoutList = ({
  userId,
  onSelectWorkout,
  className = '',
}) => {
  const { data: workouts, isLoading, error, refetch } = useWorkouts({ userId });
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredWorkouts = workouts?.filter(workout => 
    workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (workout.description && workout.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedWorkouts = filteredWorkouts.sort((a, b) => a.date > b.date ? -1 : 1)

  return (
    <div className={`workout-list ${className}`}>
      <div className="workout-list-header">
        <h2 className="title is-4">Workouts</h2>
        
        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Search workouts..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error} onRetry={refetch} />
      ) : sortedWorkouts && sortedWorkouts.length > 0 ? (
        <div className="workout-cards">
          {sortedWorkouts.map(workout => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              onClick={onSelectWorkout}
            />
          ))}
        </div>
      ) : (
        <div className="no-workouts">
          <p>No workouts found.</p>
          {searchTerm && (
            <button 
              className="button is-small is-light"
              onClick={() => setSearchTerm('')}
            >
              Clear search
            </button>
          )}
        </div>
      )}
    </div>
  );
};
