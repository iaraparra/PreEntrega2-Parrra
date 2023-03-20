import styles from "./ItemDetail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("../JSON/products.json")
      .then((res) => res.json())
      .then((data) =>
        setProduct(data.find((item) => item.id === parseInt(id)))
      );
  }, [id]);

  return (
    <div className={styles.container}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="400px" />
      <h3>$ {product.price}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetailContainer;
