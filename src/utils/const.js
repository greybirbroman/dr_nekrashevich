const socialLinksList = [
  {
    id: 1,
    link: 'mailto:m.nekrashevich@denteria.ru',
    title: 'Gmail, почтовый ящик, почта',
    icon: 'link_gmail',
  },
  {
    id: 2,
    link: 'https://t.me/MarinaNekrashevich',
    title: 'Telegram, месседжер Телеграм',
    icon: 'link_telegram',
  },
  {
    id: 3,
    link: 'https://m.vk.com/meowwzilla',
    title: 'VKontakte, Вконтакте, VK, ВК, социальная сеть',
    icon: 'link_vk',
  },
];
const adressList = [
  {
    id: 1,
    title: 'Адрес',
    text: '197198, Санкт-Петербург, ул. Пионерская, д. 8',
  },
  {
    id: 2,
    title: 'E-mail',
    text: 'clinic@denteria.ru',
  },
  {
    id: 3,
    title: 'Телефон',
    text: '+7(812)209-1607',
  },
  {
    id: 4,
    title: 'Режим работы',
    text: 'Пн-Вс 09:00-21:00',
  },
  {
    id: 5,
    title: 'Связаться с администратором',
    text: '',
  },
];

const educationlist = [
  {
    id: 1,
    year: '2012',
    text: 'Саратовский государственный медицинский университет им. В.И. Разумовского (стоматология)',
    span: 'Базовое образование',
  },
  {
    id: 2,
    year: '2013',
    text: 'Саратовский государственный медицинский университет им. В.И. Разумовского (стоматология общей практики)',
    span: 'Интернатура',
  },
];

const instrumentslist = [
  {
    id: 1,
    text: 'Дентальный микроскоп OPMI pico MORA',
    span: '(Carl Zeiss, Германия)',
  },
  {
    id: 2,
    text: 'Диодный лазер Doctor Smile',
    span: '(Lambda S.p.A., Италия)',
  },
  {
    id: 3,
    text: 'CAD/CAM система CEREC MC XL Premium Package',
    span: '(Dentsply Sirona, Германия)',
  },
];



const specializations = [
  'Лечение взрослых и детей',
  'Лечение кариеса зубов',
  'Лечение подростков под микроскопом',
  'Лечение корневых каналов',
  'Повторное эндодонтическое лечение, извлечение отломков инструментов из корневого канала под микроскопом',
  'Эстетические реставрации, композитные виниры, лазерное отбеливание зубов, внутрикоронковое отбеливание',
];

const specializationList = specializations.map((item, index) => ({id: index, text: item}))


export { adressList, educationlist, instrumentslist, specializationList, socialLinksList };
