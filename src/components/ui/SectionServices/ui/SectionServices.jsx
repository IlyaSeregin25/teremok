import ServiceCard from '@components/ui/ServiceCard';
import { SERVICES_LIST } from '@/constants';
import styles from './style.module.css';
import { Link, NavLink } from 'react-router-dom';

const SectionServices = () => {
  const service = SERVICES_LIST[0];
  return (
    <>
      <li className={styles.services__item}>
        <a href="/i-and-mom" className={styles.services__link}>
          <ServiceCard data={service} />
        </a>
        <NavLink to="/i-and-mom" className={styles.services__link}>
          <ServiceCard data={service} />
        </NavLink>
        <Link to="/i-and-mom" className={styles.services__link}>
          <ServiceCard data={service} />
        </Link>
      </li>
      <li className={styles.services__item}>
        <a href={service.url} className={styles.services__link}>
          <ServiceCard data={service} />
        </a>
        <NavLink to={service.url} className={styles.services__link}>
          <ServiceCard data={service} />
        </NavLink>
        <Link to={service.url} className={styles.services__link}>
          <ServiceCard data={service} />
        </Link>
      </li>
    </>
  );
  /* 
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
                <a href={service.url} className={styles.services__link}>
                  <ServiceCard data={service} />
                </a>
                <NavLink to={service.url} className={styles.services__link}>
                  <ServiceCard data={service} />
                </NavLink>
                <Link to={service.url} className={styles.services__link}>
                  <ServiceCard data={service} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
   */
};

export default SectionServices;
