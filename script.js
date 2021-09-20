// Evento barra de navegação lateral

function toggleMenu(){
  let navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
  let toggle = document.querySelector('.toggle');
  toggle.classList.toggle('active')
}

// Evento iframes

let time = 3000,
currentIframeIndex = 0,
iframes = document.querySelectorAll('.iframe iframe');

button01 = document.getElementById('01');
button02 = document.getElementById('02');
button03 = document.getElementById('03');
button04 = document.getElementById('04');
button05 = document.getElementById('05');
button06 = document.getElementById('06');

buttons = document.querySelectorAll('.navigation a');

console.log(buttons)