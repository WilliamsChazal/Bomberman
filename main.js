const player = document.getElementById('player');
const game = document.getElementById('gameContainer');
const moveSize = 24;
var playerWalk = 0;

document.addEventListener('keydown', function(event) {
    console.log(player.style.top);
    console.log(player.style.left);
  if (event.code == 'ArrowUp') {
    if(player.offsetTop >= 24){playerWalk = playerWalk + 1;
      if(playerWalk % 2 == 1)
          this.onkeydown = player.style.backgroundImage="url('assets/dos.png')";
          else{this.onkeydown = player.style.backgroundImage="url('assets/dos2.png')";}
          
  // Votre code ici
  
  player.style.top = (player.offsetTop - moveSize) + "px";}
    
} else if (event.code == 'ArrowRight') {
  if(player.offsetLeft <= 744){
    playerWalk = playerWalk + 1;
    // Votre code ici
    if(playerWalk % 2 == 1)
    this.onkeydown = player.style.backgroundImage="url('assets/droite.png')";
    else{this.onkeydown = player.style.backgroundImage="url('assets/droite2.png')";}


  player.style.left = (player.offsetLeft + moveSize) + "px";
  }
  
} else if (event.code == 'ArrowDown') {
  if(player.offsetTop <= 744){
    playerWalk = playerWalk + 1;
    // Votre code ici
    if(playerWalk % 2 == 1)
    this.onkeydown = player.style.backgroundImage="url('assets/face.png')";
    else{this.onkeydown = player.style.backgroundImage="url('assets/face2.png')";}

  player.style.top = (player.offsetTop + moveSize) + "px";
  console.log (player.style.top);
  }

} else if (event.code == 'ArrowLeft') {
  if(player.offsetLeft >= 24){
    playerWalk = playerWalk + 1;
    // Votre code ici
    if(playerWalk % 2 == 1)
    this.onkeydown = player.style.backgroundImage="url('assets/gauche.png')";
    else{this.onkeydown = player.style.backgroundImage="url('assets/gauche2.png')";}
  player.style.left = (player.offsetLeft - moveSize) + "px";
  }
  
}
});

 let postionTop = player.offsetTop;


