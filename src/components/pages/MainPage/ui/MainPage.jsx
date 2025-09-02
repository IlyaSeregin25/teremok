import { SERVICES_LISTS } from '@/constants';
import styles from './style.module.css';
import Header from '@/components/ui/Header';

const MainPage = () => {
  return (
    <div className={styles.body}>
      <header className={styles.body__header}>
        <Header />
      </header>
      <main className={styles.body__main}></main>
      <footer className={styles.body__footer}></footer>
    </div>
  );
};

export default MainPage;
