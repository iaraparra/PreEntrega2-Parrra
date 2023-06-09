import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";
import styles from "./Cart.module.css";
import CheckOutForm from "../CheckOut";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Checkout from "../CheckOut";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({ id }) => console.log(id))
  }

  if (cart.length === 0) {
    return (
      <div className={styles.container}>
        <h1>Su carrito esta vacio</h1>
        <Link to="/" className={styles.buttonComprar}>
          Comprar
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.containerCompra}>
      {cart.map((item) => (
        <ItemCart key={item.id} item={item} />
      ))}
      <div className={styles.ContainerFinalCart}>
        <p className={styles.totalCart}>Total $ {totalPrice()}</p>
        <Link to="/checkout" className={styles.button}>Generar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
