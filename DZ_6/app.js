let data = [42, 'текст', true, null, undefined, 3.14]

console.log(data.length)
console.log(data[0])
console.log(data[data.length - 1])
data[2] = false
console.log(data)

let numbers = [10, 20, 30, 40, 50]

console.log(numbers.indexOf(30))
console.log(numbers.includes(100))


let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']

console.log(fruits.push('mango'))
console.log(fruits.unshift('strawberry'))
console.log(fruits)
console.log(fruits.pop())
console.log(fruits.shift())
console.log(fruits)
console.log(fruits.indexOf('orange'))
console.log(fruits.includes('banana'))


let number = [45, 12, 67, 23, 89, 34, 56, 91, 8, 77]

console.log(number.slice(3,7))
console.log(number.slice(-3))
console.log(number.sort((a, b) => a - b))
console.log(number.sort((a, b) => b- a))
console.log(number.join('-'))


let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

console.log(...array1,...array2)