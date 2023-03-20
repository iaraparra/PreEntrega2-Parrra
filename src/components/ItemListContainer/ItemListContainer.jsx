import styles from "./ItemList.module.css";
import Card from "../Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("../JSON/products.json")
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
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
