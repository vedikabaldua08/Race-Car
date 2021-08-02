class Player{

    constructor(){
      this.index = null
      this.distance = 0
      this.name = null
    }

    getCount(){
        var playerCountref = database.ref('playerCount')
        playerCountref.on("value", function(data){
            playerCount = data.val();
        })
        }
    
    //count parameter is taking it's value from form.js
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    
    update(){
       var playerIndex = "players/player" + this.index;
       database.ref(playerIndex).set({
           Name: this.name,
           Distance : this.distance
       })
    }


    /*
    players:
        player1
            >name: 
            >distance:
        player2
            >name: 
            >distance:
        player3
            >name: 
            >distance
        player4
            >name: 
            >distance
    */

           static getPlayerInfo(){
                var playerInfoRef = database.ref("players")
                playerInfoRef.on("value", (data) => {
                    allPlayers = data.val();
                });
            }

}