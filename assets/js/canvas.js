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
const ROW_HALF = ROW/2;
const COLUM_HALF = COLUM/2;

//For update
var runTime;

//Snake Variables
const SNAKE_SPAWN_SIZE = 6;
const SNAKE_SPAWN_POINT_X = ROW * SCALE/2;
const SNAKE_SPAWN_POINT_Y = COLUM * SCALE/2;
var snake_size = 0;


//Interactive Elements
var playerSnake;
var playerSnake = [];
var total_size = 0;
var food;

//Score element
var scoreElement;


function background(){
    ctx.fillStyle = CANAVS_BACKGROUND;
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

function collision(){
    playerSnake[0].collision_wall();
    

    for(i = 1; i < playerSnake.length; i++){
        if(playerSnake[0].x ===playerSnake[i].x&&playerSnake[0].y ===playerSnake[i].y){
            console.log("dead");
        }
    }
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
    // console.log("Running");
    background();
    collision();
    moveBody();


    snake_animate();
    food_animate();

    checkSnakeFood();
    displayText();

    
}

function displayText(){
    ctx.strokeStyle = 'black';
    ctx.strokeText("1", SNAKE_SPAWN_POINT_X, SNAKE_SPAWN_POINT_Y);
}

function checkSnakeFood(){
    if(playerSnake[0].eat(food)){
        pickLocationFood();
        growSnake();
    }
}

function growSnake(){
    console.log(snake_size);
    playerSnake.push(new SnakeBody(playerSnake[snake_size-1].x, playerSnake[snake_size-1].y, SNAKE_BOARDER_COLOUR));
}



function pickLocationFood(){
    //chooses spawn location - random
    var foodRow = ROW * (Math.floor(Math.random() * SCALE));
    var foodCol =  COLUM * (Math.floor(Math.random() * SCALE));

    food.setLocation(foodRow, foodCol);
}


function createSnake(){

    playerSnake.push(new Snake(SNAKE_SPAWN_POINT_X, SNAKE_SPAWN_POINT_Y, SNAKE_COLOUR));
    snake_size++;

    for(i = 1; i <= SNAKE_SPAWN_SIZE; i++){
        playerSnake.push(new SnakeBody(SNAKE_SPAWN_POINT_X - (ROW*i), SNAKE_SPAWN_POINT_Y, SNAKE_BOARDER_COLOUR));
        snake_size++;
    }

    // console.log(playerSnake);
    
}

function moveBody(){
    //move each body up on spot in the array
    //Couldn't quite get it
    // console.log("Moving Body");



    //This took too long to figure out :D 
    //This loops "history" of the body to the next one
    for(i = playerSnake.length-1; i > 0; i--){
        playerSnake[i].x = playerSnake[i-1].x;
        playerSnake[i].y = playerSnake[i-1].y; 
    }



    



    
    







    

    

    //playerSnake[playerSnake.length-1] = new SnakeBody(player.x, player.y, SNAKE_BOARDER_COLOUR);

    // for(i = playerSnake.length-1; i > 0; i--){
    //     playerSnake[i].x = playerSnake[i+1].x;
    //     playerSnake[i].y = playerSnake[i+1].y;
    //     console.log("lol")
    // }

    // for(i = playerSnake.length-1; i > 0; i--){
    //     playerSnake[i].x = playerSnake[i+1].x;
    //     playerSnake[i].y = playerSnake[i+1].y;
    //     console.log("loop: " + i);
    // }

    // console.log("End of Body");
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

