import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:7086';

export const loginUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/api/Auth/login', credentials);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

export const registerUser = createAsyncThunk('auth/register', async (newUser, thunkAPI) => {
  try {
    const { data } = await axios.post('/api/Auth/register', newUser);

    await thunkAPI.dispatch(
      loginUser({
        login: newUser.username,
        password: newUser.password,
      })
    );

    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});
