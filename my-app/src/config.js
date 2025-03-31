// Configuration settings for the application

// API configuration
const API_CONFIG = {
  // Base URL for API requests
  // In production, this would be loaded from environment variables
  BASE_URL: process.env.REACT_APP_API_URL || 'https://your-backend-api.com/api',
  
  // API endpoints
  ENDPOINTS: {
    RESERVE_BOOK: '/reserve-book',
    AVAILABLE_BOOKS: '/available-books',
  },
  
  // API timeout in milliseconds
  TIMEOUT: 10000,
};

export default {
  API: API_CONFIG,
}; 