// zadanie 1

const tab = [12601, "Mateusz", "Serafin"];
console.log(tab);    


// Zadanie 2

const tab = [12601, "Mateusz", "Serafin", "ala", 69, 5, 3];
console.log(tab[0]);  //Mateusz
console.log(tab[6]);   //3

console.log(tab[tab.length - 1]); // ostatni element
        
for(let i=0;i<tab.length;i++) // wszystkie elementy
    {
        console.log(tab[i]);
    }
for(let i=0;i<tab.length;i+=2) // co drugi element
    {
        console.log(tab[i]);
    }

tab.forEach(el => {
    if(typeof(el) === 'string'){
        console.log(el); //Mateusz, Serafin, Ala
    }
});

tab.forEach(el => {
    if(typeof(el) === 'number'){
        console.log(el); //12601, 69, 5, 3
    }
});


// zadanie 3

const t2 = [1,2,6,0,1,5,1,1,8,5,6];
const sum = t2.reduce((acc, number) => (acc + number));
console.log(sum) // suma elementów
const dif = t2.reduce((acc, number) => (acc - number));
console.log(dif) // różnica
const avg = sum / t2.length;
console.log(avg); // średnia

t2.forEach((el) => {
	if (el % 2 === 0) {
		console.log(el); // el parzyste
	}
});

t2.forEach((el) => {
	if (el % 2 !== 0) {
		console.log(el); // nieparzyste
	}
});

const result = t2.sort((a,b) => a - b);
console.log('max:', result[result.length - 1]) // największa

t2.sort((a,b ) => b - a );
console.log('min', result[result.length - 1]) // najmniejsza

t2.reverse().forEach(el => console.log(el)) // tablica od tyłu

// zadanie 4

const t2 = [1, 2, 6, 0, 1, 45, 21];
const func = tab => tab.reduce((a,b)=>a+b);
console.log(func(t2));

// zadanie 5

const t2 = [1, 2, 6, 0, 1, 45, 31];
const func = tab => tab.reduce((a,b)=>a+b);
function A(tab){
    const sum = tab.reduce((a,b)=>a+b);
    const avg = sum / tab.length;
    const result = tab.map(el => console.log(el * avg))
}

A(t2)

// zadanie 6

const averageArrFunc1 = (arr = []) => {
    let counter = 0,
        value = 0;

    arr.forEach(el => {
        if (el % 2 === 0) {
            value += el;
            counter++;
        }
    });

    return Math.round(value / counter);
};

console.log(averageArrFunc1([1, 2, 6, 0, 1, 1, 2, 3, 4]));

// zadanie 7 
const sortArray = randomTab.sort((a, b) => a - b);
console.log(sortArray);

// zadanie 8

const arraySum1 = [6, 9, 6]
const arraySum2 = [9, 6, 9]

function sumArrayValue(array1, array2) {
    let newArray = [];
    array1.forEach((num1, i) => {
        newArray.push(num1 + array2[i]);
    });

    return newArray;
}

console.log(sumArrayValue(arraySum1, arraySum2));

//zadanie 10
const arrayNum = [-1, 2, -6, 0, -9];

function changeElement(array) {
    return array.map(i => i *= -1); 
}

console.log(changeElement(arrayNum));