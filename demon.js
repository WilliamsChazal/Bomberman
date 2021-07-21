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

function mouvEnemies(){

}

colisionDetect();

function colisionDetect(collision){
    let player = document.getElementById('player');
    let enemies = document.getElementsByClassName('enemies');
    let enemiesSize = 150;
    let playerSize = 175;

    if (enemies.offsetTop + enemiesSize == player.offsetTop + playerSize && enemies.offsetLeft + enemiesSize == player.offsetLeft + playerSize) {
        alert ('colision');
        } else collision = false
        console.log(collision);
}