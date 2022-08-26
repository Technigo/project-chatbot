// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.querySelector(".input-wrapper");
const entireScreen = document.querySelector("#body-id");
const submitButton = document.querySelector(".send-btn");
const inputField = document.querySelector("#name-input");

// If you need any global variables that you can use across different functions, declare them here:
let heroName;
let heroHp = 2
const heroInventory = [];// 2 is the nuber HP you start with



// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello adventurer, what is your name?", 'bot');

}

setTimeout(greeting, 1);

// Set up your eventlisteners here


//START OF OUR CODE

submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    heroName = inputField.value; //defines the heros name 
    showMessage(`My name is ${heroName}`, "user"); 
    inputWrapper.innerHTML = "";
    //After showMessages is called, setTimout waits 1000 ms to call nameReply 
    setTimeout(nameReply, 1000);
  })

/* This is the first reply from the bot */
const nameReply = () => {
  showMessage(`${heroName}, you are about to embark on an adventure! 
  Choose one item below to aid you on you quest. I advise you to choose wisely!`, "bot");
  setTimeout(itemSelection, 1000);
}


// List to select items 
const itemSelection = () => {
  inputWrapper.innerHTML = `
    <select id="item-one">
      <option value="" selected disabled>👇 Select an item</option>
      <option value="umbrella">Umbrella ☂</option>
      <option value="boat">Inflatable boat ⛵️</option>
      <option value="water-bottle">Bottle of water🥤</option>
      <option value="life-jacket">Life jacket 🦺</option>
      <option value="helmet">Helmet ⛑</option>
      <option value="rope">Rope 🪢</option>
    </select>
    
    <select id="item-two">
      <option value="" selected disabled>👇 Select another item</option>
      <option value="meat">Piece of meat 🍗</option>
      <option value="guitar">Guitar 🎸</option>
      <option value="sword">Sword 🗡</option>
      <option value="invicibility-cloak">Invicibility cloak 🧥</option>
      <option value="shield">Shield 🛡</option>
      <option value="moccasin">Moccasin 🧦</option>
    </select>
    
    <button id="select-item-btn">Select</button>`;
   
    let itemList1 = document.querySelector("#item-one");
    let itemList2 = document.querySelector("#item-two");
    let selectItemBtn = document.querySelector("#select-item-btn");
    selectItemBtn.addEventListener("click", function (event) {
      event.preventDefault();
      // the value of the selected option in respective list is assign to variable item1 and item2.
      let item1 = itemList1.options[itemList1.selectedIndex].value;
      let item2 = itemList2.options[itemList2.selectedIndex].value;
      let htmlItem1 = itemList1.options[itemList1.selectedIndex].innerHTML;
      let htmlItem2 = itemList2.options[itemList2.selectedIndex].innerHTML;
      inputWrapper.innerHTML = ``;
      showMessage (`I choose ${htmlItem1} and ${htmlItem2}`, 'user');
      heroInventory.push(item1, item2); 
      console.log(`Added ${item1, item2} to backpack`);
      console.log("inventory", heroInventory);
      setTimeout(botMonologue, 1000);
      }) 
}


const botMonologue = () => {
showMessage (`Excellent choice! Your backpack is stuffed. Are you ready to to embark on your journey?`,"bot");
setTimeout(continueAdventure, 1000); 
}

// Makes buttons visible for next step
const continueAdventure= () => {
  inputWrapper.innerHTML = `
    <button class="continue" id="continueYes">YES! Bring it on!</button>
    <button class="continue" id="continueNo">I'm too scared!</button>
  `;
  let continueAdventure = document.querySelectorAll(".continue");
  continueAdventure.forEach(button => button.addEventListener("click", function (event) {
    event.preventDefault();
    inputWrapper.innerHTML = "";
    console.log("continue");
    showMessage(this.innerHTML, "user");

    if (this.id === "continueYes") {
       setTimeout(botIntersection1, 1000);

    } else {
      setTimeout( () => {
        showMessage("Too bad! Come back when you are ready!", "bot")
        , 1000});
        setTimeout (gameOver, 2000);
    }
  }))
}

