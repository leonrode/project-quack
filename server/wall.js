class Wall extends Tile{
    constructor(X, Y){
        super(X, Y, "black");
        this.PASSABLE = false;
    }
}