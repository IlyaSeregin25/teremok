import ServiceCard from '@components/ui/ServiceCard';
import { SERVICES_LIST } from '@/constants';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

const SectionServices = () => {
  return (
    <section className={styles.services} aria-labelledby="services-title">
      <div className={`${styles.services__inner} container`}>
        <h2 className={styles.services__title} id="services-title">
          Программы для детского развития
        </h2>
        <ul className={styles.services__list}>
          {SERVICES_LIST?.map(service => {
            return (
              <li key={service.id} className={styles.services__item}>
                <NavLink to={service.url} className={styles.services__link}>
                  <ServiceCard data={service} />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionServices;
