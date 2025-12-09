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

export const addProductRating = createAsyncThunk(
  'products/addProductRating',
  async ({ productId, rating, comment }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const tokenType = state.auth.tokenType || 'Bearer';

      console.log('addProductRating -> token:', token);
      console.log('addProductRating -> tokenType:', tokenType);

      if (!token) {
        return thunkAPI.rejectWithValue('User is not authenticated');
      }

      const url = `/api/Products/${productId}/rating`;

      console.log('POST URL:', url, 'BODY:', { rating, comment });

      const response = await axios.post(
        url,
        { rating, comment },
        {
          headers: {
            Authorization: `${tokenType} ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('addProductRating -> response:', response);

      thunkAPI.dispatch(getAllProducts());

      return response.data;
    } catch (error) {
      const msg =
        error.response?.data?.error || error.response?.data?.message || error.message || 'Failed to add rating';

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const addReviewReply = createAsyncThunk(
  'products/addReviewReply',
  async ({ productId, parentReviewId, comment }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const tokenType = state.auth.tokenType || 'Bearer';

      if (!token) return thunkAPI.rejectWithValue('User is not authenticated');

      const url = `/api/Products/${productId}/reviews/${parentReviewId}/reply`;

      const response = await axios.post(
        url,
        { comment },
        {
          headers: {
            Authorization: `${tokenType} ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      thunkAPI.dispatch(getAllProducts());

      return response.data;
    } catch (error) {
      const msg =
        error.response?.data?.error || error.response?.data?.message || error.message || 'Failed to send reply';

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const createProduct = createAsyncThunk('products/create', async (product, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    const tokenType = state.auth.tokenType || 'Bearer';

    if (!token) {
      return thunkAPI.rejectWithValue('User is not authenticated');
    }

    const { data } = await axios.post('/api/Products', product, {
      headers: {
        Authorization: `${tokenType} ${token}`,
        'Content-Type': 'application/json',
      },
    });

    thunkAPI.dispatch(getAllProducts());

    return data;
  } catch (error) {
    const msg =
      error.response?.data?.error || error.response?.data?.message || error.message || 'Failed to create product';

    return thunkAPI.rejectWithValue(msg);
  }
});
