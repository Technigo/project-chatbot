// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.querySelector(".input-wrapper");
const entireScreen = document.querySelector("#body-id");
const submitButton = document.querySelector(".send-btn");
const inputField = document.querySelector("#name-input");

// If you need any global variables that you can use across different functions, declare them here:
let hero = {
  name: '',
  healthPoints: 2,
  inventory: []  
}
/* let heroHp = 2; // Hero Health Points
const heroInventory = [];// 2 is the nuber HP you start with */
let item1;
let item2;
let htmlItem1;
let htmlItem2;
let intersectionCounter = 0;

const pathChoices = [
  {
    intersecion: 1,
    paths: [
      {
        id: 1,
        name: 'desert',
        goodItem: 'water-bottle',
        okItem: 'umbrella',
        goodMessage: 'Thankfully, the bottle of water 🥤 saves you from dehydration.🎖 You may proceed.',
        okMessage: 'The umbrella ☂️ saved you from the scorching sun ☀️ but you are severly dehydrated and weakened. Lose 1 hp',
        failMessage: 'The sun burns 🔥 your skin and you sweat every last drop of water 🥵. You die! ☠️'
      },
      {
        id: 2,
        name: 'mountain',
        goodItem: 'rope',
        okItem: 'helmet',
        goodMessage: 'Using your rope 🪢 you mange to touch down on the ground softly. 🎖 You may proceed!',
        okMessage: 'Halfway down you loose you footing, but thanks to your helmet eyou survived but very injured. Lose 1 hp.',
        failMessage: "You lose you footing and tumble down the mountain side, crushing every bone in your body. Why didn't you choose something else to help you on this dangerous mission? You die! ☠️"
      },
      {
        id: 1,
        name: 'creek',
        goodItem: 'boat',
        okItem: 'life-jacket',
        goodMessage: 'The inflateble boat ⛵️ helped you to cruise peacefully down the creek 🌊. You may proceed!🎖',
        okMessage: 'The life-jacket 🦺 helped you stay afloat on the dangerous water. You exit the creek alive but severely injured. 🤕 Lose 1 hp.',
        failMessage: 'You attemt to swim along the creek 🌊 but its currents are too strong and you are pulled under water to a certain death. You drown! ☠️'
      },
    ]
  },
  {
    intersecion: 2,
    paths: [
      {
        id: 1,
        name: 'soothe',
        goodItem: 'guitar',
        okItem: 'meat',
        goodMessage: 'The music you play on your guitar 🎸 makes the dragon fall asleep 💤. You may proceed.',
        okMessage: 'You hold out the piece of meat 🍖 to the dragon 🐲. It makes it relaxed and happy but it also bites your hand off 🍽. You loose alot of blood 🩸. Lose 1 hp',
        failMessage: "Your attemt fails and the dragon 🐲 eats you alive. Why didn't you choose something else to help you on this dangerous mission? You die. ☠️"
      },
      {
        id: 2,
        name: 'strike',
        goodItem: 'sword',
        okItem: 'shield',
        goodMessage: 'You pull out your sword 🗡 and thrust it in to the dragons 🐲 heart, killing it. You may proceed.',
        okMessage: 'Using you shield 🛡 you block most of the dragons 🐲 attack but you still get injured. 🤕 Your body is severly bruised. Lose 1 hp.',
        failMessage: "Your attemt fails and the dragon 🐲 eats you alive. Why didn't you choose something else to help you on this dangerous mission? You die! ☠️"
      },
      {
        id: 1,
        name: 'sneek-past',
        goodItem: 'cloak',
        okItem: 'moccasin',
        goodMessage: 'Using your invisibility cloak 🧥 you sneek safely past the dragon 🐲. You may proceed.',
        okMessage: "Thanks to your moccasin the dragon 🐲 can't hear you sneak past it 🤫. Unfortunately it sees you and severly burns you 🔥. Lose 1 hp.",
        failMessage: "Your attemt fails and the dragon 🐲  eats you alive. Why didn't you choose something useful to helt you on this dangerous mission? You die! ☠️"
      },
    ]
  },
]




// Helper function to generate chat messages
const generateChatHTML = (message, senderType, senderIcon) => `
  <section class="${senderType}-msg">
    <img src="./src/assets/images/${senderIcon}.png" alt="${senderType}" />
    <div class="bubble ${senderType}-bubble">
      <p>${message}</p>
    </div>
  </section>
`;

// Improved showMessage function
const showMessage = (message, sender) => {
  const senderType = sender === 'user' ? 'user' : 'bot';
  const senderIcon = sender === 'user' ? 'user' : 'bot';

  chat.innerHTML += generateChatHTML(message, senderType, senderIcon);
  
  // This makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};


const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi friend 👋, what is your name?", 'bot');
  const currentPath = pathChoices[intersectionCounter]
   console.log('current path högst upp i koden', currentPath)
}

