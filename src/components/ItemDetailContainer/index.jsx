import { collection, getDocs } from "firebase/firestore";
import styles from "./ItemDetail.module.css";
import { useEffect, useState } from "react";
import db from "../../../db/firebase-config";
// import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const itemsRef = collection(db, "items");

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setItems(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img src={item.image} alt={item.title} width="400px" />
          <h3>$ {item.price}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemDetailContainer;
