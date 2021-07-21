addEnemies();
function addEnemies(){
    for (let i = 0; i < 5; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'enemies')
        div.setAttribute('id', 'enemy-'+i)
        document.getElementById('gameContainer').appendChild(div);
        positionEnemies(div);
    }
}
function getRandomPosition(){
    let randomX = Math.floor(Math.random()*24);
    let randomY = Math.floor(Math.random()*24);
    return[randomX,randomY];
}
function positionEnemies(enemy){
    let randomPosition = getRandomPosition();
    let x = randomPosition[0]*24;
    let y = randomPosition[1]*24;
    enemy.style.top = x + 'px';
    enemy.style.left = y + 'px';
}

/* function mouvEnemies(){

} */

const doomGuy = document.getElementById('player')=={ witdh:175, height:175};
const enemies = document.getElementsByClassName('enemies')=={ witdh:150, height:150};
colisionDetect();
function colisionDetect(){
    if (doomGuy.offsetTop < enemies.offsetTop + enemies.width &&
        doomGuy.offsetTop + player.width > enemies.offsetTop &&
        doomGuy.offsetLeft < enemies.offsetLeft + enemies.height &&
        doomGuy.height + player.offsetLeft > enemies.offsetLeft) {
         // collision détectée !     
        alert ('colision');} 
    else {
        collision = false}
    console.log(enemies);       
}

/*  
    if (enemies.offsetTop + enemiesSize < player.offsetTop + playerSize && enemies.offsetLeft + enemiesSize < player.offsetLeft + playerSize){
   https://developer.mozilla.org/fr/docs/Games/Techniques/2D_collision_detection 
    */