setTimeout(greeting, 1000);

submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    hero.name = inputField.value; // Sets value to heros name 
    showMessage(`Hello 👋, my name is ${hero.name}`, "user"); 
    inputWrapper.innerHTML = "";
    //After showMessages is called, setTimout waits 1000 ms to call nameReply 
    setTimeout(nameReply, 1200);
  })

/* This is the first reply from the bot */
const nameReply = () => {
  showMessage(`Please, ${hero.name}, help me save my puppy 🐶. Here are some items you may need to succeed on this rescue mission. Choose wisely! 🧐`, "bot");
  setTimeout(itemSelection, 2000);
}


// List to select items 
const itemSelection = () => {
  inputWrapper.innerHTML = `
    <select id="first-item">
      <option value="" selected disabled>👇 Select an item</option>
      <option value="umbrella">Umbrella ☂️</option>
      <option value="boat">Inflatable boat ⛵️</option>
      <option value="water-bottle">Bottle of water🥤</option>
      <option value="life-jacket">Life jacket 🦺</option>
      <option value="helmet">Helmet ⛑</option>
      <option value="rope">Rope 🪢</option>
    </select>
    
    <select id="second-item">
      <option value="" selected disabled>👇 Select another item</option>
      <option value="meat">Piece of meat 🍗</option>
      <option value="guitar">Guitar 🎸</option>
      <option value="sword">Sword 🗡</option>
      <option value="cloak">Invisibility cloak 🧥</option>
      <option value="shield">Shield 🛡</option>
      <option value="moccasin">Moccasin 🧦</option>
    </select>
    
    <button id="select-item-btn">Add to backpack 🎒</button>`;
   
    const itemList1 = document.querySelector("#first-item");
    const itemList2 = document.querySelector("#second-item");
    const selectItemBtn = document.querySelector("#select-item-btn");
    selectItemBtn.addEventListener("click", function (event) {
      event.preventDefault();
      // the value of the selected option in respective list is assign to variables and added to heros inventory.
      let firsItem = itemList1.options[itemList1.selectedIndex].value;
      let secondItem = itemList2.options[itemList2.selectedIndex].value;
      hero.inventory.push(firsItem, secondItem)

      htmlItem1 = itemList1.options[itemList1.selectedIndex].innerHTML;
      htmlItem2 = itemList2.options[itemList2.selectedIndex].innerHTML;
      inputWrapper.innerHTML = ``;
      showMessage (`I choose ${hero.inventory[0]} and ${hero.inventory[1]}`, 'user');
      setTimeout(botIntersection1, 1200);
      }) 
}

const botIntersection1 = () => {
  // Display buttons for path choice
  showMessage (`Which road do you want to take? 🚦`,"bot");
  inputWrapper.innerHTML = `
  <button class="path-button" id="desert">Desert 🌵</button>
  <button class="path-button" id="mountain">Mountain 🌋</button>
  <button class="path-button" id="creek">Creek 🌊</button>
`;
  let pathSelect = document.querySelectorAll(".path-button");
  pathSelect.forEach(button => button.addEventListener("click", function (event) {
    //event.preventDefault();
    inputWrapper.innerHTML = "";
    showMessage(`I will go through the ${this.innerHTML}`, "user");
    setTimeout(pathChoice(event), 2000);
  }))
} 

//! PathChoice function
const pathChoice = (event) => {
  console.log('event', event.target.id)
  console.log('counter', intersectionCounter)
  console.log('pathChoices', pathChoices)
  console.log('val vid aktuellt index', pathChoices[intersectionCounter])
  /* let pathSelect = document.querySelectorAll(".path-button");
  pathSelect.forEach(button => button.addEventListener("click", function (event) {
    //event.preventDefault();
    inputWrapper.innerHTML = "";
    showMessage(`I will go through the ${this.innerHTML}`, "user"); */
    
    // Finding the selected path for the current intersection
    const currentPath = pathChoices[intersectionCounter].paths.find((path) => path.name === event.target.id)
    console.log('current path', currentPath)
    if (hero.inventory.includes(currentPath.goodItem)) {
      setTimeout( () => {
        showMessage(currentPath.goodMessage,`bot`); //
        setTimeout( () => {showMessage(`Wohoo! 🥳`,`user`)}, 3500);  
      }, 1800);
      if (intersectionCounter === 0) setTimeout(readyToContinue, 8000);
      else if (intersectionCounter === 1) setTimeout(conclusion, 8000);
    } else if (hero.inventory.includes(currentPath.okItem)) {
      setTimeout( () => { 
        showMessage(currentPath.okMessage,`bot`); 
        hero.healthPoints -= 1;
        setTimeout( () => {showMessage(`Oh no! ❤️‍🩹`,`user`)}, 3500);
      }, 1800);
      if (intersectionCounter === 0) setTimeout(readyToContinue, 8000);
      else if (intersectionCounter === 1) setTimeout(conclusion, 8000);
    } else {
      setTimeout( () => { 
        showMessage(currentPath.failMessage,`bot`); 
      }, 1800);
      setTimeout(gameOver, 8000);
    }
    intersectionCounter ++;
  }/* )) 
} */

