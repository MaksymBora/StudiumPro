export const selectProducts = state => state.products.items;
export const selectProductsLoading = state => state.products.loading;
export const selectProductsError = state => state.products.error;

export const selectProductRating = (state, productId) => state.products.ratingById[productId]?.value ?? null;

export const selectProductRatingLoading = (state, productId) => state.products.ratingById[productId]?.loading ?? false;

export const selectProductRatingError = (state, productId) => state.products.ratingById[productId]?.error ?? null;
