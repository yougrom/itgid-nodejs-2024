// модуль генерирует любое целое число от нуля до 100 или если указать дополнительные аргументы то от первого числа до второго.
// этот файл выполняет вычисления
module.exports = function (min = 0, max = 100) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}