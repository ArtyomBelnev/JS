var button = document.getElementsByClassName('button')[0];
var user_tabs = document.getElementsByClassName('user_tabs')[0];
var info_block = document.getElementsByClassName('info_block')[0];

button.addEventListener('click', function () {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
	xhr.send();

	xhr.onload = function () {
		var statusType = +String(this.status)[0];

		if (statusType === 2) {
			var dataUsers = JSON.parse(this.response).data;
			userList(dataUsers);
		}
	};


	xhr.onerror = function () {
		console.error(this.status);
	};


	xhr.onloadend = function () {
		console.log('Запрос завершен');
	};
});

function userList(arr) {

	// arr.forEach(function (item, i) {
	// 	localStorage.setItem(item.id, JSON.stringify(item));
	// });
	for (var key in arr) {
		localStorage.setItem(key, JSON.stringify(arr[key]));
	}

	for (var i = 1; i < localStorage.length + 1; i++) {
		var newN = document.createElement('DIV');
		newN.innerHTML = 'User ' + i;
		user_tabs.appendChild(newN);
		newN.id = i;
	}

	
};

user_tabs.addEventListener('click', function addInput(event) {
		var target = event.target.id;
		var info = target - 1;

		if (info_block.getElementsByTagName('DIV')[0]) {
			info_block.getElementsByTagName('DIV')[0].remove();
		}
			var photo = JSON.parse(localStorage.getItem(info)).avatar;

			var newB = document.createElement('DIV');
			info_block.appendChild(newB);
			newB.classList.remove('block');
	
			var userPhoto = document.createElement('img');
			userPhoto.setAttribute('src', photo);
			newB.appendChild(userPhoto);

	});



// for (var j = 0; j < localStorage.length; j++) {
	
// }
	// var newDiv = document.createElement('DIV');
	// newDiv.innerHTML = 'User ' + i;
	// info_block.appendChild(newDiv);
	// newDiv.classList.add('block');
	// user_tabs.addEventListener('click', function addInput(event) {
	// 	var target = event.target;

	// 	if (target.tagName === 'DIV') {
	// 		newB.classList.remove('block');
	// 	}
	










// var newDiv = document.createElement('DIV');
// newDiv.innerHTML = 'User ' + i;
// info_block.appendChild(newDiv);
// newDiv.classList.toggle('block'); 