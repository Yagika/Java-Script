// - Дано натуральное число n. Выведите все числа от 1 до n.
let n = 5;
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}
console.log(arr);
//Не знала надо ли в функции так,что вот и в функции
let arr1 = [];
let fun = (n1) => {
    for (let i = 1; i <= n1; i++) {
        arr1.push(i);
    }
    return arr1;
}
console.log(fun(5));

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let func = (a, b) => {
    let arr2 = [];
    if (a < b) {
        for (a; a <= b; a++) {
            arr2.push(a);
        }
    } else {
        for (a; b <= a; a--) {
            arr2.push(a);
        }
    }

    return arr2;
}
console.log(func(5, 10));
console.log(func(5, 1));

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let foo = (arr, i) => {
    let c = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = c;
    return arr;
}
console.log(foo([9, 8, 0, 4], 1));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let arra = [];
let funct = (d) => {
    for (let i = 0; i < d; i++) {
        arra[i] = Math.floor(-5 + Math.random() * 11);
    }
    console.log(arra);
    for (const num in arra) {
        for (let i = 0; i < d - 1; i++) {
            if (arra[i] === 0) {
                let c = arra[i];
                arra[i] = arra[i + 1];
                arra[i + 1] = c;
            }
        }
    }
    return arra;
}
console.log(funct(100));