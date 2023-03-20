import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={`/item/${product.id}`}>
      <div className={styles.cardContainer}>
        <h1 className={styles.cardTitle}>{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className={styles.cardImage}
        />
        <p className={styles.cardDescription}>{product.description}</p>
        <p className={styles.cardPrice}>$ {product.price}</p>
      </div>
    </Link>
  );
};

export default Card;
