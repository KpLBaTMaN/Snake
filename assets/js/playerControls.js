
/*controls snake*/
window.addEventListener('keydown', event => {

    switch(event.keyCode){
        case 37: 
            console.log("Button left");
            if(playerSnake[1].x>=playerSnake[0].x){
                playerSnake[0].direction(-1, 0);
            }
            
            break;
        case 38: 
            console.log("Button up");
            if(playerSnake[1].y>=playerSnake[0].y){
                playerSnake[0].direction(0, -1);
            }
            break;
        case 39: 
            console.log("Button right");
            if(playerSnake[1].x<=playerSnake[0].x){
                playerSnake[0].direction(1, 0);
            }
           
            break;
        case 40: 
            console.log("Button down");
            if(playerSnake[1].y<=playerSnake[0].y){
                playerSnake[0].direction(0, 1);
            }
            break;
    }
});
