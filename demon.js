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

const doomGuy = document.getElementById('player');
const enemies = document.getElementsByClassName('enemies');
colisionDetect(doomGuy.offsetLeft, doomGuy.offsetTop, enemies [0]);
function colisionDetect(x, y, enemy){
    if ((y < enemy.offsetTop + enemy.offsetHeight &&
        y + doomGuy.offsetHeight > enemy.offsetTop) &&
        (x < enemy.offsetLeft + enemy.offsetWidth &&
        x + doomGuy.offsetWidth > enemy.offsetLeft)) {
            console.log('boom'); 
        return true;} 
    else {
        return false}
          
}

/*  
    if (enemies.offsetTop + enemiesSize < player.offsetTop + playerSize && enemies.offsetLeft + enemiesSize < player.offsetLeft + playerSize){
   https://developer.mozilla.org/fr/docs/Games/Techniques/2D_collision_detection 
    */

