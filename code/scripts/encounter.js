import { Fighter, Ranger, Sorcerer } from "./heroes.js";
import { Ogre, Troll } from "./enemies.js";

export default class Encounter {
  constructor(name, type, isEasy) {
    this.isEasy = isEasy;
    this.location = this.setLocation();
    this.enemy = this.setEnemy();
    this.hero = this.setHero(name, type);
    this.rounds = 1;
  }

  // Instantiate a new Hero based on user selction
  setHero(name, type) {
    switch (type) {
      case "Fighter":
        return new Fighter(name);
      case "Ranger":
        return new Ranger(name);
      case "Sorcerer":
        return new Sorcerer(name);
    }
  }

  // Sets a random location on instantiation
  setLocation() {
    const options = ["forest", "mountain"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
  }

  // Instantiate a new Enemy based on difficulty and location
  setEnemy() {
    switch (this.location) {
      case "forest":
        if (this.isEasy) {
          return new Ogre();
        } else {
          return new Troll();
        }
      case "mountain":
        if (this.isEasy) {
          return new Troll();
        } else {
          return new Ogre();
        }
    }
  }

  // Increase round and check any buffs
  newRound() {
    this.rounds++;
    // check enemy buffs
    if (this.enemy.buffLength <= 0) {
      // buff has ended
      this.enemy.disadvantage = false;
      this.enemy.noAttack = false;
    }
  }

  // Executes a hero action based on the selected action by user
  // returns a bot message
  execHeroAction(action) {
    let msg;
    // retrieve the correct action from hero so we have access to its info/functions
    let _action = this.hero.actions.find((obj) => {
      return obj.type === action;
    });
    // Calls the selected action on the hero
    switch (action) {
      case "doubleAttack":
        const toHit = this.hero.attackDouble();
        msg = this.runDoubleAttack(toHit, _action);
        break;
      case "shield":
        this.enemy.disadvantage = true;
        this.enemy.buffLength = _action.buffLength;
        msg = `The ${this.enemy.type} has disadvantage on its next attack.`;
        break;
      case "dodge":
        let toSucceed = this.isEasy ? 10 : 15;
        if (_action.rollDexSave() >= toSucceed) {
          this.enemy.noAttack = true;
          this.enemy.buffLength = _action.buffLength;
          msg = `The ${this.enemy.type} will miss its next attack.`;
        } else {
          msg = `You fumble a bit and fail your dodge.`;
        }
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
    let msg = [];
    const random = Math.floor(Math.random() * this.enemy.actions.length);
    const action = this.enemy.actions[random];
    // Calls the appropriate action on the enemy
    const toHit = this.enemy.attackSingle();
    msg.push(action.msg);
    msg.push(this.runSingleAttack("enemy", toHit, action));

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

  // Basic attack calculations //

  runDoubleAttack(toHit, action) {
    let dmg = 0;
    for (let i = 0; i < toHit.length; i++) {
      const _hit = toHit[i];
      if (_hit >= this.enemy.ac) {
        dmg += action.rollDmg();
      }
    }
    this.enemy.hp -= dmg;
    if (dmg > 0) {
      return `${this.enemy.type} took ${dmg} damage!!`;
    } else {
      return `You missed!`;
    }
  }

  runSingleAttack(attacker, toHit, action) {
    let dmg = 0;
    if (attacker === "hero") {
      // the hero is attacker
      if (toHit >= this.enemy.ac) {
        console.log(`Hero hit:${toHit}`);
        dmg += action.rollDmg();
      }
      this.enemy.hp -= dmg;
      if (dmg > 0) {
        return `The ${this.enemy.type} took ${dmg} damage!!`;
      } else {
        return `You missed!`;
      }
    } else {
      // The enemy is attacker
      if (toHit >= this.hero.ac) {
        dmg += action.rollDmg();
      }
      this.hero.hp -= dmg;
      if (dmg > 0) {
        return `You took ${dmg} damage!!`;
      } else {
        return `The ${this.enemy.type} missed!`;
      }
    }
  }
}
