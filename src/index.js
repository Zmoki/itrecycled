import { categories, types } from './types';

const abbrToText = (abbr) => {
  if (abbr === null || (abbr.iso == null && abbr.ru == null)) {
    return '';
  }

  const list = [
    ...(abbr.iso != null ? abbr.iso : []),
    ...(abbr.ru != null ? abbr.ru : []),
  ];

  return (
    list[0] + (list.length > 1 ? `</br>(${list.slice(1).join(', ')})` : '')
  );
};
const $check = document.querySelector('.check');
const $checkInput = document.querySelector('.check__input');
const $checkError = document.querySelector('.check__error');
const $result = document.querySelector('.result');
const $resultNumber = document.querySelector('.result__number');
const $resultAbbr = document.querySelector('.result__abbr');
const $resultCategory = document.querySelector('.result__category');
const $resultDescription = document.querySelector('.result__description');
const $resultExamples = document.querySelector('.result__examples');
const $resultRecycled = document.querySelector('.result__recycled');

$check.addEventListener('submit', (e) => {
  e.preventDefault();
  $checkError.innerText = '';

  const input = $checkInput.value;

  const type = types.find((element) => {
    if (!Number.isNaN(input) && parseInt(input, 0) === element.number) {
      return true;
    }
    if (element.abbr !== null) {
      if (
        element.abbr.iso != null &&
        element.abbr.iso.includes(input.toUpperCase())
      ) {
        return true;
      }
      if (
        element.abbr.ru != null &&
        element.abbr.ru.includes(input.toUpperCase())
      ) {
        return true;
      }
    }

    return false;
  });

  if (type !== undefined) {
    const category = categories[type.category];

    $result.style.setProperty('--color', category.color);
    $resultNumber.textContent = type.number;
    $resultAbbr.innerHTML = abbrToText(type.abbr);
    $resultCategory.innerText = category.name;
    $resultDescription.innerText = type.description;
    $resultExamples.innerText = `Примеры: ${type.examples}`;
    $resultRecycled.innerText =
      'Пока нет информации о переработке этого в России. Но скоро она появится.';
  } else {
    $checkError.innerText = 'Я не знаю такой код переработки';
  }
});
