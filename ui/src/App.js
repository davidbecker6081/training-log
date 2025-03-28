import './styles/main.sass';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CustomDropzone } from './components/CustomDropzone';
import { Button } from 'react-bulma-components';
const API_URL = 'http://localhost:3000/api/v1';

const getData = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/users/1/workouts`);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getWorkouts = async () => {
      try {
        setLoading(true);
        const data = await getData();
        setWorkouts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getWorkouts();
  }
  , []);

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center">
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data: {error.message}</p>}

      <Button color="primary"  className="mar-y-xl">
        <CustomDropzone />
      </Button>

      {
      workouts?.length && 
        <div className="dist-y-xl">
          {
            workouts.map(workout => (
              <div key={workout.id} className="">
                <h2 className="has-text-primary is-size-4">{workout.name}</h2>
                <p>{workout.description}</p>
                <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
              </div>
            ))
          }
        </div>
      }

      {
        !workouts.length && <p>No workouts found.</p>
      }
    </div>
  );
}

export default App;
