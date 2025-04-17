import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.sass';

/**
 * Not Found page component
 * Displayed when a user navigates to a route that doesn't exist
 */
export const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="title is-2">404 - Page Not Found</h1>
      <p className="subtitle">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/dashboard" className="button is-primary">
        Go to Dashboard
      </Link>
    </div>
  );
};
