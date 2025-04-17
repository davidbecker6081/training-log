import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.sass';

/**
 * Navigation component for the application
 * Provides links to different routes
 */
export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className={location.pathname === '/dashboard' ? 'active' : ''}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};
