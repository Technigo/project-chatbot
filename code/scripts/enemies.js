import Combatant from "./combatant.js";
import { d20, d8, d6 } from "./helperFunctions.js";

export class Ogre extends Combatant {
  constructor() {
    super("", 13, false); // type, ac, isHero
    this.type = "Ogre";
    this.hp = 59;
    this.dmgMod = 6;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} swings its great club up in the air to knock you down.`,
        rollDmg: this.rollClubDmg,
      },
      {
        msg: `The ${this.type} takes out its javelin and tries to thrust it into your body.`,
        rollDmg: this.rollJavelinDmg,
      },
    ];
  }

  rollClubDmg = () => {
    return d8() + this.dmgMod;
  };

  rollJavelinDmg = () => {
    return d6() + this.dmgMod;
  };
}

export class Troll extends Combatant {
  constructor() {
    super("", 11, false); // type, ac, isHero
    this.type = "Troll";
    this.hp = 68;
    this.dmgMod = 6;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} swings its great club up in the air to knock you down.`,
        rollDmg: this.rollClubDmg,
      },
      {
        msg: `The ${this.type} takes out its javelin and tries to thrust it into your body.`,
        rollDmg: this.rollJavelinDmg,
      },
    ];
  }

  rollClubDmg = () => {
    return d8() + this.dmgMod;
  };

  rollJavelinDmg = () => {
    return d6() + this.dmgMod;
  };
}
