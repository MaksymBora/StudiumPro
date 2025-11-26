import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://localhost:7086';

export const loginUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/api/Auth/login', credentials);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || error.response?.data?.error || error.message || 'Login failed';
    return thunkAPI.rejectWithValue(message);
  }
});
