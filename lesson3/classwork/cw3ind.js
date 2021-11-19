/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:*/
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

/*    2. перебрати його циклом for*/
for (let s = 0; s < arr.length; s++) {
    console.log(arr[s]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while (j < arr.length) {
    if (j % 2 === 1) {
        console.log(arr[j]);
    }
    j++;
}

//     4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let s = 0; s < arr.length; s++) {
    if (s % 2 === 1) {
        console.log(arr[s]);
    }
}

//     5. перебрати циклом while та вивести  числа тільки парні  значення
let l = 0;
while (l < arr.length) {
    if (l % 2 === 0) {
        console.log(arr[l]);
    }
    l++;
}

//     6. перебрати циклом for та вивести  числа тільки парні  значення
for (let s = 0; s < arr.length; s++) {
    if (s % 2 === 0) {
        console.log(arr[s]);
    }
}

//     7. замінити кожне число кратне 3 на слово "okten"
for (let s = 0; s < arr.length; s++) {
    if (arr[s] % 3 === 0) {
        arr[s] = 'okten';
        console.log(arr[s]);
    }
}
console.log(arr)

//     8. вивести масив в зворотньому порядку.
arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let s = arr.length - 1; s >= 0; s--) {
    console.log(arr[s]);
}

//     9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1
let m = arr.length - 1;
while (m >= 0) {
    console.log(arr[m]);
    m--;
}

// 2
for (let s = arr.length - 1; s >= 0; s--) {
    console.log(arr[s]);
}

// 3
let k = arr.length - 1;
while (k >= 0) {
    if (k % 2 === 1) {
        console.log(arr[k]);
    }
    k--;
}

// 4
for (let s = arr.length - 1; s >= 0; s--) {
    if (s % 2 === 1) {
        console.log(arr[s]);
    }
}

// 5
let p = arr.length - 1;
while (p >= 0) {
    if (p % 2 === 0) {
        console.log(arr[p]);
    }
    p--;
}

// 6
for (let s = arr.length - 1; s >= 0; s--) {
    if (s % 2 === 0) {
        console.log(arr[s]);
    }
}

// 7
for (let s = arr.length - 1; s >= 0; s--) {
    if (arr[s] % 3 === 0) {
        arr[s] = 'okten';
        console.log(arr[s]);
    }
}
console.log(arr)
