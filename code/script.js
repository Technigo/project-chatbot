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
let item1;
let item2;
let htmlItem1;
let htmlItem2;


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
  showMessage("Hi friend, what is your name?", 'bot');

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
  showMessage(`Please, ${heroName}, help me save my puppy 🐶. Here are some items you may need to succeed on this rescue mission. Choose wisely!`, "bot");
  setTimeout(itemSelection, 1000);
}


// List to select items 
const itemSelection = () => {
  inputWrapper.innerHTML = `
    <select id="item-one">
      <option value="" selected disabled>👇 Select an item</option>
      <option value="umbrella">Umbrella ☂️</option>
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
    
    <button id="select-item-btn">Add to backpack 🎒</button>`;
   
    let itemList1 = document.querySelector("#item-one");
    let itemList2 = document.querySelector("#item-two");
    let selectItemBtn = document.querySelector("#select-item-btn");
    selectItemBtn.addEventListener("click", function (event) {
      event.preventDefault();
      // the value of the selected option in respective list is assign to variable item1 and item2.
      item1 = itemList1.options[itemList1.selectedIndex].value;
      item2 = itemList2.options[itemList2.selectedIndex].value;
      htmlItem1 = itemList1.options[itemList1.selectedIndex].innerHTML;
      htmlItem2 = itemList2.options[itemList2.selectedIndex].innerHTML;
      inputWrapper.innerHTML = ``;
      showMessage (`I choose ${htmlItem1} and ${htmlItem2}`, 'user');
      heroInventory.push(item1, item2); 
      console.log(`Added ${item1, item2} to backpack`);
      console.log("inventory", heroInventory);
      setTimeout(botIntersection1, 1000);
      }) 
}


const botIntersection1 = () => {
  inputWrapper.innerHTML = `
  <button class="path-button" id="desert">Desert 🌵</button>
  <button class="path-button" id="mountain">Mountain 🌋</button>
  <button class="path-button" id="creek">Creek 🌊</button>
`;
  showMessage (`Which road do you want to take?`,"bot");
  setTimeout(pathChoice, 1000);
} 

// Display buttons for path choice
const pathChoice = () => {
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
          showMessage(`Thankfully, the bottle of water 🥤 saves you from dehydration. You may proceed.`,`bot`); //
          setTimeout( () => {showMessage(`Wohoo! 🥳`,`user`)}, 2000);  
        }, 1500);
        setTimeout(botIntersection2, 5000);

      }
      else if (heroInventory.includes("umbrella")) {
        console.log("Loose 1hp")
        setTimeout( () => { 
          showMessage(`The umbrella ☂️ saved you from the scorching sun ☀️ but you are severly dehydrated and weakened.`,`bot`); 
          heroHp = (heroHp -1);
          console.log(heroHp);
          setTimeout( () => {showMessage(`Oh no! ❤️‍🩹 😭`,`user`)}, 2000);
        }, 1500);
        setTimeout(botIntersection2, 5000);
      }
      else {
        console.log("GAME OVER")
        setTimeout( () => { 
          showMessage(`The sun burns your skin and you sweat every last drop of water 🥵. You die!`,`bot`); 
        }, 1500);
        setTimeout(gameOver, 6000);
      }

    } else if (this.id === "mountain") {
      console.log("mountain")
      if (heroInventory.includes("rope")) {
        console.log("Perfect") 
        setTimeout( () => { 
          showMessage(`Using your rope 🪢 you mange to touch down on the ground softly. You may proceed!`,`bot`);   
        }, 1500);
       setTimeout( () => {showMessage(`Wohoo! 🥳`,`user`)}, 2000);
      setTimeout(botIntersection2, 5000);
      } 
      else if (heroInventory.includes("helmet")) {
        console.log("Loose 1hp")
        setTimeout( () => {
          showMessage(` Halfway down you loose you footing, but thanks to your helmet eyou survived but very injured.`,`bot`);
          heroHp = (heroHp -1);
          console.log(heroHp); 
          setTimeout( () => {showMessage(`Oh no!❤️‍🩹 😭`,`user`)}, 2000);
        }, 1500);
        setTimeout(botIntersection2, 5000);
      }
      else {
        console.log("GAME OVER")
        setTimeout( () => { 
          showMessage("You lose you footing and tumble down the mountain side, crushing every bone in your body. Why didn't you choose something else to help you on this dangerous mission? You die!",`bot`); 
        }, 1500);
        setTimeout(gameOver, 6000);
      }
    } else {
      console.log("creek")
      if (heroInventory.includes("boat")) {
        console.log("Perfect") 
        setTimeout( () => {
          showMessage(`The inflateble boat helped you to cruise peacefully down the creek. You may proceed!`,`bot`);   
          setTimeout( () => {showMessage(`Wohoo! 🥳`,`user`)}, 2000);
        }, 1500);
        setTimeout(botIntersection2, 5000);
      }
      else if (heroInventory.includes("life-jacket")) {
        console.log("Loose 1hp")
        setTimeout( () => {
          showMessage(`The life-jacket helped you stay afloat on the dangerous water. You exit the creek alive but severely injured.`,`bot`); 
          setTimeout( () => {showMessage(`Oh no! ❤️‍🩹 😭`,`user`)}, 2000);
          heroHp = (heroHp -1);
          console.log(heroHp);
        }, 1500);
        setTimeout(botIntersection2, 5000);
      }
      else {
        console.log("GAME OVER")
        setTimeout( () => {
          showMessage(`You attemt to swim along the creek but its currents are too strong and you are pulled under water to a certain death. You drown!`,`bot`); 
        }, 1500);
        setTimeout(gameOver, 6000);
      }
    } 
  }))
}

