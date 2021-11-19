// --створити масив з:
//  - з 5 числових значень
//  - з 5 стічкових значень
//  - з 5 значень стрічкового, числового та булевого типу
//  - та вивести його в консоль

let arr0 = [1, 2, 3, 4, 5];
let arr1 = ['wow', 'hi', 'it', 'is', 'cool'];
let arr2 = ['grass', 67, true, 878, false];
console.log(arr0);
console.log(arr1);
console.log(arr2);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr3 = [];
arr3[0] = 1;
arr3[1] = 78;
arr3[2] = 'iji';
arr3[3] = true;
arr3[4] = 688;
console.log(arr3);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>item</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>item${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write(`<h1>hello</h1>`)
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let l = 0;
while (l < 20) {
    document.write(`<h1>hello${l}</h1>`)
    l++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arra = [23, 343, 21, 656, 64, 632, 463, 245, 34, 443];
for (let i = 0; i < arra.length; i++) {
    console.log(arra[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arra1 = ['guy', 'girl', 'crown', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'];
for (let i = 0; i < arra1.length; i++) {
    console.log(arra1[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arra2 = [243, 'kol', 27, 656, true, 'lil', 'fol', [102, 'hol', true], false, 103];
for (let i = 0; i < arra2.length; i++) {
    console.log(arra2[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arra3 = [203, 'kol', 27, 6.9, true, 'lol', 'fol', 777, false, 123];
for (let i = 0; i < arra3.length; i++) {
    if (typeof arra3[i] === 'boolean') {
        console.log(arra3[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arra4 = [203, 'kol', 27, 6.9, true, 'lol', 'fol', 777, false, 123];
for (let i = 0; i < arra4.length; i++) {
    if (typeof arra4[i] === 'number') {
        console.log(arra4[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arra5 = [203, 'kol', 27, 6.9, true, 'lol', 'fol', 777, false, 123];
for (let i = 0; i < arra5.length; i++) {
    if (typeof arra5[i] === 'string') {
        console.log(arra5[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arri = [];
arri[0] = 1;
arri[1] = 78;
arri[2] = 'iji';
arri[3] = true;
arri[4] = 688;
arri[5] = 99;
arri[6] = false;
arri[7] = true;
arri[8] = 'yty';
arri[9] = 20;
for (let i = 0; i < arri.length; i++) {
    console.log(arri[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(`${i}крок`);
    document.write(`${i}крок<br/>`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(`${i}крок`);
    document.write(`${i}крок<br/>`);

}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(`${i}крок`);
    document.write(`${i}крок<br/>`);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(`${i}крок`);
        document.write(`${i}крок<br/>`);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(`${i}крок`);
        document.write(`${i}крок<br/>`);
    }
}