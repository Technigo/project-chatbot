import Combatant from "./combatant.js";
import { d20, d8, d6, d10, d4 } from "./randomFunctions.js";
import { enemyDescription as description } from "./descriptions.js";

export class Ogre extends Combatant {
  constructor() {
    super("", 13, false);
    this.type = "Ogre";
    this.description = description.ogre;
    this.hp = 59;
    this.dmgMod = 4;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} swings its great club up in the air to knock you down.`,
        rollDmg: this.rollDmgClub,
      },
      {
        msg: `The ${this.type} takes out its javelin and tries to thrust it into your body.`,
        rollDmg: this.rollDmgJavelin,
      },
    ];
  }
  rollDmgClub = () => {
    return d8() + d8() + this.dmgMod;
  };
  rollDmgJavelin = () => {
    return d6() + d6() + this.dmgMod;
  };
}

export class Owlbear extends Combatant {
  constructor() {
    super("", 13, false);
    this.type = "Owlbear";
    this.description = description.owlbear;
    this.hp = 59;
    this.dmgMod = 5;
    this.attackMod = 7;
    this.actions = [
      {
        msg: `The ${this.type} tries to snap its beak into your body.`,
        rollDmg: this.rollDmgBeak,
      },
      {
        msg: `The ${this.type} reaches out with its claws.`,
        rollDmg: this.rollDmgClaws,
      },
    ];
  }
  rollDmgBeak = () => {
    return d10() + this.dmgMod;
  };
  rollDmgClaws = () => {
    return d8() + d8() + this.dmgMod;
  };
}

export class SaberToothTiger extends Combatant {
  constructor() {
    super("", 12, false);
    this.type = "Saber Tooth Tiger";
    this.description = description.sabertiger;
    this.hp = 52;
    this.dmgMod = 5;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} tries to bite you.`,
        rollDmg: this.rollDmgBite,
      },
      {
        msg: `The ${this.type} reaches out with its claws.`,
        rollDmg: this.rollDmgClaws,
      },
    ];
  }
  rollDmgBite = () => {
    return d10() + this.dmgMod;
  };
  rollDmgClaws = () => {
    return d6() + d6() + this.dmgMod;
  };
}

export class Ettin extends Combatant {
  constructor() {
    super("", 12, false);
    this.type = "Ettin";
    this.description = description.ettin;
    this.hp = 85;
    this.dmgMod = 5;
    this.attackMod = 7;
    this.actions = [
      {
        msg: `The ${this.type} swings its great axe in an arc towards you.`,
        rollDmg: this.rollDmgWeapon,
      },
      {
        msg: `The ${this.type} tries to slam its Morningstar into your body.`,
        rollDmg: this.rollDmgWeapon,
      },
    ];
  }
  rollDmgWeapon = () => {
    return d8() + d8() + this.dmgMod;
  };
}

export class Ghast extends Combatant {
  constructor() {
    super("", 13, false);
    this.type = "Ghast";
    this.description = description.ghast;
    this.hp = 36;
    this.dmgMod = 3;
    this.attackMod = 5;
    this.actions = [
      {
        msg: `The ${this.type} tries to go in and bite you.`,
        rollDmg: this.rollDmgBite,
      },
      {
        msg: `The ${this.type} tries to slash you with its claws.`,
        rollDmg: this.rollDmgClaws,
      },
    ];
  }
  rollDmgBite = () => {
    return d8() + d8() + this.dmgMod;
  };
  rollDmgClaws = () => {
    return d6() + d6() + this.dmgMod;
  };
}

export class Wight extends Combatant {
  constructor() {
    super("", 14, false);
    this.type = "Wight";
    this.description = description.wight;
    this.hp = 45;
    this.dmgMod = 2;
    this.attackMod = 4;
    this.actions = [
      {
        msg: `The ${this.type} casts Life Drain on you.`,
        rollDmg: this.rollDmgLifedrain,
      },
      {
        msg: `The ${this.type} tries to slash you with its Longsword.`,
        rollDmg: this.rollDmgLongsword,
      },
      {
        msg: `The ${this.type} knocks an arrow and takes aim at you.`,
        rollDmg: this.rollDmgLongbow,
      },
    ];
  }
  rollDmgLifedrain = () => {
    return d6() + this.dmgMod;
  };
  rollDmgLongsword = () => {
    return d8() + this.dmgMod;
  };
  rollDmgLongbow = () => {
    return d8() + this.dmgMod;
  };
}

export class Bandit extends Combatant {
  constructor() {
    super("", 15, false);
    this.type = "Bandit";
    this.description = description.bandit;
    this.hp = 65;
    this.dmgMod = 3;
    this.attackMod = 6;
    this.actions = [
      {
        msg: `The ${this.type} swings its Scimitar to slash you.`,
        rollDmg: this.rollDmgScimitar,
      },
      {
        msg: `The ${this.type} tries to thrust a dagger into your body.`,
        rollDmg: this.rollDmgDagger,
      },
    ];
  }
  rollDmgScimitar = () => {
    return d6() + this.dmgMod;
  };
  rollDmgDagger = () => {
    return d4() + this.dmgMod;
  };
}

export class Mummy extends Combatant {
  constructor() {
    super("", 11, false);
    this.type = "Mummy";
    this.description = description.mummy;
    this.hp = 58;
    this.dmgMod = 3;
    this.attackMod = 4;
    this.actions = [
      {
        msg: `The ${this.type} tries to slam its fists into you.`,
        rollDmg: this.rollDmgRottingfist,
      },
      {
        msg: `The ${this.type} opens its mouth and spews out an odor of death.`,
        rollDmg: this.rollDmgRottingbreath,
      },
    ];
  }
  rollDmgRottingfist = () => {
    return d6() + d6() + d6() + this.dmgMod;
  };
  rollDmgRottingbreath = () => {
    return d20() + this.dmgMod;
  };
}
