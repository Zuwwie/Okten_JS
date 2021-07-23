// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
//     або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
console.log(document.getElementById(`content`).innerText)
// -- отримує текст з блоку з id "rules"
console.log(document.getElementById(`rules`).innerText)
// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById(`content`).innerText = `Lorem ipsum dolor sit amet, 
consectetur adipisicing elit. Autem dolorum eligendi id natus numquam quibusdam ratione 
recusandae tempora vel voluptatum?`
// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById(`rules`).innerText = `Lorem ipsum dolor sit amet.`
// -- змініть кожному елементу колір фону на червоний
document.getElementById(`rules`).style.background = `yellow`;
document.getElementById(`content`).style.background = `yellow`;
// -- змініть кожному елементу колір тексту на синій
document.getElementById(`rules`).style.color = `blue`;
document.getElementById(`content`).style.color = `blue`;
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById(`rules`).classList)
// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна
// вивдоить текст елементу, інша довільний ьексь
let clasListRules = document.getElementsByClassName(`fc_rules`)
console.log(clasListRules)
for (const list of clasListRules) {
    console.log(list)
    list.onclick = function () {
        console.log('Click');
        console.log(this.innerText)
    }
}
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

for (const ell of clasListRules) {
    ell.style.color = `red`
}
// - Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
//

let formIndex = document.forms.formX;

console.log(formIndex[0].value);
let aBtn = document.getElementById(`rePlace`);
aBtn.style = `display: block;
    margin-top: 10px;
    margin-left: 175px;
    text-decoration: none;
    width: 115px;
    height: 25px;
    background: #4E9CAF;
    padding: 10px;
    text-align: center;
    border-radius: 50px;
    color: white;
    font-weight: bold;
    line-height: 25px;`

aBtn.onclick = function (ev) {
    localStorage.setItem('mail', `${formIndex[0].value}`);
    localStorage.setItem('pass', `${formIndex[1].value}`);
}

console.log();


// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


let formShopI = document.forms.formShop;

console.log(formShopI);


let arrProduct = [localStorage.getItem(`products`)];
console.log(arrProduct);

formShopI.submit.onclick = function (ev) {
    ev.preventDefault();
    if (arrProduct[0] === null) {
        arrProduct = []
    } else {
        arrProduct = JSON.parse(arrProduct)
    }

    let objProduct = {
        name: formShopI.name.value,
        quantity: formShopI.quantity.value,
        price: formShopI.price.value,
        img: formShopI.imgSrc.value,
    }
    console.log(objProduct)
    arrProduct.push(objProduct)
    console.log(arrProduct)
    arrProduct = JSON.stringify(arrProduct)
    localStorage.setItem(`products`, arrProduct)
}


// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let adress = [];
for (const user of users) {
    console.log(user)
    adress.push(user.address)
}
console.log(adress)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
// let div = document.createElement(`div`)
// div.classList += `new`;
// console.log(div)
// for (const user of users) {
//     console.log(user)
//     let divUser = document.createElement(`div`)
//
//     for (const userKey in user) {
//         if (typeof (user[userKey]) === `object`) {
//             for (const userKeyKey in user[userKey]) {
//                 console.log(userKeyKey)
//                 divUser.innerText += `${userKeyKey} - ${user[userKey][userKeyKey]};  `
//             }
//         } else {
//             divUser.innerText += `${userKey} - ${user[userKey]}; `
//         }
//     }
//     div.appendChild(divUser)
//
// }
// console.log(div)
// document.body.appendChild(div)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// let div = document.createElement(`div`)
// div.classList += `new`;
// console.log(div)
// for (const user of users) {
//     console.log(user)
//     let divUser = document.createElement(`div`)
//
//     for (const userKey in user) {
//         let userContent = document.createElement(`div`)
//         if (typeof (user[userKey]) === `object`) {
//             for (const userKeyKey in user[userKey]) {
//                 console.log(userKeyKey)
//                 userContent.innerText += `${userKeyKey} - ${user[userKey][userKeyKey]};  `
//             }
//         } else {
//             userContent.innerText += `${userKey} - ${user[userKey]}; `
//         }
//         divUser.appendChild(userContent)
//     }
//     div.appendChild(divUser)
//
// }
// console.log(div)
// document.body.appendChild(div)


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement
// , розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком,
// з блоками для кожної властивості
// let div = document.createElement(`div`)
// div.classList += `new`;
// console.log(div)
// for (const user of users) {
//     console.log(user)
//     let divUser = document.createElement(`div`)
//
//     for (const userKey in user) {
//         let userContent = document.createElement(`div`)
//         if (typeof (user[userKey]) === `object`) {
//             for (const userKeyKey in user[userKey]) {
//                 let userAdress = document.createElement(`div`)
//                 console.log(userKeyKey)
//                 userAdress.innerText += `${userKeyKey} - ${user[userKey][userKeyKey]};  `
//                 userContent.appendChild(userAdress)
//
//             }
//         } else {
//             userContent.innerText += `${userKey} - ${user[userKey]}; `
//         }
//         divUser.appendChild(userContent)
//     }
//     div.appendChild(divUser)
//
// }
// console.log(div)
// document.body.appendChild(div)

//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту
// яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let div = document.createElement(`div`)
div.id = `wrap`
div.innerHTML = `<h1>Правила бойцовского клуба
</h1>`
for (const rule of rules) {
    let divInner = document.createElement(`div`)
    let h2 = document.createElement(`h2`)
    console.log(rule)
    h2.innerText = rule.title
    let p = document.createElement(`p`)
    p.innerText = rule.body
    divInner.appendChild(h2)
    divInner.appendChild(p)
    div.appendChild(divInner)
}
document.body.appendChild(div)
