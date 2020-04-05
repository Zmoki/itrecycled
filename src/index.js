import { categories, types } from './types';

const $check = document.querySelector('.check');
const $checkInput = document.querySelector('.check__input');
const $checkError = document.querySelector('.check__error');
const $result = document.querySelector('.result');
const $resultNumber = document.querySelector('.result__number');
const $resultAbbr = document.querySelector('.result__abbr');
const $resultDescription = document.querySelector('.result__description');
const $resultRecycled = document.querySelector('.result__recycled');

$check.addEventListener('submit', (e) => {
  e.preventDefault();
  $checkError.innerText = '';

  const input = $checkInput.value;

  const type = types.find((element) => {
    if (!Number.isNaN(input) && parseInt(input, 0) === element.number) {
      return true;
    }
    if (
      Number.isNaN(element.number) &&
      input.toUpperCase() === element.number
    ) {
      return true;
    }
    return element.abbr.includes(input.toUpperCase());
  });

  if (type !== undefined) {
    const category = categories[type.category];

    $result.style.setProperty('--color', category.color);
    $resultNumber.textContent = type.number;
    $resultAbbr.innerText = type.abbr.join(' | ');
    $resultDescription.innerText = type.description;
    $resultRecycled.innerText = type.recycled
      ? 'Перерабатывается'
      : 'Не перерабатывается';
  } else {
    $checkError.innerText = 'Я не знаю такой код переработки';
  }
});
