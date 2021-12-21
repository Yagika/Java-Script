// Прокинутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
// Попрацювати-2с
// Попити каву-0.7с
// Переглянути серіал-4с
// Піти спати-1с
function one() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Прокинутись')
        }, 300)
    })
}

function two() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Поснідати')
        }, 1000)
    })
}

function three() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Піти в душ')
        }, 500)
    })
}

function four() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Дочекатись автобус')
        }, 3000)
    })
}

function five() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Пообідати')
        }, 1000)
    })
}

function six() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Попрацювати')
        }, 2000)
    })
}

function seven() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Попити каву')
        }, 700)
    })
}

function eight() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Переглянути серіал')
        }, 4000)
    })
}

function nine() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Піти спати')
        }, 1000)
    })
}

async function timetable() {
    try {
        const one1 = await one();
        const two1 = await two();
        const three1 = await three();
        const four1 = await four();
        const five1 = await five();
        const six1 = await six();
        const seven1 = await seven();
        const eight1 = await eight();
        const nine1 = await nine();
        console.log(1, one1);
        console.log(2, two1);
        console.log(3, three1);
        console.log(4, four1);
        console.log(5, five1);
        console.log(6, six1);
        console.log(7, seven1);
        console.log(8, eight1);
        console.log(9, nine1);
    }catch (e) {
        console.error(e);
    }
}

timetable()
