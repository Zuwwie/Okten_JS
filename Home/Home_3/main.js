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
console.log(min)

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

