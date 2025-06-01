let str = 'кыргызстан'
let str2 = 'Кыргызстан'


console.log(str)
console.log(str[0])
console.log(str[str.length-1])
console.log(str.toUpperCase())
console.log(str.toLocaleLowerCase())
console.log(str.toLocaleUpperCase())
console.log(str[str.toUpperCase])
console.log(str[0].toUpperCase() + str.slice(1))


const user = {
    name : 'John',
    age : 18,
    isStudent: true,
    passport : {
        id: '98080912',
        inn: '234567',
        data: '12.02.2000',
    },
    "countre name" : 'Bishkek'
}

user.passport.id = 'John'
console.log(user.surname ?? 'surname', 'user')

const user2 = {
    name: 'Vlad',
    age : 23,
    isStudent: false,
}

let userName = 'name'


console.log(user[userName])
console.log(user['name'])
console.log(user.name)
console.log(user.isStudent)


let num1 = Number(prompt('num1'))
let num2 = Number(prompt('num2'))
let operator = prompt('operator')

switch (operator) {
    case '+':
        console.log(num1 + num2)
        break;
    case '-':
        console.log(num1 - num2)
        break;
    case '*':
        console.log(num1 * num2)
        break;
    case '/':
        console.log(num1 / num2)
        break;
    default:
        console.log('error')
}

