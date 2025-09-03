import { DATA_FOR_COMMUNICATION } from '@/constants';
import TELEGRAMM from '@assets/telegram.svg?react';
import styles from './style.module.css';

const Phones = ({ clName }) => {
  const cl = clName === 'column' && styles.column;
  return (
    <>
      {DATA_FOR_COMMUNICATION?.telephones?.length && (
        <ul className={`${styles.telephones} ${cl}`}>
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
    </>
  );
};

export default Phones;
