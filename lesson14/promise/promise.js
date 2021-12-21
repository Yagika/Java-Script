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

one()
    .then(result => {
            console.log(result)
        return two()
        })
    .then(result => {
        console.log(result)
        return three()
    })
    .then(result => {
        console.log(result)
        return four()
    })
    .then(result => {
        console.log(result)
        return five()
    })
    .then(result => {
        console.log(result)
        return six()
    })
    .then(result => {
        console.log(result)
        return seven()
    })
    .then(result => {
        console.log(result)
        return eight()
    })
    .then(result => {
        console.log(result)
        return nine()
    })
    .then(result => {
        console.log(result)
    })
