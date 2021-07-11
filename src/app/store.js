import { configureStore } from "@reduxjs/toolkit";
import productGalleryReducer from "../features/productGallery/productGallerySlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    gallery: productGalleryReducer,
  },
});
