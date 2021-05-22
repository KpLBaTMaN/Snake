class Food{

    constructor(row, colum, color){
        this.x = row* (Math.random() * SCALE);
        this.y = colum * (Math.random() * SCALE);
        this.color = color;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, ROW, COLUM );
    }

    update(){

        

        



    }





}