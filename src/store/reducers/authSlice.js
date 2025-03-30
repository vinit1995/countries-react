// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: isLoggedIn ? true : false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem("isLoggedIn", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
