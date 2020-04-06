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

var button = document.body.firstElementChild;

var link1 = firstPar.querySelectorAll('a');

button.onclick = function () {
    for (var i = 0; i < link1.length; i++) {
        link1[i].classList.toggle('checkLink');
    }
};

localStorage.clear();

secondPar.addEventListener('click', function () {
    var target = event.target;
    
    event.preventDefault();

    if (target.tagName !== 'A') {
        return;
    } else if (localStorage.getItem(target.textContent) === null) {
        var obj = {};
        obj.path = target.getAttribute('href');
        localStorage.setItem(target.textContent, JSON.stringify(obj));
        alert('Cсылка была сохранена!');
    } else  {
        alert(JSON.parse(localStorage.getItem(target.textContent)).path);
    }
});




