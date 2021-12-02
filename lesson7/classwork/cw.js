// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, creator, year, maxspeed, volume) {
    this.model = model;
    this.creator = creator;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    this.info = function () {
        for (const item in this) {
            if (typeof this[item] !== 'function') {
                console.log(`${item}-${this[item]}`)
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = new Car('Suzuki', 'Japan', 2013, 150, 10);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(20);
car1.changeYear(1993);
car1.addDriver('Tolya');
console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, creator, year, maxspeed, volume) {
        this.model = model;
        this.creator = creator;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }

    info() {
        for (const item in this) {
            if (typeof this[item] !== 'function') {
                console.log(`${item}-${this[item]}`)
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }

}

let car2 = new Cars('Suzuki', 'Japan', 2013, 150, 10);
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(30);
car2.changeYear(1995);
car2.addDriver('Vasya');
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function Cinderella(name, age, footsize) {
    this.name = name;
    this.age = age;
    this.footsize = footsize;
}

let Cinderellas = [
    new Cinderella('vika', 16, 37),
    new Cinderella('katya', 19, 36),
    new Cinderella('Violetta', 18, 35),
    new Cinderella('lena', 25, 41),
    new Cinderella('alla', 20, 39),
    new Cinderella('natasha', 16, 37),
    new Cinderella('sasha', 21, 40),
    new Cinderella('mira', 19, 39),
    new Cinderella('kira', 19, 38),
    new Cinderella('nina', 17, 41)];
console.log(Cinderellas);

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Andrey', 21, 35);
console.log(prince);

for (const cind of Cinderellas) {
    if (cind.footsize === prince.shoe) {
        console.log(`Prince ${prince.name} it's your Cinderella ${cind.name}`);
    }
}

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find = Cinderellas.find(cind => cind.footsize === prince.shoe)
console.log(find);
