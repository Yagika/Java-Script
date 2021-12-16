let productsarr = localStorage.getItem('products');
let products = JSON.parse(productsarr);
let divel = document.createElement('div');
divel.classList.add('wrap');
document.body.appendChild(divel);
for (const product of products) {
    let div = document.createElement('div');
    div.classList.add('main');
    div.innerHTML=`<h2>${product.name}</h2>
                   <h4>Amount:${product.amount} Cost:${product.cost}</h4>
                   <img class="image" alt="picture" src=${product.picture}>`;
    let btn=document.createElement('button');
    btn.innerText="delete";
    btn.classList.add('btn')
    div.append(btn);
    btn.onclick=function (){
        products.splice(products.indexOf(product),1);
        localStorage.setItem('products',JSON.stringify(products));
        div.style.display='none';
    }
    divel.appendChild(div);
}
let btnm=document.createElement('button');
btnm.innerText="DELETE ALL";
btnm.classList.add('btn')
document.body.append(btnm);
btnm.onclick=function (){
    localStorage.removeItem('products')
}