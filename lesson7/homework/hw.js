// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let Users = [];
let user1 = new User(28, 'vasya', 'pupkin', 'vasya@gmail.com', '0993532274');
Users.push(user1);
let user2 = new User(1, 'katya', 'sotra', 'katya@gmail.com', '0993533474');
Users.push(user2);
let user3 = new User(13, 'andrey', 'ronikov', 'andrey@gmail.com', '0993531104');
Users.push(user3);
let user4 = new User(42, 'lena', 'grovin', 'lena@gmail.com', '0990992274');
Users.push(user4);
let user5 = new User(35, 'vova', 'zoklin', 'vova@gmail.com', '099353424');
Users.push(user5);
let user6 = new User(96, 'tolya', 'sakovich', 'tolya@gmail.com', '0995532274');
Users.push(user6);
let user7 = new User(74, 'sasha', 'lyapkina', 'sasha@gmail.com', '0991122234');
Users.push(user7);
let user8 = new User(53, 'mira', 'tikova', 'mira@gmail.com', '0996612837');
Users.push(user8);
let user9 = new User(94, 'kira', 'koolo', 'kira@gmail.com', '0991984303');
Users.push(user9);
let user10 = new User(10, 'nikita', 'lenski', 'nikita@gmail.com', '0995500298');
Users.push(user10);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(Users.filter(item => item.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(Users.sort((u1, u2) => {
    return u1.id - u2.id;
}));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let Clients = [];
let client1 = new Client(28, 'vasya', 'pupkin', 'vasya@gmail.com', '0993532274',['kokos','sausages','abrikosik','cheese','peach','lemon']);
Clients.push(client1);
let client2 = new Client(1, 'katya', 'sotra', 'katya@gmail.com', '0993533474',['peach','abrikosik','sausages']);
Clients.push(client2);
let client3 = new Client(13, 'andrey', 'ronikov', 'andrey@gmail.com', '0993531104',['cheese','kokos','peach','lemon']);
Clients.push(client3);
let client4 = new Client(42, 'lena', 'grovin', 'lena@gmail.com', '0990992274',['kokos','abrikosik','lime']);
Clients.push(client4);
let client5 = new Client(35, 'vova', 'zoklin', 'vova@gmail.com', '099353424',['sausages']);
Clients.push(client5);
let client6 = new Client(96, 'tolya', 'sakovich', 'tolya@gmail.com', '0995532274',['lime','abrikosik']);
Clients.push(client6);
let client7 = new Client(74, 'sasha', 'lyapkina', 'sasha@gmail.com', '0991122234',['sausages','cheese','kokos','abrikosik','peach']);
Clients.push(client7);
let client8 = new Client(53, 'mira', 'tikova', 'mira@gmail.com', '0996612837',['abrikosik','peach']);
Clients.push(client8);
let client9 = new Client(94, 'kira', 'koolo', 'kira@gmail.com', '0991984303',['cheese','kokos','peach','lime']);
Clients.push(client9);
let client10 = new Client(10, 'nikita', 'lenski', 'nikita@gmail.com', '0995500298',['lime','sausages']);
Clients.push(client10);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(Clients.sort((u1, u2) => {
    return u1.order.length - u2.order.length;
}));
