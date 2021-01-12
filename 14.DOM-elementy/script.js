// Zadanie 1
const moredivs = document.querySelectorAll('.more_divs');

// Zadanie 2
const sList = document.querySelector('.short-list');

function shortList(list) {
  // inner HTML
  console.log(list.innerHTML);
  // outerHTML
  console.log(list.outerHTML);
  // class name
  console.log(list.className);
  // class tab
  console.log([...list.classList]);
  // Dataset
  console.log(list.dataset);
}
shortList(sList);

// Zadanie 3

const el = document.querySelector('#datasetCheck');
const number1 = el.getAttribute('data-numberOne'); //zbieranie liczby1 do kalkulatora
const number2 = el.getAttribute('data-numberTwo'); //zbieranie liczby2 do kalkulatora
const number3 = el.getAttribute('data-number-three'); //zbieranie liczby3 do kalkulatora

function calculator() {
    sum = Number(number1) + Number(number2) + Number(number3); // suma
    dif = Number(number1) - Number(number2) - Number(number3); // odejmowanie
    console.log('Dodawanie: ' + sum);
    console.log('Odejmowanie: ' + dif);
  }
  calculator();

// Zadanie4
const span = document.querySelector('#spanText');
console.log((span.textContent = 'random'));

// Zadanie5

const span2 = document.querySelector('#spanText');
console.log((span2.className = 'new class name'));

// Zadanie 6

function modEl(element) {
    const classNames = [...element.classList].map((className) => {
      console.log(className);
      return className;
    });
    console.log(classNames.join('+'));
    element.className = '';
    console.log('Usunięto wszystkie klasy.');
  }
  
  modEl(document.getElementById('classes'));

  // Zadanie 7

  const longListElem = document.querySelectorAll('#longList li');

function addAttribute(elements) {
  elements.forEach((element) => {
    if (!element.dataset.text) {
      element.dataset.text = 'text';
    }
  });
}
addAttribute(longListElem);

// Zadanie 8
const myDiv = document.querySelector('#myDiv');

function createObject(string) {
  let object = {
    newClass: string,
  };
  readObject(object);
}

function readObject(object) {
  let newClass = object.newClass;
  myDiv.className = newClass;
}

createObject('new-class');

// Zadanie 9

const numbers = document.querySelector('#numbers');
const randomNumb = Math.floor(Math.random() * 11);

function addClassNameByNumber(number) {
  if (number % 2 == 0 && number != 0) {
    numbers.className = 'even';
  } else {
    numbers.className = 'odd';
  }
}
addClassNameByNumber(randomNumb);

// Zadanie 10

const longList = document.querySelector('#longList');

function getValues(element) {
  const children = Array.from(element.children);
  const values = children.map((child) => child.textContent);
  console.log(values);
  return values;
}

getValues(longList);

// Zadanie 11
const longsecond = document.querySelector('#longList');

function modValue(elements) {
    [...elements].forEach((element) => {
      const currentValue = element.textContent;
      const randomNumber = Math.floor(Math.random() * 11);
      element.dataset.oldValue = currentValue;
      element.textContent = randomNumber;
    });
  }
  
  modValue(longsecond.children);
  