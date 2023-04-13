import React, { useEffect, useState } from "react";
import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const getItem = async () => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const newItem = { id: docSnap.id, ...docSnap.data() };
      setItem(newItem);
    } else {
      console.log("Producto Inexistente");
    }
  };

  useEffect(() => {
    getItem();
  }, [id]);

  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };

  return (
    <div className={styles.container}>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} width="400px" />
      <h3>$ {item.price}</h3>
      <p>{item.description}</p>
      {goToCart ? (
        <Link to="/cart" className={styles.buttonTerminarCompra}>{" "} Terminar Compra </Link>
      ) : (
        <ItemCount initial={1} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
