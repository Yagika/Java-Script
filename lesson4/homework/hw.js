// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function place(a, b) {
    let res = a * b;
    return (res);
}

let result = place(15, 20);
console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    const pi = 3.14;
    let res = r * r * pi;
    return (res);
}

let result1 = circle(15);
console.log(result1);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(r, h) {
    const pi = 3.14;
    let res = 2 * pi * r * r + 2 * pi * r * h;
    return (res);
}

let result2 = cylinder(5, 10);
console.log(result2);

// - створити функцію яка приймає масив та виводить кожен його елемент
function arr() {
    let a = ['jikj', 77, 89, true, 45, 'jhj', 'srf', false, 322];
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}

arr();

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function txt(a) {
    document.write(`<p>${a}</p>`);
}

txt('Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function li(a) {
    document.write(`<ul>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`</ul>`);
}

li('hi');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul(a, size) {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${a}</li>`);
    }
    document.write(`</ul>`);
}

ul('hello', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function uli() {
    let b = ['call', 'me', 'baby', 765, true, 45, 'pop', 'loop', false, 322];
    document.write(`<ul>`);
    for (let i = 0; i < b.length; i++) {
        document.write(`<li>${b[i]}</li>`);
    }
    document.write(`</ul>`);
}

uli();

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function ul1() {
    let users = [
        {id: 1, name: 'vasya', age: 31},
        {id: 2, name: 'petya', age: 30},
        {id: 3, name: 'kolya', age: 29},
        {id: 4, name: 'olya', age: 28}
    ];
    for (const user of users) {
        document.write(`<div>`);
        for (const key in user) {
            document.write(`${key}: ${user[key]}  `);
        }
        document.write(`</div>`);
    }
}

ul1();