const botIntersection2 = () => {
  inputWrapper.innerHTML = `
  <button class="continue" id="continueYes">YES! Bring it on!👊🏼</button>
  <button class="continue" id="continueNo">No, I'm too scared!🫣</button>
  `;
  showMessage(`You can see the puppy now but its guarded by a huge dragon 🐲. Are you brave enough to continue?`, `bot`) 
  setTimeout(continueAdventure, 500)
}

// Makes buttons visible for next step
const continueAdventure = () => {
  let continueAdventureButton = document.querySelectorAll(".continue");
  continueAdventureButton.forEach(button => button.addEventListener("click", function (event) {
    event.preventDefault();
    inputWrapper.innerHTML = "";
    console.log("continue");
    showMessage(this.innerHTML, "user");

    if (this.id === "continueYes") {
       setTimeout(methodChoice, 1000);

    } else {
      setTimeout( () => {
        showMessage("Coward!😡 Come back when you are ready!", "bot")
        , 1000});
        setTimeout (gameOver, 2000);
    }
  }))
} 

// Function to choose way to face the dragon!
const methodChoice = () => {
  inputWrapper.innerHTML = `
    <button class="method-button" id="soothe">Soothe</button>
    <button class="method-button" id="strike">Strike</button>
    <button class="method-button" id="sneak">Sneak past</button>
  `;
  showMessage(`How will you try to get past the dragon 🐲 ? Remember, you still have the ${htmlItem2} in your backpack.`,`bot`);
  
  let pathSelect = document.querySelectorAll(".method-button");
  pathSelect.forEach(button => button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(this.id)
    inputWrapper.innerHTML = "";
    showMessage(`${this.innerHTML} the 🐲`, "user");
  
  // These are if-statment within an if-statement. Depending on which path the Hero chooses and what it has in it's backpack/inventory different conditions are triggered. 
  // For one road, one item is perfect, one item makes you loose 1 hp, the rest will give game over.
    if (this.id === "soothe") {
      console.log("soothe")
      if (heroInventory.includes("guitar")) {
        console.log("Perfect") 
        setTimeout( () => {
          showMessage(`The music you play on your guitar 🎸 makes the dragon fall asleep 💤. You may proceed.`,`bot`);   
          setTimeout( () => {showMessage(`Yay 🥳`,`user`)}, 1000);
        }, 1500);
      setTimeout(conclusion, 3000);
      }

      else if (heroInventory.includes("meat")) {
        console.log("Loose 1hp")
        setTimeout( () => { 
          showMessage(`You hold out the piece of meat 🍖 to the dragon 🐲. It makes it relaxed and happy but it also bites your hand off. You loose alot of blood 🩸.`,`bot`); 
          heroHp = (heroHp -1);
          console.log(heroHp);
          setTimeout( () => {showMessage(`Oh no! ❤️‍🩹 😭`,`user`)}, 1000);
          if (heroHp === 0) {
            setTimeout(deathBy0Hp, 2000) //to make deathBy0Hp function run if hp is 0, otherwise run conclusion function. 
          }
          else {
            setTimeout(conclusion, 2000);
          }
        }, 1500);
      }
          
      else {
        console.log("GAME OVER")
        setTimeout( () => { 
          showMessage(`Your attemt fails and the dragon 🐲 eats you alive. Why didn't you choose something else to help you on this dangerous mission? You die. ☠️`,`bot`); 
        }, 1500);
        setTimeout(gameOver, 8000);
      }

    } else if (this.id === "strike") {
      console.log("strike")
      if (heroInventory.includes("sword")) {
        console.log("Perfect") 
        setTimeout( () => { 
          showMessage(`You pull out your sword and thrust it in to the dragons 🐲 heart, killing it. You may proceed.`,`bot`);   
          setTimeout( () => {showMessage(`Yay! 🥳`,`user`)}, 1000);
        }, 1500);
        setTimeout(conclusion, 7000);
      }

      else if (heroInventory.includes("shield")) {
        console.log("Loose 1hp")
        setTimeout( () => {
          showMessage(`Using you shield you block most of the dragons attack but you still get injured. Your body is severly bruised.`,`bot`);
          heroHp = (heroHp -1);
          console.log(heroHp); 
          setTimeout( () => {showMessage(`Oh, no!❤️‍🩹 😭`,`user`)}, 1000);
          //to make deathBy0Hp function run if hp is 0, otherwise run conclusion function
          if (heroHp === 0) {
            setTimeout(deathBy0Hp, 3000)
          }
          else {
            setTimeout(conclusion, 5000);
          }
        }, 1500);
      }
      
      else {
        console.log("GAME OVER")
        setTimeout( () => { 
          showMessage(`Your attemt fails and the dragon 🐲 eats you alive. Why didn't you choose something else to help you on this dangerous mission? You die! ☠️`,`bot`); 
        }, 1500);
        setTimeout(gameOver, 10000);
      }

    } else {
      console.log("sneak")
      if (heroInventory.includes("invicibility-cloak")) {
        console.log("Perfect") 
        setTimeout( () => {
          showMessage(`Using your invicibility cloak you sneek safely past the dragon 🐲. You may proceed.`,`bot`);   
          setTimeout( () => {showMessage(`Yay! 🥳`,`user`)}, 3000);
        }, 1500);
        setTimeout(conclusion, 7000);
      }
      else if (heroInventory.includes("moccasin")) {
        console.log("Loose 1hp")
        setTimeout( () => {
          showMessage(`Thanks to your moccasin the dragon 🐲 can't hear you sneak past it. Unfortunately it sees you and severly burns you.`,`bot`); 
          setTimeout( () => {showMessage(`Oh no! ❤️‍🩹 😭`,`user`)}, 1000);
          heroHp = (heroHp -1);
          console.log(heroHp);
          //to make deathBy0Hp function run if hp is 0, otherwise run conclusion function
          if (heroHp === 0) {
            setTimeout(deathBy0Hp, 2000)
          }
          else {
            setTimeout(conclusion, 2000);
          }
        }, 1500);
      }
      else {
        console.log("GAME OVER")
        setTimeout( () => {
    showMessage(`Your injuries are too severe. You die! ☠️`, 'bot');
        showMessage(`Your attemt fails and the dragon 🐲  eats you alive. Why didn't you choose something else to help you on this dangerous mission? You die! ☠️`,`bot`); 
        }, 1500);
        setTimeout(gameOver, 8000);
      }
    } 
  }))
  }

