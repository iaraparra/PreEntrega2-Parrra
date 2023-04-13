import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.lenght === 0) {
    return (
      <>
        <h1>Su carrito esta vacio</h1>
        <Link to="/">Conprar</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((item) => (
        <ItemCart key={item.id} item={item} />
      ))}
      <p>Total $ {totalPrice()}</p>
    </>
  );
};

export default Cart;
