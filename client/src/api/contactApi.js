// src/redux/slices/contactApi.js

import axios from 'axios';

// Create an Axios instance for API calls
const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.136:5000/api', // Replace with your actual API base URL
});

// API request to create a contact
export const createContactApi = async (contactData) => {
  try {
    const response = await axiosInstance.post('/contacts', contactData);
    return response.data.contact;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error creating contact');
  }
};

// API request to get all contacts
export const getContactsApi = async () => {
  try {
    const response = await axiosInstance.get('/contacts');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error fetching contacts');
  }
};
