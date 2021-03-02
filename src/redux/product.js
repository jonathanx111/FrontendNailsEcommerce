import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {},
});

export default productSlice.reducer;
