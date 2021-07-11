import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchProductsAsync = createAsyncThunk(
  "gallery/fetchProducts",
  async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        return response.data;
      })
      .catch((ex) => {
        console.log(ex);
      });

    return response;
  }
);

export const productGallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const selectProducts = (state) => state.gallery.products;

export const { addProduct, getProducts } = productGallerySlice.actions;

export default productGallerySlice.reducer;
