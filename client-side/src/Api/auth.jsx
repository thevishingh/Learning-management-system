import axios from './index';

export const loginUser = async (credentials) => {
  const response = await axios.post('/auth/login', credentials);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await axios.post('/auth/register', data);
  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.post('/auth/logout');
  return response.data;
};