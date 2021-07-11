import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../product/Product";
import { fetchProductsAsync, selectProducts } from "./productGallerySlice";
import styles from "./ProductGallery.module.css";

export const ProductGallery = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <div className={styles.row}>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
