import React from 'react';
import styles from './style.module.css';
import LOGO from '@assets/logo.png';
import { DATA_FOR_COMMUNICATION } from '@/constants';
import TELEGRAMM from '@assets/telegram.svg?react';

const Header = () => {
  return (
    <div className={`${styles.header}  container`}>
      <div className={`${styles.header__top} ${styles.header_top_line}`}>
        <a href="/" className={styles.header_top_line__logo} title="Главная страница" aria-label="Главная страница">
          <img src={LOGO} alt width={150} height={50} />
        </a>
        {DATA_FOR_COMMUNICATION?.telephones?.length && (
          <ul className={styles.header_top_line__telephones}>
            {DATA_FOR_COMMUNICATION.telephones.map((people, index) => {
              return (
                <li key={index}>
                  <a
                    href={`https://telegram.me/${people.telegramm}`}
                    target="_blank"
                    className={styles.telephones__messenger}
                  >
                    <TELEGRAMM width={40} height={40} />
                  </a>
                  <a href={`tel:${people.phone}`} target="_blank">
                    {people.phone}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
        {DATA_FOR_COMMUNICATION?.addresses?.length && (
          <ul className={styles.header_top_line__addresses}>
            {DATA_FOR_COMMUNICATION.addresses.map((addresses, index) => {
              return <li key={index}>{addresses}</li>;
            })}
          </ul>
        )}
      </div>
      <div className={styles.header__bottom}>
        <nav className={styles.header__menu}>
          <ul className={styles.header__menu}></ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
