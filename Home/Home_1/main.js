// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a1 = `hello`;
// let a2 = `owu`;
// let a3 = `com`;
// let a4 = `ua`;
// let a5 = 1;
// let a6 = 10;
// let a7 = -999;
// let a8 = 123;
// let a9 = 3.14;
// let a10 = 2.7;
// let a11 = 16;
// let a12 = true;
// let a13 = false;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);
// console.log(a11);
// console.log(a12);
// console.log(a13);

// alert(a1);
// alert(a2);
// alert(a3);
// alert(a4);
// alert(a5);
// alert(a6);
// alert(a7);
// alert(a8);
// alert(a9);
// alert(a10);
// alert(a11);
// alert(a12);
// alert(a13);

// document.write(a1);
// document.write(a2);
// document.write(a3);
// document.write(a4);
// document.write(a5);
// document.write(a6);
// document.write(a7);
// document.write(a8);
// document.write(a9);
// document.write(a10);
// document.write(a11);
// document.write(a12);
// document.write(a13);

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// a1 = `random`;
// a2 = `lol`;
// a3 = `mda`;
// a4 = `12324`;
// a5 = 431;
// a6 = 34567;
// a7 = -6.7;
// a8 = -99999;
// a9 = 14.3;
// a10 = 4321;
// a11 = false;
// a12 = true;


// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);
// console.log(a11);
// console.log(a12);
// console.log(a13);

// alert(a1);
// alert(a2);
// alert(a3);
// alert(a4);
// alert(a5);
// alert(a6);
// alert(a7);
// alert(a8);
// alert(a9);
// alert(a10);
// alert(a11);
// alert(a12);
// alert(a13);

// document.write(a1);
// document.write(a2);
// document.write(a3);
// document.write(a4);
// document.write(a5);
// document.write(a6);
// document.write(a7);
// document.write(a8);
// document.write(a9);
// document.write(a10);
// document.write(a11);
// document.write(a12);
// document.write(a13);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

// let firstName, middleName, lastName;
// firstName = prompt(`Enter firstName`)
// middleName = prompt(`Enter middleName`)
// lastName = prompt(`Enter lastName`)
// let name = firstName+ ` ` + middleName + ` ` + lastName;
// console.log(name)


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let firstName, name, age;

firstName = prompt(`Enter firstName`);
name = prompt(`Enter name`);
age = prompt(`Enter age`);

alert(`Вітаю ${name} ${firstName}. Тобі ${age} років`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!

// 5 < 6 -> true
// 5 > 6 -> false
// 5 === 6 -> false
// 5 >= 6 -> false
// 10 === 10 -> true
// 10 >= 10 -> true
// 10 !== 10 -> false
// 10 > 10 -> false
// 10 < 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); // false
// console.log(34 > 33 && 23 < 90 ); //true
// console.log(99 > 100 && 45 > 12 ); //false
// console.log(132 > 100 || 45 < 12 ); // true
// console.log(111 > 11 || 45 < 111 ); // true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); //true
// console.log(!!'-1'); //true
// console.log(!!-1); //true
// console.log(!!'0'); //true
// console.log(!!'null'); //true
// console.log(!!'undefined'); //true
// console.log(!!(3/'owu'));  //false
// console.log((111 > 11 || 45 < 111) ||  !!'0');  //true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));  //true