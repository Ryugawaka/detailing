import React from "react";
import styles from "./description.module.css";

const DescriptionBlock = () => {
  return (
    <div className={styles.block}>
      <img
        src='https://kuzov-media.ru/upload/iblock/943/943b3c6dbd1dd6d5584df9193654384a.jpg'
        alt='center'
        className={styles.image}
      />
      <div className={styles.info}>
        <h2 className={styles.heading}>Лучший центр на юге России</h2>
        <p className={styles.text}>
          Детейлинг центр Auto<span className={styles.detail}>Detailing</span>
          RND - это место, где ваш автомобиль получит полный комплекс
          профессиональных услуг по уходу и обновлению. Здесь работают опытные
          специалисты, которые знают все тонкости и секреты детейлинга.
        </p>
        <p className={styles.text}>
          Здесь вы можете быть уверены, что ваш автомобиль будет выглядеть как
          новый после каждого посещения. Приятный бонус - в центре часто
          проводятся акции и специальные предложения для постоянных клиентов.
        </p>
      </div>
    </div>
  );
};
export default DescriptionBlock;
