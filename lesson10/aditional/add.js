// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
document.body.onclick = function (e) {
    console.log(e.target.tagName, e.target.classList, 'id:' + e.target.id, 'Width:' + e.target.clientWidth, 'Height:' + e.target.clientHeight);
}


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
document.body.onclick = function (e) {
    alert(`tag:${e.target.tagName}, class:${e.target.classList}, id:${e.target.id}, Width:${e.target.clientWidth}, Height:${e.target.clientHeight}`);
}

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let check = document.getElementById('check');
let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
check.onclick = function () {
    if (check.checked) {
        for (const user of usersWithAddress) {
            if (user["status"] === false) {
                console.log(user);
            }
        }
    }
}
check1.onclick = function () {
    if (check1.checked) {
        for (const user of usersWithAddress) {
            if (user["age"] >= 29) {
                console.log(user);
            }
        }
    }
}
check2.onclick = function () {
    if (check2.checked) {
        for (const user of usersWithAddress) {
            if (user["address"]["city"] === 'Kyiv') {
                console.log(user);
            }
        }
    }
}


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
let button2 = document.createElement('button');
button2.innerText = 'назад';
document.body.appendChild(button2);
let button1 = document.createElement('button');
button1.innerText = 'вперед';
document.body.appendChild(button1);


button1.onclick = function () {
    function recall(startElement) {
        console.log(startElement);
        if (startElement.children.length) {
            for (const element of startElement.children) {
                recall(element);
            }
        }
    }

    recall(document.body);
}

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let old = document.getElementById('old');
let new1 = document.getElementById('new');
let inner = document.getElementsByClassName('inner')
for (let i = 0; i < inner.length; i++) {
    if (i === 0) {
        inner[i].style.display = 'block'
    } else {
        inner[i].style.display = 'none'
    }
}
let i = 0;
old.onclick = function () {
    inner[i].style.display = 'none'
    i++;
    if (i >= inner.length) {
        i = 0
    }
    inner[i].style.display = 'block';
}
new1.onclick = function () {
    inner[i].style.display = 'none'
    i--;
    if (i < 0) {
        i = inner.length - 1;
    }
    inner[i].style.display = 'block';
}
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
document.body.onmouseup = function (e) {
    return e.target.style.fontStyle = 'italic'
}

