// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // Path to your authSlice

const store = configureStore({
  reducer: {
    auth: authReducer,
 
  },
});

// Export the store as default
export default store;
