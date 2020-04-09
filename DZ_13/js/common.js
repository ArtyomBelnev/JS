var button = document.getElementsByClassName('button')[0];
var user_tabs = document.getElementsByClassName('user_tabs')[0];
var info_block = document.getElementsByClassName('info_block')[0];

localStorage.clear();

button.addEventListener('click', function () {
	var xhr = new XMLHttpRequest();

	// xhr.open('GET', 'https://reqres.in/api/users/23', true);
	xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
	xhr.send();

	xhr.onload = function () {
		var statusType = +String(this.status)[0];
		
		if (statusType === 2) {
			if(localStorage.length === 0) {
				var dataUsers = JSON.parse(this.response).data;
				userList(dataUsers);
			} 
		} else if (statusType === 4) {
			window.location.pathname = "/404.html";
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

	for (var key in arr) {
		localStorage.setItem(key, JSON.stringify(arr[key]));
	}

	for (var i = 1; i < localStorage.length + 1; i++) {
		var newN = document.createElement('DIV');
		newN.innerHTML = 'User ' + i;
		user_tabs.appendChild(newN);
		newN.id = i;
	}

	var id1 = user_tabs.firstElementChild.id;
	addInfo(event, id1);
	button.remove();
};


user_tabs.addEventListener('click', addInfo);

function addInfo(event, id) {
	var targe = event.target.id;
	var info = targe - 1;

	if (targe === undefined) {
		info = id - 1;
		user_tabs.firstElementChild.classList.add('red');
	}

	if (info_block.getElementsByTagName('DIV')[0]) {
		info_block.getElementsByTagName('DIV')[0].remove();
	}

	var photo = JSON.parse(localStorage.getItem(info)).avatar;
	var firstName = JSON.parse(localStorage.getItem(info)).first_name;
	var lastName = JSON.parse(localStorage.getItem(info)).last_name;

	var div1 = document.createElement('DIV');
	info_block.appendChild(div1);
	div1.classList.add('tabs')
	div1.classList.remove('block');

	var div2 = document.createElement('DIV');
	div1.appendChild(div2);

	var div3 = document.createElement('DIV');
	div1.appendChild(div3);

	var userPhoto = document.createElement('img');
	userPhoto.setAttribute('src', photo);
	div2.appendChild(userPhoto);

	var inf = document.createElement('P');
	inf.textContent = 'User  Name: ' + firstName;
	div3.appendChild(inf);

	var inf = document.createElement('P');
	inf.textContent = 'User First Name: ' + lastName;
	div3.appendChild(inf);
}

user_tabs.onclick = function (event) {
	var target = event.target;

	if (user_tabs.getElementsByClassName('red')[0]) {
		user_tabs.getElementsByClassName('red')[0].classList.remove('red');
	}
	target.classList.add('red');
};





