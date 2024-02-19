let red = document.getElementById("reds")
let yellow = document.getElementById("yellows")
let green = document.getElementById("greens")

function redcolor(){
  red.style.boxShadow="0 0 20px 10px red"
  yellow.style.boxShadow=""
  green.style.boxShadow=""
}

function yellowcolor(){
  red.style.boxShadow=""
  yellow.style.boxShadow="0 0 20px 10px yellow"
  green.style.background=""
}

function greencolor(){
  red.style.boxShadow=""
  yellow.style.boxShadow=""
  green.style.boxShadow="0 0 20px 10px green"
}