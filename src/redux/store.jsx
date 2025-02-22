import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;