function hello () {
    return console.log('Hello 18!')
}



function sum(a,b) {
    return a + b

}

console.log(sum(122 ,78))
console.log(sum(122 ,22))
console.log(sum(122 ,44))

function greet1 (name) {
    return console.log(`Hi ${name}!`)
}

greet1('Bakyt')

function greet3 (name = 'User') {
    return console.log(name)
}

greet3('Bakyt')
greet3()

function lol (a,b) {
    return a ** b
}

console.log (lol(2,2))

const findAverage = function (arr) {
    let sum  = 0
    for (const elem of arr) {
        sum += elem
    }
    return sum / arr.length
}

const numbers = [1,2,3,4,5,6,7,8,9,10]

console.log(findAverage(numbers))

const greet5 = () =>{
    console.log('Hello 6')
}

const squer = x => {
    return x * x
}

const squer2 = x => {
    return x * x
}



console.log (squer('5'))
greet5()

const squer3 = (a,b) => {
    return a * b
}

console.log (squer3(20 , 40 ))

// const findAverage = function (arr) {
//     let sum  = 0
//     for (const elem of arr) {
//         sum += elem
//     }
//     return sum / arr.length
// }
//

const findAverage2 =  arr => {
    let sum  = 0
    for (const elem of arr) {
        sum += elem
    }
    return sum / arr.length
}
//
// console.log(findAverage2(numbers))
//
// const relative = {
//     name: 'Viktor',
//     children : [ {
//         name: 'Kola',
//         children: [{
//             name: 'John',
//             children : [{
//                 name: 'John2',
//                 children : [{
//                     name: 'John2',
//                     children : [{
//                         name: 'John2',
//                         children : [{
//                             name: 'John2',
//                             children : [{
//                                 name: 'John2'
//                             }]
//                         }]
//                     }]
//                 }]
//             }]
//         }]
//     }
//     ]
// }
//
// for (const child of relative.children) {
//     console.log(child.name)
//     for (const child1 of child.children) {
//         console.log(child1.name)
//     }
// }
//
// function showcildren (obj) {
//     obj.children.forEach(child => {
//         console.log(`${obj.name} => ${child.name}`)
//         showcildren(child)
//     })
// }
//
// showcildren(relative)
//
//


function input (callback) {
    const name = "Bobik"
    callback(name)
}

input(
    function (name) {
        console.log(`Привет ${name}`)
    }
)

const numbrs2 = [1,2,43,124,543,226]
numbrs2.sort((a, b) => a - b)
console.log(numbrs2)

const fruit = ['banana','apple','orang']


fruit.forEach(function (fruits , index ) {
    console.log(index , fruit)
})


const user = [
    {
        name : 'Oleg',
        age : 17,
    },
    {
        name : 'Anton',
        age: 120
    },
    {
        name : 'Banana',
        age: 20,
    },
    {
        name : 'Apple',
        age: 30,
    }
]


