import * as Enemy from "./enemies.js";
import * as _ from "./helperFunctions.js";
import { Fighter, Ranger, Sorcerer } from "./heroes.js";
import { random } from "./randomFunctions.js";
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

  /** GAME LOGIC FUNCTIONS (called by main script file) */

  // Increase round and check any buffs
  newRound() {
    this.rounds++;
    _.checkBuffs(this.enemy, this.buffsRemove);
  }

  // Executes a hero action based on the selected action by user
  // returns a bot message
  execHeroAction(action) {
    const hero = this.hero;
    const enemy = this.enemy;
    let toHit;
    let msg;

    // retrieve the correct action from hero so we have access to its info/functions
    let _action = hero.actions.find((obj) => {
      return obj.type === action;
    });

    // Executes the selected action on the hero
    switch (action) {
      case "doubleAttack":
        toHit = hero.attackDouble();
        msg = _.runDoubleAttack(this, toHit, _action);
        break;

      case "singleAttack":
        toHit = hero.attackSingle();
        msg = _.runSingleAttack(this, "hero", toHit, _action);
        break;

      case "autoAttack":
        toHit = hero.attackAutoHit(_action);
        msg = _.runSingleAttack(this, "hero", toHit, _action);
        break;

      case "shield":
        enemy.buffs.push(enemy.addBuff("disadvantage", _action.buffLength, "Disadvantage"));
        msg = `The ${enemy.type} has disadvantage on its next attack.`;
        break;

      case "dodge":
        let toSucceed = this.isEasy ? 10 : 15;
        if (_action.rollDexSave() >= toSucceed) {
          enemy.buffs.push(enemy.addBuff("noAttack", _action.buffLength, "Misses Next Attack"));
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
    return msg;
  }

  // Executes a random enemy action towards the Hero
  // returns a bot message
  execEnemyAction() {
    const enemy = this.enemy;
    // the enemy attack will have two bot messages
    let msg = [];
    // get a random attack action from the enemy
    const action = enemy.actions[random(enemy.actions.length)];
    // Calls the appropriate action on the enemy
    const toHit = enemy.attackSingle();
    msg.push(action.msg);
    msg.push(_.runSingleAttack(this, "enemy", toHit, action));

    // Check if enemy killed the hero
    if (this.checkEnd()) {
      return null;
    }
    return msg;
  }

  // Function to check if someone is dead
  checkEnd() {
    if (this.enemy.hp <= 0) {
      return true;
    }
    if (this.hero.hp <= 0) {
      return true;
    }
  }
}
