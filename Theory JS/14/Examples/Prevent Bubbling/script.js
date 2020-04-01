/**************************************************************
  ЗДЕСЬ НАВЕШИВАЕМ ОБРАБОТЧИКИ КЛИКА НА РОДИТЕЛЬСКИЕ ЭЛЕМЕНТЫ
**************************************************************/

var parentContainers = document.getElementsByClassName('container');

for (var i = 0; i < parentContainers.length; i++) {
    parentContainers[i].onclick = function() {
        alert('Parent Container Click');
    };
}

/*******************
  ОБЫЧНОЕ ВСПЛЫТИЕ
*******************/

var childContainer = document.getElementsByClassName('container__child')[0];

childContainer.addEventListener('click', function() {
    alert('Child Container Click 1');
}, false);

/***************************************************
  ОСТАНОВКА ВСПЛЫТИЯ через event.stopPropagation()
***************************************************/

var childContainerWithStopBubbling = document.getElementsByClassName('container__child')[1];

// Объект с информацией о событии event всегда попадает внутрь функции первым параметром, называть его можно по-любому
childContainerWithStopBubbling.addEventListener('click', function(event) {
    event.stopPropagation();

    alert('Child Container Click 1');
}, false);

/************************************************************
  ОСТАНОВКА ВСПЛЫТИЯ через event.stopImmediatePropagation()
************************************************************/

var childContainerWithStopAll = document.getElementsByClassName('container__child')[2];

childContainerWithStopAll.addEventListener('click', function(event) {
    event.stopImmediatePropagation();

    alert('Child Container Click 1');
}, false);

/***********************************************************************************************
  ПРЕДОТВРАЩЕНИЕ ОБРАБОТКИ КЛИКА ПО ССЫЛКЕ БРАУЗЕРОМ ПО-УМОЛЧАНИЮ через event.preventDefault()
***********************************************************************************************/

var childContainerWithStopDefault = document.getElementsByClassName('container__child')[3];

childContainerWithStopDefault.addEventListener('click', function(event) {
    event.preventDefault();

    alert('Child Container Click 1');
}, false);

/*************************************************************************
  ЗДЕСЬ НАВЕШИВАЕМ ПО 2-ОМУ ОБРАБОТЧИКУ КЛИКА НА ТЕ ЖЕ ДОЧЕРНИЕ ЭЛЕМЕНТЫ
*************************************************************************/

// Если установить второй обработчик клика на элемент, у которого уже есть обработчик(и) клика, через синтаксис
// el.onclick - последний обработчик перезапишет предыдущие, поэтому используем синтаксис el.addEventListener в данной ситуации
var childContainers = document.getElementsByClassName('container__child');

for (var j = 0; j < parentContainers.length; j++) {
	childContainers[j].addEventListener('click', function() {
		alert('Child Container Click 2');
	}, false);
}

// Вся логика, описанная выше, работает и с другими событиями, не только с кликами