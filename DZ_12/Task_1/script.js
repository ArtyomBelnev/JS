// Задание 1 (продолжение предыдущего практ. задания):
//     По кликам на ссылки второго абзаца проверять - если информация об этой ссылке уже записана в LS, выводить в alert путь
//     ссылки из объекта из хранилища, в противном случае записывать информацию о ссылке в LS, где ключом будет являться текст
//     ссылки, а значением объект вида { path: 'https://google.com' }.
//     А также после записи выводить alert с уведомлением о том, что ссылка была сохранена.
//     При загрузке страницы localStorage должен очищаться.

var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google3.by">Link 3</a> and <a href="http://google4.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('BUTTON')[0];

var link1 = firstPar.querySelectorAll('a');
var link2 = secondPar.querySelectorAll('a');

button.onclick = function () {
    for (var i = 0; i < link1.length; i++) {
        link1[i].classList.toggle('changed');
    }
};

localStorage.clear();

link2.forEach(function (item, j) {
    link2[j].addEventListener('click', function () {
        event.preventDefault();

        if (localStorage.getItem(link2[j].innerHTML)) {
            alert((JSON.parse(localStorage.getItem(link2[j].innerHTML))).path);

        } else if (localStorage.getItem(link2[j].innerHTML) === null) {
            var obj = {};
            obj.path = (link2[j].getAttribute('href'));

            localStorage.setItem(link2[j].innerHTML, JSON.stringify(obj));

            alert('Cсылка была сохранена!');
        };
    });
});




