// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a1) додає клас з назвою групи, елементу з ід main_header
let main = document.getElementById('main_header');
main.classList.add('group');
// a2) змінює клас тексту елементу з ід main_header на назву групи в якій ви вчитесь(mon-year)
main.classList.replace('group', 'sep-2021');

// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
for (const element of ul) {
    element.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linklist = document.getElementsByClassName('linkList');
for (const element of linklist) {
    element.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
let list = document.getElementsByClassName('listElement2');
console.log(list[0].innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName('li');
for (const element of li) {
    element.style.background = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName('a');
for (const element of a) {
    element.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let a1 = document.getElementsByTagName('a');
for (let i = 0; i < a1.length; i++) {
    if (a1[i].innerText === 'link3') {
        a1[i].style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let a2 = document.getElementsByTagName('a');
for (const element of a2) {
    let XXX = element.innerText;
    element.classList.add(`element_${XXX}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let header = document.getElementsByClassName('sub-header');
let colour = prompt('Which colour?')
for (const element of header) {
    element.style.background = `${colour}`;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let header1 = document.getElementsByClassName('sub-header');
let colour1 = prompt('Which colour?')
for (const element of header1) {
    if (element.innerText === 'content 2 segment') {
        element.style.color = colour1;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content = document.getElementsByClassName('content_1');
let text1 = prompt('Which text?');
content[0].innerText=text1;

// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p');
for (const element of p) {
    element.style.padding='20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
for (const element of text2) {
    element.innerText='sep-2021';
}

