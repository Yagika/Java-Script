// 1. Створити пустий масив та :

//     a. заповнити його 50 парними числами за допомоги циклу.
let arr = [];
for (let i = 2; arr.length < 50; i += 2) {
    arr.push(i);
}
console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.
arr = [];
for (let i = 1; arr.length < 50; i += 2) {
    arr.push(i);
}
console.log(arr);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
arr = [];
for (let i = 0; arr.length < 20; i++) {
    arr.push(Math.floor(Math.random() * 20));
}
console.log(arr);

//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
arr = [];
for (let i = 0; arr.length < 20; i++) {
    arr.push(Math.floor(8 + Math.random() * 725));
}
console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < arr.length; i += 3) {
    console.log(arr[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arr2 = [];
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
        arr2.push(arr[i]);
    }
}
console.log(arr2);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i - 1]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arr3 = [100, 250, 50, 168, 120, 345, 188];
//середній чек,якщо я зрозуміла правильно,то це середнє арифметичне
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
}
let result = sum / arr3.length;
console.log(result);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
arr4 = [];
arr5 = [];
for (let i = 0; arr4.length < 20; i++) {
    arr4.push(Math.floor(Math.random() * 11));
}
console.log(arr4);
for (let i = 0; arr5.length < 20; i++) {
    arr4[i] *= 5;
    arr5.push(arr4[i]);
}
console.log(arr5);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
arr6 = ['5665', 'nbhj', 'yui', 6787, 786, true, 768, false, 'hgj', 989];
console.log(arr6);
arr7 = [];
for (let i = 0; i < arr6.length; i++) {
    if (typeof arr6[i] === 'number') {
        arr7.push(arr6[i]);
    }
}
console.log(arr7);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
document.write('let usersWithCities = [' + '<br/>');
for (const user of usersWithId) {
    document.write('{' + '<br/>');
    for (const key in user) {
        document.write(key + ': ' + user[key] + '<br/>');
    }
    document.write('adress: {' + '<br/>');
    for (const user1 of citiesWithId) {
        for (const key1 in user1) {
            if (user['id'] === user1['user_id']) {
                document.write(key1 + ': ' + user1[key1] + '<br/>');
            }
        }
    }
    document.write('}' + '<br/>');
    document.write('},' + '<br/>');
}
document.write(']');
// document.write(`${usersWithCities}`);
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arra.length; i++) {
    if (arra[i] % 2 === 0) {
        console.log(arra[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arra1 = [];
for (let i = 0; i < arra.length; i++) {
    arra1.push(arra[i]);
}
console.log(arra1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arra2 = ['a', 'b', 'c'];
let str = '';
for (let i = 0; i < arra2.length; i++) {
    str += arra2[i];
}
console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
str = '';
let i = 0;
while (i < arra2.length) {
    str += arra2[i];
    i++;
}
console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
str = '';
for (let p of arra2) {
    str += p;
}
console.log(str);