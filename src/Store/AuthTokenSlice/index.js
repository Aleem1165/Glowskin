import { createSlice } from "@reduxjs/toolkit";

export const AuthTokenSlice = createSlice({
  name: "authToken",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, removeToken } = AuthTokenSlice.actions;
export const selectAuthToken = (state) => state.authToken.token;

export default AuthTokenSlice.reducer;
