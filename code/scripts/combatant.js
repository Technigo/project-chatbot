import { d20, d8, d6 } from "./helperFunctions.js";

export default class Combatant {
  constructor(type, ac, isHero) {
    this.type = type;
    this.ac = ac;
    this.isHero = isHero;
    this.disadvantage = false;
    this.buffLength = 0;
    this.noAttack = false;
  }

  attackDouble() {
    const hit1 = d20() + this.attackMod;
    const hit2 = d20() + this.attackMod;
    return [hit1, hit2];
  }

  attackSingle() {
    let hit = d20() + this.attackMod;
    if (this.disadvantage) {
      this.buffLength--;
      // roll disadvantage
      let hit2 = d20() + this.attackMod;
      if (hit2 <= hit) {
        return hit2;
      }
    } else if (this.noAttack) {
      this.buffLength--;
      return 0;
    }
    return hit;
  }
}
