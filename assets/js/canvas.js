//The CanvasRenderingContext2D interface, part of the Canvas API,
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

/*setup for canvas*/
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//game scaling to canvas
const scale = 10;
const rows = canvas.height / scale; 
const colums = canvas.width / scale;


/*size of the canvas*/
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


//For update
var runTime;


/*Variables*/
var playerSnake;



/*snake*/





/*room*/




/*controls*/



function runTime(){
    console.log("Running");
    console.log(playerSnake);
    playerSnake.draw();
    playerSnake.update();
    

}

function setup(){
    console.log("Setting up the game");
    playerSnake = new Snake();


}


//eventListeners


setup()
window.addEventListener('load', (event) => {
    console.log("load");
    runTime = window.setInterval(runTime(), 500);
});
