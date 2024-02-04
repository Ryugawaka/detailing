import React from "react";
import styles from "./service.module.css";

const Service = (props) => {
  const { image, name, price } = props;
  return (
    <div className={styles.card}>
      <img src={image} alt='service' className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
};
export default Service;
