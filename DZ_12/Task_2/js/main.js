var button = document.getElementById('button');
var x = document.getElementById('inX');
var y = document.getElementById('inY');
var inputs = document.querySelectorAll('input');
var table = document.getElementById('table');
button.setAttribute('disabled', 'disabled');


inputs.forEach(function (item, i) {
    inputs[i].addEventListener('keyup', function () {
        if (event.keyCode !== 32) {
            button.removeAttribute('disabled');
            
            if((x.value.trim() === '') || (y.value.trim() === '')) {
                 button.setAttribute('disabled', 'disabled');
            }
        } 
    });
});

button.addEventListener('click', function() {
    var vl = Number(x.value.trim());
    var vl2 = Number(y.value.trim());

    table.innerHTML = '';

     if (((vl >= 1) && (vl < 10)) && (Number.isInteger(vl))) {
        var rows = x.value;
     } else {
        alert('Введите корректное целое число для X от 1 до 10.');
        x.value = '';
        y.value = '';
     }

     if (((vl2 >= 1) && (vl2 < 10)) && (Number.isInteger(vl2))) {
        var columns = y.value;
    } else {
        alert('Введите корректное целое число для Y от 1 до 10.');
        x.value = '';
        y.value = '';
    }

    for (var i = 0; i < columns; i++) {
        var newTDY = document.createElement('tr');
        table.appendChild(newTDY);

        for (var j = 0; j < rows; j++) {
            var newTDX = document.createElement('td');
            newTDY.appendChild(newTDX);

            if (i % 2 !== j % 2) {
                newTDX.classList.add('black');
            }

            newTDY.appendChild(newTDX);
        }
    }

    

    table.onclick = function (event) {
        var target = event.target;
        var allTD = table.querySelectorAll('td');
        // if (target.tagName != 'TD') return;
        // if (!target.classList.contains('black')) return;
        // allTD.forEach(function (el) {
        //     el.classList.toggle('black');
        // });

        for (var k = 0; k < allTD.length; k++) {
            allTD[k].classList.toggle('black');
        }
    };
});



