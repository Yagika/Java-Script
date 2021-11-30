// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world';
let str1 = 'lorem ipsum';
let str2 = 'javascript is cool';
console.log(str.length);
console.log(str1.length);
console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let toup = str.toUpperCase();
let toup1 = str1.toUpperCase();
let toup2 = str2.toUpperCase();
console.log(toup);
console.log(toup1);
console.log(toup2);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let tolo = toup.toLowerCase();
let tolo1 = toup1.toLowerCase();
let tolo2 = toup2.toLowerCase();
console.log(tolo);
console.log(tolo1);
console.log(tolo2);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty = ' dirty string   ';
let trim = dirty.trim();
console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let stringToarray = (a) => {
    return a.split(' ');
}
let st = 'Каждый охотник желает знать';
let arr = stringToarray(st);
document.writeln('[' + arr + ']');
console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, length) => {
    return str.slice(0, length);
}
let slice = delete_characters(st, 10);
document.writeln(slice);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => {
    return str.toUpperCase().split(' ').join('-');
}
let stri = "HTML JavaScript PHP";
let dash = insert_dash(stri);
document.writeln(dash);


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let tu = (str) => {
    return str[0].toUpperCase()+str.slice(1,str.length);
}
let stri1 = "okten";
let upper = tu(stri1);
console.log(upper);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    return str.split(' ').map(item=>item.charAt(0).toUpperCase()+item.slice(1,item.length)).join(' ');
}
let stri2 = "hello okten how are you";
let upp = capitalize(stri2);
console.log(upp);

