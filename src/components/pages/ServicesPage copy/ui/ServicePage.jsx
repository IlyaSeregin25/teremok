import { useParams } from 'react-router-dom';
import styles from './style.module.css';

const ServicePage = () => {
  const { pageId } = useParams();
  console.log(pageId);
  return <div className={styles.service_page}>ServicePage</div>;
};

export default ServicePage;
