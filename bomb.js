let bomb = document.getElementById('bomb');


 
document.addEventListener('keydown', function(event) {
    if (event.code == 'Space'){
        bomb.style.display='block';
        bomb.style.top = player.offsetTop  + "px";
        bomb.style.left = player.offsetLeft  + "px";
 
        setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-1.png')", 1000);
       /*  setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-2.png')", 2000);
        setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-3.png')", 2500);
        setTimeout (()=>bomb.style.backgroundImage= display='none', 2700); */

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



        


     /*    if(enemy_0.offsetTop-24<=bomb.offsetTop<=enemy_0.offsetTop+24&&
          enemy_0.offsetLeft-24<=bomb.offsetLeft<=enemy_0.offsetLeft+24){
          enemy_0.style.backgroundImage="url('assets/doomGuy/demon-1-3.png')";
      } */
 
      } 
});  