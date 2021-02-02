export default class Hero {
  constructor(encounter) {
    this.name = "Adventurer";
    this.type = "Fighter";
    this.hp = encounter.isEasy ? 20 : 11;
  }
}
