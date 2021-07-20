// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = function (numbers) {
    let arr = [];
    for (let i = 0; i < numbers; i++) {
        let z = Math.floor(Math.random() * 100);
        arr.push(z)
    }
    console.log(arr)
    return arr
}
random(1);
// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
let random2 = function (numbers, min, max) {
    let arr = [];
    for (let i = 0; i < numbers; i++) {
        let z = Math.floor(Math.random() * (max - ++min)) + min;
        arr.push(z)
    }
    return console.log(arr)
}
random2(10, 10, 20);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати
// його за допомоги sort
let x = random(10).sort((a, b) => (a - b));
console.log(x)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

let x2 = random(20).filter((a) => (!(a % 2)))
console.log(x2)
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції)
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

let x3 = random(20).map((value) => (value + ``))
console.log(x3)

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
class User {
    constructor(id, name, surname, email, phone) {
        this.name = name;
        this.id = id;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

const Nazik = new User((random(1).join()), `Nazik`, `Hav`, `nasja@`, `0934777777`);
console.log(Nazik);
// створити пустий масив, наповнити його 10 об'єктами new User(....)
const Orest = new User((random(1).join()), `Orest`, `Hav`, `nasja@`, `0934777777`);
const Vika = new User((random(1).join()), `Vika`, `Hav`, `nasja@`, `0934777777`);
const Liza = new User((random(1).join()), `Liza`, `Hav`, `nasja@`, `0934777777`);
const Anna = new User((random(1).join()), `Anna`, `Hav`, `nasja@`, `0934777777`);
const Monik = new User((random(1).join()), `Monik`, `Hav`, `nasja@`, `0934777777`);
const Lolik = new User((random(1).join()), `Lolik`, `Hav`, `nasja@`, `0934777777`);
const Alina = new User((random(1).join()), `Alina`, `Hav`, `nasja@`, `0934777777`);
const Zhenya = new User((random(1).join()), `Zhenya`, `Hav`, `nasja@`, `0934777777`);
const Bozhena = new User((random(1).join()), `Bozhena`, `Hav`, `nasja@`, `0934777777`);

let Users = [Nazik, Vika, Liza, Anna, Monik, Lolik, Alina, Zhenya, Bozhena]
console.log(Users)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та
// Відсортувати його по id. по зростанню (sort)

let newUsers = Users.filter((a) => (!(a.id % 2))).sort((a, b) => (a.id - b.id))
console.log(newUsers)


// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//           geo: {
//                   lat: '-37.3159',
//                   lng: '81.1496'
//                  }
//              },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class Contact {

    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;

        this.address =
            {
                street,
                suite,
                city,
                zipcode,
            }
            this.address.geo = {
                lat,
                lng
            }
        this.phone = phone
        this.website = website
        this.company =
            {
                name,
                catchPhrase,
                bs,
            }
    }
}

const bio = new Contact(10, `Nazik`, `hav`, `Lodby@`, `vrubl`, `10`, `Lviv`,
    92998, 37, 22, 7709999999,`Romaguera.com`,`Romaguera`,
    `Multi-layered client-server neural-net`,`harness real-time e-markets`)
console.log(bio)
