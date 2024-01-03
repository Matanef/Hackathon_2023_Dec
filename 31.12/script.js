let currentPosition = 0;
let colors = ['red', 'blue', 'yellow', 'green'];
let currentColorIndex = 0;
const div1 = document.getElementById('blue-circle');
const div2 = document.getElementById('green-circle');
console.log(div1);

function myFunction() {
    div1.style.animation = "square-to-circle 1.5s 1";
    // div1.style.top = currentPosition + 'px';
    // div1.style.left = currentPosition + 'px';
    div1.style.background = url("images.jpg");
    // currentPosition = (currentPosition + 100) % 200;
    // currentColorIndex = (currentColorIndex + 1) % colors.length;

  }
  setInterval(animate, 2000);

div1.addEventListener("animationstart", myStartFunction);
div1.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  }
  function myEndFunction() {
  }

  function myFunction_green() {
    div2.style.animation = "square-to-circle 1.5s 1";
    div2.style.backgroundImage= url("c0106900-800px-wm.jpg");
  }
  setInterval(animate, 2000);

div2.addEventListener("animationstart", myStartFunction);
div2.addEventListener("animationend", myEndFunction);

function myStartFunction_green() {
    div2.style.backgroundImage= url("c0106900-800px-wm.jpg"); 
    div2.style.backgroundSize="270px";
  }
  function myEndFunction_green() {

  }