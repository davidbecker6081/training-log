import React, { useState } from 'react';
import { WorkoutList } from '../WorkoutList/WorkoutList';
import { PeakForceList } from '../PeakForceList/PeakForceList';
import { CustomDropzone } from '../../components';
import { Workout, PeakForce } from '../../types';
import './Dashboard.sass';

interface DashboardProps {
  userId: number;
  className?: string;
}

/**
 * A view component that serves as the main dashboard for the application
 */
export const Dashboard: React.FC<DashboardProps> = ({
  userId,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'workouts' | 'peakForces'>('workouts');
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [selectedPeakForce, setSelectedPeakForce] = useState<PeakForce | null>(null);

  const handleWorkoutSelect = (workout: Workout) => {
    setSelectedWorkout(workout);
    // Additional logic for when a workout is selected could go here
  };

  const handlePeakForceSelect = (peakForce: PeakForce) => {
    setSelectedPeakForce(peakForce);
    // Additional logic for when a peak force is selected could go here
  };

  return (
    <div className={`dashboard ${className}`}>
      <div className="dashboard-header">
        <h1 className="title is-3">Training Logger</h1>
        
        <div className="upload-container">
          <button className="button is-primary">
            <CustomDropzone />
          </button>
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
