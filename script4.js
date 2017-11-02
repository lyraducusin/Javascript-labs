var character = null;
var enemy = {
  health: 10,
  name: "Grant",
  generateAttackDamage: function (){
    return Math.floor(Math.random() * 3) + 1;
  }
};
function startGame(){
  character = {
    wins: 0,
    health: 40,
    healsRemaining: 2,
    name: prompt ("Enter your character's name. "),
    generateAttackDamage: function (){
      return Math.floor(Math.random() * 3) + 1;
    },
    heal: function () {
      this.healsRemaining--;
      return Math.floor(Math.random() * 10) + 1;
    }
  };
  displayInfo();
}


function startCombat(choice) {
  var gameText = " ";
  if (character.wins >= 5) {
    gameText = "Hurray! You won";
    displayInfo();
    statusInfo(gameText);
    return;
  }
  if (choice === "attack"){
    character.health -= enemy.generateAttackDamage();
    enemy.health -= character.generateAttackDamage();
    gameText = character.name + " has " + character.health + " health left. " + enemy.name + " has " + enemy.health + " health left.";
  } else if (choice === "quit") {
    return;
  }else if (choice === "heal") {
    if (character.healsRemaining !==0) {
      character.health += character.heal();
      var text = character.name + " has healed and has " + character.health + " health. ";
      character.health -= enemy.generateAttackDamage();
      gameText = text + character.name + " you just got hit after healing and now you have " + character.health + " left. ";
    } else if (character.healsRemaining <= 0) {
      gameText = "Sorry you are out of heal.";
      character.health -= enemy.generateAttackDamage();
      gameText = character.name + " you have " + character.health + " health left." + enemy.name + " has " + enemy.health + " health left.";
    }
  }
  if (character.health <= 0){
    gameText = "You've been defeated!";
    return;
  }
  if (enemy.health <= 0) {
    character.wins++;
    gameText = enemy.name + " beat you. " + " You'll need to win " + (5 - character.wins) + " more round(s).";
    enemy.health = 10;
  }
  displayInfo ();
  statusInfo (gameText);
}
function statusInfo (gameText){
  var status = document.getElementsByClassName("status")[0];
  status.innerText = gameText;
}
function displayInfo() {
  var name = document.getElementsByClassName("name")[0];
  var healsR = document.getElementsByClassName("healsR")[0];
  var health = document.getElementsByClassName("health")[0];
  var wins = document.getElementsByClassName("wins")[0];
  var eName = document.getElementsByClassName("eName")[0];
  var eHealth = document.getElementsByClassName("eHealth")[0];
  name.innerText = character.name;
  healsR.innerText = character.healsRemaining;
  health.innerText = character.health;
  wins.innerText = character.wins;
  eName.innerText = enemy.name;
  eHealth.innerText = enemy.health;
}
