const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    playerWalk = playerWalk + 1;
// Votre code ici
player.style.top = (player.offsetTop - moveSize) + "px";
} else if (event.code == 'ArrowRight') {
  playerWalk = playerWalk + 1;
    // Votre code ici
  player.style.left = (player.offsetLeft + moveSize) + "px";
} else if (event.code == 'ArrowDown') {
  playerWalk = playerWalk + 1;
    // Votre code ici
  player.style.top = (player.offsetTop + moveSize) + "px";
} else if (event.code == 'ArrowLeft') {
  playerWalk = playerWalk + 1;
    // Votre code ici
  player.style.left = (player.offsetLeft - moveSize) + "px";
}
});
