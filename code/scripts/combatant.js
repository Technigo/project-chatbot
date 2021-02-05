import { d20, d10, d4 } from "./randomFunctions.js";
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

  // function to calculate a single attack to hit value
  // also check if combatant has any specific buffs taht affect the results
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

  // function to trigegr a auto hit attack
  attackAutoHit(action) {
    _.handleUsePool(action);
    return 25;
  }

  // function to add a buff object to the combatant
  addBuff(type, length, title) {
    return {
      type: type,
      buffLength: length,
      display: false,
      title: title,
    };
  }

  // function to check if the combatant has any active buffs
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
    // This is a limited action so we call the handle function for that
    _.handleUsePool(action);
    return toHeal;
  };
}