const botIntersection1 = () => {
  showMessage (`Walking kilometer after kilometer down a winding road you come to an intersection. Where do you want to go?`,"bot");
  setTimeout(pathChoice, 1000);
} 

// Display buttons for path choice
const pathChoice = () => {
  inputWrapper.innerHTML = `
    <button class="path-button" id="desert">Desert 🌵</button>
    <button class="path-button" id="mountain">Mountain 🌋</button>
    <button class="path-button" id="creek">Creek 🌊</button>
  `;

  let pathSelect = document.querySelectorAll(".path-button");
  pathSelect.forEach(button => button.addEventListener("click", function (event) {
    event.preventDefault();
    inputWrapper.innerHTML = "";
    console.log(this.id)
    showMessage(`I will go through the ${this.innerHTML}`, "user");
   
    // These are if-statment within an if-statement. Depending on which path the Hero chooses and what it has in it's backpack/inventory different conditions are triggered. 
    // For one road, one item is perfect, one item makes you loose 1 hp, the rest will give game over.
    if (this.id === "desert") {
      console.log("desert")
      if (heroInventory.includes("water-bottle")) {
        console.log("Perfect") 
        setTimeout( () => {
          showMessage(`The heat is excruciating and your shirt is soked from perspiation. Thankfully, you can take sips from you bottle of water, 
          leaving the dessert refreshed with a nice tan, although smelling a little bad.`,`bot`); 
          setTimeout( () => {showMessage(`Wohoo! 🥳`,`user`)}, 1000);  
        }, 1500);
        continueButtonClick();
        const continueButton = document.querySelector("#continue-btn");
        continueButton.addEventListener("click", function (event) {
        event.preventDefault();
        botIntersection2 ();
        }) 
      }
      else if (heroInventory.includes("umbrella")) {
        console.log("Loose 1hp")
        setTimeout( () => { 
          showMessage(`You use your umbrella to shade your self from the scorching sun. Exiting the dessert you are severly dehydrated but alive. Lose one HP.`,`bot`); 
          heroHp = (heroHp -1);
          console.log(heroHp);
          setTimeout( () => {showMessage(`Oh no! ❤️‍🩹😭`,`user`)}, 1000);
        }, 1500);
        setTimeout(botIntersection2, 5000);
      }
      else {
        console.log("GAME OVER")
        setTimeout( () => { 
          showMessage(`The sun burns your skin and you sweat every last drop of water. You die. GAME OVER!`,`bot`); 
        }, 1500);
        setTimeout(gameOver, 6000);
      }

    } else if (this.id === "mountain") {
      console.log("mountain")
      if (heroInventory.includes("rope")) {
        console.log("Perfect") 
        setTimeout( () => { 
          showMessage(`You gently lower yourself from the summit using your rope and mange to touch down on the ground softly. 
          You leave the mountain with blisters in your hands but a smile on your face.`,`bot`);   
        }, 1500);
        setTimeout( () => {showMessage(`Wohoo! 🥳`,`user`)}, 1000);
      setTimeout(botIntersection2, 5000);
      } 
      else if (heroInventory.includes("helmet")) {
        console.log("Loose 1hp")
        setTimeout( () => {
          showMessage(`Feeling overconfident you try to climb the mountain with your bare hands. Halfway down you slip on a stream of lava and fall. 
          You praise your previous choises, surviving the fall thanks to you helmet. Lose one HP.`,`bot`);
          heroHp = (heroHp -1);
          console.log(heroHp); 
          setTimeout( () => {showMessage(`Oh no!❤️‍🩹😭`,`user`)}, 1000);
        }, 1500);
        setTimeout(botIntersection2, 5000);
      }
      else {
        console.log("GAME OVER")
        setTimeout( () => { 
          showMessage(`You lose you footing and tumble down the mountain side. Crushing every bone in your body. 
          Your last thought is one of regret: you tried to climb a over a vulcaino. What where you thinking? You die. GAME OVER!`,`bot`); 
        }, 1500);
        setTimeout(gameOver, 6000);
      }
    } else {
      console.log("creek")
      if (heroInventory.includes("boat")) {
        console.log("Perfect") 
        setTimeout( () => {
          showMessage(`Feeling a little dizzy after inflating the canoe with your breath, you enjoy your cruise down the creek. 
          Exiting the creek you skip down the road, happy with your choise of path.`,`bot`);   
          setTimeout( () => {showMessage(`Wohoo! 🥳`,`user`)}, 1000);
        }, 1500);
        setTimeout(botIntersection2, 5000);
      }
      else if (heroInventory.includes("life-jacket")) {
        console.log("Loose 1hp")
        setTimeout( () => {
          showMessage(`You put on your life jacket and jump in to the creek. You stay afloat but repeatedly hit your knees agains the rocks in the creek. 
          You emerge from the water bruised but breathing. Lose one HP.`,`bot`); 
          setTimeout( () => {showMessage(`Oh no! ❤️‍🩹😭`,`user`)}, 1000);
          heroHp = (heroHp -1);
          console.log(heroHp);
        }, 1500);
        setTimeout(botIntersection2, 5000);
      }
      else {
        console.log("GAME OVER")
        setTimeout( () => {
          showMessage(`You attemt to swim along the creek but its currents are to strong and you are pulled under water to a certain death. You drown. GAME OVER!`,`bot`); 
        }, 1500);
        setTimeout(gameOver, 6000);
      }
    } 
  }))
}

