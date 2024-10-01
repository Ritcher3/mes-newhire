import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CreateUserApollo from './components/CreateUserApollo.tsx';
import ErrorBoundary from './ErrorBoundary';
import logo from './logo.png';  // Import the logo

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          {/* White Banner with Header and Logo */}
          <header className="banner">
            <h1 className="banner-title">New Hire Form</h1>
            <img src={logo} alt="Logo" className="logo" />
          </header>
          
          {/* Rest of the content */}
          <CreateUserApollo />
        </div>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;