// внутрь этого файла мы импортируем  random_int.js
const rand = require('./random_int');
const randArr = require('./random_array');
// выполняет функцию красивого имени для  random_int.js
module.exports = {
    'randomInt' : rand,
    'randomArr' : randArr
}