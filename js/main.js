/*-----------------VARIABLES-------------------*/

const bannerOut = document.getElementById('startBanner');//
var song = new Audio(['./mp3/march.mp3']);
var game = null
var ball = document.querySelector('#ball');
var score = 0;
var sec = 0
/*-----------------EVENT LISTENER-------------------*/

document.addEventListener('keydown', function(evt){
   switch(evt.keyCode){
      case 13:
      startGame();
      break;
   }
});

document.addEventListener('keydown', move);

/*-----------------INIT-------------------*/
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
   song.currentTime = 0;
   song.play();  
   timer();
}
/*-----------------FUNCTIONS -------------------*/

function pad ( val ) { return val > 9 ? val : "0" + val; }

/*-----------------PLAYER COMANDS-------------------*/ 

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
/*-----------------GAME OVER-------------------*/
function gameOver() {   
   
   song.pause();
   ball.style.display = 'none';
   bannerOut.style.display = 'block';
   bannerOut.innerHTML = `game over <br> score is: ${score} <br></br> Press Enter to play </br>again`;
   bannerOut.style.fontFamily = '"Press Start 2P", cursive';
   bannerOut.style.textAlign = 'center';
   bannerOut.style.paddingTop = '30px';

   switch(evt.keyCode){
      case 13:
      startGame();
      song.
      break;
   }
}
var hit = setInterval(function(){
   
   if((newRock.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock.style.left))) {
      
      game = 'over';
      newRock.style.display = 'hidden'
      gameOver();
   }else if((newRock2.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock2.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock2.style.left))) {
      // ball.remove();
      game = 'over';
      newRock2.style.display = 'hidden'
      gameOver();
   }else if((newRock3.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock3.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock3.style.left))) {
      // ball.remove();
      game = 'over';
      newRock3.style.display = 'hidden'
      gameOver();
   }else if((newRock4.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock4.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock4.style.left))) {
      // ball.remove();
      game = 'over';
      newRock4.style.display = 'hidden'
      gameOver();
   }else if((newRock5.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock5.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock5.style.left))) {
      // ball.remove();
      game = 'over';
      newRock5.style.display = 'hidden'
      gameOver();
   }
}, 1);