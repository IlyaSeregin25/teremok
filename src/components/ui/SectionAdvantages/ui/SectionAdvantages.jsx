import { NavLink } from 'react-router-dom';
import AdvantagesList from '../../AdvantagesList';
import ARROW_RIGHT_UP from '@assets/arrow-right-up.svg?react';
import styles from './style.module.css';
import { PATHS } from '@/constants';
import BG_1 from '@assets/bg1.jpg';
import BG_2 from '@assets/bg2.webp';

const SectionAdvantages = () => {
  return (
    <>
      <section className={styles.advantages} style={{ backgroundImage: `url(${BG_1})` }}>
        <div className={`${styles.advantages__inner} container`}>
          <div className={styles.advantages__preview}>
            <div className={styles.advantages__preview_main}>
              <h2 className={styles.advantages__preview_title}>
                Добро пожаловать
                <br />в «Теремок» где таланты раскрываются свободно
              </h2>
              <div className={styles.advantages__preview_subtitle}>
                <p>
                  Мы создаём яркие эмоции и надёжные знания. Начните свои первые шаги навстречу большому миру вместе с
                  нами!
                </p>
              </div>
              <div className={styles.advantages__preview_advantages}>
                <AdvantagesList />
              </div>
              <NavLink to={PATHS.aboutUs} className={styles.advantages__preview_link}>
                Подробнее о нас <ARROW_RIGHT_UP width={16} height={16} />
              </NavLink>
            </div>
          </div>
          <div className={styles.advantages__body}>
            <AdvantagesList />
          </div>
        </div>
      </section>
      <section className={styles.advantages} style={{ backgroundImage: `url(${BG_1})` }}>
        <div className={`${styles.advantages__inner} container ${styles.cl}`}>
          <div className={styles.advantages__preview}>
            <div className={styles.advantages__preview_main}>
              <h2 className={styles.advantages__preview_title}>
                Добро пожаловать
                <br />в «Теремок» где таланты раскрываются свободно
              </h2>
              <div className={styles.advantages__preview_subtitle}>
                <p>
                  Мы создаём яркие эмоции и надёжные знания. Начните свои первые шаги навстречу большому миру вместе с
                  нами!
                </p>
              </div>
              <div className={styles.advantages__preview_advantages}>
                <AdvantagesList />
              </div>
              <NavLink to={PATHS.aboutUs} className={styles.advantages__preview_link}>
                Подробнее о нас <ARROW_RIGHT_UP width={16} height={16} />
              </NavLink>
            </div>
          </div>
          <div className={styles.advantages__body}>
            <AdvantagesList />
          </div>
        </div>
      </section>
      <section className={styles.advantages} style={{ backgroundImage: `url(${BG_2})` }}>
        <div className={`${styles.advantages__inner} container`}>
          <div className={styles.advantages__preview}>
            <div className={styles.advantages__preview_main}>
              <h2 className={styles.advantages__preview_title}>
                Добро пожаловать
                <br />в «Теремок» где таланты раскрываются свободно
              </h2>
              <div className={styles.advantages__preview_subtitle}>
                <p>
                  Мы создаём яркие эмоции и надёжные знания. Начните свои первые шаги навстречу большому миру вместе с
                  нами!
                </p>
              </div>
              <div className={styles.advantages__preview_advantages}>
                <AdvantagesList />
              </div>
              <NavLink to={PATHS.aboutUs} className={styles.advantages__preview_link}>
                Подробнее о нас <ARROW_RIGHT_UP width={16} height={16} />
              </NavLink>
            </div>
          </div>
          <div className={styles.advantages__body}>
            <AdvantagesList />
          </div>
        </div>
      </section>
      <section className={styles.advantages} style={{ backgroundImage: `url(${BG_2})` }}>
        <div className={`${styles.advantages__inner} container ${styles.cl}`}>
          <div className={styles.advantages__preview}>
            <div className={styles.advantages__preview_main}>
              <h2 className={styles.advantages__preview_title}>
                Добро пожаловать
                <br />в «Теремок» где таланты раскрываются свободно
              </h2>
              <div className={styles.advantages__preview_subtitle}>
                <p>
                  Мы создаём яркие эмоции и надёжные знания. Начните свои первые шаги навстречу большому миру вместе с
                  нами!
                </p>
              </div>
              <div className={styles.advantages__preview_advantages}>
                <AdvantagesList />
              </div>
              <NavLink to={PATHS.aboutUs} className={styles.advantages__preview_link}>
                Подробнее о нас <ARROW_RIGHT_UP width={16} height={16} />
              </NavLink>
            </div>
          </div>
          <div className={styles.advantages__body}>
            <AdvantagesList />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionAdvantages;
