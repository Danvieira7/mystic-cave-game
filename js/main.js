/*-----------------INIT-------------------*/

/*-----------------CONST-------------------*/
const bannerOut = document.getElementById('startBanner');
var song = new Audio(['./mp3/march.mp3']);
var game = null
var ball = document.querySelector('#ball');
var score = 0;
var sec = 0
// var score = 0

/*-----------------Start Button-------------------*/
document.addEventListener('keydown', function(evt){
   switch(evt.keyCode){
      case 13:
      startGame();
      break;
   }
});

function startGame(){
   score = 0;
   var myLoop = setInterval(function() {
      RockSimulator();
   }, 3000);
   
   var time = setInterval( function(){
      document.getElementById("seconds").innerHTML=pad(++sec%60);
      document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
      if(sec%5 === 0){score += 10;}
   }, 1000);
   
   if(game === 'over'){
      sec = 0
      score = 0
      clearInterval(time)
      clearInterval(myLoop)
   }
   //DOM reset 
   bannerOut.style.display = 'none';
   ball.style.display = 'block';
   song.play();  
   timer();
}


function gameOver() {   
   
   ball.style.display = 'none';
   bannerOut.style.display = 'block';
   bannerOut.innerHTML = `game over <br> score is: ${score} <br> Press Enter to play again`;
   bannerOut.style.fontFamily = '"Press Start 2P", cursive';
   
   
   switch(evt.keyCode){
      case 13:
      startGame();
      break;
   }
   
}

/*-----------------PLayer commands-------------------*/ 
ball.style.top = '420px'
const screen = document.getElementById('screen');

function moveLeft(){
   if (typeof ball.style.left !== 'number' && ball.style.left === '') {
      ball.style.left = 0;
   }
   if(parseInt(ball.style.left) > 15){
      ball.style.left = parseInt(ball.style.left) -   20+'px';
   }
}

function moveRight(){
   if (typeof ball.style.left !== 'number' && ball.style.left === '') {
      ball.style.left = 0;
   }
   if(parseInt(ball.style.left) < 915){
      ball.style.left = parseInt(ball.style.left) +   20+'px'
   }
}

function move(evt){
   switch(evt.keyCode){
      case 37:
      moveLeft();
      break;
      case 39:
      moveRight();
      break;
   }
}
document.addEventListener('keydown', move);


/*-----------------Falling Rocks-------------------*/
var newRock = document.createElement('div')
var newRock2 = document.createElement('div')
var newRock3 = document.createElement('div')
var newRock4 = document.createElement('div')
var newRock5 = document.createElement('div')

function RockSimulator() { 
   newRock.setAttribute("class", "rock");
   newRock2.setAttribute("class", "rock");
   newRock3.setAttribute("class", "rock");
   newRock4.setAttribute("class", "rock");
   newRock5.setAttribute("class", "rock");
   
   newRock.style.top = '10px'
   newRock2.style.top = '10px'
   newRock3.style.top = '10px'
   newRock4.style.top = '10px'
   newRock5.style.top = '10px'
   
   screen.appendChild(newRock);
   screen.appendChild(newRock2);
   screen.appendChild(newRock3);
   screen.appendChild(newRock4);
   screen.appendChild(newRock5);
   
   newRock.style.left = `${Math.floor(Math.random() * 40) * 20}px`
   newRock2.style.left = `${Math.floor(Math.random() * 40) * 20}px`
   newRock3.style.left = `${Math.floor(Math.random() * 40) * 20}px`
   newRock4.style.left = `${Math.floor(Math.random() * 40) * 20}px`
   newRock5.style.left = `${Math.floor(Math.random() * 40) * 20}px`
   
   var pos = 0
   var id = setInterval(frame, 5);
   
   function frame() {
      if (pos == 430) {
         newRock.style.display = 'none'
         newRock2.style.display = 'none'
         newRock3.style.display = 'none'
         newRock4.style.display = 'none'
         newRock5.style.display = 'none'
         clearInterval(id);
      } else {
         pos++; 
         newRock.style.display = ''
         newRock2.style.display = ''
         newRock3.style.display = ''
         newRock4.style.display = ''
         newRock5.style.display = ''
         newRock.style.top = pos + 'px';  
         newRock2.style.top = pos + 'px';
         newRock3.style.top = pos + 'px';
         newRock4.style.top = pos + 'px';
         newRock5.style.top = pos + 'px';  
      }
   }
}

var hit = setInterval(function(){
   
   if((newRock.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock.style.left))) {
      
      newRock.style.display = 'hidden'
      game = 'over';
      gameOver();
   }else if((newRock2.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock2.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock2.style.left))) {
      // ball.remove();
      newRock2.style.display = 'hidden'
      game = 'over';
      gameOver();
   }else if((newRock3.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock3.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock3.style.left))) {
      // ball.remove();
      newRock3.style.display = 'hidden'
      game = 'over';
      gameOver();
   }else if((newRock4.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock4.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock4.style.left))) {
      // ball.remove();
      newRock4.style.display = 'hidden'
      game = 'over';
      gameOver();
   }else if((newRock5.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock5.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock5.style.left))) {
      // ball.remove();
      newRock5.style.display = 'hidden'
      game = 'over';
      gameOver();
   }
}, 1);
/*-----------------Timer-------------------*/

function pad ( val ) { return val > 9 ? val : "0" + val; }
// var timer = function(){
//    if(startGame){
//       var time = setInterval( function(){
//          document.getElementById("seconds").innerHTML=pad(++sec%60);
//          document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
//          if(sec%5 === 0){score += 10;}
//       }, 1000);
//    }
//    // else if(gameOver){
//    //    // clearInterval(time)
//    //    sec = 0;
//    //    score = 0
//    //    document.getElementById("seconds").innerHTML=pad(++sec%60);
//    //    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
//    // }
// } 



