import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <main className={styles.block}>
      <div className={styles.info}>
        <h1 className={styles.heading}>Преимущества работы с нами</h1>
        <ul className={styles.list}>
          <li>-Высокое качество услуг</li>
          <li>-Широкий спектр услуг</li>
          <li>-Индивидуальный подход</li>
          <li>-Удобство и комфорт</li>
          <li>-Конкурентные цены</li>
        </ul>
      </div>
      <img
        src='https://amdplus.ru/sites/default/files/articles/images/deteiling-uslugi.jpg'
        className={styles.image}
        alt='about'
      />
      <p className={styles.desc}>
        Мы гарантируем высокое качество услуг и широкий спектр работ. Наш
        индивидуальный подход учитывает все ваши потребности. Мы создаем
        комфортные условия для вас и предлагаем конкурентные цены.
      </p>
    </main>
  );
};

export default AboutPage;
