import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    items: [],
  },
  reducers: {},
});

export default userSlice.reducer;