//function to create continue button 
const continueButtonClick = () => {
  inputWrapper.innerHTML = `<button class="continue-button" id="continue-btn">Continue</button>`
}

const botIntersection2 = () => {
  showMessage(`Your legs are tired but your will is strong. You can see the Villain castle in the distance. 
  Standing infront of the castle is the dragon with thick smoke oozing from its nostrils.`, `bot`) 
  setTimeout( () => {showMessage(`As you approach you think of three ways to get passed the dragon. Either you try to sooth it, you kill it or you sneak past it. 
  You deside your best bet is to:`,`bot`)}, 1000);
  methodChoice();
}

// Function to choose way to face the dragon!
const methodChoice = () => {
  inputWrapper.innerHTML = `
    <button class="method-button" id="soothe">Soothe</button>
    <button class="method-button" id="strike">Strike</button>
    <button class="method-button" id="sneak">Sneak past</button>
  `;

  let pathSelect = document.querySelectorAll(".method-button");
  pathSelect.forEach(button => button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(this.id)
    inputWrapper.innerHTML = "";
    showMessage(`Ooo, I will try to ${this.innerHTML} the dragon!`, "user");
  
  // These are if-statment within an if-statement. Depending on which path the Hero chooses and what it has in it's backpack/inventory different conditions are triggered. 
  // For one road, one item is perfect, one item makes you loose 1 hp, the rest will give game over.
    if (this.id === "soothe") {
      console.log("soothe")
      if (heroInventory.includes("guitar")) {
        console.log("Perfect") 
        setTimeout( () => {
          showMessage(`As you aproach the castle you pull out the guitar from your inventory and start plocking the notes of your favourite lullaby. 
          The dragon is soon sound asleep and yo can safely walk in to the castle.`,`bot`);   
          setTimeout( () => {showMessage(`Yay 🥳`,`user`)}, 1000);
        }, 1500);
      setTimeout(conclusion, 7000);
      }
      

      else if (heroInventory.includes("meat")) {
        console.log("Loose 1hp")
        setTimeout( () => { 
          showMessage(`You approah carefully but the dragon spots you and throws you to the ground with a wag of its tail. 
          As you fall you backpack is caught on a branch and it tears your bag in two. As the dragon moves closer, only inches away from you, 
          it picks up the scent of the piece of meat that has fallen out of your severed backpack. As the dragon feasts on your Koebe beef, 
          you manage to limp into the caslte. Lose one HP.`,`bot`); 
          heroHp = (heroHp -1);
          console.log(heroHp);
          setTimeout( () => {showMessage(`Oh no! ❤️‍🩹😭`,`user`)}, 1000);
          if (heroHp === 0) {
            setTimeout(deathBy0Hp, 5000) //to make deathBy0Hp function run if hp is 0, otherwise run conclusion function. 🅰️ När if/esle-statmentet ligger i setTimeout från rad 334 så funkar det
          }
          else {
            setTimeout(conclusion, 7000);
          }
        }, 1500);
      }
          
      else {
        console.log("GAME OVER")
        setTimeout( () => { 
          showMessage(`You put to much trust in your ablility to calm others down. Not reflecting over the fact that soothing a dragon is different 
          from soothing your angry drunken friends at the tavern back home. The dragon scuffs as your attemt, burning you to a crisp. The dragon swallows you whole. 
          You die. GAME OVER.`,`bot`); 
        }, 1500);
        setTimeout(gameOver, 8000);
      }

    } else if (this.id === "strike") {
      console.log("strike")
      if (heroInventory.includes("sword")) {
        console.log("Perfect") 
        setTimeout( () => { 
          showMessage(`You pull out your sword, thanking your self for every hour you spent watching Game of Thrones. 
          You duck, roll and thrust your sword in the dragons heart. As the dragon takes its' last breath, you press on into the castle.`,`bot`);   
          setTimeout( () => {showMessage(`Yay! 🥳`,`user`)}, 1000);
        }, 1500);
        setTimeout(conclusion, 7000);
      }

      else if (heroInventory.includes("shield")) {
        console.log("Loose 1hp")
        setTimeout( () => {
          showMessage(`The dragon charges at you and you manage to put up your shield in the last second. 
          You block most of the attack but the back of the shield hits you in the forehead, giving you a concussion. As the dragon has a hard time 
          stopping on the roads rolling gravel, you have enough time to slip into hte castle, very dizzy but alive. Lose one Hp.`,`bot`);
          heroHp = (heroHp -1);
          console.log(heroHp); 
          setTimeout( () => {showMessage(`Oh, no!❤️‍🩹😭`,`user`)}, 1000);
          //to make deathBy0Hp function run if hp is 0, otherwise run conclusion function
          if (heroHp === 0) {
            setTimeout(deathBy0Hp, 5000)
          }
          else {
            setTimeout(conclusion, 7000);
          }
        }, 1500);
      }
      
      else {
        console.log("GAME OVER")
        setTimeout( () => { 
          showMessage(`Spending all that time at your local gym you are feeling invincible. You pound a fist at your chest and taunts the dragon; 
          “Come at me, bro!”. The dragon makes a violent sweep with its massive tail and as it hits you. Your spine snaps like a dry twig. You die! GAME OVER`,`bot`); 
        }, 1500);
        setTimeout(gameOver, 10000);
      }

    } else {
      console.log("sneak")
      if (heroInventory.includes("invicibility-cloak")) {
        console.log("Perfect") 
        setTimeout( () => {
          showMessage(`You put on your invicibility cloak in good time and carefully, as quietly as you possibly can, sneek past the dragon. 
          You whisper a silent prayer for the hinges to be oiled as you softly opens the castle doors. Unnoticed you close the door behind you as you enter the castle.`,`bot`);   
          setTimeout( () => {showMessage(`Yay! 🥳`,`user`)}, 1000);
        }, 1500);
        setTimeout(conclusion, 7000);
      }
      else if (heroInventory.includes("moccasin")) {
        console.log("Loose 1hp")
        setTimeout( () => {
          showMessage(`Slipping in to your moccasins you approach the castle in silence. You cant belive how comfortable they are 
          and think you'll start to wear them all the time after this. Amazed by your silent footware you forget the dragon can still see you. 
          It does and it beathes out a scorching flame that hits your shoulder and sets the grass on fire. 
          You manage to stumble into the castle through a cloud of smoke, hurting, choughing, but breathing. Lose one Hp.`,`bot`); 
          setTimeout( () => {showMessage(`Oh no! ❤️‍🩹😭`,`user`)}, 1000);
          heroHp = (heroHp -1);
          console.log(heroHp);
          //to make deathBy0Hp function run if hp is 0, otherwise run conclusion function
          if (heroHp === 0) {
            setTimeout(deathBy0Hp, 5000)
          }
          else {
            setTimeout(conclusion, 7000);
          }
        }, 1500);
      }
      else {
        console.log("GAME OVER")
        setTimeout( () => {
        showMessage(`As you approach as stealthy as you possibly can, you begin to wish that you attended a few more yoga classes. As you try to jump over a small pit you clumsliy fall. Finding no way up you realise this pit and the stars in the night sky above is the last thing you will see. Eventually, you die! GAME OVER.  `,`bot`); 
        }, 1500);
        setTimeout(gameOver, 8000);
      }
    } 
  }))
  }
