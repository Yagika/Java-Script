// Прокинутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
// Попрацювати-2с
// Попити каву-0.7с
// Переглянути серіал-4с
// Піти спати-1с
function one(callback) {
    setTimeout(() => {
        console.log('Прокинутись');
        callback();
    }, 300)
}

function two(callback) {
    setTimeout(() => {
        console.log('Поснідати');
        callback();
    }, 1000)
}

function three(callback) {
    setTimeout(() => {
        console.log('Піти в душ');
        callback();
    }, 500)
}

function four(callback) {
    setTimeout(() => {
        console.log('Дочекатись автобус')
        callback();
    }, 3000)
}

function five(callback) {
    setTimeout(() => {
        console.log('Пообідати');
        callback();
    }, 1000)
}

function six(callback) {
    setTimeout(() => {
        console.log('Попрацювати');
        callback();
    }, 2000)
}

function seven(callback) {
    setTimeout(() => {
        console.log('Попити каву');
        callback();
    }, 700)
}

function eight(callback) {
    setTimeout(() => {
        console.log('Переглянути серіал');
        callback();
    }, 4000)
}

function nine() {
    setTimeout(() => {
        console.log('Піти спати');
    }, 1000)
}

one(() => {
    two(() => {
        three(() => {
            four(() => {
                five(() => {
                    six(() => {
                        seven(() => {
                            eight(() => {
                                nine()
                            })
                        })
                    })
                })
            })
        })
    })
})
