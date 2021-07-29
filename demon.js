addEnemies();
function addEnemies(){
    for (let i = 0; i < 8; i++) {
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
    let x = randomPosition[0]*12;
    let y = randomPosition[1]*12;
    enemy.style.top = x + 'px';
    enemy.style.left = y + 'px';
}

setInterval(mouvEnemies, 500)

function mouvEnemies(){

    for (let i = 0; i < enemies.length; i++){
        let random = Math.floor(Math.random()*24);
        
switch (random) {
    case 0: 
    if(enemies[i].offsetLeft <=696 ){
        enemies[i].style.top = enemies[i].offsetTop +40 +'px';
        enemies[i].style.left = enemies[i].offsetLeft  +'px';
        
    }
        break;
    case 1: 
    if(enemies[i].offsetTop <=696 ){
        enemies[i].style.top = enemies[i].offsetTop  +'px';
        enemies[i].style.left = enemies[i].offsetLeft +40 +'px';
    }
        break;
    case 2: 
    if( enemies[i].offsetLeft >=80 && enemies[i].offsetTop >=24 ){
        enemies[i].style.top = enemies[i].offsetTop  +'px' ;
        enemies[i].style.left = enemies[i].offsetLeft -40 +'px';
    }  
        break;
    case 3: 
    if(enemies[i].offsetTop >=80 ){
        enemies[i].style.top = enemies[i].offsetTop -40 +'px' ;
        enemies[i].style.left = enemies[i].offsetLeft  +'px';
    }   
        break;
    
    default:
        
}


    }
    
for (let i = 0; i < enemies.length; i++) {
            if(colisionDetect (doomGuy,doomGuy.offsetLeft, doomGuy.offsetTop, (enemies[i]))){
                doomGuyDead();
            }
            
        }
        for (let i = 0; i < enemies.length; i++) {
            if(colisionDetect (bomb,bomb.offsetLeft, bomb.offsetTop, (enemies[i]))){
                setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-1.png')", 1000);
                setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-2.png')", 2000);
                setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-3.png')", 2500);
                setTimeout (()=>bomb.style.backgroundImage= display='none', 2700); 
                (enemies[i]).style.backgroundImage = "url('assets/doomGuy/demon-1-3.png')";
                setTimeout (()=>(enemies [i]).style.display ='none',500);
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

