// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
function User(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyname, catchPhrase, bs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
        geo: {
            lat: lat,
            lng: lng
        }
    };
    this.phone = phone;
    this.website = website;
    this.company = {
        name: companyname,
        catchPhrase: catchPhrase,
        bs: bs
    }
}

let user1 = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(user1);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
function Tag(titleOfTag, action, titleOfAttr1, titleOfAttr2, actionOfAttr1, actionOfAttr2) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = {
        atribut1: {
            name: titleOfAttr1,
            action: actionOfAttr1
        },
        atribut2: {
            name: titleOfAttr2,
            action: actionOfAttr2
        }
    }
}
let tag1 = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', 'accesskey','coords','Активация ссылки с помощью комбинации клавиш.','Устанавливает координаты активной области.');
console.log(tag1);
let tag2=new Tag('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.','align','title','Задает выравнивание содержимого тега <div>.','Добавляет всплывающую подсказку к содержимому.');
console.log(tag2);
let tag3=new Tag('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня','align','accesskey','Определяет выравнивание заголовка.','Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.');
console.log(tag3);
let tag4=new Tag('span','Тег <span> предназначен для определения строчных элементов документа.','dir','hidden','Задает направление и отображение текста — слева направо или справа налево.','Скрывает содержимое элемента от просмотра.');
console.log(tag4);
let tag5=new Tag('input','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.','accept','alt','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.','Альтернативный текст для кнопки с изображением.');
console.log(tag5);
let tag6=new Tag('form','Связывает поле с формой по её идентификатору.','class','id','Определяет имя класса, которое позволяет связать тег со стилевым оформлением.','Указывает имя стилевого идентификатора.');
console.log(tag6);
let tag7=new Tag('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ','disabled','label','Заблокировать для доступа элемент списка.','Указание метки пункта списка.');
console.log(tag7);
let tag8=new Tag('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.','size','tabindex','Количество отображаемых строк списка.','Определяет последовательность перехода между элементами при нажатии на клавишу Tab');
console.log(tag8);









