// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
let favourites = [];
for (const user of users) {
    let div = document.createElement('div');
    let btn = document.createElement('button');
    btn.innerText = 'add';
    document.body.appendChild(div);
    div.appendChild(btn);
    btn.onclick = function () {
        if (favourites.length === 0) {
            favourites.push(user);
            let stringify = JSON.stringify(favourites);
            localStorage.setItem('favourites', stringify);
        } else {
            let data = localStorage.getItem('favourites');
            let favourites = JSON.parse(data);
            favourites.push(user);
            localStorage.setItem('favourites', JSON.stringify(favourites));
        }
    }
    for (const key in user) {
        div.append(`${key}: ${user[key]}; `);
    }
}
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let btn1 = document.createElement('button');
btn1.innerText = 'favorites';
btn1.onclick = function () {
    location.href = 'favorites.html';
}
document.body.appendChild(btn1);
let index = localStorage.getItem('favourites');
let favourite = JSON.parse(index);
console.log(favourite);