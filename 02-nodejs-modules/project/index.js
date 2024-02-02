// отличаем модули из папки random

const {randomInt, randomArr} = require('./random')

console.log(randomInt());
console.log(randomInt(100,200));

console.log(randomArr(4));