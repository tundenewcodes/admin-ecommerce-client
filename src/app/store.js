import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import postReducer from "../features/blog/blogSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    posts:postReducer
  },
});
