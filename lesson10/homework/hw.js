// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let text = document.createElement('div');
text.innerText = 'Hi evrebody!!!';
text.id = 'text';
document.body.appendChild(text);
let btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    text.hidden=true;
}
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    btn2.hidden=true;
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let btn3 = document.getElementById('btn3');
let input = document.getElementById('input');
    btn3.onclick = function () {
    if (input.value <= 18 && input.value>0) {
        alert('you are too little')
    } else if (input.value>18){
        alert(`you are ${input.value}`);
    } else{
        alert(`What???`)
    }
}
// - Создайте меню, которое раскрывается/сворачивается при клике
let btn4 = document.getElementById('btn4');
let menu = document.getElementsByClassName('menu');
btn4.onclick=function (){
    if (menu[0].style.display==='none'){
        menu[0].style.display='flex';
    }else{
        menu[0].style.display='none';
    }
    }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments=[
    {title : 'milk', body:'white, tasty'},
    {title : 'tea', body:'black and green'},
    {title : 'meat', body:'red fresh'},
    {title : 'cheese', body:'yummy'},
    {title : 'banana', body:'yellow'}
];
for (const comment of comments){
    let divel=document.createElement('div');
    let h2=document.createElement('h2');
    let p=document.createElement('p');
    let butn=document.createElement('button');
    h2.innerText=comment.title;
    p.innerText=comment.body;
    butn.innerText='roll up...';
    document.body.appendChild(h2);
    document.body.appendChild(p);
    document.body.appendChild(butn);
    document.body.appendChild(divel);
    butn.onclick=()=>{
        if (p.style.display==='none'){
            p.style.display='flex';
        }else{
            p.style.display='none';
        }
    }
}
