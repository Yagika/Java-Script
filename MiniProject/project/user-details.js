// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
let key = localStorage.getItem('user');
let user = JSON.parse(key);
let div = document.createElement('div');
div.classList.add('div')
document.body.appendChild(div);

function rec(element) {
    for (const key in element) {
        if (typeof element[key] === 'object') {
            rec(element[key]);
        } else {
            if (key === 'id') {
                let h2 = document.createElement('h1');
                h2.innerText = (`${key}: ${element[key]}`);
                div.appendChild(h2);
            } else if (key === 'name') {
                let h3 = document.createElement('h3');
                h3.innerText = (`${key}: ${element[key]}`);
                div.appendChild(h3);
            } else {
                let p = document.createElement('p');
                p.innerText = (`${key}: ${element[key]}`);
                div.appendChild(p);
            }
        }
    }
}

rec(user);
let divbut = document.createElement('div');
let btnu = document.createElement('button');
btnu.innerText = 'post of current user';
btnu.classList.add('btnu');
divbut.appendChild(btnu);
divbut.classList.add('divbut')
document.body.appendChild(divbut);
let divp = document.createElement('div');
divp.classList.add('divp')
document.body.appendChild(divp);
btnu.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                if (post.userId === user.id) {
                    let divel = document.createElement('div');
                    divel.classList.add('post');
                    divel.innerHTML = `<h3>Title: ${post.title}</h3>`;
                    divp.appendChild(divel);
                    let btn = document.createElement('button');
                    btn.classList.add('btn');
                    btn.innerText = 'details';
                    divel.appendChild(btn);
                    btn.onclick = function () {
                        localStorage.setItem('post',JSON.stringify(post))
                        location.href='post-details.html';
                    }
                }
            }
            btnu.disabled=true
        })

}