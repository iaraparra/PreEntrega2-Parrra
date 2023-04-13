import { useCartContext } from "../../context/CartContext";
import styles from "./ItemCart.module.css";

const ItemCart = ({ item }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className={styles.containerMayor}>
      <div className={styles.container}>
        <img src={item.image} alt={item.title} className={styles.cardImage} />
        <div className={styles.textContainer}>
          <p>{item.title}</p>
          <p>Precio unitario $ {item.price}</p>
          <p>Subtotal $ {item.quantity * item.price}</p>
          <button
            onClick={() => removeProduct(item.id)}
            className={styles.buttonCart}
          >
            Eliminar Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
