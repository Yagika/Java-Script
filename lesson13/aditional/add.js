// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let f1 = document.forms.f1
let btn1 = document.getElementById('btn1');
f1.onsubmit = e => {
    e.preventDefault();
};
let products = [];
btn1.onclick = function () {
    let object = {
        name: f1.name.value,
        amount: f1.amount.value,
        cost: f1.cost.value,
        picture: f1.picture.value
    };
    products.push(object);
    let stringify1 = JSON.stringify(products)
    localStorage.setItem('products', stringify1)
}

// let products = [{
//     name: "milk",
//     amount: 20,
//     cost: 100,
//     picture: "https://static-sl.insales.ru/images/products/1/151/131834007/large_APEIU_Milk_One-Pack-500x500.jpg"
// }, {
//         name: "bubble tea",
//         amount: "50",
//         cost: "400",
//         picture: "https://www.mtl.org/sites/default/files/styles/playlist_banner_big/public/2017-07/34097.jpg?h=c7616e27&itok=JRn9CN_U"
//     }, {
//         name: "coca cola",
//         amount: "100",
//         cost: "60",
//         picture: "https://grizzlee.com.ua/618-large_default/-coca-cola-1l.jpg"
//     },
//     {
//         name: "coffee",
//         amount: 10,
//         cost: 200,
//         picture: "https://sg.fiverrcdn.com/photos/2895385/original/coffe-cup-heart-love-96892078238.jpeg?1396118734"
//     }]
