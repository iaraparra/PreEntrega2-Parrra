import { FiLoader } from "react-icons/fi";
import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.container}>
      <FiLoader size={30} />
    </div>
  );
}

export default Spinner;
