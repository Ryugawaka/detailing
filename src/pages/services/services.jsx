import React from "react";
import { services } from "../../helpers";
import Service from "../../sections/services/service";
import styles from "./services.module.css";

const ServicesPage = () => {
  return (
    <main className={styles.block}>
      <h1 className={styles.heading}>Подробнее о наших услугах</h1>
      <div className={styles.items}>
        {services.map((s) => (
          <Service
            name={s.name}
            image={s.image}
            description={s.description}
            price={s.price}
          />
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;
