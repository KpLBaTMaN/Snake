
class Snake{

    constructor(x, y, color, color_boarder){
        this.x = x;
        this.y = y;
        this.xSpeed = ROW;
        this.ySpeed = 0;
        this.color = color;
        this.color_boarder = color_boarder;
    }


    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, ROW , COLUM );
        ctx.strokeStyle = this.color_boarder;
        ctx.strokeRect(this.x, this.y, ROW , COLUM);
    }

    update(){
        // console.log("updating");
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        // console.log("X: " + this.x + "  Y: " + this.y);
    }

    collision_wall(){
        if(this.x >= CANVAS_SIZE){
            this.x = 0;
        }
        else if(this.x < 0){
            this.x = CANVAS_SIZE;
        }
        else if(this.y >= CANVAS_SIZE){
            this.y = 0;
        }
        else if(this.y < 0){
            this.y = CANVAS_SIZE;
        }
    }

    direction(x_value, y_value){
        this.xSpeed = x_value * ROW;
        this.ySpeed = y_value * COLUM;
    }

    eat(cFood){
        //Pythahorean Theorem
        let xDistance = cFood.x - this.x;
        let yDistance = cFood.y - this.y;
        var distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))

        if(distance < 1){
            return true;
        }
        else{
            return false;
        }
    }
}

var id = 1;
class SnakeBody{
     

    constructor(xLocation, yLocation, color, color_boarder){
        this.x = xLocation;
        this.y = yLocation;
        this.color = color;
        this.bodyID = id;
        this.color_boarder = color_boarder;
        id+=1;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, ROW , COLUM );
        ctx.strokeStyle = 'white';
        ctx.strokeText(this.bodyID.toString(), this.x+(ROW_HALF), this.y+(COLUM_HALF), 30);
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.color_boarder;
        ctx.strokeRect(this.x, this.y, ROW , COLUM);
    }

    update(){
        
        
    }


} 
