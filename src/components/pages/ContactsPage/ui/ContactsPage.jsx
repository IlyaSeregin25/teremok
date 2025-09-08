import Phones from '@/components/ui/Phones';
import Socials from '@/components/ui/Socials';
import Addresses from '@/components/ui/Addresses';
import MapIFrame from '@/components/ui/Map';
import styles from './style.module.css';
import { DATA_FOR_COMMUNICATION } from '@/constants';

const ContactsPage = () => {
  return (
    <section className={styles.contacts}>
      <div className={`${styles.contacts__inner} container`}>
        <h2 className={styles.contacts__title}>Контакты</h2>
        <div className={styles.contacts__list}>
          <div className={styles.contacts__card}>
            <h4 className={styles.contacts__card_title}>Телефон</h4>
            <div className={styles.contacts__card_body}>
              <Phones />
            </div>
          </div>
          <div className={styles.contacts__card}>
            <h4 className={styles.contacts__card_title}>Свяжитесь с нами</h4>
            <div className={styles.contacts__card_body}>
              <Socials />
            </div>
          </div>
          <div className={`${styles.contacts__card} ${styles.contacts__card_wide}`}>
            <h4 className={styles.contacts__card_title}>Наши адреса</h4>
            <div className={styles.contacts__card_body}>
              <Addresses />
            </div>
          </div>
        </div>
        <div className={styles.contacts__map}>
          <MapIFrame />
        </div>
        <div className={styles.contacts__legal}>
          <h4 className={styles.contacts__legal_title}>Юридическая информация</h4>
          <div className={styles.contacts__legal_info}>
            {DATA_FOR_COMMUNICATION?.legal?.map((elem, ind) => {
              return (
                <p key={ind}>
                  {elem.title} <span>{elem.description}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
