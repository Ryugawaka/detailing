import React from "react";
import { Link } from "react-router-dom";
import styles from "./notFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <h1>404 Страница не найдена</h1>
      <p>
        <Link to={"/"}>Вернуться на главную</Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
