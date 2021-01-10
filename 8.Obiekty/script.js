// Zadanie 1
let car = {
    name: 'Volkswagen',
    mode: 'Polo',
    horsePower: 60,
    age: 22,
    color: 'red'
}
console.log(car);

// Zadanie 2
let Jeep;
car.changeName = function (newName) {
    newName = car;
    // or
    this.name = newName;
    console.log(newName);
}
car.changeName(Jeep);
car.changeName('Jeep');

// Zadanie 3
let obj = {

    sumNumbers: function (tab) {
        this.sum = tab.reduce((a, b) => a + b);
        console.log(this.sum);
    }
}
obj.sumNumbers([2, 5, 3]);

// Zadanie 4
let car = {
    name: 'BMW',
    age: 12,
    horsePower: 350
}

for (const [key, value] of Object.entries(car)) {
    console.log(key + ': ' + value);
}

// Zadanie 5 
let car = {
    name: 'Mercedes',
    age: 10,
    engine: {
        horsePower: 190,
        milage: 11400
    }
}

console.log(car.engine);

// Zadanie 6
let car = {
    name: 'Mercedes',
    age: 10,
}

car.horsePower = 250;
car.sayHello = function () {
    console.log('Hello');
}

console.log(car);
car.sayHello();