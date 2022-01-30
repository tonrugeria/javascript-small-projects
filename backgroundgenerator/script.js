var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var button = document.querySelector("button")



function colors() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";"
}

// linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));

function generateTwoRandomColors() {
    var r1 = Math.round(Math.random() * 255)
    var g1 = Math.round(Math.random() * 255)
    var b1 = Math.round(Math.random() * 255)

    var r2 = Math.round(Math.random() * 255)
    var g2 = Math.round(Math.random() * 255)
    var b2 = Math.round(Math.random() * 255)

    // var newColor1 = rgb(r1,g1,b1)
    // var newColor2 = rgb(r2,g2,b2)
    var backgroundColor = body.style.background = 
    "linear-gradient(to right, " 
    + "rgb("
    +  r1 + ", " +  g1 + ", " +  b1 + "), "
    + "rgb("
    +  r2 + ", " +  g2 + ", " +  b2 + "))" 

    css.textContent = body.style.background + ";"
    // color1.value = newColor1
    // color2.value = newColor2

    console.log(backgroundColor)
}


colors()
console.log(generateTwoRandomColors)


// color1.addEventListener("input", colors)

// color2.addEventListener("input", colors)