
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






