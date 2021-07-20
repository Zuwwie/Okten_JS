// - створити функцію яка приймає масив та виводить його

function letGo(arr) {
    console.log(arr)
}

letGo([1, 2, 3, 4, 5]);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNum(a, b, c) {
    (a < b && a < c) ? console.log(a) : (b < a && b < c) ? console.log(b) : console.log(c);
}

minNum(1, 2, 5)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNum(a, b, c) {
    (a > b && a > c) ? console.log(a) : (b > a && b > c) ? console.log(b) : console.log(c);
}

maxNum(1, 2, 5)

// - створити функцію яка повертає найбільше число з масиву
function maxArr(arr) {
    return Math.max.apply(null, arr);
}

console.log(maxArr([1, 3, 6, 7]))

// - створити функцію яка повертає найменьше число з масиву
function minArr(arr) {
    return Math.max.apply(null, arr);
}

console.log(minArr([1, 3, 6, 7]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function addArr(arr) {
    let x = 0;
    for (const arrElement of arr) {
        x += arrElement
    }
    console.log(x)
    return x

}

addArr([10, 15, 10])

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function midleArr(arr) {
    let x = 0;
    for (const arrElement of arr) {
        x += arrElement;
    }
    x /= arr.length;
    console.log(x)
    return x
}

midleArr([10, 20])
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.

function random(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        let x = Math.round(Math.random() * 100);
        arr.push(x)
    }
    console.log(arr)
    return arr;
}

random(10)
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function objKey(arr) {
    let key = [];
    for (let i = 0; i < arr.length; i++) {
        for (const arrKey in arr[i]) {
            key.push(arrKey)
        }
    }
    console.log(key)
    return key
}

objKey([{name: 'Dima', age: 13}, {model: 'Camry'}])
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function objName(arr) {
    let name = [];
    for (const nameElement of arr) {
        for (const key in nameElement) {
            name.push(nameElement[key])
        }
    }
    console.log(name)
    return name
}

objName([{name: 'Dima', age: 13}, {model: 'Camry'}])