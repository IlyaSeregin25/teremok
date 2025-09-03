import React, { useState } from 'react';
import styles from './style.module.css';
import LOGO from '@assets/logo.png';
import { DATA_FOR_COMMUNICATION, PAGES } from '@/constants';
import { NavLink } from 'react-router-dom';
import Phones from '../../Phones';

const Header = () => {
  const [isClose, setIsClose] = useState(true);
  return (
    <div className={`${styles.header} `}>
      <button
        className={`${styles.burger} ${isClose ? styles.burger_hidden : styles.burger_active + ' ' + styles.burger_show}`}
        onClick={() => setIsClose(!isClose)}
      >
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </button>
      <div className={`${styles.overflow} ${isClose ? '' : styles.overflow_active}`}></div>
      <div className={`${styles.mobile_menu} ${isClose ? '' : styles.mobile_menu_active}`}>
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
          <a href="/" className={styles.header_top_line__logo} title="Главная страница" aria-label="Главная страница">
            <img src={LOGO} alt="true" width={150} height={50} />
          </a>
          <Phones />
          {DATA_FOR_COMMUNICATION?.addresses?.length && (
            <ul className={styles.header_top_line__addresses}>
              {DATA_FOR_COMMUNICATION.addresses.map((addresses, index) => {
                return <li key={index}>{addresses}</li>;
              })}
            </ul>
          )}
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
          <button
            className={`${styles.burger} ${isClose ? '' : styles.burger_active}`}
            onClick={() => setIsClose(!isClose)}
          >
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
