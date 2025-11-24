import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { allProductsReducer } from './Products/productsSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // если потом добавишь userAuth
};

// примечание: сейчас persist ни к чему не привязан — оставляем как задел
export const store = configureStore({
  reducer: {
    products: allProductsReducer,
    // userAuth: persistReducer(persistConfig, userAuthReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
