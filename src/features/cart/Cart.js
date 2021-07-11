import React from "react";
import { selectCart } from "./cartSlice";
import { useSelector } from "react-redux";
import CartItem from "../../components/cart-item/CartItem";

export const Cart = () => {
  const cartItems = useSelector(selectCart);

  return (
    <div>
      {cartItems.length === 0 ? (
        <h1>No item in cart</h1>
      ) : (
        cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })
      )}
    </div>
  );
};
