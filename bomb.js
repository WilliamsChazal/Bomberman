let bomb = document.getElementById('bomb');

document.addEventListener('keydown', function(event) {
    if (event.code == 'Space'){
        bomb.style.display='block';
        bomb.style.top = player.offsetTop + "px";
        bomb.style.left = player.offsetLeft + "px";
 
        setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-1.png')", 500);
        setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-2.png')", 1500);
        setTimeout (()=>bomb.style.backgroundImage="url('assets/doomGuy/bomb-3.png')", 2500);
        setTimeout (()=>bomb.style.backgroundImage= display='none', 3500);
      } 
});  