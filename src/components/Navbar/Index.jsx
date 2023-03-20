import styles from "./navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { CiRainbow } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/inicio" className={styles.logoContainer}>
          <CiRainbow size={50} />
          <p className={styles.logoName}>Chuchery's</p>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/inicio" className={styles.navItem}>
          Inicio
        </Link>
        {/* <Link to="/:category" className={styles.navItem}>Nuestro Productos</Link> */}
        {/* <Link to= {`${product.category}`}>Botellas y Vasos</Link> */}
        <Link to="/Botellas" className={styles.navItem}>
          Botellas y Vasos
        </Link>
        <Link to="/Lamparas" className={styles.navItem}>
          Lamparas
        </Link>
        <Link to="/Carteras" className={styles.navItem}>
          Carteras
        </Link>
        <Link to="contacto" className={styles.navItem}>
          Contacto
        </Link>
      </nav>
      <CartWidget />
    </div>
  );
};

export default Navbar;
