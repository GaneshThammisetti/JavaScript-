
let team = {
    Name: "Hunter",
    Members: 5,
    
    
    displayInfo: function() {
      console.log(`Team Name: ${this.name}`);
      console.log(`Number of Members: ${this.members}`);
    },
  
    
    addMembers: function(increment) {
      this.members += increment;
      console.log(`New Number of Members: ${this.members}`);
    }
  };
  team.displayInfo();
  team.addMembers(3);
  team.displayInfo();
  