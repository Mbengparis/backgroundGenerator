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
 //it changse the background color
 function setBackground(){
     body.style.background = "linear-gradient(to right, " 
     + color1.value 
     + ", " 
     + color2.value + ")";
 }

//it generates a random backgroud color
function getRandomColor() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

//because of the linear-gradient, it changes the backgroud colour of the two inputs randomly 
function generateRandomNumber(){
 body.style.background = "linear-gradient(to right," 
 + getRandomColor()
 + "," 
 + getRandomColor() +")";
css.textContent = body.style.background;
}





color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

//The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

window.addEventListener("load", setBodyGradient)
btn.addEventListener("click", generateRandomNumber)