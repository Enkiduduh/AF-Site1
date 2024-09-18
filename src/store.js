import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/features/auth/authSlice';
// import productReducer from './components/features/auth/productSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // product: productReducer,
  },
});

export default store;
