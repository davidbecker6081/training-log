import './styles/main.sass';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, NotFound } from './views';
import { Navigation } from './components';

/**
 * Main application component
 */
function App() {
  // For now, we're hardcoding the user ID to 1
  // In a real application, this would come from authentication
  const userId = 1;

  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <div className="app-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard userId={userId} />} />
            {/* Redirect root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            {/* Catch-all route - redirect to 404 */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
