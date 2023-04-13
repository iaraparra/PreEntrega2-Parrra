import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AiOutlineLine } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { BsFillCartPlusFill } from "react-icons/bs";
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
        <button disabled={count <= 1} onClick={decrease}> - </button>
        <p>{count}</p>
        <button onClick={increase}> + </button>
      </div>
      <button onClick={() => onAdd(count)}> Agregar al carrito </button>
    </div>
  );
};

export default ItemCount;
