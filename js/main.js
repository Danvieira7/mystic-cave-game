/*-----------------Start Button-------------------*/
var start = document.getElementById('start');
start.addEventListener('click', startGame);
var game = null


function startGame(){
   var myLoop = setInterval(function() {
      RockSimulator();
   }, 3000);
   if(game === 'over'){
      clearInterval(myLoop)
   }
   
  
}
function gameOver() {
   clearInterval(myLoop)
   alert('game over')
}
 
/*-----------------PLayer commands-------------------*/ 
var ball = document.querySelector('#ball');
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
      // case 38:
      // moveUp();
      // break;
      case 39:
      moveRight();
      break;
      // case 40:
      // moveDown();
      // break;
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
      console.log('hello')
      newRock.style.display = 'hidden'
      console.log(newRock.style.display)
      // clearInterval(hit)
      game = 'over'
      // clearInterval(myLoop)
      // gameOver()
      // alert('rock 1 hit')
   }
   if((newRock2.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock2.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock2.style.left))) {
      console.log('hello2')
      newRock2.style.display = 'hidden'
      console.log(newRock2.style.display)
      // clearInterval(hit)
      game = 'over'
      // clearInterval(myLoop)
      // gameOver()
      // alert('rock 2 hit')
   }
   
   if((newRock3.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock3.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock3.style.left))) {
      console.log('hello3')
      newRock3.style.display = 'hidden'
      console.log(newRock3.style.display)
      // clearInterval(hit)
      game = 'over'
      
      // clearInterval(myLoop)
      // gameOver()
      // alert('rock 3 hit')
   }
   
   if((newRock4.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock4.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock4.style.left))) {
      console.log('hello4')
      newRock4.style.display = 'hidden'
      console.log(newRock4.style.display)
      // clearInterval(hit)
      game = 'over'
      
      // clearInterval(myLoop)
      // gameOver()
      // alert('rock 4  hit')
   }
   
   if((newRock5.style.top === '380px') 
   && (parseInt(ball.style.left) +40 >= parseInt(newRock5.style.left))
   && (parseInt(ball.style.left) -20 <= parseInt(newRock5.style.left))) {
      console.log('hello5')
      newRock5.style.display = 'hidden'
      console.log(newRock5.style.display)
      // clearInterval(hit)
      game = 'over'

      // clearInterval(myLoop)
      // gameOver()
      // alert('rock 5 hit')
   }
}, 1);

// function goneRocks (){
//    if(newRock.style.top >= 400){
//       console.log(newRock.style.top);
//       newRock.remove();
//    }
//    if(newRock2.style.top >= 400){
//       newRock2.remove();
//    }
//    if(newRock3.style.top >= 400){
//       newRock3.remove();
//    }
//    if(newRock.style.top >= 400){
//       newRock.remove();
//    }
//    if(newRock2.style.top === 400){
//       newRock2.remove();
//    }
// }


// goneRocks();