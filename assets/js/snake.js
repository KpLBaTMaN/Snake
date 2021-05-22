
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
        ctx.fillRect(this.x, this.y, canvas.width / SCALE , canvas.height / SCALE );
    }

    update(){
        console.log("updating");
        this.x += this.xSpeed;
        this.y += this.ySpeed;


        // //collision wall
        // if(this.x > canvas.width ) this.x = ROW;   //right side
        // if(this.x < 0 ) this.velocity_x *= -1;              //left side
        // if(this.y < 0) this.velocity_y *= -1;               //top side
        // if(this.y > canvas.height) this.velocity_y *= -1;   //bottom side
    }
}