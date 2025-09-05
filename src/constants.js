import INTELLIGENCE from '@assets/services/intelligence.jpg';
import I_AND_MOM from '@assets/services/i-and-mom.jpg';

export const DATA_FOR_COMMUNICATION = {
  telephones: [
    { phone: '+79063428070', telegramm: 'webdev0000' },
    { phone: '+79626050987', telegramm: 'webdev0000' },
  ],
  addresses: [
    'г. Самара, ул. Ленинская, 166 (Ленинский район)',
    'г. Самара, ул. Белорусская, д.131 (п. Сухая Самарка)',
    'г. Самара, ул. Белорусская, д.24 (п. Сухая Самарка, Нефтемаш)',
    'г. Самара, ул. Осетинская, д.2 (ЖК "Волгарь")',
  ],
  socials: {
    vk: { path: 'https://vk.com/teremoksamara' },
  },
};
export const PATHS = {
  main: '/',
  aboutUs: '/about-us',
  photos: '/photos',
  services: '/services',
  contacts: '/contacts',
};
export const PAGES = [
  {
    name: 'Главная',
    path: PATHS.main,
  },
  {
    name: 'О нас',
    path: PATHS.aboutUs,
  },
  {
    name: 'Фотографии',
    path: PATHS.photos,
  },
  {
    name: 'Услуги',
    path: PATHS.services,
  },
  {
    name: 'Контакты',
    path: PATHS.contacts,
  },
];
export const SERVICES_LIST = [
  {
    id: 1,
    title: 'Я и мама',
    ageCategory: 'от 1 года до 3 лет',
    mainImage: I_AND_MOM,
    price: '800-4 500',
    subtitle: 'при единовременной оплате за месяц скидка 5%',
    url: '/i-and-mom',
    page: {},
  },
  {
    id: 2,
    title: 'Интеллект',
    ageCategory: 'от 3 до 4,5 лет',
    mainImage: INTELLIGENCE,
    price: '800-4 500',
    subtitle: 'при единовременной оплате за месяц скидка 5%',
    url: '/intelligence',
    page: {},
  },
  {
    id: 21,
    title: 'Интеллект',
    ageCategory: 'от 3 до 4,5 лет',
    mainImage: INTELLIGENCE,
    price: '800-4 500',
    subtitle: 'при единовременной оплате за месяц скидка 5%',
    url: '/intelligence',
    page: {},
  },
  {
    id: 22,
    title: 'Интеллект',
    ageCategory: 'от 3 до 4,5 лет',
    mainImage: INTELLIGENCE,
    price: '800-4 500',
    subtitle: 'при единовременной оплате за месяц скидка 5%',
    url: '/intelligence',
    page: {},
  },
];
export const ADVANTAGES_LIST = [
  '«Теремок» основан в 2007 году',
  'Занятия проводятся в «домашней», теплой обстановке',
  'Возрастное деление на группы',
  'Количество детей в группе 3-9 человек',
  'Чёткая и структурная программа для каждого возраста, которая наполнена современными играми и актуальными пособиями',
  'Каждое занятие включает творческие задания, после которых дети демонстрируют созданные своими руками шедевры (работы из солёного теста, пластилина, ниток, чая, фасоли и др.)',
];
