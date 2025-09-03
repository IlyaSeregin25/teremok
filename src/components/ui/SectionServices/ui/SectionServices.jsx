import ServiceCard from '@components/ui/ServiceCard';
import styles from './style.module.css';
import { SERVICES_LIST } from '@/constants';

const SectionServices = () => {
  return (
    <section className={styles.services}>
      <div className={`${styles.services__inner} container`}>
        <ul className={styles.services__list}>
          {SERVICES_LIST?.map(service => {
            return (
              <li key={service.id} className={styles.services__item}>
                <a href={service.url} className={styles.services__link}>
                  <ServiceCard data={service} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionServices;
