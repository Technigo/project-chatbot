import Combatant from "./combatant.js";
import { d20, d8, d6 } from "./randomFunctions.js";
import { enemyDescription as description } from "./descriptions.js";

export class Ogre extends Combatant {
  constructor() {
    super("", 13, false); // type, ac, isHero
    this.type = "Ogre";
    this.description = description.ogre;
    this.hp = 59;
    this.dmgMod = 6;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} swings its great club up in the air to knock you down.`,
        rollDmg: this.rollDmg(8),
      },
      {
        msg: `The ${this.type} takes out its javelin and tries to thrust it into your body.`,
        rollDmg: this.rollDmg(6),
      },
    ];
  }
}

export class Owlbear extends Combatant {
  constructor() {
    super("", 13, false); // type, ac, isHero
    this.type = "Owlbear";
    this.description = description.owlbear;
    this.hp = 59;
    this.dmgMod = 5;
    this.attackMod = 7;
    this.actions = [
      {
        msg: `The ${this.type} swings its great club up in the air to knock you down.`,
        rollDmg: this.rollDmg(8),
      },
      {
        msg: `The ${this.type} takes out its javelin and tries to thrust it into your body.`,
        rollDmg: this.rollDmg(6),
      },
    ];
  }
}

export class SaberToothTiger extends Combatant {
  constructor() {
    super("", 11, false); // type, ac, isHero
    this.type = "Saber Tooth Tiger";
    this.description = description.sabertiger;
    this.hp = 68;
    this.dmgMod = 6;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} swings its great club up in the air to knock you down.`,
        rollDmg: this.rollDmg(8),
      },
      {
        msg: `The ${this.type} takes out its javelin and tries to thrust it into your body.`,
        rollDmg: this.rollDmg(6),
      },
    ];
  }
}

export class Ettin extends Combatant {
  constructor() {
    super("", 11, false); // type, ac, isHero
    this.type = "Ettin";
    this.description = description.ettin;
    this.hp = 68;
    this.dmgMod = 6;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} swings its great club up in the air to knock you down.`,
        rollDmg: this.rollDmg(8),
      },
      {
        msg: `The ${this.type} takes out its javelin and tries to thrust it into your body.`,
        rollDmg: this.rollDmg(6),
      },
    ];
  }
}

export class Ghast extends Combatant {
  constructor() {
    super("", 11, false); // type, ac, isHero
    this.type = "Ghast";
    this.description = description.ghast;
    this.hp = 68;
    this.dmgMod = 6;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} swings its great club up in the air to knock you down.`,
        rollDmg: this.rollDmg(8),
      },
      {
        msg: `The ${this.type} takes out its javelin and tries to thrust it into your body.`,
        rollDmg: this.rollDmg(6),
      },
    ];
  }
}

export class Wight extends Combatant {
  constructor() {
    super("", 11, false); // type, ac, isHero
    this.type = "Wight";
    this.description = description.wight;
    this.hp = 68;
    this.dmgMod = 6;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} swings its great club up in the air to knock you down.`,
        rollDmg: this.rollDmg(8),
      },
      {
        msg: `The ${this.type} takes out its javelin and tries to thrust it into your body.`,
        rollDmg: this.rollDmg(6),
      },
    ];
  }
}

export class Bandit extends Combatant {
  constructor() {
    super("", 11, false); // type, ac, isHero
    this.type = "Bandit";
    this.description = description.bandit;
    this.hp = 68;
    this.dmgMod = 6;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} swings its great club up in the air to knock you down.`,
        rollDmg: this.rollDmg(8),
      },
      {
        msg: `The ${this.type} takes out its javelin and tries to thrust it into your body.`,
        rollDmg: this.rollDmg(6),
      },
    ];
  }
}

export class Mummy extends Combatant {
  constructor() {
    super("", 11, false); // type, ac, isHero
    this.type = "Mummy";
    this.description = description.mummy;
    this.hp = 68;
    this.dmgMod = 6;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} swings its great club up in the air to knock you down.`,
        rollDmg: this.rollDmg(8),
      },
      {
        msg: `The ${this.type} takes out its javelin and tries to thrust it into your body.`,
        rollDmg: this.rollDmg(6),
      },
    ];
  }
}
