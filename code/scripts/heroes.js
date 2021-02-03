import Combatant from "./combatant.js";
import { d20, d8, d6, d4 } from "./helperFunctions.js";

export class Fighter extends Combatant {
  constructor(name) {
    super("Fighter", 18, true);
    this.name = name;
    this.hp = 44;
    this.attackMod = 9;
    this.dmgMod = 6;
    this.actions = [
      {
        name: "Attack Longsword",
        type: "doubleAttack",
        msg: "I swing my longsword twice in an arc to slash at the enemy.",
        rollDmg: this.rollSwordDmg,
      },
      {
        name: "Raise Shield",
        type: "shield",
        msg: "I put up my shield and brace for an attack.",
        buffLength: 1,
      },
    ];
  }

  rollSwordDmg = () => {
    return d8() + this.dmgMod;
  };
}

export class Ranger extends Combatant {
  constructor(name) {
    super("Ranger", 14, true);
    this.name = name;
    this.hp = 44;
    this.attackMod = 7;
    this.dmgMod = 3;
    this.actions = [
      {
        name: "Attack Longbow",
        type: "doubleAttack",
        msg: "I knock two arrows quickly and take aim at the enemy.",
        rollDmg: this.rollBowDmg,
      },
      {
        name: "Dodge next attack",
        type: "dodge",
        msg: "I activate my super speed and prepare to dodge the next attack.",
        rollDexSave: this.rollDexSave,
        buffLength: 1,
      },
    ];
  }
  rollBowDmg = () => {
    return d8() + this.dmgMod;
  };
  rollDexSave = () => {
    return d20() + 5;
  };
}

export class Sorcerer extends Combatant {
  constructor(name) {
    super("Sorcerer", 15, true);
    this.name = name;
    this.hp = 32;
    this.attackMod = 6;
    this.dmgMod = 6;
    this.actions = [
      {
        name: "Shoot fire",
        type: "singleAttack",
        msg: "You swing your longsword twice in an arc to slash at the enemy.",
      },
      {
        name: "Mage armor",
        type: "shield",
        msg: "You swing your longsword twice in an arc to slash at the enemy.",
      },
    ];
  }
}
