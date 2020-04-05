export const categories = [
  {
    name: 'Пластик',
    color: 'yellow',
  },
  {
    name: 'Бумага',
    color: 'blue',
  },
  {
    name: 'Стекло',
    color: 'green',
  },
  {
    name: 'Металлы',
    color: 'red',
  },
  {
    name: 'Композитные материалы',
    color: 'orange',
  },
];

export const types = [
  {
    number: 1,
    abbr: ['PET'],
    description: 'Полиэтилентерефталат',
    recycled: true,
    category: 0,
  },
  {
    number: 2,
    abbr: ['HDPE', 'PEHD'],
    description: 'Полиэтилен высокой плотности',
    recycled: true,
    category: 0,
  },
  {
    number: 3,
    abbr: ['PVC'],
    description: 'Поливинилхлорид',
    recycled: false,
    category: 0,
  },
  {
    number: 4,
    abbr: ['PELD', 'LDPE'],
    description: 'Полиэтилен низкой плотности',
    recycled: true,
    category: 0,
  },
  {
    number: 5,
    abbr: ['PP'],
    description: 'Полипропилен',
    recycled: true,
    category: 0,
  },
  {
    number: 6,
    abbr: ['PS'],
    description: 'Полистирол',
    recycled: false,
    category: 0,
  },
  {
    number: 7,
    abbr: ['O', 'Others'],
    description: 'Прочие виды пластика',
    recycled: false,
    category: 0,
  },
  {
    number: 9,
    abbr: ['ABS'],
    description: 'АБС-пластик',
    recycled: false,
    category: 0,
  },
  {
    number: 'PA',
    abbr: ['PA'],
    description: 'Полиамид',
    recycled: false,
    category: 0,
  },
  {
    number: 20,
    abbr: ['PAP'],
    description: 'Гофрированный картон',
    recycled: true,
    category: 1,
  },
  {
    number: 21,
    abbr: ['PAP'],
    description: 'Однослойный картон',
    recycled: true,
    category: 1,
  },
  {
    number: 22,
    abbr: ['PAP'],
    description: 'Бумага',
    recycled: true,
    category: 1,
  },
  {
    number: 23,
    abbr: ['PAP'],
    description: 'Вощёная бумага',
    recycled: true,
    category: 1,
  },
  {
    number: 70,
    abbr: ['GL'],
    description: 'Cтекло',
    recycled: true,
    category: 2,
  },
  {
    number: 71,
    abbr: ['GL'],
    description: 'Зелёное стекло',
    recycled: true,
    category: 2,
  },
  {
    number: 73,
    abbr: ['GL'],
    description: 'Бутылочное стекло тёмно-коричневое',
    recycled: true,
    category: 2,
  },
  {
    number: 74,
    abbr: ['GL'],
    description: 'Бутылочное стекло светло-коричневое',
    recycled: true,
    category: 2,
  },
  {
    number: 75,
    abbr: ['GL'],
    description: 'Стекло с малым содержанием свинца',
    recycled: false,
    category: 2,
  },
  {
    number: 76,
    abbr: ['GL'],
    description: 'Хрусталь',
    recycled: false,
    category: 2,
  },
  {
    number: 77,
    abbr: ['GL'],
    description: 'Стекло, покрытое медью',
    recycled: false,
    category: 2,
  },
  {
    number: 78,
    abbr: ['GL'],
    description: 'Стекло, покрытое серебром',
    recycled: false,
    category: 2,
  },
  {
    number: 79,
    abbr: ['GL'],
    description: 'Позолоченное стекло',
    recycled: false,
    category: 2,
  },
  {
    number: 40,
    abbr: ['FE'],
    description: 'Металл',
    recycled: true,
    category: 3,
  },
  {
    number: 41,
    abbr: ['ALU'],
    description: 'Алюминий',
    recycled: true,
    category: 3,
  },
  {
    number: 81,
    abbr: ['PapJet'],
    description: 'Бумага (картон) + Пластик',
    recycled: true,
    category: 4,
  },
  {
    number: 82,
    abbr: [],
    description: 'Бумага (картон) + Алюминий',
    recycled: true,
    category: 4,
  },
  {
    number: 83,
    abbr: [],
    description: 'Бумага (картон) + Белая жесть',
    recycled: true,
    category: 4,
  },
  {
    number: 84,
    abbr: ['C/PAP'],
    description: 'Бумага (картон) + Пластик + Алюминий',
    recycled: true,
    category: 4,
  },
  {
    number: 85,
    abbr: [],
    description: 'Бумага (картон) + Пластик + Алюминий + Жесть',
    recycled: true,
    category: 4,
  },
  {
    number: 87,
    abbr: [],
    description: 'Биоразлагаемый пластик',
    recycled: false,
    category: 4,
  },
  {
    number: 90,
    abbr: [],
    description: 'Пластик + Алюминий',
    recycled: false,
    category: 4,
  },
  {
    number: 91,
    abbr: [],
    description: 'Пластик + Белая жесть',
    recycled: false,
    category: 4,
  },
  {
    number: 92,
    abbr: [],
    description: 'Пластик + Различные металлы',
    recycled: false,
    category: 4,
  },
  {
    number: 95,
    abbr: [],
    description: 'Стекло + Пластик',
    recycled: false,
    category: 4,
  },
  {
    number: 96,
    abbr: [],
    description: 'Стекло + Алюминий',
    recycled: false,
    category: 4,
  },
  {
    number: 97,
    abbr: [],
    description: 'Стекло + Белая жесть',
    recycled: false,
    category: 4,
  },
  {
    number: 98,
    abbr: [],
    description: 'Стекло + Различные металлы',
    recycled: false,
    category: 4,
  },
];
