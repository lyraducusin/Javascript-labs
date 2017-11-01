var character = {
  wins: 0,
  health: 40,
  healsRemaining: 2,
  name:"",
  generateAttackDamage: function (){
    return Math.floor((Math.random() * 3) + 1);
  },
  heal: function () {
    --this.healsRemaining;
    return Math.floor((Math.random() * 10) + 1);
  }
}

var enemy = {
  health: 10,
  name: "Grant",
  generateAttackDamage: function (){
    return Math.floor((Math.random() * 3) + 1);
  }
}

  // var weapons;
   //var enemy1;
   //var user;
  //This will function to start the game
  function startGame() {
    var play = prompt("Would you like to play?");
    if (play === "no"){
      console.log("See you next time.");
    }
    if (play === "yes"){
      character.name = prompt("Enter your name.").toLowerCase();
      //enemy = prompt("Who would you like to fight? Grant or Tony.").toLowerCase();
      // weapons = prompt("What weapons would you like to use bomb or laser gun?").toLowerCase();
      console.log("Ready! Let the battle begin!");
      startCombat( character, enemy);
    }
  }




  //Function life and attacking
  function startCombat(character, enemy) {
    while (character.wins < 6) {
      if (character.wins === 5) {
        console.log("You won!!");
        break;
      }
      var choice = prompt("Do you want to attack, heal, or quit?");
      if (choice === "attack"){
        character.health -= enemy.generateAttackDamage();
        enemy.health -= character.generateAttackDamage();
        console.log(character.name + "'s health is now: " + character.health + "!");
        console.log(enemy.name + "'s health is now: " + enemy.health + "!");
      }
      if (choice === "heal"){
        if (character.healsRemaining !==0){
          character.health += character.heal();
          console.log("You've healed. " + "Your health is now " + character.health + "." + "Your remaining heal " + character.healsRemaining );
          character.health -= character.generateAttackDamage();
          console.log("You've been hit " + character.name + " 's health is " + character.health + "." );
        } else if (character.healsRemaining === 0){
          console.log("Sorry you have no more heals left.");
          return startCombat;
        }
      }
      else if (choice === "quit"){
        console.log("That's too bad you lose! Next time!");
        break;
      }

      if (character.health <= 0){
        console.log("You lose!");
        break;
      }

      if (enemy.health <= 0) {
        character.wins++;
        enemy.health =10;
        console.log("You won the fight!!");
      }
    }
  }
startGame();
