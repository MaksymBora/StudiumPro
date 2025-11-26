import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://localhost:7086';

export const getAllProducts = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/api/products');
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.data || err.message);
  }
});

export const getFilteredProducts = createAsyncThunk('products/getFiltered', async (filters, thunkAPI) => {
  try {
    const response = await axios.get('/api/products/filter', {
      params: {
        brand: filters?.brand ?? null,
        minPrice: filters?.minPrice ?? null,
        maxPrice: filters?.maxPrice ?? null,
        minRamGb: filters?.minRamGb ?? null,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProductRating = createAsyncThunk('products/getRating', async (productId, thunkAPI) => {
  try {
    const response = await axios.get(`/api/Products/${productId}/rating`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to load rating');
  }
});
