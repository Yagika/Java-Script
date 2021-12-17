// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let key = localStorage.getItem('post');
let post = JSON.parse(key);
let div = document.createElement('div');
div.classList.add('div')
document.body.appendChild(div);
for (const key in post) {
    if (key === 'id') {
        let h2 = document.createElement('h1');
        h2.innerText = (`${key}: ${post[key]}`);
        div.appendChild(h2);
    } else if (key === 'title') {
        let h3 = document.createElement('h3');
        h3.innerText = (`${key}: ${post[key]}`);
        div.appendChild(h3);
    } else {
        let p = document.createElement('p');
        p.innerText = (`${key}: ${post[key]}`);
        div.appendChild(p);
    }
}
let divbut = document.createElement('div');
let btnu = document.createElement('button');
btnu.innerText = 'comments of current user';
btnu.classList.add('btnu');
divbut.appendChild(btnu);
divbut.classList.add('divbut')
document.body.appendChild(divbut);
let divp = document.createElement('div');
divp.classList.add('divp')
document.body.appendChild(divp);
btnu.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments) {
                if (comment.postId === post.id) {
                    let divc = document.createElement('div');
                    divc.classList.add('comment');
                    divc.innerHTML = `<h3>ID: ${comment.id}</h3>
                                      <h4>Name: ${comment.name}</h4>
                                      <h4>Email: ${comment.email}</h4>
                                       <p>Body: ${comment.body}</p>`;
                    divp.appendChild(divc);
                }
            }
            btnu.disabled = true
        })
}