const conclusion = () => {
  inputWrapper.innerHTML = `
  <button class="price-button" id="puppy-button">🐶</button>
  <button class="price-button" id="treasure-button">👑</button>
  `;

  showMessage(`You can now save the adorable puppy 🐶 but you also see a marvelous treasure 👑. You can only carry one of them. What will you do?`, "bot");
  
  let pathSelect = document.querySelectorAll(".price-button");
    pathSelect.forEach(button => button.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(this.id)
      inputWrapper.innerHTML = "";
      if (this.id === "puppy-button") {
        showMessage(`I will rescue the puppy 🐶, of course!`, "user");
        setTimeout(finalScene, 2000)
      }
      else {
        setTimeout( () => {
          showMessage(`That gold 👑 is irresistible! I will take take the treasure!`, "user"); 
          }, 1000);       
          setTimeout( () => {
            showMessage(`You only had one job, to save the puppy 🐶! Why didn't you? ${heroName}, you are a horrible, greedy person.`,"bot")}, 3000);
        setTimeout(gameOver, 7000);
      }
    }))
}

const finalScene = () => {
  setTimeout(showMessage("Great job. The items you brought really helped you on this mission. I knew you could do it! You and the puppy get in to a waiting helicopter 🚁 and fly away to safety...","bot"), 3000)
  setTimeout(endScreen, 8000)
}

const deathBy0Hp = () => {
  if(heroHp === 0) {
    showMessage(`Your injuries are too severe. You die! ☠️`, 'bot');
    setTimeout(gameOver, 3000);
  }
}
//victory screen function
const endScreen = () => {
  entireScreen.innerHTML=`
  <div class="end-content-wrapper">
    <h1>Victory!<h1>
    <p>You rescued the puppy and defeted the dragon! Now you and the puppy can enjoy a well deserved rest! Mission accomplished!</p>
    <div>
      <iframe src="https://giphy.com/embed/LRZZJtvKUb6pBASWSH" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="https://giphy.com/gifs/hawaii-maui-kauai-LRZZJtvKUb6pBASWSH">via GIPHY</a></p>
    </div>
    <button class="replay-btn">Play again</button>
    </div>
    `
    let retryButton = document.querySelector(".replay-btn");
    retryButton.addEventListener("click", function (event) {
      event.preventDefault();
      location.reload();
    })
  
}

// Game over function
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
