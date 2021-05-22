
class Snake{

    constructor(row, colum, color){
        this.x = row * SCALE/2;
        this.y = colum * SCALE/2;
        this.xSpeed = row;
        this.ySpeed = 0;
        this.color = color;
    }


    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, ROW , COLUM );
    }

    update(){
        console.log("updating");
        this.x += this.xSpeed;
        this.y += this.ySpeed;

    }
}


class SnakeBody extends Snake{

    constructor(){
        super();
    }

    draw(){
        this.draw();

    }

    update(){
        this.update()
    }


} 
