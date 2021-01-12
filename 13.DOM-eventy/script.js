// Zadanie 1
const btn = document.querySelector('#test-event');
// Kliknięcie
btn.addEventListener('click', (e) => {
  console.log(e);
});
// Ruch myszką
window.addEventListener('mousemove', (e) => {
  // console.log(e);
});
// Najechanie
btn.addEventListener('mousemove', (e) => {
  // console.log(e);
});
// Click
document.addEventListener('keydown', (e) => {
  // console.log(e);
});
// Scrollowanie
document.addEventListener('scroll', (e) => {
  // console.log(e);
});
// ChangeText
document.querySelector('#input-test').addEventListener('input', (e) => {
  // console.log(e);
});

// Zadanie 2
const button = document.querySelector('#ex2');

button.addEventListener('click', (e) => {
  button.nextElementSibling.textContent = e.target.getAttribute('data-text'); // "To jest tekst z buttona wpisany do spanaa"
});

// Zadanie 3
const ex3 = document.querySelector('#ex3');

ex3.addEventListener('mouseenter', () => {
  ex3.style.backgroundColor = 'blue'; // przy najechaniu zmienia na niebieski
});
ex3.addEventListener('mouseleave', () => {
  ex3.style.backgroundColor = 'red'; // przy "zjechaniu" zmienia na czerwony
});

// Zadanie 4

const input = document.querySelector('#input-test');
const alert = document.createElement('div');
alert.textContent = `You can't type a number`; // Wyświetlenie komunikatu

const validate = (e) => {
  if (e.target.value.match(/\d/g)) { // Idealne wykorzystanie /\d/g 
    input.parentElement.appendChild(alert);
  } else {
    alert.remove();
  }
};
input.addEventListener('input', validate);

// Zadanie 5
const buttonClick = document.querySelector('#ex5-button');
const span = document.querySelector('#ex5 span');

let i = 0;
buttonClick.addEventListener('click', (e) => {
  i++;
  if (i <= 10) {
    span.textContent = i;
  }
  buttonClick.removeEventListener('click', e);
});

// Zadanie 6
const background = document.querySelector('body');

window.addEventListener('scroll', () => {
  if (scrollY >= 200) {
    bg.style.backgroundColor = 'white';
  } else {
    bg.style.backgroundColor = 'red';
  }
});

// Zadanie 7
function calculator() {
    const calBtns = document.querySelectorAll('#calculator button');
    const input = document.querySelector('#calculator input');
    let equasion = '';
    function evalFunc(eq) {
      return eval(eq);
    }
    window.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        input.value = evalFunc(equasion);
      }
    });
  
    calBtns.forEach((el) =>
      el.addEventListener('click', () => {
        equasion += el.textContent;
      })
    );
  }
  
  calculator();