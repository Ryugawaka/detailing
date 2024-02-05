import React from "react";
import styles from "./service.module.css";

const Service = ({ image, name, description, price }) => {
  return (
    <div className={styles.service}>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <img src={image} alt={name} className={styles.image} />
    </div>
  );
};

export default Service;
