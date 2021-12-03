// <!--Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!-->
//
// <!-- - Напишіть код,  котрий :-->
// <!-- отримує текст з параграфа з id "content"-->
let content =document.getElementById('content');

// <!-- отримує текст з блоку з id "rules"-->
let rules =document.getElementById('rules');

// <!-- замініть текст параграфа з id 'content' на будь-який інший-->
let text =document.getElementById('content');
text.innerText='kokosik abrikosik';

// <!-- замініть текст параграфа з id 'rules' на будь-який інший-->
let textrules =document.getElementById('rules');
textrules.innerText='Всякая записанная речь (литературное произведение, сочинение, документ и т. п., а также часть, отрывок из них).';

// <!-- змініть кожному елементу колір фону на червоний-->
for (const element of document.body.children){
    element.style.color='red';
}
// <!-- змініть кожному елементу колір тексту на синій-->
for (const element of document.body.children){
    element.style.color='darkblue';
}
// <!-- отримати весь список класів елемента з id=rules і вивести їх в console.log-->
let ru = document.getElementById('rules')
    console.log(ru.classList);

// <!-- поміняти колір тексту у всіх елементів fc_rules на червоний-->
let fc = document.getElementsByClassName('fc_rules')
for (const element of fc){
    element.style.color='red';
}