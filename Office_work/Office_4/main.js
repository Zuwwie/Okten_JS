//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let Max = new Client(1, `Max`, `loool`, `@gmail.com`, `0934858899`, [1, 2, 3, 4])
let Orest = new Client(2, `Orest`, `loool`, `@gmail.com`, `0934858899`, [1, 2, 3, 4, 5])
let Vika = new Client(3, `Vika`, `loool`, `@gmail.com`, `0934858899`, [1, 2])
let Nazik = new Client(4, `Nazik`, `loool`, `@gmail.com`, `0934858899`, [1, 2, 3])
let Taras = new Client(5, `Taras`, `loool`, `@gmail.com`, `0934858899`, [1, 2, 3, 4])
let Loler = new Client(6, `Loler`, `loool`, `@gmail.com`, `0934858899`, [1, 2, 3, 4, 5, 6, 7])
let Vadim = new Client(7, `Vadim`, `loool`, `@gmail.com`, `0934858899`, [1, 2, 3])
let Ann = new Client(8, `Ann`, `loool`, `@gmail.com`, `0934858899`, [1])
let Vova = new Client(9, `Vova`, `loool`, `@gmail.com`, `0934858899`, [])
let Liza = new Client(10, `Liza`, `loool`, `@gmail.com`, `0934858899`, [1, 2])
// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [Max, Orest, Vika, Nazik, Taras, Loler, Vadim, Ann, Vova, Liza]
console.log(clients)
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a, b) => (a.order.length - b.order.length)))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car(model, developer, year, maxSpeed, vEngine) {
    this.model = model;
    this.developer = developer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.vEngine = vEngine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`Model = ${this.model}`)
        console.log(`Developer = ${this.developer}`)
        console.log(`Year = ${this.year}`)
        console.log(`Max Speed = ${this.maxSpeed}`)
        console.log(`V of Engine = ${this.vEngine}`)

    }
    this.increaseMaxSpeed = function (newMaxSpeed) {
        this.maxSpeed += newMaxSpeed;
        console.log(`New ${this.maxSpeed} на годину`)
    }
    this.changeYear = function (newYear) {
        this.year = newYear;
        console.log(`New ${this.year}`)
    }
    this.addDriver = function (obj) {
        this.driver = obj
    }

}

let Tesla = new Car(3, `Tesla`, 2020, 320, `ZeroEmision`)

Tesla.drive()
Tesla.info()
Tesla.increaseMaxSpeed(20)
Tesla.changeYear(2021)
Tesla.addDriver({name: `Nazik`, year: 20})

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Carx {
    constructor(model, developer, year, maxSpeed, vEngine) {
        this.model = model;
        this.developer = developer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.vEngine = vEngine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(`Model = ${this.model}`)
        console.log(`Developer = ${this.developer}`)
        console.log(`Year = ${this.year}`)
        console.log(`Max Speed = ${this.maxSpeed}`)
        console.log(`V of Engine = ${this.vEngine}`)

    }

    increaseMaxSpeed(newMaxSpeed) {
        this.maxSpeed += newMaxSpeed;
        console.log(`New ${this.maxSpeed} на годину`)
    }

    changeYear(newYear) {
        this.year = newYear;
        console.log(`New ${this.year}`)
    }

    addDriver(obj) {
        this.driver = obj
    }
}

let Teslax = new Carx(`X`, `TeslaX`, 2017, 300, `ZeroEmision`)

Tesla.drive()
Tesla.info()
Tesla.increaseMaxSpeed(44)
Tesla.changeYear(2018)
Tesla.addDriver({name: `Vova`, year: 40})

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок ,
// покласти їх в масив.
class Popeluska {
    constructor(name, year, rozmirLeg) {
        this.name = name;
        this.year = year;
        this.rozmirLeg = rozmirLeg;
    }
}

let popeluskas = [
    new Popeluska(`Olena`, 20, 1),
    new Popeluska(`Ann`, 19, 2),
    new Popeluska(`Vika`, 18, 3),
    new Popeluska(`Nastya`, 17, 4),
    new Popeluska(`Julia`, 16, 5),
    new Popeluska(`123`, 15, 6),
    new Popeluska(`1234`, 14, 7),
    new Popeluska(`12345`, 13, 8),
    new Popeluska(`123456`, 12, 9),
    new Popeluska(`1234567`, 11, 10),
]

console.log(popeluskas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, year, rozmirLeg) {
        this.name = name;
        this.year = year;
        this.rozmirLeg = rozmirLeg;
    }
}

let Oleg = new Prince(`Oleg`, 22, 3);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function search(prince, arrPopel) {
    for (let i = 0; i < arrPopel.length; i++) {
        (prince.rozmirLeg === arrPopel[i].rozmirLeg) ? console.log(`Ваша попелюшка  ${arrPopel[i].name} і їй ${arrPopel[i].year}`):``;
    }
}

search(Oleg, popeluskas)
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let Orest1 = new Prince(`Orest`,30,5);


let find = popeluskas.find((a)=>(a.rozmirLeg === Orest1.rozmirLeg))
console.log(find)
