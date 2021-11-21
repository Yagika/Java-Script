// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function argum() {
    if (arguments.length === 1) {
        console.log(arguments[0])
    } else if (arguments.length === 2) {
        console.log(`${arguments[0]}${arguments[1]}`);
    } else {
        console.log('default');
    }
}

argum(3);
argum(3, 2);
argum(3, 2, 6);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function arrays(a, b) {
    let ari=[];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (i===j){
                let res=a[i]+b[j];
                ari.push(res);
            }
        }
    }
    return(ari);
}
let result1 =arrays([1, 2, 3, 4], [2, 3, 4, 5]);
console.log(result1)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function objects(a) {
    let ar=[];
    for (const user of a) {
        for (const key in user) {
           ar.push(key);
        }
    }
    return(ar);
}
let result2 =objects([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(result2)

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function objectskey(a) {
    let ar1=[];
    for (const user of a) {
        for (const key in user) {
            ar1.push(user[key]);
        }
    }
    return(ar1);
}
let result3 =objectskey([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(result3)