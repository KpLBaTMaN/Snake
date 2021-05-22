
class Snake{

    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.xSpeed = ROW;
        this.ySpeed = 0;
        this.color = color;
    }


    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, ROW , COLUM );
    }

    update(){
        // console.log("updating");
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        console.log("X: " + this.x + "  Y: " + this.y);
    }

    direction(x_value, y_value){
        this.xSpeed = x_value * ROW;
        this.ySpeed = y_value * COLUM;
    }

    eat(cFood){
        //Pythahorean Theorem
        let xDistance = cFood.x - player.x;
        let yDistance = cFood.y - player.y;
        var distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))

        if(distance < 1){
            return true;
        }
        else{
            return false;
        }
    }
}


class SnakeBody{

    constructor(xLocation, yLocation, color){
        this.x = xLocation;
        this.y = yLocation;
        this.color = color;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, ROW , COLUM );
    }

    update(){
        
        
    }


} 
