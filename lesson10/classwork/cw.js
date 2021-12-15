// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let btn = document.getElementById('btn');
btn.onclick = () => {
    let in1 = document.forms.f1.in1.value;
    let in2 = document.forms.f1.in2.value;
    let in3 = document.forms.f2.in3.value;
    let in4 = document.forms.f2.in4.value;
    console.log(in1, in2, in3, in4);
}


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let btn1 = document.getElementById('btn1');
btn1.onclick = () => {
    let tr = document.forms.f3.inp1.value;
    let td = document.forms.f3.inp2.value;
    let length = document.forms.f3.inp3.value;
    let table = document.createElement('table');
    table.style.margin='10px';
    table.style.borderCollapse='collapse';
    for (let i = 0; i < tr; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < td; j++) {
            let td = document.createElement('td');
            td.style.width = length + 'px';
            td.style.height = '20px';
            td.style.border = '2px solid';
            tr.appendChild(td);
        }
    }
    document.body.appendChild(table);
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let badwords = ['blin', 'sobaka', 'chert', 'kokos'];
let btn2 = document.getElementById('btn2');
let input = document.getElementById('input');
btn2.onclick = () => {
    for (const element of badwords) {
        if (input.value === element) {
            alert('you are a bad boy/girl');
        }
    }
}
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let btn3 = document.getElementById('btn3');
let input1 = document.getElementById('input1');
btn3.onclick = () => {
    for (const element of badwords) {
        if (input1.value.includes(element)) {
            alert('you are a bad boy/girl');
        }
    }
}