// Simple API service for backend integration
import config from '../config';

const { API } = config;

// Function to reserve a book
export const reserveBook = async (bookData) => {
  try {
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log the data that would be sent to the backend
    console.log("Book reservation data:", bookData);
    
    // Return a mock successful response
    return {
      success: true,
      message: "Book reserved successfully!",
      data: {
        reservationId: "mock-" + Math.floor(Math.random() * 1000),
        timestamp: new Date().toISOString()
      }
    };
    
    /* Actual API call - uncomment when backend is ready
    const response = await fetch(`${API.BASE_URL}${API.ENDPOINTS.RESERVE_BOOK}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to reserve book');
    }
    
    return await response.json();
    */
  } catch (error) {
    console.error('Error reserving book:', error);
    throw error;
  }
};

// Function to get available books (for future use)
export const getAvailableBooks = async () => {
  try {
    const response = await fetch(`${API.BASE_URL}${API.ENDPOINTS.AVAILABLE_BOOKS}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch available books');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
}; 