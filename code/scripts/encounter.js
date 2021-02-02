export default class Encounter {
  constructor(name, type, isEasy) {
    this.isEasy = isEasy;
    this.location = this.setLocation();
    this.enemy = {
      type: "goblin",
      hp: this.isEasy ? 5 : 15,
      actions: ["Attack", "Defend", "Special"],
    };
    this.hero = {
      name: name,
      type: type,
      hp: this.isEasy ? 20 : 11,
      actions: ["Attack", "Defend", "Special"],
    };
    this.counter = 0;
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
