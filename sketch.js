var canvas,backgroundImage,gamestate=0
var playercount,database,form,player,gamestate

function setup(){
    canvas=createCanvas(400,400)
    database=firebase.database()
    game=new Game()
    game.getstate()
    game.start()
}
function draw(){

}
