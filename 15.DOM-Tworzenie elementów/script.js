// Zadanie 1
const nevDiv = document.createElement('div');
nevDiv.textContent = 'To jest nowy element';
document.getElementById('root').appendChild(newDiv);

// Zadanie 2

const FavouriteList = document.CreateElement('ul');

const Fruits = 
[
    "Apple",
    "Orange",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Durian", // Bo cebula to nie owoc :D 
];
Fruits.forEach((fruit) => {
    const li = document.createElement('li');
    item.textContent = fruit;
    FavouriteList.appendChild(li);
});
  document.getElementById('root').appendChild(fruitsList);
  
  // Zadanie 3
  FavouriteList.addEventListener('click', () => {
    const items = FavouriteList.children;
    for (let i = 0; i < items.length; i++) {
      if (i % 2 !== 0) {
        FavouriteList.removeChild(items[i]);
      }
    }
});

// Zadanie 4
const Button = document.createElement('button');
Button.textContent = 'Remove me from this world!';
document.getElementById('root').appendChild(Button);

Button.addEventListener('click', (e) => {
  e.currentTarget.remove(); // po kliknieciu usuwa button
});

// Zadanie 5
const random = Math.floor(Math.random() * 11);

for (let i = 0; i <= random; i++) { // randomową ilość razy stworzy div, zaczyna zawsze od 0
  const randomDiv = document.createElement('div'); // można by było to zmienić, ale w zadaniu tego nie ma :D
  randomDiv.textContent = `To jest div nr ${i}`;
  document.getElementById('root').appendChild(randomDiv);
}

// Zadanie 6

const elements = 
{
  div1: 'to jest div',
  span1: 'to jest span',
  div2: {
    div3: 'to jest div',
  },
  span2: 'to jest span',
};

function renderElement(tag, content) {
  const htmlTag = tag.replace(/[0-9]/g, '');
  const element = document.createElement(htmlTag);
  element.textContent = content;
  document.getElementById('root').appendChild(element);
}

for (const key in elements) {
  if (typeof elements[key] === 'string') {
    renderElement(key, elements[key]);
  } else {
    for (const prop in elements[key]) {
      renderElement(prop, elements[key][prop]);
    }
  }
}

// Zadanie 7
const list1 = document.createElement('ul');
const workout = [
  'Deadlift 3x3',
  'Lowbar Squat 4x6',
  'Bench press 5x5',
  'Chest supported row 4x10',
  'Trap tyi raise 4x10',
  'AB wheel rollout 3x10-15',
  'Zercher walk 4x10m',
];

workout.forEach((workout) => {
  const list = document.createElement('li');
  list.textContent = workout;
  list1.appendChild(list);
});
document.getElementById('root').appendChild(list1);

const button1 = document.createElement('button');
button1.textContent = 'Workout 2';
list1.after(button1);

const list2 = document.createElement('ul');
document.getElementById('root').appendChild(list2);

const button2 = document.createElement('button');
button2.textContent = 'Workout 1';
button2.disabled = true;
list1.after(button2);

button1.addEventListener('click', () => {
  list2.appendChild(list1.lastChild);
  if (list1.children.length === 0) {
    button1.disabled = true;
  }
  if (list2.children.length > 0) {
    button2.disabled = false;
  }
});

button2.addEventListener('click', (e) => {
  list1.appendChild(list2.lastChild);
  if (list2.children.length === 0) {
    e.currentTarget.disabled = true;
  }
  if (list1.children.length > 0) {
    button1.disabled = false;
  }
});

// Zadanie 8

const form = document.createElement('form');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
const input4 = document.createElement('input');
const submit = document.createElement('button');

input1.placeholder = 'tag';
form.appendChild(input1);

input2.placeholder = 'text';
form.appendChild(input2);

input3.placeholder = 'color';
form.appendChild(input3);

input4.placeholder = 'quantity';
input4.type = 'number';
form.appendChild(input4);

submit.textContent = 'Create';
form.appendChild(submit);

document.getElementById('root').appendChild(form);

form.addEventListener('submit', createForm);

function createForm(e) {
  e.preventDefault();
  for (let i = 0; i < input4.value; i++) {
    const formElement = document.createElement(input1.value);
    formElement.textContent = input2.value;
    formElement.style.color = input3.value;
    formElement.style.display = 'block';
    form.after(formElement);
  }
}

// Zadanie 9
const arrHeaders = ['Name', 'Surname', 'Age', 'Childrens'];
const form = document.createElement('form');
const createButton = document.createElement('button');
const moreButton = document.createElement('button');
const deleteButton = document.createElement('button');

