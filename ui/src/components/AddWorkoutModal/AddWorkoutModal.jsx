import { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { addWorkout, closeModal } from '../../actions';
import { ADD_WORKOUT_MODAL } from '../../views/Modals/modalTypes';
import {
    Modal,
   
    Button
    
} from 'react-bulma-components';

export const AddWorkoutModal = () => {
    const dispatch = useDispatch()

    const handleAddWorkout = useCallback(() => {
        const workoutData = {
        name: 'Add the button and stuff',
        date: new Date().toISOString(),
        description: 'Using hooks now 121231233'
        };
        dispatch(addWorkout(1, workoutData));
    }, [dispatch])

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={closeModal} />
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">Add Workout Here</p>
                <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                <div className="content">
                    Add Workout form
                </div>
                </section>
                <footer className="modal-card-foot">
                    <a className="button" onClick={closeModal}>Cancel</a>
                </footer>
            </div>
        </div>
    )
}