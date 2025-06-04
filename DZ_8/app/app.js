function checkEvenOdd (num) {
    return num % 2 === 0? "Четное" : "Нечетное";
}

console.log(checkEvenOdd(2));
console.log(checkEvenOdd(7));

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));
console.log(factorial(0));


function finMax (arr) {
    return Math.max.apply(Math, arr);
}


function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}


function countVowels (str) {
    return str.replace(/[^eioua]/gi,"").length
}



console.log(countVowels('fffff') , "lol");
console.log(finMax([3, 4, 5, 4, 6, 7]));
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1,-2,-3]));