import styles from "./itemList.module.css";
import Card from "../Card";

const ItemListContainer = ({ products }) => {
  // return <div className={styles.container}>{greeting}</div>;

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
