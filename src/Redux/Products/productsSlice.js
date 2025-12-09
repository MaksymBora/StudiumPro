import { createSlice } from '@reduxjs/toolkit';
import {
  getAllProducts,
  getFilteredProducts,
  getProductRating,
  addProductRating,
  addReviewReply,
  createProduct,
} from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,

  // pagination
  pageNumber: 1,
  pageSize: 12,
  totalItems: 0,
  totalPages: 1,

  filter: {
    brand: '',
    sort: null,
  },

  creating: false,
  createError: null,

  ratingSubmitting: false,
  ratingError: null,
  ratingById: {}, // { [productId]: { value, loading, error } }

  replySubmitting: false,
  replyError: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetFilter(state) {
      state.filter = { brand: '', sort: null };
    },
  },
  extraReducers: builder => {
    // ===== getAllProducts =====
    builder
      .addCase(getAllProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items || [];
        state.pageNumber = action.payload.pageNumber;
        state.pageSize = action.payload.pageSize;
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;
        state.filter = { brand: '', sort: null };
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load products';
      });

    // ===== getFilteredProducts =====
    builder
      .addCase(getFilteredProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items || [];
        state.pageNumber = action.payload.pageNumber;
        state.pageSize = action.payload.pageSize;
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;

        state.filter = {
          brand: action.payload.brand || '',
          sort: action.payload.sort || null,
        };
      })
      .addCase(getFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load filtered products';
      });

    // ===== createProduct =====
    builder
      .addCase(createProduct.pending, state => {
        state.creating = true;
        state.createError = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.creating = false;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.creating = false;
        state.createError = action.payload || action.error.message;
      });

    // ===== addProductRating =====
    builder
      .addCase(addProductRating.pending, state => {
        state.ratingSubmitting = true;
        state.ratingError = null;
      })
      .addCase(addProductRating.fulfilled, (state, action) => {
        state.ratingSubmitting = false;
      })
      .addCase(addProductRating.rejected, (state, action) => {
        state.ratingSubmitting = false;
        state.ratingError = action.payload || action.error.message;
      });

    // ===== getProductRating =====
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

    // ===== addReviewReply =====
    builder
      .addCase(addReviewReply.pending, state => {
        state.replySubmitting = true;
        state.replyError = null;
      })
      .addCase(addReviewReply.fulfilled, (state, action) => {
        state.replySubmitting = false;
      })
      .addCase(addReviewReply.rejected, (state, action) => {
        state.replySubmitting = false;
        state.replyError = action.payload || action.error.message;
      });
  },
});

export const { resetFilter } = productsSlice.actions;
export const allProductsReducer = productsSlice.reducer;
