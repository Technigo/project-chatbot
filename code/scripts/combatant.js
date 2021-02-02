export class Fighter {
  constructor(name) {
    this.name = name;
    this.type = "Fighter";
    this.hp = 20;
    this.actions = ["Attack", "Defend", "Special"];
  }
}
export class Ranger {
  constructor(name) {
    this.name = name;
    this.type = "Ranger";
    this.hp = 20;
    this.actions = ["Attack", "Defend", "Special"];
  }
}
export class Sorcerer {
  constructor(name) {
    this.name = name;
    this.type = "Sorcerer";
    this.hp = 14;
    this.actions = ["Attack", "Defend", "Special"];
  }
}
export class Enemy {
  constructor(isEasy, location) {
    this.type = this.setEnemyType(location);
    this.hp = this.setHP(isEasy);
    this.actions = ["Attack", "Defend", "Special"];
  }

  setEnemyType(location) {
    switch (location) {
      case "forest":
        return "goblin";
      case "mountain":
        return "gnoll";
      case " swamp":
        return "lizard";
      case "desert":
        return "imp";
    }
  }

  setHP(isEasy) {
    return isEasy ? 10 : 20;
  }
}
