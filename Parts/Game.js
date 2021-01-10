class Game
{
   constructor()
   {}
   getState()
   {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value",(data)=>
      {
         gameState = data.val();
      })
   }
   update(state)
   {
      database.ref('/').update(
      {
         gameState:state
      })
   }
   start()
   {
      if(gameState==0)
      {
         home = new Home();
         home.display();
      }
   }
}