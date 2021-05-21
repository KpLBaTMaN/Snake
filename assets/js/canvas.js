//The CanvasRenderingContext2D interface, part of the Canvas API,
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

/*setup for canvas*/
const canvas = document.querySelector("#firstCanvas");
const ctx = canvas.getContext("2d");

/*size of the canvas*/
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


/*Variables*/





//eventListeners
canvas.addEventListener("mousedown", startPosition);
    
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);




