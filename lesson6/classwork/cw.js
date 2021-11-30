// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
let change = (str, symb) => {
    if (str.includes(symb)) {
        return str.split(symb).filter(item => item !== '').join(' ');
    }
}
console.log(change(n1, '.'));
console.log(change(n2, '-'));
console.log(change(n3, '_'));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        let num = Math.round(Math.random() * 100);
        arr.push(num);
    }
    return arr;
}
console.log(random(50));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(random(20).sort(((r1, r2) => r1 - r2)));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log(random(20).filter(item => item % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log(random(20).map(item => item + ''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a1, a2) => a1 - a2);
    } else if (direction === 'descending') {
        return nums.sort((a1, a2) => a2 - a1);
    } else {
        return 'undefined';
    }
}
console.log(sortNums([11, 21, 3], 'ascending'));
console.log(sortNums([11, 21, 3], 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((u1, u2) => u2.monthDuration - u1.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5));

