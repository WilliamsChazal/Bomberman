let bomb = document.getElementById('bomb');

document.addEventListener('keydown', function(event) {
    if (event.code == 'Space'){
        bomb.style.display='block';
        bomb.style.top = player.offsetTop + "px";
        bomb.style.left = player.offsetLeft + "px";
    }

});