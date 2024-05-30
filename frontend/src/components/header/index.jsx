import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.logo}>
        <img
          alt="Logo da empresa"
          src="https://cdn-icons-png.flaticon.com/512/2964/2964514.png"
        />
        <p>Suplementos</p>
      </NavLink>
      <div className={styles.centerLinks}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </div>
      <NavLink to="/login" className={styles.login}>
        Login
      </NavLink>
    </div>
  );
};
