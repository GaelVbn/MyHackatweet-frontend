import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  firstname: string | null;
  username: string | null;
  token: string | null;
}

const initialState: UserState = {
  firstname: null,
  username: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        firstname: string;
        username: string;
        token: string;
      }>
    ) => {
      state.firstname = action.payload.firstname;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.username = "";
      state.firstname = "";
      state.token = null;
      localStorage.removeItem("persist:root");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
