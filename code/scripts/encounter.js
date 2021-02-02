import { d20 } from "./helperFunctions.js";
import { Fighter, Ranger, Sorcerer, Enemy } from "./combatant.js";

export default class Encounter {
  constructor(name, type, isEasy) {
    this.isEasy = isEasy;
    this.location = this.setLocation();
    this.enemy = new Enemy(isEasy, this.location);
    this.hero = this.setHero(name, type);
    this.counter = 0;
  }

  setHero(name, type) {
    switch (type) {
      case "Fighter":
        return new Fighter(name);
      case "Ranger":
        return new Ranger(name);
      case "Sorcerer":
        return new Sorcerer(name);
    }
  }

  setLocation() {
    const options = ["forest", "mountain", "swamp", "desert"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
  }

  execHeroAction(action) {
    console.log(`Hero action: ${action}`);
    if (this.checkEnd()) {
      return null;
    }
    return "enemy took damage";
  }
  execEnemyAction() {
    if (this.checkEnd()) {
      return null;
    }
    const random = Math.floor(Math.random() * this.enemy.actions.length);
    const action = this.enemy.actions[random];
    console.log(`Enemy action: ${action}`);
    return "hero took damage";
  }

  checkEnd() {
    this.counter++;
    console.log(this.counter);
    return this.counter === 3 ? true : false;
  }
}
