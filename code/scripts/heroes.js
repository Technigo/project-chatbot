import Combatant from "./combatant.js";
import { d20, d8, d6, d4, d10 } from "./randomFunctions.js";

export class Fighter extends Combatant {
  constructor(name, isEasy) {
    super("Fighter", 18, true);
    this.name = name;
    this.hp = isEasy ? 44 : 58;
    this.maxHp = this.hp;
    this.attackMod = isEasy ? 9 : 10;
    this.dmgMod = isEasy ? 6 : 7;
    this.healMod = isEasy ? 5 : 6;
    this.token = "tokenFighter";
    this.actions = [
      {
        name: "Attack Longsword",
        type: "doubleAttack",
        limited: false,
        msg: "I swing my longsword twice in an arc to slash at the enemy.",
        rollDmg: this.rollSwordDmg,
      },
      {
        name: "Raise Shield",
        type: "shield",
        limited: false,
        msg: "I put up my shield and brace for an attack.",
        buffLength: 1,
      },
      {
        name: "Heal",
        type: "heal",
        limited: true,
        usePool: [false],
        msg: "I draw from my limited well of stamina to protect myself from harm.",
        used: false,
        rollHeal: this.rollHeal,
      },
    ];
  }

  rollSwordDmg = () => {
    return d8() + this.dmgMod;
  };
}

export class Ranger extends Combatant {
  constructor(name, isEasy) {
    super("Ranger", 14, true);
    this.name = name;
    this.hp = isEasy ? 44 : 52;
    this.maxHp = this.hp;
    this.attackMod = isEasy ? 7 : 8;
    this.dmgMod = isEasy ? 3 : 4;
    this.healMod = isEasy ? 4 : 8;
    this.dexMod = isEasy ? 5 : 6;
    this.token = "tokenRanger";
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
      {
        name: "Drink Heal Potion",
        type: "heal",
        limited: true,
        usePool: [false, false],
        msg: "I take out one of my potions of healing and chug it!",
        used: false,
        rollHeal: this.rollHeal,
      },
    ];
  }
  rollBowDmg = () => {
    return d8() + this.dmgMod;
  };
  rollDexSave = () => {
    return d20() + this.dexMod;
  };
}

export class Sorcerer extends Combatant {
  constructor(name) {
    super("Sorcerer", 15, true);
    this.name = name;
    this.hp = 32;
    this.maxHp = this.hp;
    this.attackMod = 6;
    this.dmgMod = 6;
    this.healMod = 8;
    this.token = "tokenSorcerer";
    this.actions = [
      {
        name: "Shoot firebolt",
        type: "singleAttack",
        msg: "I hurl a mote of fire at the enemy.",
        rollDmg: this.rollFireDmg,
      },
      {
        name: "Mage armor",
        type: "shield",
        msg: "An invisible barrier of magical force appears and protects me.",
        buffLength: 1,
      },
      {
        name: "Magic Missile",
        type: "autoAttack",
        limited: true,
        usePool: [false],
        msg: "I create three glowing darts of magical force.",
        used: false,
        rollDmg: this.rollMissileDmg,
      },
    ];
  }

  rollFireDmg = () => {
    const dmg = d10() + d10();
    return dmg;
  };

  rollMissileDmg = () => {
    const dmg = d4() + d4() + d4() + this.dmgMod;
    return dmg;
  };
}
