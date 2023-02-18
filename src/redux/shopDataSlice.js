import { createSlice } from "@reduxjs/toolkit";
import dataProduct from "../utils/MOCK_DATA";
const shopDataSlice = createSlice({
  name: "shopData",
  initialState: {
    data: dataProduct,
  },
  reducers: {},
});

export default shopDataSlice.reducer;
