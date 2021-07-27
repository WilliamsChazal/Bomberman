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

setInterval(mouvEnemies, 500)

function mouvEnemies(){
    for (let i = 0; i < enemies.length; i++){
        let random = Math.floor(Math.random()*24);
        //console.log(random)
switch (random) {
    case 0: 
    if(enemies[i].offsetLeft <=720 ){
        enemies[i].style.top = enemies[i].offsetTop +40 +'px';
        enemies[i].style.left = enemies[i].offsetLeft -40 +'px';
    }
        break;
    case 1: 
    if(enemies[i].offsetTop <=720 ){
        enemies[i].style.top = enemies[i].offsetTop +40 +'px';
        enemies[i].style.left = enemies[i].offsetLeft -40 +'px';
    }
        break;
    case 2: 
    if( enemies[i].offsetLeft >=24 && enemies[i].offsetTop >=24 ){
        enemies[i].style.top = enemies[i].offsetTop +40 +'px' ;
        enemies[i].style.left = enemies[i].offsetLeft -40 +'px';
    }  
        break;
    case 3: 
    if(enemies[i].offsetTop >=24 ){
        enemies[i].style.top = enemies[i].offsetTop +40 +'px' ;
        enemies[i].style.left = enemies[i].offsetLeft -40 +'px';
    }   
        break;
    
    default:
        break;
}


    }
    

}

/* const doomGuy = document.getElementById('doomGuy');
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
          
} */

/*  
    if (enemies.offsetTop + enemiesSize < doomGuy.offsetTop + doomGuySize && enemies.offsetLeft + enemiesSize < doomGuy.offsetLeft + doomGuySize){
   https://developer.mozilla.org/fr/docs/Games/Techniques/2D_collision_detection 
    */

