var character = {
  wins: 0,
  health: 40,
  healsRemaining: 2,
  name: name,
  generateAttackDamage: function (){
    return Math.floor(Math.random() * 3) + 1;
  },
  heal: function () {
    return Math.floor(Math.random() * 10) + 1;
  }
}

var enemy = {
  health: 10,
  name: "",
  generateAttackDamage: function (){
    return Math.floor(Math.random() * 3) + 1;
  }
}

  // var weapons;
  var enemy;
  var user;
  //This will function to start the game
  function startGame() {
    var play = prompt("Would you like to play?");
    if (play === "no"){
      console.log("See you next time.");
    }
    if (play === "yes"){
      var name = prompt("Enter your name.").toLowerCase();
      enemy = prompt("Who would you like to fight? Grant or Tony.").toLowerCase();
      // weapons = prompt("What weapons would you like to use bomb or laser gun?").toLowerCase();
      console.log("Ready! Let the battle begin!");
      startCombat(name, enemy);
    }
  }




  //Function life and attacking
  function startCombat(name, enemy) {
    while (character.wins < 6) {
      if (character.wins === 5) {
        console.log("You won!!");
        break;
      }
      var choice = prompt("Do you want to attack, heal, or quit?");
      if (choice === "attack"){
        character.health = (character.generateAttackDamage());
        enemy.health = (enemy.generateAttackDamage());
        console.log(name + "'s health is now: " + character.health + "!");
        console.log(enemy + "'s health is now: " + enemy.health + "!");
      }
      if (choice === "heal"){
        if (character.healsRemaining !==0){
          character.health = (character.health + character.heal());
          console.log("You've healed. " + "Your health is now " + character.health + "." + "Your remaining heal" + character.healsRemaining );
          character.health = (character.generateAttackDamage());
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
        wins++;
        enemyHealth =10;
        console.log("You won the fight!!");
      }
    }
  }
startGame();