createButton.textContent = 'Create table';
moreButton.textContent = 'More';
deleteButton.textContent = 'Delete';

form.appendChild(createFields(arrHeaders));
form.appendChild(moreButton);
form.appendChild(createButton);

moreButton.addEventListener('click', () => {
  const addRows = document.querySelectorAll('.more-rows');
  const lastRow = addRows[addRows.length - 1];
  lastRow.after(createFields(arrHeaders));
});

form.addEventListener('submit', createTable);

function createFields(el) {
  let fieldsRow = document.createElement('div');
  fieldsRow.className = 'more-rows';
  el.forEach((value) => {
    const field = document.createElement('input');
    field.placeholder = value;
    fieldsRow.appendChild(field);
  });
  return fieldsRow;
}

function createTable(e) {
  e.preventDefault();

  const defaultTable = document.getElementById('def-table');

  if (defaultTable) {
    defaultTable.remove();
  }

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const thead = document.createElement('thead');
  const rows = document.querySelectorAll('.more-rows');

  arrHeaders.forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    thead.appendChild(th);
  });

  rows.forEach((row) => {
    const tr = document.createElement('tr');
    const children = Array.from(row.children);
    const values = children.map((child) => child.value);
    values.forEach((value) => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.id = 'def-table';
  table.appendChild(thead);
  table.appendChild(tbody);

  createButton.after(table);

  form.reset();
}
document.getElementById('root').appendChild(form);

// Zadanie 10
function bigString() {
  const creatorFields = document.querySelectorAll('.more-rows input');
  creatorFields.forEach((field) => {
    field.addEventListener('input', (event) => {
      const formattedText =
        field.value.charAt(0).toUpperCase() + field.value.slice(1);
      event.target.value = formattedText;
    });
  });
}
bigString();

// Zadanie 11
function verify(str) {
  const numbers = str.match(/\d/g);
  if (numbers) {
    let convertNumbersArr = numbers.map((e) => Number(e));
    let sum = convertNumbersArr.reduce((a, b) => a + b);
    let mul = convertNumbersArr.reduce((a, b) => a * b);
    console.log(sum);

    for (let i = 0; i < mul; i++) {
      let div = document.createElement('div');
      div.textContent = `Sum of numbers in string: ${sum}`;
      root.appendChild(div);
    }
  }
}
verify('a23');

// Zadanie 12
function checkAla(str) {
  const obj = {
    string: str,
    alaStr: function () {
      if (this.string.includes('Ala')) {
        this.string = str.replace('Ala', 'Ola');
        console.log(this.string);
      } else {
        let div = document.createElement('div');
        div.textContent = 'Słowo Ala nie występuje w tekście.';
        document.getElementById('root').appendChild(div);
      }
    },
  };
  obj.alaStr();
}
checkAla('Ala Makota a Kot ma Ale'); //Jeśli napiszemy "ala" nie zamieni


// Zadanie 13
const wordsArr = ['Epstein', 'Didnt', 'you', 'know', 'what!'];

function count(numbersArr) {
  const num = numbersArr.map((string) => string.length);
  return num;
}

function sumNumb(sumArr) {
  const numbers = count(sumArr);
  const sum = numbers.reduce((a, b) => a + b);
  return sum;
}

function avrNumb(avrArr) {
  const sum = sumNumber(avrArr);
  const num = count(avrArr);
  const avr = sum / num.length;
  return avr;
}
console.log(count(wordsArr));
console.log(`Sum of numbers in this string: ${sumNumb(wordsArr)}`);
console.log(`Average of numbers in this string: ${avrNumb(wordsArr)}`);

//"Sum of numbers in this string: 24" - 7+5+3+4+5 = 24
//"Average of numbers in this string: 4.8" - 24:5 = 4.8

// Zadanie 14
let obj = {
  name: '',
  surname: '',
  age: '',
};

function modify(name, surname, age) {
  obj.name = 'Mateusz';
  obj.surname = 'Serafin';
  obj.age = 26;

  if (obj.name.length >= 5 || obj.surname.length >= 5) {
    const button = document.createElement('button');
    button.textContent = 'Default values';
    button.addEventListener('click', () => {
      obj.name = '';
      obj.surname = '';
      obj.age = '';
      console.log(obj);
    });
    document.getElementById('root').appendChild(button);
  }
}
modify();
console.log(obj); // wyskoczy button bo Mateusz || Serafin ≥ 5


