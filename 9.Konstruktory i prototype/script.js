// Zadanie 1
function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;

    this.changeAge = (age) => (this.age = age);
    this.changeCity = (city) => (this.city = city);
}



const People = [
    new Person('Mateusz', 'Serafin', 25, 'Poland', 'Cracov', 'Polish'),
    new Person('Tomasz', 'Kwapik', 16, 'Poland', 'Warsaw', 'Polish'),
    new Person('Agnieszka', 'Agust', 25, 'Poland', 'Poznan', 'German'),
    new Person('Magda', 'Kwapik', 16, 'Poland', 'Warsaw', 'Polish'),
    new Person('Agnieszka', 'Agust', 25, 'Poland', 'Poznan', 'German'),   
];

console.log(People);

People[0].changeAge(30);
People[2].changeCity('Poznan');

console.log(People);

// Zadanie 2

class Calculator{
    constructor() {
        this.history = [];
    }
    
    add(x, y) {
        const result = x + y;
        this.history.push({ operation: 'add', x, y, result });
        return result;
    }
    
    subtract(x, y) {
        const result = x - y;
        this.history.push({ operation: 'subtract', x, y, result });
        return result;
    }
        multiply(x, y) {
        const result = x * y;
        this.history.push({ operation: 'multiply', x, y, result });
        return result;
    }
    
    divide(x, y) {
        const result = x / y;
        this.history.push({ operation: 'divide', x, y, result });
        return result;
    }
    
    showHistory() {
        return this.history.forEach((operation) => console.log(operation));
    }
    
    clearHistory() {
        this.history = [];
    }
}
console.log("Kalkulator 1")
const calculator1 = new Calculator();
calculator1.add(6, 9);
calculator1.divide(12601, 2);
calculator1.showHistory();
console.log("Kalkulator 2")
const calculator2 = new Calculator();
calculator2.subtract(5, 5);
calculator2.multiply(6, 6);
calculator2.showHistory();
calculator2.clearHistory();
calculator2.showHistory();
console.log(calculator2.history);

// Zadanie 3
function Game() {
	this.changeNumber = function () {
		Game.prototype.interval = setInterval(() => {
			Game.prototype.number = Math.round(Math.random() * 10);
			console.log(Game.prototype.number);
		}, 1000);
	};
	this.checkNumber = function () {
		Game.prototype.check = setInterval(() => {
			if (Game.prototype.number > 5) {
				console.log('End');
				clearInterval(Game.prototype.interval);
				clearInterval(Game.prototype.check);
			}
		}, 1000);
	};
}
const game1 = new Game();
const game2 = new Game();
game1.changeNumber();
game2.checkNumber();

