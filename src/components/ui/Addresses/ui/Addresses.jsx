import React from 'react';
import styles from './style.module.css';
import { DATA_FOR_COMMUNICATION } from '@/constants';

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
