import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { allProductsReducer } from './Products/productsSlice';
import { authReducer } from './Auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'tokenType', 'isAuthenticated'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    products: allProductsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
