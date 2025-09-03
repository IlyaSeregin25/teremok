import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import SectionServices from '@/components/ui/SectionServices';
import styles from './style.module.css';

const MainPage = () => {
  return (
    <div className={styles.body}>
      <header className={styles.body__header}>
        <Header />
      </header>
      <main className={styles.body__main}>
        <SectionServices />
      </main>
      <footer className={styles.body__footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default MainPage;
