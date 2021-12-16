// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let maindiv = document.createElement('div');
        maindiv.classList.add('main');
        document.body.appendChild(maindiv);
        for (const post of posts) {
            let divel = document.createElement('div');
            divel.classList.add('wrap');
            maindiv.appendChild(divel);
            let div = document.createElement('div');
            div.classList.add('post');
            div.innerHTML = `<h3>ID: ${post.id}  UserId: ${post.userId}</h3>
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
                                divc.innerHTML = `<h3>ID: ${comment.id}  PostId: ${comment.postId}</h3>
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
    })