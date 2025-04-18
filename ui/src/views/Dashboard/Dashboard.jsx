import React, { useState, useCallback } from 'react';
import { WorkoutList } from '../WorkoutList/WorkoutList';
import { PeakForceList } from '../PeakForceList/PeakForceList';
import { CustomDropzone, AddWorkoutButton, AddWorkoutModal } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkout, openModal, closeModal, loadingModal } from '../../actions';
import './Dashboard.sass';
import { ADD_WORKOUT_MODAL } from '../Modals/modalTypes';

/**
 * A view component that serves as the main dashboard for the application
 */
export const Dashboard = ({
  userId,
  className = '',
}) => {
  const dispatch = useDispatch();

  const { modals } = useSelector((state) => state.modals);

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

  const modalsHash = modals.reduce((acc, modalId) => {
    acc[modalId] = true
    return acc
  }, {})

  const handleOpenModal = useCallback((modalId) => {
    dispatch(openModal(modalId))
  }, [dispatch])


  return (
    <div className={`dashboard ${className}`}>
      {/* MODALS */}
      {
        modalsHash[ADD_WORKOUT_MODAL] && <AddWorkoutModal />
      }

      <div className="dashboard-header">
        <h1 className="title is-3">Training Logger</h1>
        
        <div className="upload-container">
            {/* <CustomDropzone /> */}
            <AddWorkoutButton
              onClick={() => handleOpenModal(ADD_WORKOUT_MODAL)}
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
