\\task1

var regexp = /^([a-z]{3,10})_([a-z]{3,10})(-\d{4})?@([a-z\d]{1,10}(-|\.)?[a-z\d]{1,10})\.com$/;

console.log(regexp.test('name_surname-1234@gmail.com'));


\\task2

var regexp2 = /^(\+?375-?|8-?0)(25|29|33|44|17)-?[1-9]{1}\d{2}-?\d{2}-?\d{2}$/;

console.log(regexp2.test('+375-25-77-77-77'));


\\task3

function countVowelLetters(text) {

var rezult = text.match(/[аоиеёэыуюя]/gi);

return rezult === null? 0: rezult.length;

};

countVowelLetters('Шла Саша по шоссе И сосала сУшку');