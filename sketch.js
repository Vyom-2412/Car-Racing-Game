var database;
var home, game, player;
var gameState = 0, playerCount = 0;

function setup()
{
   createCanvas(500,500);
   database = firebase.database();
   game = new Game();
   game.start();

}

function draw()
{
   background("white");
}