// Har lagt in det vi pratade om med val för att ta valp eller skatt
const conclusion = () => {
  showMessage(`As you enter the main hallway of the castle an adorable puppy with golden fur and flopping ears come to greet you. You also see a marvelous treasure. 
  What will you take with you?`, "bot");

  inputWrapper.innerHTML = `
    <button class="price-button" id="puppy-button">Adorable puppy</button>
    <button class="price-button" id="treasure-button">Marvelous treasure</button>
    `;
    let pathSelect = document.querySelectorAll(".price-button");
    pathSelect.forEach(button => button.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(this.id)
      inputWrapper.innerHTML = "";
      if (this.id === "puppy-button") {
        showMessage(`I will rescue this ${this.innerHTML}, of course!`, "user");
        setTimeout(finalScene, 2000)
      }
      else {
        showMessage(`I will take this ${this.innerHTML}!`, "user");
        setTimeout(showMessage(`You chose the ${this.innerHTML} over the Adorable puppy? ${heroName}, you are a horrible, greedy person. GAME OVER`, "user"));
        setTimeout(gameOver, 2000);
      }
    }))
}

const finalScene = () => {
  showMessage("As you look into the puppys' eyes you feel that all the hardships you encountered on your road was worth it.", "bot") 
  setTimeout(showMessage("You and the puppy head out to the garden where you see a helicopter. You both get in and fly away to safety","bot"), 3000)
  setTimeout(endScreen, 5000)
}

const deathBy0Hp = () => {
  if(heroHp === 0) {
    showMessage(`You have no more hp. You die`, 'bot');
    gameOver();
  }
}

const endScreen = () => {
  entireScreen.innerHTML=`
  <div class="end-content-wrapper">
    <h1>Victory!<h1>
    <p>You rescued the puppy from the evil oppressor! Now you and the puppy can enjoy a well deserved rest! Mission accomplished!</p>
    <div>
      <iframe src="https://giphy.com/embed/LRZZJtvKUb6pBASWSH" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="https://giphy.com/gifs/hawaii-maui-kauai-LRZZJtvKUb6pBASWSH">via GIPHY</a></p>
    </div>
  </div>
  `
}

// GAME OVER FUNCTION
const gameOver = () => {
  entireScreen.innerHTML = `
  <div class="gameover-wrapper">
    <h1 class="game-over">GAME OVER</h1>
    <button class="retry-btn">Try again</button>
  </div>
  `
  let retryButton = document.querySelector(".retry-btn");
  retryButton.addEventListener("click", function (event) {
    event.preventDefault();
    location.reload();
  })
}
