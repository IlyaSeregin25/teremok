import React from 'react';
import { DATA_FOR_COMMUNICATION } from '@/constants';
import styles from './style.module.css';

const Addresses = () => {
  return (
    <div className={styles.addresses}>
      {DATA_FOR_COMMUNICATION?.addresses?.length && (
        <ul className={styles.addresses__list}>
          {DATA_FOR_COMMUNICATION.addresses.map((addresses, index) => {
            return <li key={index}>{addresses}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Addresses;
