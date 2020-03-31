
function addRow(id) {
    var newStrong = document.getElementById(id).getElementsByTagName('TBODY')[0];
    var row = document.createElement("TR"),
        td1 = document.createElement("TD"),
        td2 = document.createElement("TD"),
        td3 = document.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    td1.innerHTML = '<input type="text">';
    td2.innerHTML = '<input type="text">';
    td3.innerHTML = '<input type="text">';
    newStrong.appendChild(row);
}

document.getElementsByTagName("INPUT").style.display = "block";

// function onInput() {
//     var input = document.getElementById(id):

// }
// var container = document.getElementById('container');
// container.style.color = 'red';

// var firstPar = document.createElement('p'),
//     secondPar = document.createElement('p');

// firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
// secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 5</a> and <a href="http://google.by">Link 4</a>';


// container.appendChild(firstPar);


// // container.setAttribute(about, Hello);



// // container.setAttribute('data-about', '123');
// // alert(container.getAttribute('data-about'));

// document.body.className = 'class1 class2';
// container.classList.toggle('ex1');



