// этот модуль будет генерировать случайный массив со случайными числами
const randomInt  = require('./random_int');
// анонимный модуль который создает массив длиной по умолчанию 10 символов И добавляют в него модуль randomInt()
module.exports = function (len = 10) {
    let temp = [];
    for (let i = 0; i < len; i++) temp.push(randomInt());
    return temp;
}