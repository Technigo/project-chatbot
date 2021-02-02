export default class Hero {
  constructor(name, type, encounter) {
    this.name = name;
    this.type = type;
    this.hp = encounter.isEasy ? 20 : 11;
  }
}
