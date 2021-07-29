let bomb = document.getElementById('bomb');


 
document.addEventListener('keydown', function(event) {
    if (event.code == 'Space'){
        /* setTimeout (()=> */player.style.backgroundImage="url('assets/doomGuy/shoot.png')";
        bomb.style.display='block';
        bomb.style.top = player.offsetTop  +10 + "px";
        bomb.style.left = player.offsetLeft +10 + "px";
 
        setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb.png')", 200);

        for (let i = 0; i < enemies.length; i++) {
            if(colisionDetect (bomb,bomb.offsetLeft, bomb.offsetTop, (enemies[i]))){
               /*  setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-1.png')", 500); */
                setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-2.png')",500);
                setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-3.png')", 650);
                setTimeout (()=>bomb.style.backgroundImage= display='none', 750); 
                (enemies[i]).style.backgroundImage = "url('assets/doomGuy/demon-1-3.png')";
                setTimeout (()=>(enemies [i]).style.display ='none',600);
            }
            
        }
      } 
});  