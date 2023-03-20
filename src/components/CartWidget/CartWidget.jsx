import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from "./cartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.cart}>
      <AiOutlineShoppingCart size={30} />
      <p className={styles.cartItem}>3</p>
    </div>
  );
};

export default CartWidget;