//
function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Wake UP`)
            resolve`Done`
        }, 2000)
    })
}

function goGo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Go go`)
            resolve`Done`
        }, 100)
    })
}

function eat(haveAtFridge) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Open fridge`);
            if (haveAtFridge) {
                console.log(`EATING`)
                resolve`Done`
            }
            reject`ERRROR`
        }, 2000)
    })
}

function learn(lesson) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (lesson > 4) {
                console.log(`learn`)
                resolve`Done`
            }
            reject`You don\`t know it!!!`
        }, 5000)
    })
}

function serial() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`See More`)
            resolve`Done`
        }, 200)
    })
}

function goToOwu() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`123 Bus gogogo`)
            resolve`Done`
        })
    }, 1000)
}

function learnInOwu() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Do class work`)
            resolve`Do Some`
        }, 2000)
    })
}

function goToHome() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Go from Home!`)
            resolve`GOGO`
        }, 1500)
    })
}

function playGame() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Play Some GAME`)
            resolve`Dont play! Study!`
        }, 2500)
    })
}

function sleep(gameAreDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gameAreDone === `yes`) {
                console.log(`Go Sleeeep!`)
                resolve`Sleep`
            }
            reject`PLAY GAME`
        }, 1000)
    })
}

wakeUp()
    .then((e) => {
        console.log(e)
        console.log(111)
        return goGo()
    }).then((e) => {
    console.log(e)
    console.log(222)
    return eat(`apple`)
}).then((e) => {
    console.log(e)
    console.log(333)
    return learn(8)
})
    .then((e) => {
        console.log(e)
        console.log(444)
        return serial()
    })
    .then((e) => {
        console.log(e)
        console.log(555)
        return goToOwu()
    })
    .then((e) => {
        console.log(e)
        console.log(666)
        return learnInOwu()
    })
    .then((e) => {
        console.log(e)
        console.log(777)
        return goToHome()
    })
    .then((e) => {
        console.log(e)
        console.log(888)
        return playGame()
    })
    .then((e) => {
        console.log(e)
        console.log(999)
        return sleep(`yes`)
    })
    .then((e) => {
        console.log(e)
        console.log(`TEN`)
        console.log(`Last`)
    })
    .catch((e) => {
        console.warn(e)
    })