const readyToContinue = () => {
  showMessage(`You can see the puppy now but its guarded by a huge dragon 🐶 🐲. Are you brave enough to continue?`, `bot`) 
  inputWrapper.innerHTML = `
  <button class="continue" id="continue">YES! Bring it on! 👊🏼</button>
  <button class="continue" id="do-not-continue">No, I'm too scared! 🫣</button>
  `;
  setTimeout(continueAdventure, 2000)
}

// Makes buttons visible for next step
const continueAdventure = () => {
  let continueAdventureButton = document.querySelectorAll(".continue");
  continueAdventureButton.forEach(button => button.addEventListener("click", function (event) {
    event.preventDefault();
    inputWrapper.innerHTML = "";
    showMessage(this.innerHTML, "user");

    if (this.id === "continue") {
       setTimeout(methodChoice, 2000);

    } else {
      setTimeout( () => {
        showMessage("Coward!😡 Come back when you are ready!", "bot")
        , 2000});
        setTimeout (gameOver, 4000);
    }
  }))
} 

// Function to choose way to face the dragon!
const methodChoice = () => {
  showMessage(
    `How will you try to get past the dragon 🐲 ?
    Remember, you still have the ${hero.inventory[1]} in your backpack.`,
    `bot`
    );
  
  inputWrapper.innerHTML = `
    <button class="path-button" id="soothe">Soothe</button>
    <button class="path-button" id="strike">Strike</button>
    <button class="path-button" id="sneak">Sneak past</button>
  `;

  let pathSelect = document.querySelectorAll(".path-button");
  pathSelect.forEach(button => button.addEventListener("click", function (event) {
    //event.preventDefault();
    inputWrapper.innerHTML = "";
    showMessage(`I will go through the ${this.innerHTML}`, "user");
    pathChoice(event);
  }))
}

const conclusion = () => {
  inputWrapper.innerHTML = `
  <button class="price-button" id="puppy-button">🐶</button>
  <button class="price-button" id="treasure-button">👑</button>
  `;

  showMessage(`You can now save the adorable puppy 🐶 but you also see a marvelous treasure 👑. You can only carry one of them 🎒. What will you bring?`, "bot");
  
  let pathSelect = document.querySelectorAll(".price-button");
    pathSelect.forEach(button => button.addEventListener("click", function (event) {
      event.preventDefault();
      inputWrapper.innerHTML = "";
      if (this.id === "puppy-button") {
        showMessage(`I will rescue the puppy 🐶, of course!`, "user");
        setTimeout(finalScene, 500)
      }
      else {
        setTimeout( () => {
          showMessage(`That gold is irresistible! I will take take the treasure 👑 !`, "user"); 
          }, 500);       
          setTimeout( () => {
            showMessage(`You only had one job, to save the puppy 🐶! Why didn't you? ${hero.nameame}, you are a horrible, greedy person 😡.`,"bot")}, 4000);
        setTimeout(gameOver, 8000);
      }
    }))
}

const finalScene = () => {
  setTimeout(showMessage("Great job. The items you brought 🎒 really helped you on this mission. I knew you could do it!✌️ You and the puppy 🦸‍♀️🐶 get in to a waiting helicopter 🚁 and fly away to safety...","bot"), 3000)
  setTimeout(endScreen, 8000)
}

const deathBy0Hp = () => {
  if(hero.healthPoints === 0) {
    showMessage(`Your injuries are too severe. You die! ☠️`, 'bot');
    setTimeout(gameOver, 3500);
  }
}

//victory screen function
const endScreen = () => {
  entireScreen.innerHTML=`
  <div class="end-content-wrapper">
    <h1>🏆 Victory! 🏆<h1>
    <p>You rescued the puppy and defeated the dragon! Now you and the puppy can enjoy a well deserved rest! Mission accomplished!</p>
    <div>
      <iframe src="https://giphy.com/embed/LRZZJtvKUb6pBASWSH" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="https://giphy.com/gifs/hawaii-maui-kauai-LRZZJtvKUb6pBASWSH">via GIPHY</a></p>
    </div>
    <button class="replay-btn">Play again</button>
    <p> This interactive story was made by Elin Segelöv and Saralie Bognandi.</p>
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
    <h1 class="game-over">💀 GAME OVER 💀</h1>
    <button class="retry-btn">Try again</button>
  </div> 
  `
  let retryButton = document.querySelector(".retry-btn");
  retryButton.addEventListener("click", function (event) {
    event.preventDefault();
    location.reload();
  })
}
