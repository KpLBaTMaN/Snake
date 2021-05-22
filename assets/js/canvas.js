//The CanvasRenderingContext2D interface, part of the Canvas API,

/*GAME Variables*/
const SNAKE_COLOUR = "#FF00FF";
const FOOD_COLOUR = "#00FFFF";
const SNAKE_BOARDER_COLOUR = "#FF0000";
const CANAVS_BACKGROUND = "#000000";
const CANVAS_SIZE = 1200;
const GAME_DELAY = 250;


/*setup for canvas*/
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

/*size of the canvas*/
canvas.height = CANVAS_SIZE;
canvas.width = CANVAS_SIZE;

//game scaling to canvas
const SCALE = 20;
const ROW = CANVAS_SIZE / SCALE; 
const COLUM = CANVAS_SIZE / SCALE;

//For update
var runTime;

//Snake Variables
const SNAKE_SPAWN_SIZE = 3;
const SNAKE_SPAWN_POINT_X = ROW * SCALE/2;
const SNAKE_SPAWN_POINT_Y = COLUM * SCALE/2;


//Interactive Elements
var player;
var playerSnake = [];
var food;


function background(){
    ctx.fillStyle = CANAVS_BACKGROUND;
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

function snake_animate(){

    player.draw();
    player.update();


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
    // console.log("Running");
    background();
    snake_animate();
    food_animate();

    checkSnakeFood();
    moveBody()
}

function checkSnakeFood(){

    if(player.eat(food)){
        pickLocationFood();
        growSnake();
    }
}

function growSnake(){

}


function pickLocationFood(){
    //chooses spawn location - random
    var foodRow = ROW * (Math.floor(Math.random() * SCALE));
    var foodCol =  COLUM * (Math.floor(Math.random() * SCALE));

    food.setLocation(foodRow, foodCol);
}


function createSnake(){

    player = new Snake(SNAKE_SPAWN_POINT_X, SNAKE_SPAWN_POINT_Y, SNAKE_COLOUR);

    for(i = 0; i < SNAKE_SPAWN_SIZE; i++){
        playerSnake.push(new SnakeBody(SNAKE_SPAWN_POINT_X - (ROW*i), SNAKE_SPAWN_POINT_Y, SNAKE_COLOUR));
    }
}

function moveBody(){
    //move each body up on spot in the array


    playerSnake[0].x = player.x;
    playerSnake[0].y = player.y;

    console.log(playerSnake[0].x);
    console.log(player.x);

    // for(i = 1; i < playerSnake.length-1; i++){
    //     playerSnake[i].x = playerSnake[i+1].x;
    //     playerSnake[i].y = playerSnake[i+1].y;
    // }
}


//Load
window.addEventListener('load', (event) => {
    init()
    setInterval(runTime, GAME_DELAY); //do not call the method here - eg runTime(). Do runTime. Had an error for 10 mins trying to work out this problem.
    console.log("loaded");
});

function init(){
    console.log("Setting up the game");
    createSnake();
    food = new Food(ROW, COLUM, FOOD_COLOUR);
    pickLocationFood();
}

