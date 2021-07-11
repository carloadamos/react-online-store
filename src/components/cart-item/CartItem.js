import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.cartItem}>
      <div className={styles.imgWrapper}>
        <img className={styles.image} src={item.image} alt={item.title} />
      </div>
      <p className={styles.title}>{item.title}</p>
      <p className={styles.price}>&#8369;{item.price}</p>
      <button
        className={styles.removeItem}
        onClick={() => dispatch(removeFromCart(item))}
      >
        Remove from cart
      </button>
    </div>
  );
};

export default CartItem;
