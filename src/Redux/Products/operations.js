import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://localhost:7086/api/products';

export const getAllProducts = createAsyncThunk(
  'products/getAll',
  async ({ page = 1, pageSize = 12 } = {}, thunkAPI) => {
    try {
      const res = await axios.get('/api/products', {
        params: { page, pageSize },
      });

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getFilteredProducts = createAsyncThunk(
  'products/getFiltered',
  async ({ brand, sort, page = 1, pageSize = 12 }, thunkAPI) => {
    try {
      const res = await axios.get('/api/products/filter', {
        params: {
          brand,
          sort,
          page,
          pageSize,
        },
      });

      return {
        ...res.data,
        brand,
        sort: sort || null,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

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

      if (!token) {
        return thunkAPI.rejectWithValue('User is not authenticated');
      }

      const url = `/api/Products/${productId}/rating`;

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
