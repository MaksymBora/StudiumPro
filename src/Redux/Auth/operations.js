import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';

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

export const loginWithGoogle = createAsyncThunk('auth/loginWithGoogle', async (_, thunkAPI) => {
  try {
    const credential = await signInWithPopup(auth, googleProvider);
    const firebaseIdToken = await credential.user.getIdToken();

    const { data } = await axios.post(
      '/api/Auth/firebase-login',
      {},
      {
        headers: {
          Authorization: `Bearer ${firebaseIdToken}`,
        },
      }
    );

    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message || 'Google login failed');
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return true;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message || 'Logout failed');
  }
});
