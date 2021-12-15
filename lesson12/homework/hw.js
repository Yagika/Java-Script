// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 4 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(posts=>{
        console.log(posts);
        for (const post of posts){
            let div=document.createElement('div');
            document.body.appendChild(div);
            div.classList.add('post');
            for (const key in post){
                let divel=document.createElement('div');
                divel.innerText=`${key}: ${post[key]}; `;
                divel.classList.add('inner-post');
                div.appendChild(divel);
            }
        }
    })
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response=>response.json())
    .then(comments=>{
        console.log(comments);
        for (const comment of comments){
            let div1=document.createElement('div');
            document.body.appendChild(div1);
            div1.classList.add('comment');
            for (const key in comment){
                let divel1=document.createElement('div');
                divel1.innerText=`${key}: ${comment[key]}; `;
                divel1.classList.add('inner-comment');
                div1.appendChild(divel1);
            }
        }
    })