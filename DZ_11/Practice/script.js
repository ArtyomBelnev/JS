// Практическое задание (продолжение предыдущего задания):
//   По клику на имеющуюся кнопку (получать ее по тегу) найти все дочерние ссылки у первого абзаца с помощью возможностей
//   DOM-навигации и произвести соответствующие действия с ссылками (задание стилей лучше использовать через добавление css-класса).
//   Установить событие клика на второй абзац другим способом. Если пользователь нажимает на ссылки 2-го абзаца, необходимо
//   отменить им поведение по-умолчанию и вывести alert со значением атрибута href ссылки.

var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';

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


link2.forEach(function (item, j) {
    link2[j].addEventListener('click', function () {
        event.preventDefault();
        alert(link2[j].getAttribute('href'));
    });
});




