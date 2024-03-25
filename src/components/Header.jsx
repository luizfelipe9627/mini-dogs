import React from "react";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../store/login";

const Header = () => {
  const { user, token } = useSelector((state) => state.login);

  const loading = token.loading || user.loading;

  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button
        onClick={() => dispatch(userLogout())}
        aria-label="Logout"
        className={`
        ${styles.login} 
        ${loading ? styles.loading : ""} 
        ${user.data ? styles.loaded : ""}
        `}
      ></button>
    </header>
  );
};

export default Header;
