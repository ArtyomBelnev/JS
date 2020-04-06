// Задание 1:
//     Сверстать таблицу из 3х столбцов, в последней строке которой все ячейки объеденены в одну с текстом
//     "Добавить" - см. скрин.
//     По клику на эту ячейку-кнопку в начало таблицы должна добавляться новая строка.
//     По клику на ячейку таблицы, в ней должен появиться сфокусированный (!!!) текстовый инпут.
//     При потере фокуса инпутом - он должен исчезнуть, на его месте остается лишь ранее введенный в него текст.
//     При клике на ячейку, уже содержащую текст - вставляется инпут с этим же текстом (т.е. можно отредактировать текст).
//     В одно время в таблице может находиться только один активный инпут.
//     При реализации использовать делегирование событий.

//     Добавить событие по нажатию на Enter в случае, если на странице есть активный инпут. Событие должно работать точно
//     так же, как и потеря фокуса, то есть прятать инпут и оставлять в ячейке текст. *


var table = document.getElementById('table');
var button = document.getElementById('button');

button.addEventListener('click', function addRow() {
    var row = document.createElement("TR"),
        td1 = document.createElement("TD"),
        td2 = document.createElement("TD"),
        td3 = document.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    table.prepend(row);
});


table.addEventListener('click', function addInput() {
    var td = event.target;

    if (td.id === 'button') {
        return
    }

    var input = document.createElement('input');
    input.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(input);
    input.focus();

    input.addEventListener('blur', function () {
        td.innerHTML = input.value;
    });

    input.addEventListener('keyup', function () {
        if (event.keyCode === 13) {
            td.innerHTML = input.value;
        }
    });
});














// tible.addEventListener('click', function addInput() {
//     var td = event.target;
//     var text = td.innerHTML;
//     var input = document.createElement('input');
//     td.appendChild(input);
//     text = input.value;
//     input.focus();

//     var self = this;
//     input.addEventListener('blur', function () {
//         td.innerHTML = this.value;
//         tible.addEventListener('click', addInput);
//     });

// });






