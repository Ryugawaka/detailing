import React, { useState } from "react";
import styles from "./Header.module.css";
import Drawer from "./drawer";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Auto<span className={styles.detail}>Detailing</span>RND
      </div>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link to='/'>Главная</Link>
          </li>
          <li>
            <Link to='/services'>Услуги</Link>
          </li>
          <li>
            <Link to='/about'>О нас</Link>
          </li>
          <li>
            <Link to='/contacts'>Контакты </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.drawer}>
        <Drawer onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
        <div className={styles.drawerContent} hidden={!isDrawerOpen}>
          <aside>
            <ul>
              <li>
                <Link to='/'>Главная</Link>
              </li>
              <li>
                <Link to='/services'>Услуги</Link>
              </li>
              <li>
                <Link to='/about'>О нас</Link>
              </li>
              <li>
                <Link to='/contacts'>Контакты </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </header>
  );
};
export default Header;
