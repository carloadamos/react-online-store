import React from "react";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

export const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.img} />
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.price}>&#8369; {product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
};
