// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let f1 = document.forms.f1;
let btn1=document.getElementById('btn1');
f1.onsubmit = e => {
    e.preventDefault();
};
btn1.onclick = function () {
    let user = {
        username: f1.username.value,
        userage: f1.userage.value
    }
    let stringify = JSON.stringify(user)
    localStorage.setItem('user', stringify)
}
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let f2 = document.forms.f2;
let btn2=document.getElementById('btn2');
f2.onsubmit = e => {
    e.preventDefault();
};
btn2.onclick = function () {
    let car = [f2.model.value, f2.type.value, f2.volume.value];
    let stringify1 = JSON.stringify(car)
    localStorage.setItem('car', stringify1)
}