export const categories = {
  plastics: {
    name: 'Пластмассы',
    color: '#FFB74D',
  },
  paper: {
    name: 'Бумага',
    color: '#00ACC1',
  },
  organic: {
    name: 'Органические материалы',
    color: 'brown',
  },
  glass: {
    name: 'Стекло',
    color: '#4AA371',
  },
  metals: {
    name: 'Металлы',
    color: '#EF5350',
  },
  composites: {
    name: 'Композитные материалы',
    color: '#666',
  },
};

export const types = [
  {
    number: 1,
    abbr: {
      iso: ['PET'],
      ru: ['ПЭТФ'],
    },
    description: 'Полиэтилентерефталат',
    examples: 'Полиэстер, бутылки для напитков',
    category: 'plastics',
  },
  {
    number: 2,
    abbr: { iso: ['PEHD', 'PE', 'HDPE'], ru: ['ПЭВП', 'ПЭНД', 'ПНД'] },
    description: 'Полиэтилен высокой плотности',
    examples: 'Пластиковые бутылки, пакеты, мусорные вёдра',
    category: 'plastics',
  },
  {
    number: 3,
    abbr: { iso: ['PVC'], ru: ['ПВХ'] },
    description: 'Поливинилхлорид',
    examples:
      'Оконные рамы, бутылки для химических продуктов, покрытия для полов, изоляция (электротехника) электрических проводов',
    category: 'plastics',
  },
  {
    number: 4,
    abbr: { iso: ['PELD', 'LDPE'], ru: ['ПЭНП', 'ПВД', 'ПЭВД'] },
    description: 'Полиэтилен низкой плотности',
    examples: 'Пакеты, вёдра, трубы, крышки',
    category: 'plastics',
  },
  {
    number: 5,
    abbr: { iso: ['PP'], ru: ['ПП'] },
    description: 'Полипропилен',
    examples:
      'Автомобильные бамперы, внутренняя отделка автомобилей, корпуса электроинструмента, упаковка из-под шоколадок, макарон, пластиковые стаканчики',
    category: 'plastics',
  },
  {
    number: 6,
    abbr: { iso: ['PS'], ru: ['ПС'] },
    description: 'Полистирол',
    examples:
      'Игрушки, одноразовая посуда, цветочные горшки, видеокассеты, чемоданы, одноразовые стаканчики',
    category: 'plastics',
  },
  {
    number: 7,
    abbr: { iso: ['O', 'Others'] },
    description: 'Остальные виды пластика',
    examples:
      'Полиуретан, поликарбонат, полиамиды, полиакрилонитрил и др., биопластики',
    category: 'plastics',
  },
  {
    number: 9,
    abbr: { iso: ['ABS'] },
    description: 'АБС-пластик',
    examples:
      'Корпуса мониторов/телевизоров и электроинструмента, кофеварки, сотовые телефоны, компьютерный пластик, распечатанные на 3D-принтере компоненты, которые не являются биопластиками, такими как PLA',
    category: 'plastics',
  },
  {
    number: 20,
    abbr: { iso: ['PAP'] },
    description: 'Гофрированный картон',
    examples: 'Коробки от бытовой техники, продуктов, косметики',
    category: 'paper',
  },
  {
    number: 21,
    abbr: { iso: ['PAP'] },
    description: 'Однослойный картон',
    examples: 'Открытки, обложки книг, короб-упаковка',
    category: 'paper',
  },
  {
    number: 22,
    abbr: { iso: ['PAP'] },
    description: 'Бумага',
    examples: 'Журналы и газеты, конверты, бумажные пакеты, бумага для печати',
    category: 'paper',
  },
  {
    number: 23,
    abbr: { iso: ['PAP', 'PPB'] },
    description: 'Вощёная бумага',
    examples: 'Упаковка для почтовых отправлений или для декора букетов',
    category: 'paper',
  },
  {
    number: 40,
    abbr: { iso: ['FE'] },
    description: 'Сталь',
    examples:
      'Банки из-под сгущённого молока, кофе, консервов, некоторых марок пива',
    category: 'metals',
  },
  {
    number: 41,
    abbr: { iso: ['ALU'] },
    description: 'Алюминий',
    examples: 'Алюминиевые банки, тюбики для крема',
    category: 'metals',
  },
  {
    number: 50,
    abbr: { iso: ['FOR'] },
    description: 'Древесина',
    examples: '',
    category: 'organic',
  },
  {
    number: 51,
    abbr: { iso: ['FOR'] },
    description: 'Пробка',
    examples:
      'Бутылочные пробки, подставки для горячих чашек/тарелок, стельки, поплавки',
    category: 'organic',
  },
  {
    number: 60,
    abbr: { iso: ['COT'] },
    description: 'Хлопок',
    examples: 'Вата',
    category: 'organic',
  },
  {
    number: 61,
    abbr: { iso: ['TEX'] },
    description: 'Джутовое волокно',
    examples: 'Мешки, канаты',
    category: 'organic',
  },
  {
    number: 70,
    abbr: { iso: ['GL'] },
    description: 'Бесцветное стекло',
    examples: '',
    category: 'glass',
  },
  {
    number: 71,
    abbr: { iso: ['GL'] },
    description: 'Зелёное стекло',
    examples: '',
    category: 'glass',
  },
  {
    number: 72,
    abbr: { iso: ['GL'] },
    description: 'Коричневое стекло',
    examples: '',
    category: 'glass',
  },
  {
    number: 73,
    abbr: { iso: ['GL'] },
    description: 'Бутылочное стекло тёмно-коричневое',
    examples: '',
    category: 'glass',
  },
  {
    number: 74,
    abbr: { iso: ['GL'] },
    description: 'Бутылочное стекло светло-коричневое',
    examples: '',
    category: 'glass',
  },
  {
    number: 75,
    abbr: { iso: ['GL'] },
    description: 'Стекло с малым содержанием свинца',
    examples: '',
    category: 'glass',
  },
  {
    number: 76,
    abbr: { iso: ['GL'] },
    description: 'Хрусталь',
    examples: '',
    category: 'glass',
  },
  {
    number: 77,
    abbr: { iso: ['GL'] },
    description: 'Стекло, покрытое медью',
    examples: '',
    category: 'glass',
  },
  {
    number: 78,
    abbr: { iso: ['GL'] },
    description: 'Стекло, покрытое серебром',
    examples: '',
    category: 'glass',
  },
  {
    number: 79,
    abbr: { iso: ['GL'] },
    description: 'Позолоченное стекло',
    examples: '',
    category: 'glass',
  },
  {
    number: 80,
    abbr: null,
    description: 'Бумага (картон) + Различные материалы',
    examples: 'Упаковка от бургеров в Бургер Кинге, Мак Доналдсе',
    category: 'composites',
  },
  {
    number: 81,
    abbr: { iso: ['PapJet'] },
    description: 'Бумага (картон) + Пластик',
    examples:
      'Упаковки для кондитерских изделий, упаковка некоторых видов молока',
    category: 'composites',
  },
  {
    number: 82,
    abbr: null,
    description: 'Бумага (картон) + Алюминий',
    examples: 'Картонный тубус покрытый алюминий-содержащей плёнкой',
    category: 'composites',
  },
  {
    number: 83,
    abbr: null,
    description: 'Бумага (картон) + Белая жесть',
    examples: '',
    category: 'composites',
  },
  {
    number: 84,
    abbr: { iso: ['C/PAP'] },
    description: 'Бумага (картон) + Пластик + Алюминий',
    examples: 'Упаковки для сока, упаковка от чипсов «Pringles»',
    category: 'composites',
  },
  {
    number: 85,
    abbr: null,
    description: 'Бумага (картон) + Пластик + Алюминий + Жесть',
    examples: '',
    category: 'composites',
  },
  {
    number: 87,
    abbr: null,
    description: 'Биоразлагаемый пластик',
    examples: 'Ламинат, закладки, визитки, флаеры/листовки',
    category: 'composites',
  },
  {
    number: 90,
    abbr: null,
    description: 'Пластик + Алюминий',
    examples:
      'Антистатические пакеты, упаковка еды быстрого приготовления, металлизированные пакеты',
    category: 'composites',
  },
  {
    number: 91,
    abbr: null,
    description: 'Пластик + Белая жесть',
    examples:
      'Крышка баночек - основа из жести изнутри покрытая пластиком, обеспечивающим герметизацию',
    category: 'composites',
  },
  {
    number: 92,
    abbr: null,
    description: 'Пластик + Различные металлы',
    examples: 'Упаковка',
    category: 'composites',
  },
  {
    number: 95,
    abbr: null,
    description: 'Стекло + Пластик',
    examples: '',
    category: 'composites',
  },
  {
    number: 96,
    abbr: null,
    description: 'Стекло + Алюминий',
    examples: '',
    category: 'composites',
  },
  {
    number: 97,
    abbr: { iso: ['C/GL'] },
    description: 'Стекло + Белая жесть',
    examples: '',
    category: 'composites',
  },
  {
    number: 98,
    abbr: { iso: ['C/GL'] },
    description: 'Стекло + Различные металлы',
    examples:
      'Банка из-под растворимого кофе с крышкой-клапаном, содержащей фольгу',
    category: 'composites',
  },
];
