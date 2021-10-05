var x = document.getElementById("openMenu");
var changeRed = document.getElementById("redBackground");
var changeOrange = document.getElementById("orangeBackground");
var changePurple = document.getElementById("purpleBackground");
var changeGreen = document.getElementById("greenBackground");
var body = document.body;


function menuAanUit() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function menuUit() {
  x.style.display = "none";
}

function changeColor(color) {
  document.body.style.background = color;
}

if (changeRed) {
  changeRed.addEventListener('click', function () {
    changeColor(red);
  })
}

if (changeOrange) {
  changeOrange.addEventListener('click', function () {
    changeColor(orange);
  })
}
if (changePurple) {
  changePurple.addEventListener('click', function () {
    changeColor(purple);
  })
}
if (changeGreen) {
  changeGreen.addEventListener('click', function () {
    changeColor(green);
  })
}
