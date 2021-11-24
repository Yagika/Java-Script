// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min = (a, b, c) => {
    if (b < a && b < c) {
        return b;
    } else if (c < a && c < b) {
        return c;
    } else {
        return a;
    }
}
console.log(min(3, 2, 1));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a, b, c) => {
    if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    } else {
        return a;
    }
}
console.log(max(1, 2, 3));

// - створити функцію яка повертає найбільше число з масиву
let arrmax = (a) => {
    let max = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return (max);
}
console.log(arrmax([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54]));

// - створити функцію яка повертає найменьше число з масиву
let arrmin = (a) => {
    let min = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    return (min);
}
console.log(arrmin([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrsum = (a) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return (sum);
}
console.log(arrsum([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrave = (a) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return (sum / a.length);
}
console.log(arrave([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let arrmin1 = (a) => {
    let min = a[0];
    let max = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
        if (a[i] > max) {
            max = a[i];
        }
    }
    console.log(max);
    return (min);
}

arrmin1([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54]);

// - створити функцію яка заповнює масив рандомними числами
let a = [];
let random = (size) => {
    for (let i = 0; i < size - 1; i++) {
        a[i] = Math.floor(Math.random() * 101);
        a.push(a[i]);
    }
    return a;
}
console.log(random(10));

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let b = [];
let random1 = (size, limit) => {
    for (let i = 0; i < size - 1; i++) {
        b[i] = Math.floor(Math.random() * limit);
        b.push(b[i]);
    }
    return (b);
}
console.log(random1(10, 51));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let c = [];
let inverse = (a) => {
    for (let i = a.length - 1; i >= 0; i--) {
        c.push(a[i]);
    }
    return (c);
}
console.log(inverse([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54]));