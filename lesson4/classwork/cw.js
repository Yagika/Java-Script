// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(a, b, c) {
    if (b < a && b < c) {
        console.log(b)
    } else if (c < a && c < b) {
        console.log(c)
    } else {
        console.log(a)
    }
}

min(3, 2, 1)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max(a, b, c) {
    if (b > a && b > c) {
        console.log(b)
    } else if (c > a && c > b) {
        console.log(c)
    } else {
        console.log(a)
    }
}

max(1, 2, 3)

// - створити функцію яка повертає найбільше число з масиву
function arrmax(a) {
    let max = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return (max);
}

let result = arrmax([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54])
console.log(result)

// - створити функцію яка повертає найменьше число з масиву
function arrmin(a) {
    let min = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    return (min);
}

let result1 = arrmin([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54])
console.log(result1)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function arrsum(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return (sum);
}

let result2 = arrsum([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54])
console.log(result2)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrave(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return (sum / a.length);
}

let result3 = arrave([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54])
console.log(result3)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function arrmin1(a) {
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

let result4 = arrmin1([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54])

// - створити функцію яка заповнює масив рандомними числами
function random(size) {
    let a = [];
    for (let i = 0; i < size-1; i++) {
        a[i] = Math.floor(Math.random() * 101);
        a.push(a[i]);
    }
    console.log(a);
}
random(10);
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function random1(size, limit) {
    let a = [];
    for (let i = 0; i < size-1; i++) {
        a[i] = Math.floor(Math.random() * limit);
        a.push(a[i]);
    }
    console.log(a);
}
random1(10, 51);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function inverse(a) {
    let b = [];
    for (let i = a.length-1; i >= 0; i--) {
        b.push(a[i]);
    }
    return (b);
}
let result5 = inverse([1, 3, -43, 455, 2, 451, 3, 4, 56, 33, 23, 54])
console.log(result5);