import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/product/productSlice";
import UploadReducer from "../features/upload/uploadSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    upload: UploadReducer,
  },
});
