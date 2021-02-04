import { Fighter, Ranger, Sorcerer } from "./heroes.js";
import * as Enemy from "./enemies.js";
import { random } from "./helperFunctions.js";
import { locationDescription as localDesc } from "./descriptions.js";

export default class Encounter {
  constructor(name, type, isEasy) {
    this.isEasy = isEasy;
    this.location = this.setLocation();
    this.enemy = this.setEnemy();
    this.hero = this.setHero(name, type);
    this.rounds = 1;
    this.buffsRemove = [];
  }

  /** SET FUNCTIONS (used for instantiation) */
  // Instantiate a new Hero based on user selction
  setHero(name, type) {
    switch (type) {
      case "Fighter":
        return new Fighter(name, this.isEasy);
      case "Ranger":
        return new Ranger(name, this.isEasy);
      case "Sorcerer":
        return new Sorcerer(name);
    }
  }

  // Sets a random location on instantiation
  setLocation() {
    const options = [
      { type: "forest", description: localDesc.forest },
      { type: "mountain", description: localDesc.mountain },
      { type: "swamp", description: localDesc.swamp },
      { type: "desert", description: localDesc.desert },
    ];

    return options[random(options.length)];
  }

  // Instantiate a new Enemy based on difficulty and location
  setEnemy() {
    switch (this.location.type) {
      case "forest":
        if (this.isEasy) {
          return new Enemy.Ogre();
        } else {
          return new Enemy.Owlbear();
        }
      case "mountain":
        if (this.isEasy) {
          return new Enemy.SaberToothTiger();
        } else {
          return new Enemy.Ettin();
        }
      case "swamp":
        if (this.isEasy) {
          return new Enemy.Ghast();
        } else {
          return new Enemy.Wight();
        }
      case "desert":
        if (this.isEasy) {
          return new Enemy.Bandit();
        } else {
          return new Enemy.Mummy();
        }
    }
  }

  /** GAME LOGIC FUNCTIONS (called by main app file) */

  // Increase round and check any buffs
  newRound() {
    const enemy = this.enemy;
    this.rounds++;
    // check if we need to remove buffs
    if (enemy.buffs.length > 0) {
      for (let i = 0; i < enemy.buffs.length; i++) {
        const buff = enemy.buffs[i];
        buff.buffLength--;
        if (buff.buffLength <= 0) {
          // add it to encounter buffremove array
          this.buffsRemove.push(buff);
          // buff has ended - remove it
          enemy.buffs.splice(i, 1);
          i--;
        }
      }
      console.log(this);
    }
  }

  // Executes a hero action based on the selected action by user
  // returns a bot message
  execHeroAction(action) {
    const hero = this.hero;
    const enemy = this.enemy;
    let msg; // bot message to be returned
    // retrieve the correct action from hero so we have access to its info/functions
    let _action = hero.actions.find((obj) => {
      return obj.type === action;
    });
    // Executes the selected action on the hero
    switch (action) {
      case "doubleAttack":
        const toHit = hero.attackDouble();
        msg = this.runDoubleAttack(toHit, _action);
        break;
      case "shield":
        enemy.buffs.push(enemy.addBuff("disadvantage", _action.buffLength));
        msg = `The ${enemy.type} has disadvantage on its next attack.`;
        break;
      case "dodge":
        let toSucceed = this.isEasy ? 10 : 15;
        if (_action.rollDexSave() >= toSucceed) {
          enemy.buffs.push(enemy.addBuff("noAttack", _action.buffLength));
          msg = `The ${enemy.type} will miss its next attack.`;
        } else {
          msg = `You fumble a bit and fail your dodge.`;
        }
        break;
      case "heal":
        msg = `You heal ${_action.rollHeal(_action)}`;
        break;
    }

    // Check if player killed the enemy
    if (this.checkEnd()) {
      return null;
    }
    console.log(this.hero);
    return msg;
  }

  // Executes a random enemy action towards the Hero
  // returns a bot message
  execEnemyAction() {
    const enemy = this.enemy;
    let msg = []; // the enemy attack will have two bot messages
    // get a random attack action from the enemy
    const action = enemy.actions[random(enemy.actions.length)];
    // Calls the appropriate action on the enemy
    const toHit = enemy.attackSingle();
    msg.push(action.msg);
    msg.push(this.runSingleAttack("enemy", toHit, action));

    // Check if enemy killed the hero
    if (this.checkEnd()) {
      return null;
    }
    return msg;
  }

  // Function to check if someone is dead
  // returns true if someone is dead
  checkEnd() {
    if (this.enemy.hp <= 0) {
      return true;
    }
    if (this.hero.hp <= 0) {
      return true;
    }
  }

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
  runDoubleAttack(toHit, action) {
    const enemy = this.enemy;
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
  }

  // Runs a single attack
  // returns a bot message
  runSingleAttack(attacker, toHit, action) {
    const hero = this.hero;
    const enemy = this.enemy;
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
  }
}
