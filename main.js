const player = document.getElementById('player');
const moveSize = 12;
var playerWalk = 0;

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    playerWalk = playerWalk + 1;
// Votre code ici
player.style.backgroundImage="url('assets/dos.png')"
player.style.top = (player.offsetTop - moveSize) + "px";
} else if (event.code == 'ArrowRight') {
  playerWalk = playerWalk + 1;
    // Votre code ici
      player.style.backgroundImage="url('assets/droite.png')" 
  player.style.left = (player.offsetLeft + moveSize) + "px";
} else if (event.code == 'ArrowDown') {
  playerWalk = playerWalk + 1;
    // Votre code ici
    player.style.backgroundImage="url('assets/face.png')"
  player.style.top = (player.offsetTop + moveSize) + "px";
} else if (event.code == 'ArrowLeft') {
  playerWalk = playerWalk + 1;
    // Votre code ici
    player.style.backgroundImage="url('assets/gauche.png')"
  player.style.left = (player.offsetLeft - moveSize) + "px";
}
});



document.addEventListener('keyup', function(event) {
    if (event.code == 'ArrowUp') {
      playerWalk = playerWalk ;
  // Votre code ici
  player.style.backgroundImage="url('assets/dos2.png')"
  player.style.top = (player.offsetTop - moveSize) + "px";
  } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk ;
      // Votre code ici
        player.style.backgroundImage="url('assets/droite2.png')" 
    player.style.left = (player.offsetLeft + moveSize) + "px";
  } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk ;
      // Votre code ici
      player.style.backgroundImage="url('assets/face2.png')"
    player.style.top = (player.offsetTop + moveSize) + "px";
  } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk ;
      // Votre code ici
      player.style.backgroundImage="url('assets/gauche2.png')"
    player.style.left = (player.offsetLeft - moveSize) + "px";
  }
  });
