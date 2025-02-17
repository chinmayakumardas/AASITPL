import axios from "axios";

// Create an Axios instance for API calls
const axiosInstance = axios.create({
  baseURL: "http://192.168.0.133:8080/api",  // Replace with your actual API base URL
});

// Function to fetch the job list
export const fetchJobList = async () => {
  try {
    const response = await axiosInstance.get("/jobs/getjoblist");
    return response.data.jobs;  // Return the list of jobs
  } catch (error) {
    throw error;  // Throw error if API call fails
  }
};

// Function to apply for a job
export const applyJob = async (userData) => {
  try {
    const response = await axiosInstance.post("/jobs/submit",userData);
    return response.data;  // Return the response data from the API
  } catch (error) {
    throw error;  // Throw error if the apply-job API call fails
  }
};
export const getJobbyId = async (jobId) => {
  try {
    const response = await axiosInstance.get(`/jobs/getjobbyid/${jobId}`);
    return response.data;  // Return the response data from the API
  } catch (error) {
    throw error;  // Throw error if the apply-job API call fails
  }
};

export default axiosInstance;
