// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById(`main_header`).innerText = `Okten JS`
// b) робить шириниу елементу ul 400px
let ulElement = document.getElementsByTagName(`ul`)
for (const ul of ulElement) {
    ul.style = `width: 400px`
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkLists = document.getElementsByClassName(`linkList`);
for (const li of linkLists) {
    li.style = `width: 50%;
                color: red;`
}
// d) отримує текст який зберігається в елементі з класом listElement2
let someTXT = document.getElementsByClassName(`listElement2`)[0].innerText;
console.log(someTXT)
// e) отримує всі елементи li та змінює ім колір фону на сірий
let lis = document.getElementsByTagName(`li`)
for (const li of lis) {
    li.style = `background: grey`
}
// f) отримує всі елементи 'a' та додає їм клас anchor
for (const li of lis) {
    li.classList +=  ` anchor`
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір
// тексту на 40 пікселів
for (const li of lis) {
    li.innerText === `link3` ? li.style = `font-size: 40px`:``;
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const li of lis) {
    li.classList +=  `element_${li.innerText}`;
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let sub = document.getElementsByClassName(`sub-header`)
let color = prompt(`COLOR`)
for (const ell of sub) {
    console.log(ell)

    ell.style = `background: ${color}`
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment
// Колір отримати з prompt()
let colorSecond = prompt(`COLOR for second`)
for (const ell of sub) {
    console.log(ell)
    ell.innerText === `content 2 segment` ? ell.style = `background: ${colorSecond}`:``;
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
document.getElementsByClassName(`content_1`)[0].innerText = prompt(`Some TXT`)
// l) отримати елементи p та змінити їм padding на 20px
let ps = document.getElementsByTagName(`p`)
for (const p of ps) {
    p.style = `padding: 20px`
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

let text2 = document.getElementsByClassName(`text2`)

for (const ell of text2) {
    ell.innerText = `OWU JS`
}