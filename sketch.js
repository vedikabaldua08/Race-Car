var database;
var gameState = 0
var playerCount
var form
var player
var game
var allPlayers

function setup(){
  database = firebase.database();
 
  createCanvas(500,500);

  //creating a game object
  game = new Game();

  //keeping a check on the gameStates
  game.getState();

  //starting the game
  game.start();
}

function draw(){
  //background("white");
  if (playerCount === 4){
    game.update(1)
  }
    if ( gameState === 1){
      game.play()
      clear();
    }
  
}


