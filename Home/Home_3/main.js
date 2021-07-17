// - створити функцію яка обчислює та повертає площу прямокутника висотою
function sqr(a, b) {
    return a * b;
}

console.log(sqr(5, 2));

// - створити функцію яка обчислює та повертає площу кола
function circleSq(radius) {
    return radius * radius * Math.PI;
}

console.log(circleSq(2));

// - створити функцію яка обчислює та повертає площу циліндру
function cylinderSq(radius, height) {
    return 2 * Math.PI * radius * (radius * height);
}


console.log(cylinderSq(2, 5));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

function minMax(...arg) {
    console.log(arg)
    let min = arg[0], max = arg[0];
    for (const argElement of arg) {
        if (argElement > max) {
            max = argElement;
        }
        if (argElement < min) {
            min = argElement;
        }
    }
    console.log(`max: ${max}`)
    return (min)

}

let min = minMax(12, 14, 4, 11, 10, 1, 6);
console.log(`min:` + min)

// - створити функцію яка при створює блок з текстом. Текст задати через аргумент
function div(someText) {
    document.write(`<div class=""> ${someText}`);
    document.write(`</div>`);
}

div(`123`)

// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulLi(text) {
    document.write(`<ul class="">`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

ulLi(`wow`)
// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulLiNum(text, numberOfLi) {
    document.write(`<ul class="">`);
    for (let i = 0; i < numberOfLi; i++) {
        document.write(`<li> ${text} - ${i} </li>`);
    }
    document.write(`</ul>`);
}

ulLiNum(`wow`, 10)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [123, `wow`, true, `loool`, 18, false, `Petro`, `12`, `someTXT`, 22];


function someDo(arr) {
    document.write(`<ul class="">`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li class="">${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}

someDo(arr);

// ---------------ДОП---------------
//
//     -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
function replace(arr, index) {
    let x = arr[index + 1];
    arr[index + 1] = arr[index];
    arr[index] = x;
    return arr;
}

console.log(replace([1, 2, 3, 4], 2))

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = '    Harry       Potter       '
let n2 = '    Ron       Whisley       '
let n3 = '    Hermione        Granger      '

function rename(string) {
    let word = ``
    // return console.log(string.replace(/\s+/g, ' ').trim());
    string = string.split(` `);
    console.log(string)
    for (const stringElement of string) {
        if (stringElement !== ``) {
            word = word + ` ` + stringElement
        }
    }
    return console.log(word)
}

rename(n1);
rename(n2);
rename(n3);


//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


function zeroDell(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(22)
        if (arr[i] === 0) {
            arr.splice(i,1);
            arr.push(0);
        }
    }
    console.log(arr);
    return arr;
}

let lll = zeroDell([1, 0, 6, 0, 3]);
console.log(lll);