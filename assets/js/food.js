class Food{

    constructor(rowSpawn, columSpawn, color){

        this.x = 0;
        this.y = 0;

        this.color = color;
        this.snakeEaten = false;

        console.log(this.x);
        console.log(this.y);
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, ROW, COLUM );
    }

    update(){
        
    }

    setLocation(x, y){
        this.x = x;
        this.y = y;
    }


    



}