// Variables that point to selected DOM elements

const chat = document.getElementById('chat');
const inputWrapper = document.querySelector(".input-wrapper");
const entireScreen = document.querySelector("#body-id");
const submitButton = document.querySelector(".send-btn");
const inputField = document.querySelector("#name-input");


// If you need any global variables that you can use across different functions, declare them here:
let intersectionCounter = 0;
let hero = {
  name: '',
  healthPoints: 2,
  inventory: []  
}

const pathChoices = [
  {
    intersection: 1,
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
    intersection: 2,
    paths: [
      {
        id: 1,
        name: 'continue',
        goodItem: '',
        okItem: '',
        goodMessage: 'I knew I could count on you!',
        okMessage: '',
        failMessage: ''
      },
      {
        id: 2,
        name: 'resign',
        goodItem: '',
        okItem: '',
        goodMessage: '',
        okMessage: '',
        failMessage: 'Coward!😡 Come back when you are ready!'
      }
    ]
  },
  {
    intersection: 3,
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
        id: 3,
        name: 'sneak',
        goodItem: 'cloak',
        okItem: 'moccasin',
        goodMessage: 'Using your invisibility cloak 🧥 you sneek safely past the dragon 🐲. You may proceed.',
        okMessage: "Thanks to your moccasin the dragon 🐲 can't hear you sneak past it 🤫. Unfortunately it sees you and severly burns you 🔥. Lose 1 hp.",
        failMessage: "Your attemt fails and the dragon 🐲  eats you alive. Why didn't you choose something useful to helt you on this dangerous mission? You die! ☠️"
      },
    ]
  },
  {
    intersection: 4,
    paths: [
      {
        id: 1,
        name: 'puppy',
        goodItem: '',
        okItem: '',
        goodMessage: `Thank you! Oh ${hero.name}, thank you!`,
        okMessage: '',
        failMessage: ``
      },
      {
        id: 2,
        name: 'treasure',
        goodItem: '',
        okItem: '',
        goodMessage: ``,
        okMessage: '',
        failMessage: `How could you chose the treasure over my precious baby?! You are a horrible, greedy person ${hero.name}!`
      }
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

// Generating messages
const showMessage = (message, sender) => {

  const senderType = sender === 'user' ? 'user' : 'bot';
  const senderIcon = sender === 'user' ? 'user' : 'bot';

  chat.innerHTML += generateChatHTML(message, senderType, senderIcon);
  
  // Makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};


const greeting = () => {
  showMessage("Hi friend 👋, what is your name?", 'bot');
}

setTimeout(greeting, 1000);

submitButton.addEventListener("click", (event) => {
    hero.name = inputField.value; // Sets value to heros name 
    showMessage(`Hello 👋, my name is ${hero.name}`, "user"); 
    inputWrapper.innerHTML = "";

    setTimeout(questGiven, 1200);
  })

/* This is the first reply from the bot */
const questGiven = () => {
  showMessage(`
    Please, ${hero.name}, help me save my puppy 🐶. 
    Here are some items you may need to succeed on this mission. Choose wisely! 🧐`, 
    "bot"
  );
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
    
    <button id="select-item-btn">Add to backpack 🎒</button>
  `;
   
  const itemList1 = document.querySelector("#first-item");
  const itemList2 = document.querySelector("#second-item");
  const selectItemBtn = document.querySelector("#select-item-btn");

  selectItemBtn.addEventListener("click", () => {
    // the value of the selected option in respective list is assign to variables and added to heros inventory.
    let firsItem = itemList1.options[itemList1.selectedIndex].value;
    let secondItem = itemList2.options[itemList2.selectedIndex].value;
    hero.inventory.push(firsItem, secondItem)

    inputWrapper.innerHTML = ``;
    showMessage (`I choose the ${hero.inventory[0]} and the ${hero.inventory[1]}`, 'user');
    setTimeout(() => displayChoices('path'), 1200);
    }) 
}
//! ------------------------- DISPLAY CHOICES ---------------------------
const displayChoices = (choiceType) => {
  // Display buttons for path choice
  if (choiceType === 'path') {
    showMessage (`Which road do you want to take?`,"bot");
    inputWrapper.innerHTML = `
      <button class="choice-button" id="desert">Desert 🌵</button>
      <button class="choice-button" id="mountain">Mountain 🌋</button>
      <button class="choice-button" id="creek">Creek 🌊</button>
    `;
  } else if (choiceType === 'continue') {
    showMessage(`
      You can see the puppy now but its guarded by a huge dragon 🐶 🐲.
      Are you brave enough to continue?`,
      `bot`
    );
    inputWrapper.innerHTML = `
      <button class="choice-button" id="continue">Of course!</button>
      <button class="choice-button" id="resign">No, I'm too scared!</button>
    `;
  } else if (choiceType === 'method') {
    showMessage(`
      How will you try to get past the dragon 🐲 ?
      Remember, you still have the ${hero.inventory[1]} in your backpack.`,
      'bot'
    );
    inputWrapper.innerHTML = `
      <button class="choice-button" id="soothe">Soothe</button>
      <button class="choice-button" id="strike">Strike</button>
      <button class="choice-button" id="sneak">Sneak past</button>
    `;
  } else if (choiceType === 'savePuppy') {
    showMessage(
      `You can now save the adorable puppy 🐶 but you also see a marvelous treasure 👑.
      You can only carry one of them 🎒. What will you bring?`,
      "bot"
    );
    inputWrapper.innerHTML = `
      <button class="choice-button" id="puppy">🐶</button>
      <button class="choice-button" id="treasure">👑</button>
    `;
  }
  // Add eventlistener to buttons
  const choiceButtons = document.querySelectorAll(".choice-button");
  choiceButtons.forEach(button => button.addEventListener("click", (event) => {
    inputWrapper.innerHTML = "";

    switch (choiceType) {
      case 'path' :
        showMessage(`I will go through the ${event.target.innerHTML}`, "user");
        break;
      case 'continue':
        showMessage(`I will ${event.target.id}`, "user");
        break;
      case 'method' :
        showMessage(`I will ${event.target.innerHTML} the dragon`, "user"); 
        break;
      case 'savePuppy' :
        showMessage(`I will take the ${event.target.id} with me!`, "user"); 
        console.log('event i puppy', event)
        break;

    }
    setTimeout(() => pathChoice(event), 2000);
  }))
} 

//! ------------------------- PATH CHOICES ---------------------------
const pathChoice = (event) => {
  // Finding the selected path for the current intersection
  const currentPath = pathChoices[intersectionCounter].paths.find((path) => path.name === event.target.id)
  console.log('path', currentPath.name)
  
    if (event.target.id === 'continue') {
      showMessage(currentPath.goodMessage,`bot`); 
    } else if (event.target.id === 'resign') {
      showMessage(currentPath.failMessage,`bot`); 
      setTimeout(() => gameOver(), 2000);
    } else if (event.target.id === 'puppy') {
      showMessage(currentPath.goodMessage,`bot`); 
      console.log('puppy', event.target.id)
      setTimeout(() => finalScene(), 2000)
    } else if (event.target.id === 'treasure') {
      console.log('treasure', event.target.id)
      showMessage(currentPath.failMessage,`bot`); 
      setTimeout(() => gameOver(), 2000)
    }
 
    if (hero.inventory.includes(currentPath.goodItem)) {
      setTimeout( () => {
        showMessage(currentPath.goodMessage,`bot`); 
        setTimeout( () => {showMessage(`Wohoo! 🥳`,`user`)}, 3500);  
      }, 1800);
    } else if (hero.inventory.includes(currentPath.okItem)) {
      setTimeout( () => { 
        showMessage(currentPath.okMessage,`bot`); 
        hero.healthPoints -= 1;
        console.log('hp vid ok item', hero.healthPoints)
        if (hero.healthPoints === 0) {
          setTimeout( () => {deathBy0Hp()}, 3000);
        } else {
          //TODO replace with showing a heart disapperaing from hp bar
          setTimeout( () => {showMessage(`Oh no! ❤️‍🩹`,`user`)}, 3500);
        }
      }, 1800);
    } 
  //! displayChoices körs ovsett. hero.hp är fortfarande 1 här
  if (hero.healthPoints > 0 && intersectionCounter === 0) setTimeout(() => displayChoices('continue'), 8000);
  else if (hero.healthPoints > 0 && intersectionCounter === 1) setTimeout(() => displayChoices('method'), 4000);
  else if (hero.healthPoints > 0 && intersectionCounter === 2) setTimeout(() => displayChoices('savePuppy'), 8000);
  else if (hero.healthPoints === 0) {
    setTimeout( () => { 
      showMessage(currentPath.failMessage,`bot`); 
    }, 1800);
    setTimeout(gameOver, 8000);
  }
  intersectionCounter ++;
}


const finalScene = () => {
  setTimeout(showMessage
    (`Great job. The items you brought 🎒 really helped you on this mission.
    I knew you could do it!✌️ You and the puppy 🦸‍♀️🐶 get in to a waiting helicopter 🚁 and fly away to safety...`,
    'bot'), 3000
  )
  setTimeout(endScreen, 8000)
}

const deathBy0Hp = () => {
  if(hero.healthPoints === 0) {
    showMessage(`Your injuries are too severe. You die! ☠️`, 'bot');
    setTimeout(gameOver, 3500);
  }
}

const endScreen = () => {
  entireScreen.innerHTML=`
  <div class="end-content-wrapper">
    <h1>🏆 Victory! 🏆<h1>
    <p>Well done ${hero.name}! You got past the dragon and rescued the puppy.</p>
    <p>Now you and the puppy can enjoy a well deserved rest! Mission accomplished!</p>
    <div>
      <iframe src="https://giphy.com/embed/LRZZJtvKUb6pBASWSH" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="https://giphy.com/gifs/hawaii-maui-kauai-LRZZJtvKUb6pBASWSH">via GIPHY</a></p>
    </div>
    <button class="replay-btn">Play again</button>
    <p> This interactive story was made by Elin Segelöv and Saralie Bognandi.</p>
    </div>
    `
    let retryButton = document.querySelector(".replay-btn");
    retryButton.addEventListener("click", () => {
      location.reload();
    })
}


const gameOver = () => {
  entireScreen.innerHTML = `
  <div class="gameover-wrapper">
    <h1 class="game-over">💀 GAME OVER 💀</h1>
    <button class="retry-btn">Try again</button>
  </div> 
  `
  const retryButton = document.querySelector(".retry-btn");
  retryButton.addEventListener("click", () => {
    location.reload();
  })
}