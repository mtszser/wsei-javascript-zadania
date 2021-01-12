// Zadanie 1
const list = document.querySelectorAll('.list');

// Zadanie 2

function showt(element) {
    const tags = document.querySelectorAll(element);
    console.log(...tags);
  }
  showt('input');

  // Zadanie 3

  const elem = document.querySelector('#list');

  // Zadanie 4
  function showElem(e) {
    const elements = document.querySelectorAll(e);
    console.log(elements);
  }
  showElem(['li', 'ul', 'span', 'div.list span', 'div#spans span']);

