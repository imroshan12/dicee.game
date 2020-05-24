function random() {
    var randomNum = Math.random();
randomNum = randomNum * 6 + 1;
randomNum = Math.floor(randomNum);
return randomNum;
}

var x = random();
var y = random();

document.querySelector("img.img1").src = "images/dice" + x + ".png";
document.querySelector("img.img2").src = "images/dice" + y + ".png";

if(x == y) {
  document.querySelector("h1").innerHTML = "Draw";
}
else if(x > y) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
