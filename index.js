
// var randomNumber1 = (Math.floor(Math.random() * 6))+1;
// dice1(randomNumber1);

// var randomNumber2 = (Math.floor(Math.random() * 6))+1;
// dice2(randomNumber2);

// decideWhoWins(randomNumber1 , randomNumber2);

// // Left dice image selecting random numbers

// function dice1(randomNumber1){
//     if(randomNumber1 === 1){
//         document.querySelector(".img1").setAttribute("src" , "images/dice1.png");
//     }
//     else if(randomNumber1 === 2){
//         document.querySelector(".img1").setAttribute("src" , "images/dice2.png");
//     }
//     else if(randomNumber1 === 3){
//         document.querySelector(".img1").setAttribute("src" , "images/dice3.png");
//     }
//     else if(randomNumber1 === 4){
//         document.querySelector(".img1").setAttribute("src" , "images/dice4.png");
//     }
//     else if(randomNumber1 === 5){
//         document.querySelector(".img1").setAttribute("src" , "images/dice5.png");
//     }
//     else if(randomNumber1 === 6){
//         document.querySelector(".img1").setAttribute("src" , "images/dice6.png");
//     }
// }

// //right dice image selecting random numbers

// function dice2(randomNumber2){
//     if(randomNumber2 === 1){
//         document.querySelector(".img2").setAttribute("src" , "images/dice1.png");
//     }
//     else if(randomNumber2 === 2){
//         document.querySelector(".img2").setAttribute("src" , "images/dice2.png");
//     }
//     else if(randomNumber2 === 3){
//         document.querySelector(".img2").setAttribute("src" , "images/dice3.png");
//     }
//     else if(randomNumber2 === 4){
//         document.querySelector(".img2").setAttribute("src" , "images/dice4.png");
//     }
//     else if(randomNumber2 === 5){
//         document.querySelector(".img2").setAttribute("src" , "images/dice5.png");
//     }
//     else if(randomNumber2 === 6){
//         document.querySelector(".img2").setAttribute("src" , "images/dice6.png");
//     }
// }

// Deciding who wins

// function decideWhoWins(randomNumber1 , randomNumber2){
//     if(randomNumber1 === randomNumber2){
//         document.querySelector(".decision").innerHTML = "Draw!";
//     }
//     else if(randomNumber1 > randomNumber2){
//         document.querySelector(".decision").innerHTML = "⛳ Player1 Won!";
//     }
//     else{
//         document.querySelector(".decision").innerHTML = "Player2 Won! ⛳";
//     }
// }


// Another way to do the same thing 👇

var randomNumber1 = (Math.floor(Math.random() * 6))+1;
var randomNumber2 = (Math.floor(Math.random() * 6))+1;

var dice1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src" ,dice1);

var dice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src" ,dice2);

if(randomNumber1 === randomNumber2){
    document.querySelector(".decision").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector(".decision").innerHTML = "⛳ Player1 Won!";
}
else{
    document.querySelector(".decision").innerHTML = "Player2 Won! ⛳";
}
