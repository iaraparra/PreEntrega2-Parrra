import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import styles from "./ItemCart.module.css";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";

const ItemCart = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const getItem = async () => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setItem(docSnap.data());
    } else {
      console.log("Producto Inexistente");
    }
  };

  useEffect(() => {
    getItem();
  }, [id]);

  const { removeProduct } = useCartContext();

  return (
    <div className={styles.container}>
      <img src={item.image} alt={item.title} className={styles.cardImage} />
      <p>{item.title}</p>
      <p>Precio unitario $ {item.price}</p>
      <p>Subtotal $ {item.quantity * item.price}</p>
      <button onClick={() => removeProduct(item.id)}>Eliminar Producto</button>
    </div>
  );
};

export default ItemCart;
