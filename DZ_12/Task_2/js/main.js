// Задание 2:
//     Добавить на страницу два поля для ввода - X и Y и кнопку "Create".
//     Если хотя бы одно из полей пустое - кнопка дизэйблится (делать по keyup).
//     Поля должны принимать только числа от 1 до 10, в противном случае должно выводиться сообщение об ошибке (делать по click).
//     По клику на кнопку должна отрисоваться шахматная доска с размерами X по горизонтали и Y по вертикали.
//     При введении значений X и Y заново таблица должна корректно перерисоваться.
//     По клику на любое поле доски - цвета всех полей должны изменяться на противоположные.

var button = document.getElementById('button');
var x = document.getElementById('inX');
var y = document.getElementById('inY');
var inputs = document.querySelectorAll('input');

var newDIV = document.createElement('DIV');
newDIV.id = 'table';
document.body.appendChild(newDIV);

var table = document.getElementById('table');

button.setAttribute('disabled', 'disabled');

inputs.forEach(function (item, i) {
    inputs[i].addEventListener('keyup', function () {
        if (event.keyCode !== 32) {
            button.removeAttribute('disabled');

            if ((x.value.trim() === '') || (y.value.trim() === '')) {
                button.setAttribute('disabled', 'disabled');
            }
        }
    });
});

button.addEventListener('click', function () {

    var vlX = Number(x.value.trim());
    var vlY = Number(y.value.trim());

    if (((vlX >= 1) && (vlX < 10)) && (Number.isInteger(vlX))) {
        var rows = vlX;
    } else {
        alert('Введите корректное целое число для X от 1 до 10.');
        x.value = '';
    }

    if (((vlY >= 1) && (vlY < 10)) && (Number.isInteger(vlY))) {
        var columns = vlY;
    } else {
        alert('Введите корректное целое число для Y от 1 до 10.');
        y.value = '';
    }

    table.innerHTML = '';

    for (var i = 0; i < columns; i++) {
        var newTDY = document.createElement('TR');
        table.appendChild(newTDY);

        for (var j = 0; j < rows; j++) {
            var newTDX = document.createElement('TD');
            newTDY.appendChild(newTDX);

            if (i % 2 !== j % 2) {
                newTDX.classList.add('black');
            }

            newTDY.appendChild(newTDX);
        }
    }

    table.onclick = function () {
        var allTD = table.querySelectorAll('td');

        for (var k = 0; k < allTD.length; k++) {
            allTD[k].classList.toggle('black');
        }
    };
});



