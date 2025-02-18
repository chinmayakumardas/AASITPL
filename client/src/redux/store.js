// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // Path to your authSlice
import careerReducer from './slices/careerSlice'; // Path to your authSlice
import contactReducer from './slices/contactSlice'; // Path to your authSlice
import blogReducer from './slices/blogSlice'; // Path to your authSlice

const store = configureStore({
  reducer: {
    auth: authReducer,
    career: careerReducer,
    contact: contactReducer,
    blog: blogReducer,
  },
});

// Export the store as default
export default store;
