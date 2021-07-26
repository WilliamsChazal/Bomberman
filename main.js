const player = document.getElementById('player');
const game = document.getElementById('gameContainer');
const moveSize = 24;
let playerWalk = 0;
count = 0;

// Génération aléatoire du décor
addTileSet();
function addTileSet(){
    for (let i = 0; i < 50; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'tileset')
        div.setAttribute('id', 'tileset-'+i)
        document.getElementById('gameContainer').appendChild(div);
        positionTileSet(div);
    }
}
function getRandomPosition(){
    let randomX = Math.floor(Math.random()*24);
    let randomY = Math.floor(Math.random()*24);
    return[randomX,randomY];
}
function positionTileSet(tileset){
    let randomPosition = getRandomPosition();
    let x = randomPosition[0]*32;
    let y = randomPosition[1]*32;
    tileset.style.top = x + 'px';
    tileset.style.left = y + 'px';
}

addWall();
function addWall() {
  x = 0
  ymin = 0
  ymax = 700
  while (x < game.offsetWidth) {
    let div =document.createElement('div');
    div.setAttribute('class', 'wall')
    document.getElementById('gameContainer').appendChild(div);
    div.style.top = x + 'px';
    div.style.left = ymin + 'px';
    
   div =document.createElement('div');
    div.setAttribute('class', 'wall')
    document.getElementById('gameContainer').appendChild(div);
    div.style.top = x + 'px';
    div.style.left = game.offsetWidth - div.offsetWidth + 'px';
    x = x+div.offsetWidth
  }
  
}



document.addEventListener('keydown', function(event) {
    console.log(player.style.top);
    console.log(player.style.left);
  if (event.code == 'ArrowUp') {
    if(player.offsetTop >=0 && !colisionDetect (player,player.offsetLeft, player.offsetTop - moveSize, enemies [0])){ 
        
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
    setTimeout (()=>alert('dead'), 2500);
    
  } 
    
} else if (event.code == 'ArrowRight') {
  if(player.offsetLeft <=672){
    playerWalk = playerWalk + 1;
    // Votre code ici
    if(playerWalk % 2 == 1)
      this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/droite-1.png')";
    else{
      this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/droite-2.png')";} 
/*       this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/droite-3.png')";
      this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/droite-1.png')";} */

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
    count ++;
    this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/face-" + count + ".png')";
    if (count >= 4 ) count=0
    /* else if (playerWalk % 2 == 0 && count == 1){ this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/face-2.png')";}
    else if (playerWalk % 2 == 1 && count == 0){ this.onkeydown = player.style.backgroundImage="url('assets/doomGuy/dos-1.png')";} */
   

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







// 

colisionDetect(player,player.offsetLeft, player.offsetTop, enemies [0]);
});

 let postionTop = player.offsetTop;


 const doomGuy = document.getElementById('player');
 const enemies = document.getElementsByClassName('enemies');
 /* colisionDetect(doomGuy.offsetLeft, doomGuy.offsetTop, enemies [0]); */
 function colisionDetect(ref_obj, new_x, new_y, obj){
     if ((new_y < obj.offsetTop + obj.offsetHeight &&
         new_y + ref_obj.offsetHeight > obj.offsetTop) &&
         (new_x < obj.offsetLeft + obj.offsetWidth &&
         new_x + ref_obj.offsetWidth > obj.offsetLeft)) {
             console.log('boom'); 
         return true;} 
     else {
         return false}
           
 }