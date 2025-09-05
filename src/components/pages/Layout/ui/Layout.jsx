import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import styles from './style.module.css';
import { useEffect } from 'react';

const Layout = () => {
  /* const location = useLocation()
    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"})
    }, [location]) */
  return (
    <div className={styles.body}>
      <ScrollRestoration
      /* getKey={(location, matches) => {
          return location.pathname;
        }} */
      />
      <header className={styles.body__header}>
        <Header />
      </header>
      <main className={styles.body__main}>
        <Outlet />
      </main>
      <footer className={styles.body__footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
