
/*controls snake*/
window.addEventListener('keydown', event => {

    switch(event.keyCode){
        case 37: 
            console.log("Button left");
            player.direction(-1, 0);
            break;
        case 38: 
            console.log("Button up");
            player.direction(0, -1);
            break;
        case 39: 
            console.log("Button right");
            player.direction(1, 0);
            break;
        case 40: 
            console.log("Button down");
            player.direction(0, 1);
            break;
    }
});