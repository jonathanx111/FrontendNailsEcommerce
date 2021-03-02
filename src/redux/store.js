import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product";
import userReducer from "./user";

export default configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
  },
});
