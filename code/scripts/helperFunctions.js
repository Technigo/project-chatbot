export const checkBuffs = (combatant, buffsRemove) => {
  if (combatant.buffs.length > 0) {
    for (let i = 0; i < combatant.buffs.length; i++) {
      const buff = combatant.buffs[i];
      buff.buffLength--;
      if (buff.buffLength <= 0) {
        // add it to encounter buffremove array
        buffsRemove.push(buff);
        // buff has ended - remove it
        combatant.buffs.splice(i, 1);
        i--;
      }
    }
  }
};

export const handleUsePool = (action) => {
  // handle the limited use pools
  const usedPool = action.usePool.findIndex((usage) => {
    return usage === false;
  });
  action.usePool[usedPool] = true;
  // If usePool is full with only true then set used to true
  action.used = action.usePool.every((usage) => {
    return usage === true;
  });
};

export const addBuffs = (wrapper, buffs) => {
  if (buffs.length > 0) {
    for (let i = 0; i < buffs.length; i++) {
      const buff = buffs[i];
      if (!buff.display) {
        wrapper.innerHTML += `<p id="${buff.type}">${buff.type}</p>`;
      }
      buff.display = true;
    }
  }
};

export const removeBuffs = (wrapper, buffs) => {
  if (buffs.length > 0) {
    for (let i = 0; i < buffs.length; i++) {
      const buff = buffs[i];
      wrapper.children.namedItem(buff.type).remove();
      buffs.splice(i, 1);
      i--;
    }
  }
};

/** Attack Calculations
 * Based on DnD logic:
 * 1. toHit number (calculated on the combatant class) must be
 * larger or equal to the recieving combatants ac (Armor Class).
 * 2a. If it is then we can calculate the damage
 * (a function run from the attackers action object)
 * 2b. If it is not then we skip any damage calculations
 * and return a miss message.
 */

// Runs two attacks
// returns a bot message
export const runDoubleAttack = (enc, toHit, action) => {
  const enemy = enc.enemy;
  let dmg = 0;
  for (let i = 0; i < toHit.length; i++) {
    const _hit = toHit[i];
    if (_hit >= enemy.ac) {
      dmg += action.rollDmg();
    }
  }
  enemy.hp -= dmg;
  if (dmg > 0) {
    return `${enemy.type} took ${dmg} damage!!`;
  } else {
    return `You missed!`;
  }
};

// Runs a single attack
// returns a bot message
export const runSingleAttack = (enc, attacker, toHit, action) => {
  const hero = enc.hero;
  const enemy = enc.enemy;
  let dmg = 0;
  if (attacker === "hero") {
    // the hero is attacker
    if (toHit >= enemy.ac) {
      dmg += action.rollDmg();
    }
    enemy.hp -= dmg;
    if (dmg > 0) {
      return `The ${enemy.type} took ${dmg} damage!!`;
    } else {
      return `You missed!`;
    }
  } else {
    // The enemy is attacker
    if (toHit >= hero.ac) {
      dmg += action.rollDmg();
    }
    hero.hp -= dmg;
    if (dmg > 0) {
      return `You took ${dmg} damage!!`;
    } else {
      return `The ${enemy.type} missed!`;
    }
  }
};
