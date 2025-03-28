import logo from './logo.svg';
import './App.sass';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Workout Tracker</h1>
      </header>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data: {error.message}</p>}
      {workouts?.length && (
        <div className="workouts">
          {workouts.map(workout => (
            <div key={workout.id} className="workout">
              <h2>{workout.name}</h2>
              <p>{workout.description}</p>
              <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
            </div>
          ))}
      {
        !workouts.length && <p>No workouts found.</p>
      }
        </div>
      )}
    </div>
  );
}

export default App;
