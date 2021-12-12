let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let arr = [];
for (const user of users) {
    for (const value in user) {
        if (value === 'address') {
            arr.push(user[value]);
        }
    }
}
console.log(arr)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
function recall(startElement) {
    if (startElement.length) {
        let divel = document.createElement('div');
        document.body.appendChild(divel);
        for (const element of startElement) {
            let div1 = document.createElement('div');
            divel.appendChild(div1);
            rec(element);

            function rec(element) {
                for (const key in element) {
                    if (typeof element[key] === 'object') {
                        rec(element[key]);
                    } else {
                        div1.append(`${key}: ${element[key]}; `);
                    }
                }
            }
        }
    }
}
recall(users);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
function recall1(startElement) {
    if (startElement.length) {
        let divel = document.createElement('div');
        document.body.appendChild(divel);
        for (const element of startElement) {
            let div1 = document.createElement('div');
            divel.appendChild(div1);
            for (const key in element) {
                let div = document.createElement('div');
                div1.appendChild(div);
                if (typeof element[key]==='object'){
                    div.append(key+': ')
                    for (const index in element[key]){
                        div.append(`${index}: ${element[key][index]}; `);
                    }
                }else{
                div.innerText = (`${key}: ${element[key]}`);
                }
            }
        }
    }
}

recall1(users);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
function recall2(parent, startElement) {
    if (startElement.length) {
        let divel = document.createElement('div');
        parent.appendChild(divel);
        for (const element of startElement) {
            let div1 = document.createElement('div');
            divel.appendChild(div1);
            rec(div1, element);

            function rec(parent1, element) {
                for (const key in element) {
                    if (typeof element[key] === 'object') {
                        let div = document.createElement('div');
                        parent1.appendChild(div);
                        rec(div, element[key]);
                    } else {
                        let div = document.createElement('div');
                        div.innerText = (`${key}: ${element[key]}`);
                        parent1.appendChild(div);
                    }
                }
            }
        }
    }
}

recall2(document.body, users);

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let titles = document.getElementsByTagName('h2');
let content = document.getElementById('content');
let ul = document.createElement('ul');
content.appendChild(ul);
for (const h2 of titles) {
    let li = document.createElement('li');
    li.innerText = h2.innerText;
    ul.appendChild(li);
}

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];

for (const element of rules) {
    let div1 = document.createElement('div');
    document.body.appendChild(div1);
    for (const key in element) {
        let div = document.createElement('div');
        div1.appendChild(div);
        if (key === 'title') {
            let h2 = document.createElement('h2');
            h2.innerText = element[key];
            div.appendChild(h2)
        } else {
            let p = document.createElement('p');
            p.innerText = element[key];
            div.appendChild(p)
        }
    }
}