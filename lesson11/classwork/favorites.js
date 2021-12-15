let index = localStorage.getItem('favourites');
let favourite = JSON.parse(index);
for (const user of favourite) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    for (const key in user) {
        div.append(`${key}: ${user[key]}; `);
    }
}