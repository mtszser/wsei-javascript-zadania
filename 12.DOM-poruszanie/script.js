// Zadanie 1
console.log(document.querySelector('#buz').parentElement); //buz parent
console.log(document.querySelector('#buz').previousElementSibling); 
console.log(document.querySelector('#foo').children); 
console.log(document.querySelector('#foo').parentElement); // foo parent
console.log(document.querySelector('#foo').firstElementChild); 
console.log(document.querySelector('#buz'));

// Zadanie 2

function clickbt(e) {
  const bt = document.querySelector(e);
  bt.addEventListener('click', (i) => {
    console.log(i.target.textContent);
  });
}
clickbt('#ex2');

//Zadanie 3
function buttons(e) {
    const btn = document.querySelectorAll(e);
    btn.forEach((element) => {
      element.addEventListener('click', (i) => {
        let item = i.target.nextElementSibling.style;
        if (item.display === 'none') {
          item.display = 'block';
        } else {
          item.display = 'none';
        }
        let parent = i.target.parentElement.style; // Zadanie 4
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        parent.backgroundColor = randomColor; 
      });
    });
  }
  buttons('#ex3 button');

  // Zadanie 5
  const rectangle = document.querySelectorAll('#ex5 div');
  const list = document.querySelectorAll(['#ex5 li']);
  
  rectangle.forEach((element) => {
    element.addEventListener('mouseover', (e) => {
     // Pierwszy element listy
        list[0].style.backgroundColor = e.target.style.backgroundColor;
      // Ostatni element listy
       list[list.length - 1].style.backgroundColor =
         e.target.style.backgroundColor;
      // Parzyste
       for (let i = 0; i < list.length; i++) {
         if (i % 2 !== 0) {
           list[i].style.backgroundColor = e.target.style.backgroundColor;
         }
       }
      // Wszystkie elem
       list.forEach((x) => {
         x.style.backgroundColor = e.target.style.backgroundColor;
       });
      // Lista
        e.target.parentElement.lastElementChild.style.backgroundColor =
        e.target.style.backgroundColor;
    });
  });

  // Zadanie 6

  const ex6 = document.querySelector('#ex6');

  const child = ex6.firstElementChild.firstElementChild.firstElementChild; // 3x first child

  const cpccp = ex6.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement; // child parent chil chil parent

  const example3 = ex6.parentElement.firstElementChild.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild; //cpcpcpcpcpc
    

