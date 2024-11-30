let team = {
    player1: 10,
    player2: 15,
    player3: 20
  };
  function modifyTeamValues(teamObj, increment) {
    
    for (let player in teamObj) {
      
      if (teamObj.hasOwnProperty(player)) {
       
        teamObj[player] += increment;
      }
    }
  }
   modifyTeamValues(team, 5);
  console.log(team);
  