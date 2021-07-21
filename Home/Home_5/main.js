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

