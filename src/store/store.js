// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
