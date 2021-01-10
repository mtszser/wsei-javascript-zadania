//Zad 1

const person = {
	name: 'Mateusz',
	lastName: 'Serafin',
	age: 25,
	city: 'Cracow',
	printInfo() {
		console.log(this.name, this.lastName, this.age, this.city);
	},
	addAge() {
		this.age++;
	},
};

const person2 = {
	name: 'Adam ',
	lastName: 'Sporek',
	age: 21,
	city: 'Cracow',
	printInfo() {
		console.log(this.name, this.lastName, this.age, this.city);
	},
	addAge() {
		this.age++;
	},
};

person.printInfo();
person.addAge();
person2.addAge();
person.printInfo();
person.addAge();
person.addAge();
person2.addAge();

console.log(person.age, person2.age);

// Zadanie 2
person.favouriteMeal = [];
person2.favouriteMeal = [];
person.printFavouriteMeal = function () {
	console.log(this.favouriteMeal);
};
person2.printFavouriteMeal = function () {
	console.log(this.favouriteMeal);
};

person.addMeal = function (meal) {
	this.favouriteMeal.push(meal);
};

person2.addMeal = function (meal) {
	this.favouriteMeal.push(meal);
};

person.addMeal('chateaubriand with mushroom sauce');
person.showFavouriteMeal();
person2.showFavouriteMeal();

// Zadanie 3

const calculator = {
	a: 6,
	b: 9,
	saveAB(a, b) {
		this.a = a;
		this.b = b;
	},
	sum() {
		console.log(this.a + this.b);
		return this.a + this.b;
	},
	subtract() {
		console.log(this.a - this.b);
		return this.a - this.b;
	},
	multiply() {
		console.log(this.a * this.b);
		return this.a * this.b;
	},
	divide() {
		if (this.b === 0) {
			console.log('You cant divide by 0 my friend ( ͠° ͟ʖ ͡°)');
			return;
		}
		console.log(this.a / this.b);
		return this.a / this.b;
	},
};

calculator.saveAB(6, 9);
calculator.sum();
calculator.subtract();
calculator.divide();
calculator.multiply();
calculator.saveAB(9, 6);
calculator.divide();

// Zadanie 4

let ladder = {
    currentStep: 0,
    moveUp: function() {
        this.currentStep++;
    },
    
    moveDown: function() {
        if (this.currentStep <= 0) {
            this.currentStep = 0;
            console.info("Deep bottom my master");
            
            return;
        }
        this.currentStep--;
    },

    writeCurrentStep: function() {
        console.log(`Current Step: ${this.currentStep}`);
    }
};