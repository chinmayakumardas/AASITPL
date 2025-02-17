import axiosInstance from '@/lib/axiosInstance';

// Login API call
export const loginApi = async (email, password) => {
  try {
    const response = await axiosInstance.post('/login', { email, password });
    return { token: response.data.token, role: response.data.role };  // Return both token and role
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Login failed');
  }
};