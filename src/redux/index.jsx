import { configureStore } from "@reduxjs/toolkit";
import shopDataSlice from "./shopDataSlice";
export default configureStore({
  reducer: {
    shopData: shopDataSlice,
  },
});
