
class Snake{

    constructor(){
        this.x = 0;
        this.y = 0;
        this.speed = 3;
        console.log("snake object created");
    }

    
    draw(){
        ctx.fillStyle = "#FF00FF";
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    update(){
        this.x += this.speed;
        this.y += this.speed;
    }
}