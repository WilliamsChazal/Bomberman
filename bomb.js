


 
document.addEventListener('keydown', function(event) {
    let bomb = document.getElementById('bomb');
    console.log('coucoy')
    let enemies = document.getElementsByClassName('enemies');
    let doomGuy = document.getElementById('player');
    if (event.code == 'Space'){
        /* setTimeout (()=> */player.style.backgroundImage="url('assets/doomGuy/shoot.png')";
        bomb.style.display='block';
        bomb.style.top = doomGuy.offsetTop  +10 + "px";
        bomb.style.left = doomGuy.offsetLeft +10 + "px";
 
        setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb.png')", 200);

        for (let i = 0; i < enemies.length; i++) {
            if(colisionDetect (bomb,bomb.offsetLeft, bomb.offsetTop, (enemies[i]))){
               bombExplode();
               (enemies[i]).style.backgroundImage = "url('assets/doomGuy/demon-1-3.png')";
               /* setTimeout (()=>(enemies [i]).style.display ='none',600); */
             
               console.log(enemies)
                document.getElementById('gameContainer').removeChild((enemies[i]));
                enemies = document.getElementsByClassName('enemies');
            }            
        }
      } 
}); 

function testEnd() {
    let enemies = document.getElementsByClassName('enemies');
    if (enemies.length == 0) {
        console.log('GG')
    }
    setTimeout (()=>testEnd(),1000)
}



