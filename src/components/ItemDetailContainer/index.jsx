import styles from "./itemDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("../JSON/productos.json")
    .then((res) => res.json())
    .then((data) => setProducts(data));
  }, []);
  
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  
  return (
    <div className={styles.container}>
    
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} width="200" />
        <p>{product.description}</p>
        <p>$ {product.price}</p>
      
    </div>
  );
};

export default ItemDetailContainer;
