// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//


let arr1 = [0, 1, 2, 3, 4];
let arr2 = [`one`, `too`, `foo`, `mag`, `invisibility`];
let arr3 = [1, `wow`, true, false, `lool`];

console.log(arr1);
console.log(arr2);
console.log(arr3);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr4 = [];
arr4[5] = `lolllll`;
arr4[12] = true;
console.log(arr4);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


for (let i = 0; i < 10; i++) {
    document.write(`<div class=""> alala`);
    document.write(`</div>`);
}

for (let i = 0; i < 10; i++) {
    document.write(`<div class=""> Number ${i}`);
    document.write(`</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let z = 0;
while (z < 20) {
    document.write(`<h1 class=""> look me`);
    document.write(`</h1>`);
    z++;
}
z = 0;
while (z < 20) {
    document.write(`<h1 class=""> look me, I'm number ${z + 1}`)
    document.write(` < /h1>`);
    z++;
}
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr6 = [1, `wow`, true, false, `lool`];

for (const number of arr5) {
    console.log(number)
}
for (const arr6Element of arr6) {
    console.log(arr6Element)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та t
// ypeof вивести тільки булеві елементи

let arr7 = [`one`, true, false, `too`, `foo`, `mag`, `invisibility`, 1, 2];

// for (const arr7Element of arr7) {
//     console.log(arr7Element)
// }

for (const arr7Element of arr7) {
    if (typeof arr7Element === `boolean`) {
        console.log(arr7Element)

    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементиz

for (const arr7Element of arr7) {
    if (typeof arr7Element === `number`) {
        console.log(arr7Element)

    }
}
for (const arr7Element of arr7) {
    if (typeof arr7Element === `string`) {
        console.log(arr7Element)

    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

let arr8 = [`one`, true, false, `too`, `foo`, `mag`, `invisibility`, 1, 2, `look`];

for (let i = 0; i < arr8.length; i++) {
    console.log(arr8[i])
}

for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(`<div class=""> ${i}`);
    document.write(`</div>`);
}

for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(`<div class=""> ${i}`);
    document.write(`</div>`);
}
for (let i = 0; i < 100; i += 2) {
    console.log(i)
    document.write(`<div class=""> ${i}`);
    document.write(`</div>`);
}
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
        document.write(`<div class=""> ${i}`);
        document.write(`</div>`);
    }
}

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
        document.write(`<div class=""> ${i}`);
        document.write(`</div>`);
    }
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }

let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithCities[i] = Object.assign(usersWithId[i])
            usersWithCities[i].address = Object.assign(citiesWithId[j])
        }
    }
}
console.log(usersWithCities);


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c'];
// for (let i = 1; i < 4; i++) {
//     arr.push(`${i}`)
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);
// // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// arr = [1, 2, 3];
// for (let i = 1; i < 4; i++) {
//     arr.push(i);
// }
// console.log(arr);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// arr = [1, 2, 3]
// arr.unshift(4, 5, 6)
// console.log(arr);
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// console.log([1, 2, 3, 4, 5].slice(3))
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// console.log([1, 2, 3, 4, 5].slice(0, 2))
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
// arr = [1, 2, 3, 4, 5]
// arr.slice(0, 3,).push('a', 'b', 'c');
// console.log(arr);
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (let i = 0; i < arr5.length; i++) {
//     let arrr = arr5[i]
//     if (arrr % 2 === 0) {
//         console.log(arrr)
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.
// arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let arrNew = []
// for (let i = 0; i < arr5.length; i++) {
//     arrNew[i] = arr5[i];
// }
// console.log(arrNew);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let word = ``;
// arr = ['a', 'b', 'c'];
// for (let i = 0; i < arr.length; i++) {
//     word += arr[i];
// }
// console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// word = ``;
// arr = ['a', 'b', 'c'];
// let i = 0;
// while (i < arr.length) {
//     word += arr[i];
//     i++
// }
// console.log(word)
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// word = ``;
// arr = ['a', 'b', 'c'];
// for (const string of arr) {
//     word += string;
// }
// console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// word = ``;
// arr = ['a', 'b', 'c'];
// for (const arrKey in arr) {
//     word += arr[arrKey];
// }
// console.log(word);


// - Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// function rename(string) {
//     let word = ``
//     // return console.log(string.replace(/\s+/g, ' ').trim());
//     string = string.split(` `);
//     console.log(string)
//     for (const stringElement of string) {
//         if (stringElement !== ``){
//             word = word + ` ` + stringElement
//         }
//     }
//     return console.log(word)
// }
// rename(n1);
// rename(n2);
// rename(n3);
//
