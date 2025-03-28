class Tile{
    constructor(X, Y, color){
        this.X = X;
        this.Y = Y;
        this.color = color;
        this.PASSABLE = true;
    }

    getX(){
        return this.X;
    }

    getY(){
        return this.Y;
    }

    getColor(){
        return this.color;
    }

    isPassable(){
        return this.PASSABLE;
    }

    setColor(color){
        this.color = color;
    }

}