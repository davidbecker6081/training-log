import './styles/main.sass';
import React from 'react';
import { Dashboard } from './views';

/**
 * Main application component
 */
function App() {
  // For now, we're hardcoding the user ID to 1
  // In a real application, this would come from authentication
  const userId = 1;

  return (
    <div className="app-container">
      <Dashboard userId={userId} />
    </div>
  );
}

export default App;
