import React from "react";
import { services } from "../../helpers";
import Service from "../../ui/service/service";
import styles from "./services.module.css";

const ServicesBlock = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Наши услуги</h2>
      <div className={styles.block}>
        {services.map((s) => (
          <Service image={s.image} price={s.price} name={s.name} key={s.name} />
        ))}
      </div>
    </div>
  );
};
export default ServicesBlock;
