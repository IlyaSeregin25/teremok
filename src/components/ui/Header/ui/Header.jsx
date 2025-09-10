import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Phones from '../../Phones';
import Addresses from '../../Addresses';
import { PAGES } from '@/constants';
import LOGO from '@assets/logo.png';
import styles from './style.module.css';

const Header = () => {
  const [isClose, setIsClose] = useState(true);
  function handleClickMobileMenu() {
    setIsClose(!isClose);
    isClose ? document.body.classList.add('lock') : document.body.classList.remove('lock');
  }
  return (
    <div className={`${styles.header} `}>
      <button
        className={`${styles.burger} ${isClose ? styles.burger_hidden : styles.burger_active + ' ' + styles.burger_show}`}
        onClick={handleClickMobileMenu}
      >
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </button>
      <div
        className={`${styles.overflow} ${isClose ? '' : styles.overflow_active}`}
        onClick={handleClickMobileMenu}
      ></div>
      <div
        className={`${styles.mobile_menu} ${isClose ? '' : styles.mobile_menu_active}`}
        onClick={handleClickMobileMenu}
      >
        <ul className={styles.mobile_menu__list}>
          {PAGES?.length &&
            PAGES.map((page, index) => {
              return (
                <li key={index} className={styles.mobile_menu__item}>
                  <NavLink to={page.path} className={props => (props.isActive ? styles.mobile_menu__item_active : '')}>
                    {page.name}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
      <div className={`${styles.header__top}`}>
        <div className={`${styles.header_top_line__inner} container`}>
          <div className={styles.header_top_line__contacts}>
            <Phones />
          </div>
          <Link to="/" className={styles.header_top_line__logo} title="Главная страница" aria-label="Главная страница">
            <img src={LOGO} alt="true" width={300} height={100} />
          </Link>
          <div className={styles.header_top_line__addresses}>
            <Addresses />
          </div>
        </div>
      </div>
      <div className={styles.header__bottom}>
        <div className={`${styles.header__bottom_inner} container`}>
          <a
            href="/"
            className={styles.header_bottom_line__logo}
            title="Главная страница"
            aria-label="Главная страница"
          >
            <img src={LOGO} alt="true" width={150} height={50} />
          </a>
          <nav className={styles.header__menu}>
            <ul className={styles.menu__list}>
              {PAGES?.length &&
                PAGES.map((page, index) => {
                  return (
                    <li key={index} className={styles.menu__item}>
                      <NavLink to={page.path} className={props => (props.isActive ? styles.menu__item_active : '')}>
                        {page.name}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </nav>
          <button className={`${styles.burger} ${isClose ? '' : styles.burger_active}`} onClick={handleClickMobileMenu}>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
