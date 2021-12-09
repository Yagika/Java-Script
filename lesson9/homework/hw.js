// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');
div.innerText = 'Hi bitches';
// - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = '#ff9cc9';
div.style.color = '#e80777';
div.style.fontSize = '40px';
div.style.width = '200px'
div.style.height = '200px'
div.style.textAlign = 'center'
div.style.margin = '5px'
// - додати цей блок в body.
document.body.appendChild(div);
// - клонувати його повністю, та додати клон в body.
let div1 = document.body.appendChild(div.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arr = ['Main', 'Products', 'About us', 'Contacts']
let menu = document.getElementsByClassName('menu');
for (const element of arr) {
    let li = document.createElement('li');
    li.innerText = element;
    menu[0].appendChild(li);
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
    let divel = document.createElement('div');
    divel.innerText = element.title + ' ' + element.monthDuration;
    document.body.appendChild(divel);
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const element of coursesAndDurationArray) {
    let dive = document.createElement('div');
    dive.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = element.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = element.monthDuration;
    dive.appendChild(h1);
    dive.appendChild(p);
    document.body.appendChild(dive);
}