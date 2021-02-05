import { d20, d8, d6, d10, d4 } from "./randomFunctions.js";
import * as _ from "./helperFunctions.js";

export default class Combatant {
  constructor(type, ac, isHero) {
    this.type = type;
    this.ac = ac;
    this.isHero = isHero;
    this.buffs = [];
  }

  attackDouble() {
    const hit1 = d20() + this.attackMod;
    const hit2 = d20() + this.attackMod;
    return [hit1, hit2];
  }

  attackSingle() {
    let hit = d20() + this.attackMod;
    if (this.checkDisadvantage()) {
      let hit2 = d20() + this.attackMod;
      if (hit2 <= hit) {
        return hit2;
      }
    } else if (this.noAttack) {
      return 0;
    }
    return hit;
  }

  attackAutoHit(action) {
    _.handleUsePool(action);
    return 25;
  }

  addBuff(type, length) {
    return {
      type: type,
      buffLength: length,
      display: false,
    };
  }

  checkDisadvantage() {
    const disBuff = this.buffs.filter((buff) => {
      return buff.type === "disadvantage";
    });
    return disBuff !== null ? true : false;
  }

  rollHeal = (action) => {
    // decide what dice to roll for heal
    let toHeal = this.type === "Fighter" ? d10() + this.healMod : d4() + this.healMod;
    // apply the heal
    this.hp += toHeal;
    // make sure heal does not go over max health
    if (this.hp > this.maxHp) {
      this.hp = this.maxHp;
    }
    _.handleUsePool(action);
    return toHeal;
  };

  rollDmg = (dice) => {
    if (dice === 8) {
      return d8() + this.dmgMod;
    }
    if (dice === 6) {
      return d6() + this.dmgMod;
    }
    if (dice === 10) {
      return d10() + this.dmgMod;
    }
  };
}
