//The CanvasRenderingContext2D interface, part of the Canvas API,

/*GAME Variables*/
const SNAKE_COLOUR = "#FF00FF";
const FOOD_COLOUR = "#00FFFF";
const SNAKE_BOARDER_COLOUR = "#FF0000";
const CANAVS_BACKGROUND = "#000000";

/*setup for canvas*/
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

/*size of the canvas*/
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//game scaling to canvas
const SCALE = 20;
const ROW = canvas.width / SCALE; 
const COLUM = canvas.height / SCALE;

//For update
var runTime;


var playerSnake = [];
var food = new Food(ROW, COLUM, FOOD_COLOUR);




/*room*/



function background(){
    ctx.fillStyle = CANAVS_BACKGROUND;
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

function snake_animate(){
    for(i=0; i < playerSnake.length; i++){
        playerSnake[i].draw();
        playerSnake[i].update();
    }
}

function food_animate(){
    food.draw();
    food.update();
}

function runTime(){
    console.log("Running");
    background();
    snake_animate();
    food_animate();
}




function setup(){
    console.log("Setting up the game");
    playerSnake.push(new Snake(ROW, COLUM, SNAKE_COLOUR));
    console.log(playerSnake);

}


//eventListeners




/*controls snake*/
window.addEventListener('keydown', event => {

    switch(event.keyCode){
        case 37: 
            console.log("Button left");
            playerSnake.xSpeed = -ROW;
            playerSnake.ySpeed = 0;
            break;
        case 38: 
            console.log("Button up");
            playerSnake.xSpeed = 0;
            playerSnake.ySpeed = -COLUM;
        
            break;
        case 39: 
            console.log("Button right");
            playerSnake.xSpeed = ROW;
            playerSnake.ySpeed = 0;
            break;
        case 40: 
            console.log("Button down");
            playerSnake.xSpeed = 0;
            playerSnake.ySpeed = COLUM;
            break;
    }
});


window.addEventListener('load', (event) => {
    console.log("load");
    setup()
    setInterval(runTime, 250); //do not call the method here - eg runTime(). Do runTime. Had an error for 10 mins trying to work out this problem.
});

