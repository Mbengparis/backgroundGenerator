var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".random");


//Changes the colour input 
function setGradient(){
    setBackground()
    css.textContent = body.style.background + ";";
 }
 //Makes cure that the input remains same and displas the original text of the background color
 function setBodyGradient(){
     setBackground();  
   css.textContent = "linear-gradient(to right, red , yellow)";
 
 }
 //it change the background color
 function setBackground(){
     body.style.background = "linear-gradient(to right, " 
     + color1.value 
     + ", " 
     + color2.value + ")";
 }

//it generates a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


//because of the linear-gradient, it changes the backgroud colour of the two inputs randomly 
function generateRandomNumber(){
 body.style.background = "linear-gradient(to right," 
 + getRandomColor()
 + "," 
 + getRandomColor() +")";
css.textContent = body.style.background;
color1.value = getRandomColor();
color2.value = getRandomColor();
// color1.value = color1;
// color2.value = color22;
body.style.background = "linear-gradient(to right, " 
+ color1.value
+ ", " 
+ color2.value + ")";
}




color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

//The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

window.addEventListener("load", setBodyGradient)
btn.addEventListener("click", generateRandomNumber)