import { SERVICES_LISTS } from '@/constants';

const MainPage = () => {
  return (
    <div>
      Main
      <br />
      {SERVICES_LISTS[0].title}
      <img src={SERVICES_LISTS[0].mainImage} width={100} />
    </div>
  );
};

export default MainPage;
