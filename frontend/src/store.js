import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  friends: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setFriends: (state, action) => {
      state.friends = action.payload.friends;
    },
  },
});

const store = configureStore({
    reducer: userSlice.reducer,
});
