let productsarr = localStorage.getItem('products');
let products = JSON.parse(productsarr);
let divel = document.createElement('div');
divel.classList.add('wrap');
document.body.appendChild(divel);
for (const product of products) {
    let div = document.createElement('div');
    div.classList.add('main');
    let i=0;
    div.setAttribute('id', `id${i}`);
    i++
    div.innerHTML=`<h2>${product.name}</h2>
                   <h4>Amount:${product.amount} Cost:${product.cost}</h4>
                   <img class="image" alt="picture" src=${product.picture}>`;
    let btn=document.createElement('button');
    btn.innerText="delete";
    btn.classList.add('btn');
    div.append(btn);
    let divi=document.getElementById(`id${i}`);
    btn.onclick=function (){
        let ps=products.filter(product=>product.id!==`id${i}`);
        localStorage.setItem('products',JSON.stringify(ps));
        divi.style.display='none';
    }
    divel.appendChild(div);
}
let btnm=document.createElement('button');
btnm.innerText="DELETE ALL";
btnm.classList.add('btn')
document.body.append(btnm);
btnm.onclick=function (){
    localStorage.removeItem('products');
}