var button = document.getElementById('main-button'),
	msec = document.getElementById('msec'),
	sec = document.getElementById('sec'),
	min = document.getElementById('min'),
	body = document.getElementsByTagName('BODY')[0];

var msms = msec.textContent,
	ss = sec.textContent,
	mm = min.textContent,
	metks = {},
	counetMetks = 1;

if (localStorage.getItem('metks')) {
	
	counetMetks = (Object.keys(JSON.parse(localStorage.getItem('metks')))).length + 1;
	metks = JSON.parse(localStorage.getItem('metks'));
}

if (localStorage.length) {

	msms = JSON.parse(localStorage.getItem('figures')).msms;
	ss = JSON.parse(localStorage.getItem('figures')).ss;
	mm = JSON.parse(localStorage.getItem('figures')).mm;

	addInfo();
	getLSsave();
}

button.addEventListener('click', addInfo);

function addInfo() {
	if (!button.hasAttribute('data-state')) {
		button.textContent = 'Stop';
		button.setAttribute('data-state', 'run');
		startTimer();
		getButts()
	} else if (button.getAttribute('data-state') === 'run') {
		button.textContent = 'Run';
		button.setAttribute('data-state', 'stop');
		stopTimer();
	} else if (button.getAttribute('data-state') === 'stop') {
		button.textContent = 'Stop';
		button.setAttribute('data-state', 'run');
		startTimer();
	}
};

function startTimer() {

	this.stopWatch = setInterval(function () {
		msms = +msms + 1;

		if (msms < 10) {
			msms = '0' + msms;
		}

		if (msms == 100) {
			msms = '00';
			ss = +ss + 1;

			if (ss < 10) {
				ss = '0' + ss;
			}
		}

		if (ss == 60) {
			ss = '00';
			mm = +mm + 1;

			if (mm < 10) {
				mm = '0' + mm;
			}
		}

		if (mm == 60) {
			clearInterval(this.stopWatch);
			mm = 59;
			ss = '59';
			msms = '99';

			button.classList.add('start');
			body.getElementsByClassName('but-dow')[1].remove();
		}

		msec.textContent = msms;
		sec.textContent = ss;
		min.textContent = mm;

		var figures = {};
		figures.msms = msms;
		figures.ss = ss;
		figures.mm = mm;

		localStorage.setItem('figures', JSON.stringify(figures));
	}, 10);
};

function stopTimer() {
	clearInterval(this.stopWatch);
};

function getButts() {
	var butReset = document.createElement('button');
	butReset.textContent = 'Reset';
	butReset.classList.add('but-dow')
	body.appendChild(butReset);

	var butSave = document.createElement('button');
	butSave.textContent = 'Save';
	butSave.classList.add('but-dow')
	body.appendChild(butSave);

	butSave.addEventListener('click', getSave);

	butReset.onclick = function () {
		stopTimer();
		localStorage.clear();

		counetMetks = 1;
		metks = {};

		button.classList.remove('start');
		button.removeAttribute('data-state');
		button.textContent = 'Start';

		var getRez = body.getElementsByClassName('styleBut');

		var buts = body.getElementsByClassName('but-dow');

		while (getRez[0]) {
			getRez[0].remove();
		}

		while (buts[0]) {
			buts[0].remove();
		}

		msec.textContent = '00';
		sec.textContent = '00';
		min.textContent = '00';

		msms = '00';
		ss = '00';
		mm = '00';
	}
};

function getSave() {
	var cash = counetMetks + ') ' + mm + ' : ' + ss + ' : ' + msms;

	metks[counetMetks] = cash;

	localStorage.setItem('metks', JSON.stringify(metks));

	var result = document.createElement('DIV');
	result.classList.add('styleBut');
	result.textContent = cash;
	body.appendChild(result);
	counetMetks++;
};

function getLSsave() {
	var objMetks = JSON.parse(localStorage.getItem('metks'));

	for (var key in objMetks) {
		var result = document.createElement('DIV');
		result.classList.add('styleBut');
		result.textContent = objMetks[key];
		body.appendChild(result);
	}
};

