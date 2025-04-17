import React, { useState, useCallback } from 'react';
import { WorkoutList } from '../WorkoutList/WorkoutList';
import { PeakForceList } from '../PeakForceList/PeakForceList';
import { CustomDropzone, AddButton } from '../../components';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../../actions';
import './Dashboard.sass';

/**
 * A view component that serves as the main dashboard for the application
 */
export const Dashboard = ({
  userId,
  className = '',
}) => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('workouts');
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [selectedPeakForce, setSelectedPeakForce] = useState(null);

  const handleWorkoutSelect = (workout) => {
    setSelectedWorkout(workout);
    // Additional logic for when a workout is selected could go here
  };

  const handlePeakForceSelect = (peakForce) => {
    setSelectedPeakForce(peakForce);
    // Additional logic for when a peak force is selected could go here
  };

  const handleAddWorkout = useCallback(() => {
    const workoutData = {
      name: 'Removal RTK QUERY',
      date: new Date().toISOString(),
      description: 'Using hooks now 123'
    };
    dispatch(addWorkout(1, workoutData));
  }, [dispatch])

  return (
    <div className={`dashboard ${className}`}>
      <div className="dashboard-header">
        <h1 className="title is-3">Training Logger</h1>
        
        <div className="upload-container">
            {/* <CustomDropzone /> */}
            <AddButton
              onClick={handleAddWorkout}
              disabled={false}
              isIconRight={true}
              label="Add Workout"
            />
        </div>
      </div>
      
      <div className="tabs">
        <ul>
          <li className={activeTab === 'workouts' ? 'is-active' : ''}>
            <a onClick={() => setActiveTab('workouts')}>Workouts</a>
          </li>
          <li className={activeTab === 'peakForces' ? 'is-active' : ''}>
            <a onClick={() => setActiveTab('peakForces')}>Peak Forces</a>
          </li>
        </ul>
      </div>
      
      <div className="dashboard-content">
        {activeTab === 'workouts' ? (
          <WorkoutList 
            userId={userId} 
            onSelectWorkout={handleWorkoutSelect} 
          />
        ) : (
          <PeakForceList 
            onSelectPeakForce={handlePeakForceSelect} 
          />
        )}
      </div>
    </div>
  );
};
