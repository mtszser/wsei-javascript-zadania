//Zadanie 1
let num1 = 9;
let num2 = 5;

if (num1 > num2){
    console.log(num1); // wypisze 9, bo jest większa od 5,
}
else{
    console.log(num2); // gdy zmienie 1 zmienną na 4 to wypisze mi num2
}

//Zadanie 2
let num1 = 9;
let num2 = 5;
let num3 = 7;

if (num1 > num2 && num1 > num3){
    console.log(num1); // 9 jest największa więc ją wypisze
}
else if (num2 > num1 && num2 > num3){
    console.log(num2)
}
else {
    console.log(num3)
}

//Zadanie 3

for(let i=0; i<10; i++){
    console.log("Lubię JavaScript") // wypisze 10 razy, a co do tego czy lubię to tak :D
}

//Zadanie 4
let result = 0;

for(let i=0; i < 10; i++){ 
}
console.log(result); //45 jeśli dodać ma 1+2+3..

//Zadanie 5
var n = 5;
for(let i=0; i <=n; i++){
    if(i % 2 == 0) {
        console.log( i + " - parzysta");
    } else {
        console.log(i + " - nieparzysta");
    }
}

//Zadanie 6
for(let i=0; i<10; i++){
    for(let j=0; j<10;j++){
        console.log("i= " + i + ", j= " + j); // wypiszę i-0, j-0, i-0, j-1..
    }
}

//Zadanie 7
for(let i=0; i<100; i++){
    if (i % 3 === 0 & i % 5 === 0){
        console.log(`${i} FizzBuzz`) // jako 1, bo sprawdza 2 warunki.
    }
    else if (i % 3 === 0){
        console.log(`${i} Fizz`)
    } else if (i % 5 === 0){
        console.log(`${i} Buzz`)
    }    
}

//Zadanie 8
// A
let star = 5;
let result2 = '';

for(let i=1; i<=star; i++) {
    for(let j=0; j<i; j++) {
        result2 += "*";
    }
    console.log(result2);
    result2 = "";
}
// B
let star = ' *';

for (let m = 0; m < 5; m++) {
  var result = '';
  for (s = 0; s < 5 - m; s++) {
    result += ' ';
  }
  for (x = 0; x < m + 1; x++) {
    result += star;
  }
  console.log(result);
}
// C
for (let m = 0; m < 5; m++) {
    let result = '';
    for (s = 0; s < 5 - m; s++) {
      result += ' ';
    }
    for (x = 0; x < m + 1; x++) {
      result += star;
    }
    for (y = 1; y < m + 1; y++) {
      result += '*';
    }
    console.log(result);
  }
// D
let star = '*';

for (let m = 0; m < 5; m++) {
  let result = '';
  for (s = 0; s < m + 1; s++) {
    result += star;
  }
  let count = x + 1;
  for (i = 1; i > m - 3; i--) {
    result += count++;
  }
  console.log(result);
}
console.log('-----');

// E
let star = ' *';

for (let m = 0; m < 5; m++) {
  var result = '';
  for (s = 0; s < 5 - m; s++) {
    result += ' ';
  }
  for (x = 0; x < m + 1; x++) {
    result += star;
  }
  console.log(result);
}
for (v = 0; v < 3; v++) {
  console.log('     *');
}
