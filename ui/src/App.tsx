import './styles/main.sass';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dashboard } from './views';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

/**
 * Main application component
 */
function App() {
  // For now, we're hardcoding the user ID to 1
  // In a real application, this would come from authentication
  const userId = 1;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Dashboard userId={userId} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
