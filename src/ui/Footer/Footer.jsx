import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <h4 className={styles.heading}>Наши контакты</h4>
        <p>г.Ростов-на-Дону ул.Красноармейская 29/5б</p>
        <p className={styles.secondary}>detailingcenterrnd@gmail.com</p>
        <p>+7(999)123-45-67</p>
      </div>
      <div className={styles.feedback}>
        <h4 className={styles.heading}>Обратная связь</h4>
        <input placeholder='Ваше имя' />
        <input placeholder='Ваш email или телефон' />
        <button className={styles.contact}>Свзязаться с нами</button>
      </div>
    </footer>
  );
};
export default Footer;
