import React from "react";
import styles from "./heroBlock.module.css";

const HeroBlock = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.heading}>Детейлинг центр № 1</h1>
      <img
        src='https://purepng.com/public/uploads/large/purepng.com-lamborghinilamborghinilamborghini-automobilelamborghini-carssports-car-1701527505166yod4c.png'
        alt='heroIMG'
        className={styles.image}
      />
    </div>
  );
};
export default HeroBlock;
