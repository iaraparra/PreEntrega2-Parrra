import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from "./cartWidget.module.css";
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {totalProducts} = useCartContext();
  return (
    <div className={styles.cart}>
      <AiOutlineShoppingCart size={30} />
      <span>{totalProducts() || ' '}</span>
    </div>
  );
};

export default CartWidget;