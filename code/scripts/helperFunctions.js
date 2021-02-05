// Collection of dynamic/calculation functions used in various scripts

/** This function loops through the buffs of a combatant
 * Logic:
 * 1. Decrease the rounds counter for the buff
 * 2. If a buff has expired -> remove it from the combatant
 * 2a. Then add it to the encounter buff dump array
 */
export const checkBuffs = (combatant, buffsRemove) => {
  if (combatant.buffs.length > 0) {
    for (let i = 0; i < combatant.buffs.length; i++) {
      const buff = combatant.buffs[i];
      buff.buffLength--;
      if (buff.buffLength <= 0) {
        // buff has ended - remove it
        combatant.buffs.splice(i, 1);
        // add it to encounter buffremove array
        buffsRemove.push(buff);
        i--;
      }
    }
  }
};

/** This function dynamically adds buffs in the info wrapper
 * Logic:
 * 1. loop through buffs from active buffs on enemy
 * 2. if the buff is not already displayed we insert into the info wrapper
 */
export const addBuffs = (wrapper, buffs) => {
  if (buffs.length > 0) {
    for (let i = 0; i < buffs.length; i++) {
      const buff = buffs[i];
      if (!buff.display) {
        wrapper.innerHTML += `<div class="fa fa-times-circle info__icon" id="${buff.type}"><span>${buff.title}</span></div>`;
      }
      buff.display = true;
    }
  }
};

/** This function dynamically adds/removes buffs in the info wrapper
 * Logic:
 * 1. loop through buffs from encounter buff dump array
 * 2. remove the buff from the info wrapper
 * 3. lastly we remove from the dump array
 */
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

/** This function handles the action pool for limitied actions
 * Logic:
 * 1. the function is triggerd when the action is executed
 * 2. we then have to find a pool element that is false (i.e. it hasn't been used)
 * 3. set that element to true
 * 4. check if all elements are now true
 * 4a. then we should set the action usage to true (so we can't use that action anymore)
 */
export const handleUsePool = (action) => {
  const usedPool = action.usePool.findIndex((usage) => {
    return usage === false;
  });
  action.usePool[usedPool] = true;
  action.used = action.usePool.every((usage) => {
    return usage === true;
  });
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
