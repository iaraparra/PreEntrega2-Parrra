/* import styles from "./itemList.module.css";
import Card from "../Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  // return <div className={styles.container}>{greeting}</div>;

  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("../JSON/productos.json")
      .then((res) => res.json())
      .then((data) => {
        if (id) {
          setProducts(data.filter((item) => item.category === id));
        } else {
          setProducts(data);
        }
      });
  }, [id]);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          className={styles.cardContainer}
        />
      ))}
    </div>
  );
};

export default ItemListContainer; */

import styles from "./itemList.module.css";
import Card from "../Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {id}= useParams()

  useEffect(() => {
    fetch("../JSON/productos.json")
      .then((res) => res.json())
      .then((data) => {
        if(id){
          setProducts(data.filter((item)=> item.category === id))
        }else{
          setProducts(data)
        }
      });
  }, [id]);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          className={styles.cardContainer}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;