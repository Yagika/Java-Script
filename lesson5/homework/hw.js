// Всі функції повинні бути описані стрілочним типом
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let place = (a, b) => a * b;
console.log(place(15, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r) => r * r * 3.14;
console.log(circle(15));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (r, h) => 2 * 3.14 * r * r + 2 * 3.14 * r * h;
console.log(cylinder(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = (a) => {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
arr(['jikj', 77, 89, true, 45, 'jhj', 'srf', false, 322]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let txt = (a) => a
document.write(txt('Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let li = (a) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${a}</li>`);
    }
    document.write(`</ul>`);
}
li('hi');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ul = (a, size) => {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${a}</li>`);
    }
    document.write(`</ul>`);
}
ul('hello', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let uli = (b) => {
    document.write(`<ul>`);
    for (let i = 0; i < b.length; i++) {
        document.write(`<li>${b[i]}</li>`);
    }
    document.write(`</ul>`);
}

uli(['call', 'me', 'baby', 765, true, 45, 'pop', 'loop', false, 322]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let ul1 = (users) => {
    for (const user of users) {
        document.write(`<div>`);
        for (const key in user) {
            document.write(`${key}: ${user[key]}  `);
        }
        document.write(`</div>`);
    }
}

ul1([
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
]);

