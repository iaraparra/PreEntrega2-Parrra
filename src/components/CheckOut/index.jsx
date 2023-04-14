import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import db from "../../../db/firebase-config";
import { CartContext } from "../../context/CartContext";
import Spinner from "../Spinner";
import styles from "./CheckOut.module.css";
//import Spinner from '../Spinner/Spinner';

const Checkout = () => {
  // { buyer: { name, phone, email }, items: [{ id, title, price, quantity }], date, total }

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [load, setLoad] = useState(false);
  const [orderID, setOrderID] = useState();

  const [buyer, setBuyer] = useState({
    Name: "",
    Email: "",
    Phone: "",
  });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const { Name, Email, Phone } = buyer;
  const generateOrder = async (data) => {
    setLoad(true);

    try {
      const col = collection(db, "Orders");
      console.log("esto es col ", col);
      console.log("esto es data ", data);
      const order = await addDoc(col, data);
      setOrderID(order.id);
      clearCart();
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dia = new Date();
    const items = cart.map((e) => {
      return { id: e.id, title: e.title, price: e.price, quantity: e.quantity };
    });
    const total = totalPrice();
    const data = { buyer, items, dia, total };
    console.log("data", data);
    generateOrder(data);
  };

  return (
    <>
      <h1>Finalizando Compra</h1>
      <hr />

      {load ? (
        <Spinner />
      ) : (
        !orderID && (
          <div>
            <h4>Completar Datos:</h4>
            <br />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Nombre"
                value={Name}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
              <br />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={Email}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
              <br />
              <input
                type="email"
                name="confirmEmail"
                placeholder="Confirme Email"
                //value={confirmEmail}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
              <br />
              <input
                type="number"
                name="Phone"
                placeholder="Telefono"
                value={Phone}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
              <br />
              <br />
              
                <input
                  type="submit"
                  value="Finalizar Compra"
                  className={styles.buttonFinalCompra}
                />
              
            </form>
          </div>
        )
      )}

      <div>
        {orderID && (
          <div className={styles.idContainer}>
            <h4>Compra Finalizada con Exito</h4>
            <h4>{`Su código de compra es: ${orderID}`}</h4>
            <Link to="/" className={styles.buttonCompra}>
              <h5 className={styles.textButtonCompra}>Realizar otra compra</h5>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
