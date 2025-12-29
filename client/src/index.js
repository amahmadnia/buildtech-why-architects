import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Import mock API setup
import { initializeMockData } from './mock/mockData';
import { setupMockAPI } from './mock/setupMockApi';

// Initialize mock data in localStorage
initializeMockData();

// Setup mock API interceptors
setupMockAPI();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
