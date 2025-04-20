var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDice = "dice" + randomNumber1 +".png";

var randomImg = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src", randomImg);


var randomNumber2 = Math.floor(Math.random() *6)+1;


var randomImg2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImg2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 PLAYER 1 Win!";
}else if(randomNumber1 < randomNumber2){

    document.querySelector("h1").innerHTML="🚩 PLAYER 2 Win!";
}
else{
    document.querySelector("h1").innerHTML="MATCH DRAW";
}