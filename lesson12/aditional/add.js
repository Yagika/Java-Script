// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(users => {
        for (const user of users) {
            let divu = document.createElement('div');
            divu.innerHTML = `<h3>ID: ${user.id}</h3>
                              <h4>UserName: ${user.username}</h4>
                              <h5>Email: ${user.email}</h5>
                              <h5>Phone: ${user.phone}</h5>`;
            divu.classList.add('divu');
            let btnu = document.createElement('button');
            btnu.innerText = 'posts';
            btnu.classList.add('btn');
            btnu.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {
                            if (post.userId === user.id) {
                                let divel = document.createElement('div');
                                divel.classList.add('wrap');
                                divu.appendChild(divel);
                                let div = document.createElement('div');
                                div.classList.add('post');
                                div.innerHTML = `<h3>ID: ${post.id}</h3>
                                                 <h4>Title: ${post.title}</h4>
                                                 <h5>Body: ${post.body}</h5>`;
                                divel.appendChild(div);
                                let btn = document.createElement('button');
                                btn.classList.add('btn');
                                btn.innerText = 'comments';
                                btn.onclick = function () {
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
                                                    divel.appendChild(divc);
                                                }
                                            }
                                            btn.disabled=true;
                                        })
                                }
                                div.appendChild(btn);
                            }
                        }
                        btnu.disabled=true;
                    })
            }
            divu.appendChild(btnu);
            document.body.appendChild(divu);
        }
    })