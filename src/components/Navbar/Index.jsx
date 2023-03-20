import styles from "./navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { CiRainbow } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <Link to="/" className={styles.logoContainer}>
          <CiRainbow size={50} />
          <p className={styles.logoName}>Chuchery's</p>
        </Link>
      </div>
      <div className={styles.categorysContainer}>
        <Link to="/">
          <p>Inicio</p>
        </Link>
        <Link to={"/category/botellas"}>
          <p>Botellas</p>
        </Link>
        <Link to="/category/lamparas">
          <p>Lamparas</p>
        </Link>
        <Link to="/category/mochilas">
          <p>Mochilas</p>
        </Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default Navbar;
