import { useEffect, useState } from "react";
import styles from "./ItemCount.module.css";

export const ItemCount = ({ initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  });

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button disabled={count <= 1} onClick={decrease} className={styles.buttonDecrease}>-</button>
        <p className={styles.quantity}>{count}</p>
        <button onClick={increase} className={styles.buttonIncrease}>+</button>
      </div>
      <button onClick={() => onAdd(count)} className={styles.buttonAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
