import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { CATALOG_ROUTE } from '../../../utils/consts';
import styles from './HeaderNav.module.scss';

const HeaderNav = () => {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className="header__nav">
      <Container>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link to={CATALOG_ROUTE} className={styles.nav__link}>
                Каталог
              </Link>
              <div className={styles.nav_popup}>
                <ul>
                  <li>Бумага и бумажная продукция</li>
                  <li>Офисная мебель и демонстрационное оборудование</li>
                  <li>Офисная техника и расходные материалы</li>
                  <li>Офисные принадлежности</li>
                  <li>Папки и системы архивации документов</li>
                  <li>Письменные и чертежные принадлежности</li>
                  <li>Товары для школы и детского творчества</li>
                  <li>Хозяйственные товары</li>
                </ul>
              </div>
            </li>
            <li className={styles.nav__item}>
              <Link to="/delivery" className={styles.nav__link}>
                Доставка
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/company" className={styles.nav__link}>
                Компания
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/contacts" className={styles.nav__link}>
                Контакты
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/support" className={styles.nav__link}>
                Помощь
              </Link>
            </li>
          </ul>
          <div
            className={
              openBurger ? `${styles.burger_menu} ${styles.active}` : `${styles.burger_menu}`
            }>
            <button className={styles.burger_close} onClick={() => setOpenBurger(!openBurger)}>
              <CloseIcon sx={{ fontSize: '30px' }} />
            </button>
            <ul className={styles.burger__list}>
              <li className={styles.nav__item}>
                <Link to={CATALOG_ROUTE} className={styles.nav__link}>
                  Каталог
                </Link>
                <div className={styles.nav_popup}>
                  <ul>
                    <li>Бумага и бумажная продукция</li>
                    <li>Офисная мебель и демонстрационное оборудование</li>
                    <li>Офисная техника и расходные материалы</li>
                    <li>Офисные принадлежности</li>
                    <li>Папки и системы архивации документов</li>
                    <li>Письменные и чертежные принадлежности</li>
                    <li>Товары для школы и детского творчества</li>
                    <li>Хозяйственные товары</li>
                  </ul>
                </div>
              </li>
              <li className={styles.nav__item}>
                <Link to="/delivery" className={styles.nav__link}>
                  Доставка
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link href="/company" className={styles.nav__link}>
                  Компания
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link to="/contacts" className={styles.nav__link}>
                  Контакты
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link to="/support" className={styles.nav__link}>
                  Помощь
                </Link>
              </li>
            </ul>
          </div>
          <button onClick={() => setOpenBurger(!openBurger)} className={styles.burger_btn}>
            <MenuIcon sx={{ fontSize: '30px' }} />
          </button>
        </nav>
      </Container>
    </div>
  );
};

export default HeaderNav;
