import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <div className={styles.cardContainer}>
        <h1 className={styles.cardTitle}>{item.title}</h1>
        <img src={item.image} alt={item.title} className={styles.cardImage} />
        <p className={styles.cardPrice}>$ {item.price}</p>
      </div>
    </Link>
  );
};

export default Card;
