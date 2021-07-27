const doomGuy = document.getElementById('player');
const enemies = document.getElementsByClassName('enemies');
const tileset = document.getElementsByClassName('tileset');
const game = document.getElementById('gameContainer');
const moveSize = 24;
let doomGuyWalk = 0;
count = 0;
let postionTop = doomGuy.offsetTop;
let postionLeft = doomGuy.offsetLeft;



//Fonction de collision
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

function colisionDetectList(ref_obj, new_x, new_y, list) {
    for (let y = 0; y < list.length; y++){
          if (colisionDetect (ref_obj,new_x, new_y, (list [y]))) {
            console.log('mur');
            return true;
          }
        } return false 
}


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


//Fonction de la mort du doomGuy
function doomGuyDead() {
  doomGuy.style.backgroundImage="url('assets/doomGuy/mort-1.png')";
    setTimeout (()=>doomGuy.style.backgroundImage="url('assets/doomGuy/mort-2.png')", 100);
    setTimeout (()=>doomGuy.style.backgroundImage="url('assets/doomGuy/mort-3.png')", 300);
    setTimeout (()=>doomGuy.style.backgroundImage="url('assets/doomGuy/mort-4.png')", 500);
    setTimeout (()=>doomGuy.style.backgroundImage="url('assets/doomGuy/mort-5.png')", 700);
    /* setTimeout (()=>alert('dead'), 2500); */
}

//Fonction de déplacement du DoomGuy
document.addEventListener('keydown', function(event) {
/*     console.log(doomGuy.style.top);
    console.log(doomGuy.style.left); */
  if (event.code == 'ArrowUp') {

      if (colisionDetectList(doomGuy,doomGuy.offsetLeft, doomGuy.offsetTop - moveSize, tileset)) {
        if(doomGuy.offsetTop >=24){  
          doomGuyWalk = doomGuyWalk + 1;
          if(doomGuyWalk % 2 == 1)
              this.onkeydown = doomGuy.style.backgroundImage="url('assets/doomGuy/dos-1.png')";
          else
              {this.onkeydown = doomGuy.style.backgroundImage="url('assets/doomGuy/dos-2.png')";}
          doomGuy.style.top = (doomGuy.offsetTop - moveSize) + "px";}
      }
    
  } 


  else if (event.code == 'ArrowRight') {
    // essais collision
   /*  for (let i = 0; i < enemies.length; i++)
      if (colisionDetect (doomGuy,doomGuy.offsetTop, doomGuy.offsetLeft - moveSize, (enemies [i]))) {
      doomGuyDead();} */

    // déplacement  
    if(doomGuy.offsetLeft <=720){
      doomGuyWalk = doomGuyWalk + 1;
      if(doomGuyWalk % 2 == 1)
        this.onkeydown = doomGuy.style.backgroundImage="url('assets/doomGuy/droite-1.png')";
      else{
        this.onkeydown = doomGuy.style.backgroundImage="url('assets/doomGuy/droite-2.png')";} 
    doomGuy.style.left = (doomGuy.offsetLeft + moveSize) + "px";
  }  
} 

  else if (event.code == 'ArrowDown') {
    // essais collision
/*     for (let i = 0; i < enemies.length; i++)
    if (colisionDetect (doomGuy,doomGuy.offsetLeft, doomGuy.offsetTop - moveSize, (enemies [i]))) {
      doomGuyDead();}  */

    // déplacement    
    if(doomGuy.offsetTop <= 696){
      doomGuyWalk = doomGuyWalk + 1;
      count ++;
      this.onkeydown = doomGuy.style.backgroundImage="url('assets/doomGuy/face-" + count + ".png')";
    if (count >= 4 ) count=0
      /* else if (doomGuyWalk % 2 == 0 && count == 1){ this.onkeydown = doomGuy.style.backgroundImage="url('assets/doomGuy/face-2.png')";}
      else if (doomGuyWalk % 2 == 1 && count == 0){ this.onkeydown = doomGuy.style.backgroundImage="url('assets/doomGuy/dos-1.png')";} */
    doomGuy.style.top = (doomGuy.offsetTop + moveSize) + "px";
  }
} 
  else if (event.code == 'ArrowLeft') {
    // essais collision
/*     for (let i = 0; i < enemies.length; i++)
    if (colisionDetect (doomGuy,doomGuy.offsetTop, doomGuy.offsetLeft - moveSize, (enemies [i]))) {
      doomGuyDead();
    } */
    // déplacement  
  if(doomGuy.offsetLeft >= -5){
    doomGuyWalk = doomGuyWalk + 1;
    if(doomGuyWalk % 2 == 1)
      this.onkeydown = doomGuy.style.backgroundImage="url('assets/doomGuy/gauche-1.png')";
    else{
      this.onkeydown = doomGuy.style.backgroundImage="url('assets/doomGuy/gauche-2.png')";}
  doomGuy.style.left = (doomGuy.offsetLeft - moveSize) + "px";
  }

}

});

 