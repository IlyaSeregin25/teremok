import styles from './style.module.css';
import Header from '@/components/ui/Header';
import SectionServices from '@/components/ui/SectionServices';

const MainPage = () => {
  return (
    <div className={styles.body}>
      <header className={styles.body__header}>
        <Header />
      </header>
      <main className={styles.body__main}>
        <SectionServices />
      </main>
      <footer className={styles.body__footer}></footer>
    </div>
  );
};

export default MainPage;
