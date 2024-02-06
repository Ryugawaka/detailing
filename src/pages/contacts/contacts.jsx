import React from "react";
import styles from "./contacts.module.css";

const ContactsPage = () => {
  return (
    <main className={styles.block}>
      <div className={styles.info}>
        <h1 className={styles.heading}>Как нас найти?</h1>
        <div>
          <h3 className={styles.subheader}>Адрес</h3>
          <p className={styles.orange}>г.Ростов-на-Дону </p>
          <p className={styles.text}>ул.Красноармейская 29/5б</p>
        </div>
        <div>
          <h3 className={styles.subheader}>Телефон</h3>
          <p className={styles.orange}>+7(999)123-45-67</p>
          <p className={styles.text}>
            Принимаем заявки в том числе через WhatsApp/Telegram
          </p>
        </div>
        <div>
          <h3 className={styles.subheader}>Режим работы</h3>
          <p className={styles.text}>Понедельник - Пятница: 9:00 - 21:00 </p>
          <p className={styles.text}>Суббота: 10:00 - 18:00</p>
        </div>
        <div>
          <h3 className={styles.subheader}>Обратная связь</h3>
          <p className={styles.text}>
            Если у вас есть вопросы или предложения, пожалуйста, заполните форму
            обратной связи ниже. Наша команда ответит вам в кратчайшие сроки.
          </p>
        </div>
      </div>
      <img
        src='https://pictures.dealer.com/1/1800thompson/0570/be4cc757b2bfbcba7a766bb933eaca44x.jpg?impolicy=downsize&w=568'
        alt='center'
        className={styles.image}
      />
    </main>
  );
};
export default ContactsPage;
