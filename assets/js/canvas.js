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


var playerSnake;



/*snake*/





/*room*/





function runTime(){
    console.log("Running");
    ctx.fillStyle = CANAVS_BACKGROUND;
    ctx.fillRect(0,0, canvas.width, canvas.height);


    playerSnake.draw();
    playerSnake.update();


    
}

function setup(){
    console.log("Setting up the game");
    playerSnake = new Snake(ROW, COLUM, SNAKE_COLOUR);


}


//eventListeners




/*controls*/
window.addEventListener('keydown', event => {

    switch(event.keyCode){
        case 37: 
            console.log("Button left");
            break;
        case 38: 
            console.log("Button up");
            break;
        case 39: 
            console.log("Button right");
            break;
        case 40: 
            console.log("Button down");
            break;
    }
});


window.addEventListener('load', (event) => {
    console.log("load");
    setup()
    setInterval(runTime, 500); //do not call the method here. Had an error for 10 mins trying to work out this problem.
});

