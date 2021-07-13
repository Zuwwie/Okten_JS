let str = `Привіт`;
let num = 123;
let flag = true;

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);

let a1, a2, a3, a4, a5;
a1 = 20 * 2 - 3;
a2 = 10 / 2 + 7;
a3 = 12 * 3 + 10;
a4 = (50 - 20) * 3;
a5 = (180 - 6) / 2;

let a6, a7, a8, a9, a10;
a6 = 5 % 3;
a7 = 3 % 5;
console.log(a7)
a8 = 5 + `3`;
a9 = `5` - 3;
a10 = 75 + `kg`;

let height = 23;
let width = 10;
let s = height * width;
console.log(s)

// Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

let heightC = 10;
let dC = 4;
let v = Math.pow((dC / 2), 2) * Math.PI * heightC;
console.log(v)

// У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).


let n = 3;
let m = 4;

let res = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(res);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// alert("Havronskyi \nNazarii \nAndriyovich ");

// . Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

let str1, str2, str3, concatenation;

str1 = `Кто `;
str2 = `ти `;
str3 = `такой`;

concatenation = str1 + str2 + str3;
console.log(concatenation);
// document.write(concatenation);

// Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // 205
// document.write(str - a + "<br/>"); //15
// document.write(str * "2" + "<br/>"); // 40
// document.write(str / 2 + "<br/>"); // 10

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let x = +prompt(`First num`);
// let y = +prompt(`Second num`);
//
// alert(`Your result ${x + y}`);


// 4. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert


// let name = prompt(`Введіть ім'я`);
// let fullName = prompt(`Введіть фалімію`);
// let age = prompt(`Введіть ваш вік`);
//
// alert(`Доброго вечера ${name} ${fullName} , мои поздравления что вам ${age}`);

// три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = prompt(`Enter y num`);
// let b = prompt(`Enter y num`);
// let c = prompt(`Enter y num`);
//
// if (a > b && a > c) {
//     if (b > c) {
//         console.log(`${a}>${b}>${c}`);
//     } else {
//         console.log(`${a}>${c}>${b}`);
//     }
// } else if (b > a && b > c) {
//     if (a > c) {
//         console.log(`${b}>${a}>${c}`);
//     } else {
//         console.log(`${b}>${c}>${a}`);
//     }
// } else {
//     if (a > b) {
//         console.log(`${c}>${a}>${b}`);
//     } else {
//         console.log(`${c}>${b}>${a}`);
//     }
// }


// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let light = prompt(`Enter light color`);
// if (light === `G`) {
//     alert(`go`);
// } else if (light === `Y`) {
//     alert(`wait`)
// } else if (light === `R` ) {
//     alert(`STOP`);
// } else {
//     alert(`Do what you want`);
// }

// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
// let light = prompt(`Enter light color`);
// let isRoadClear = prompt(`Car go?`)
// if (light === `g`) {
//     if (isRoadClear === `no`) {
//         alert(`go`);
//     } else  {
//         alert(`подожди пока нарушители проедут`)
//     }
// } else if (light === `y`) {
//     if (isRoadClear === `no`) {
//         alert(`wait`)
//     }
//     else  {
//         alert(`стой все рано`)
//     }
// } else if (light === `r`) {
//     if (isRoadClear === `no`) {
//         alert(`STOP`);
//
//     } else { alert(`стой все рано`)}
// } else {
//     alert(`Do what you want`);
// }

/*
            Використовуючи данні з масиву, за допомоги document.write
            побудувати структуру по шаблону template1.1
            */

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul><li>${listOfItems[0]}</li><li>${listOfItems[1]}</li></ul>`);


document.write(`<ul>`)
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`)
}
document.write(`</ul>`)


// /*
// 			Використовуючи данні з масиву, за допомоги document.write
// 			побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
// 			Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
// 		    Шаблон застосувати до кожного об'єкта в масиві
// 			*/
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

//
// <div>
//     <h2>NAME SURNAME. age is - AGE</h2>
//     <p>INFO</p>
//     <img src="PHOTO" alt="">
// </div>

for (let i = 0; i < simpsons.length; i++) {
    document.write(`<div>`)
    document.write(`<h2 class="center">${simpsons[i].surname} ${simpsons[i].name}. ${simpsons[i].age}  - AGE</h2>`);
    document.write(`<p>${simpsons[i].info} </p>`);
    document.write(`<img src="${simpsons[i].photo}" alt="photo simpsons">`)
    document.write(`</div>`)
}


