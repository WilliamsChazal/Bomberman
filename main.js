const player = document.getElementById('player');
const game = document.getElementById('gameContainer');
const moveSize = 24;
var playerWalk = 0;

document.addEventListener('keydown', function(event) {
    console.log(player.style.top);
    console.log(player.style.left);
  if (event.code == 'ArrowUp') {
    if(player.offsetTop >=0){ 
      
      playerWalk = playerWalk + 1;
      if(playerWalk % 2 == 1)
          this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/dos-1.png')";
      else
          {this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/dos-2.png')";}
      player.style.top = (player.offsetTop - moveSize) + "px";}
  else {
    player.style.backgroundImage="url('assets/doomGuy/mort-1.png')";
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-2.png')", 500);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-3.png')", 1000);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-4.png')", 1500);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-5.png')", 2000);
  } 
    
} else if (event.code == 'ArrowRight') {
  if(player.offsetLeft <=672){
    playerWalk = playerWalk + 1;
    // Votre code ici
    if(playerWalk % 3 == 1)
      this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/droite-1.png')";
    else{
      this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/droite-2.png')", this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/droite-3.png')";}

  player.style.left = (player.offsetLeft + moveSize) + "px";
  }else {
    player.style.backgroundImage="url('assets/doomGuy/mort-1.png')";
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-2.png')", 500);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-3.png')", 1000);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-4.png')", 1500);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-5.png')", 2000);
  } 
  
} else if (event.code == 'ArrowDown') {
  if(player.offsetTop <= 696){
    playerWalk = playerWalk + 1;
    // Votre code ici
    if(playerWalk % 2 == 1)
    this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/face-1.png')";
    else{this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/face-2.png')";}

  player.style.top = (player.offsetTop + moveSize) + "px";
/*   console.log (player.style.top); */
  }
  else {
    player.style.backgroundImage="url('assets/doomGuy/mort-1.png')";
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-2.png')", 500);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-3.png')", 1000);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-4.png')", 1500);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-5.png')", 2000);
  } 

} else if (event.code == 'ArrowLeft') {
  if(player.offsetLeft >= -5){
    playerWalk = playerWalk + 1;
    // Votre code ici
    if(playerWalk % 2 == 1)
    this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/gauche-1.png')";
    else{this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/gauche-2.png')";}
  player.style.left = (player.offsetLeft - moveSize) + "px";
  }
  else {
    player.style.backgroundImage="url('assets/doomGuy/mort-1.png')";
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-2.png')", 500);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-3.png')", 1000);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-4.png')", 1500);
    setTimeout (()=>player.style.backgroundImage="url('assets/doomGuy/mort-5.png')", 2000);
  } 
}
});

 let postionTop = player.offsetTop;


