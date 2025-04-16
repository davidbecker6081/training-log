import React from 'react';
import './ErrorMessage.sass';

/**
 * A reusable error message component
 */
export const ErrorMessage = ({
  error,
  className = '',
  onRetry,
}) => {
  if (!error) return null;

  const errorMessage = 'message' in error ? error.message : String(error);

  return (
    <div className={`error-message notification is-danger ${className}`}>
      <div className="error-content">
        <p className="error-text">{errorMessage}</p>
        {onRetry && (
          <button
            className="button is-small is-light"
            onClick={onRetry}
            aria-label="Retry"
          >
            Try Again
          </button>
        )}
      </div>
      
      {/* If there are additional error details, show them */}
      {'errors' in error && error.errors && (
        <ul className="error-details">
          {Object.entries(error.errors).map(([field, messages]) => (
            <li key={field}>
              <strong>{field}:</strong> {messages.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
