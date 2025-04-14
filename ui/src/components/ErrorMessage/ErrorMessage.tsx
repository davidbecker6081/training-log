import React from 'react';
import { ApiError } from '../../types';
import './ErrorMessage.sass';

interface ErrorMessageProps {
  error: Error | ApiError | null;
  className?: string;
  onRetry?: () => void;
}

/**
 * A reusable error message component
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = ({
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
