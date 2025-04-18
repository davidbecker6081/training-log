import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../actions';
import { ADD_WORKOUT_MODAL } from '../../views/Modals/modalTypes';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useCreateWorkout } from '../../hooks/useWorkouts';

import {
    Modal,
    Button
} from 'react-bulma-components';

// Extend dayjs with UTC plugin
dayjs.extend(utc);

export const AddWorkoutModal = () => {
    const dispatch = useDispatch();
    const { createWorkout, isLoading, error } = useCreateWorkout(1, ADD_WORKOUT_MODAL);

    const [workoutName, setWorkoutName] = useState('');
    const [workoutDescription, setWorkoutDescription] = useState('');
    const [workoutDate, setWorkoutDate] = useState('');

    const handleAddWorkout = useCallback(async () => {
        const workoutData = {
            name: workoutName,
            description: workoutDescription,
            date: dayjs(workoutDate).utc().format()
        };
        await createWorkout(workoutData);
    }, [workoutName, workoutDescription, workoutDate, createWorkout]);

    const handleCloseModal = useCallback(() => {
        dispatch(closeModal(ADD_WORKOUT_MODAL));
    }, [dispatch]);

    return (
        <Modal show={true} onClose={handleCloseModal}>
            <Modal.Card>
                <Modal.Card.Header>
                    <Modal.Card.Title>Add Workout</Modal.Card.Title>
                </Modal.Card.Header>
                <Modal.Card.Body>
                    {error && (
                        <div className="notification is-danger">
                            {error}
                        </div>
                    )}
                    <form>
                        <fieldset className="dist-y">
                            <div className="is-flex-column align-items-center dist-x">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    minLength="3"
                                    maxLength="256"
                                    value={workoutName}
                                    onChange={({ target: { value } }) => setWorkoutName(value)}
                                />
                            </div>
                            <div className="is-flex-column align-items-center dist-x">
                                <label htmlFor="description">Description</label>
                                <input
                                    id="description"
                                    name="description"
                                    type="textarea"
                                    required
                                    minLength="3"
                                    maxLength="256"
                                    onChange={({ target: { value } }) => setWorkoutDescription(value)}
                                    value={workoutDescription}
                                />
                            </div>
                            <div className="is-flex-column align-items-center dist-x">
                                <label htmlFor="date">Date</label>
                                <input
                                    id="date"
                                    name="date"
                                    type="datetime-local"
                                    required
                                    onChange={({ target: { value } }) => setWorkoutDate(value)}
                                    value={workoutDate}
                                />
                            </div>
                        </fieldset>
                    </form>
                </Modal.Card.Body>
                <Modal.Card.Footer align="right" className="is-flex justify-end dist-x-lg">
                    <Button onClick={handleCloseModal}>Cancel</Button>
                    <Button 
                        onClick={handleAddWorkout} 
                        className={isLoading ? 'is-loading' : ''}
                        disabled={isLoading}
                    >
                        Add Workout
                    </Button>
                </Modal.Card.Footer>
            </Modal.Card>
        </Modal>
    );
};
