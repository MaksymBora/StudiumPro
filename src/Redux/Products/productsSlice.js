import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, getFilteredProducts, getProductRating } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  ratingById: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload || [];
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load products';
      });

    builder
      .addCase(getFilteredProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload ?? [];
      })
      .addCase(getFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error?.message;
      });

    builder
      .addCase(getProductRating.pending, (state, action) => {
        const productId = action.meta.arg;
        state.ratingById[productId] = {
          ...(state.ratingById[productId] || {}),
          loading: true,
          error: null,
        };
      })
      .addCase(getProductRating.fulfilled, (state, action) => {
        const { productId, averageRating } = action.payload;
        state.ratingById[productId] = {
          value: averageRating,
          loading: false,
          error: null,
        };
      })
      .addCase(getProductRating.rejected, (state, action) => {
        const productId = action.meta.arg;
        state.ratingById[productId] = {
          ...(state.ratingById[productId] || {}),
          loading: false,
          error: action.payload || action.error.message,
        };
      });
  },
});

export const allProductsReducer = productsSlice.reducer;
