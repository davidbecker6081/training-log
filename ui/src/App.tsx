import './styles/main.sass';
import axios from './api/axios';
import React, { useEffect, useState } from 'react';
import { CustomDropzone } from './components/CustomDropzone/CustomDropzone';
import { Button } from 'react-bulma-components';

// Define the shape of a Workout
interface Workout {
  id: number;
  name: string;
  description: string;
  date: string; // or `Date` if already parsed
}

// Fetch workouts (typed return value)
const getData = async (): Promise<Workout[] | null> => {
  try {
    const { data } = await axios.get<Workout[]>('users/1/workouts');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

function App() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        setLoading(true);
        const data = await getData();
        if (data) {
          setWorkouts(data);
        }
      } catch (err) {
        setError(err as Error); // Type assertion since err is unknown
      } finally {
        setLoading(false);
      }
    };
    getWorkouts();
  }, []);

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center">
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data: {error.message}</p>}

      <Button color="primary" className="mar-y-xl">
        <CustomDropzone />
      </Button>

      {workouts.length > 0 ? (
        <div className="dist-y-xl">
          {workouts.map((workout) => (
            <div key={workout.id}>
              <h2 className="has-text-primary is-size-4">{workout.name}</h2>
              <p>{workout.description}</p>
              <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No workouts found.</p>
      )}
    </div>
  );
}

export default App;
