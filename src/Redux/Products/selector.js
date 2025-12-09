export const selectProductRating = (state, productId) => state.products.ratingById[productId]?.value ?? null;

export const selectProductRatingLoading = (state, productId) => state.products.ratingById[productId]?.loading ?? false;

export const selectProductRatingError = (state, productId) => state.products.ratingById[productId]?.error ?? null;

export const selectProducts = state => state.products.items;
export const selectProductsLoading = state => state.products.loading;
export const selectProductsError = state => state.products.error;

export const selectProductsPage = state => state.products.pageNumber;
export const selectProductsTotalPages = state => state.products.totalPages;
export const selectProductsPageSize = state => state.products.pageSize;
export const selectProductsTotalItems = state => state.products.totalItems;

export const selectProductsFilter = state => state.products.filter;
