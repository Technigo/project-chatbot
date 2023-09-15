
// DOM selectors
const chat = document.getElementById('chat');
const replyForm = document.getElementById('reply-form');
const inputWrapper = document.querySelector(".input-wrapper");
const entireScreen = document.querySelector("#body-id");
const submitButton = document.querySelector(".send-btn");
const inputField = document.querySelector("#name-input");

// Global variables
let pathChoices;
let intersectionCounter = 0;
const hero = {
  name: '',
  healthPoints: 2,
  inventory: []  
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    pathChoices = data;
  })
  .catch(error => console.error('Failed to fetch JSON', error)
);

// Helper function to generate chat messages
const generateChatHTML = (message, senderType, senderIcon) => `
  <section class="message ${senderType}-msg">
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

setTimeout(() => greeting(), 1000);

replyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  hero.name = inputField.value; // Sets value to heros name 
  showMessage(`Hello 👋, my name is ${hero.name}`, "user"); 
  inputWrapper.innerHTML = "";
  setTimeout(() => displayChoices(0), 1200);
})

//! ------------------------- displayChoices ---------------------------
const displayChoices = (currentIntersection) => {
  const intersection = pathChoices.find((item) => item.intersection === currentIntersection);
  console.log(intersection)
  showMessage (intersection.question,"bot");

  // Special case for rendering select element instead of buttons
  if (intersection.intersection === 0) {
    const firstItem = intersection.options[0].items.map((item) => {
      return (`
        <option value=${item.id}>${item.text}</option>
      `)
    })
    const secondItem = intersection.options[1].items.map((item) => {
      return (`
        <option value=${item.id}>${item.text}</option>
      `)
    })
    inputWrapper.innerHTML = `
      <form id=item-form>
        <select id="first-item">
          <option value="" selected disabled>First item</option>
          ${firstItem}
        </select>
        <select id="second-item">
          <option value="" selected disabled>Second item</option>
          ${secondItem}
        </select>
        <button type='submit' id="select-item-btn">Add to backpack</button>
      </form>
      `;
    const itemForm = document.getElementById("item-form");
    const itemList1 = document.getElementById("first-item");
    const itemList2 = document.getElementById("second-item");

    itemForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // the value of the selected option in respective list is assign to variables and added to heros inventory.
      const firstItem = itemList1.options[itemList1.selectedIndex].value;
      const secondItem = itemList2.options[itemList2.selectedIndex].value;
      hero.inventory.push(firstItem, secondItem)

      inputWrapper.innerHTML = ``;

      showMessage (`I choose the ${hero.inventory[0]} and the ${hero.inventory[1]}`, 'user');
      setTimeout(() => displayChoices(currentIntersection +1), 1200);
      intersectionCounter++;
    }) 
  } else {
    const allOptions = intersection.options.map((option) => {
      return (`
        <button class="choice-button" id=${option.id}>${option.text}</button>
      `)
    })
    inputWrapper.innerHTML = `
      ${allOptions}
    `;
  }
  
  // Add eventlistener to buttons and depending on the current intersection, 
  // display user reply based on players choice.
  const choiceButtons = document.querySelectorAll(".choice-button");
  choiceButtons.forEach(button => button.addEventListener("click", (event) => {
    inputWrapper.innerHTML = "";
    switch (intersection.intersection) {
      case 1 :
        showMessage(`I will go through the ${event.target.innerHTML}`, "user");
        break;
      case 2:
        showMessage(`I will ${event.target.id}`, "user");
        console.log('svaret', event.target.id);
        break;
      case 3 :
        showMessage(`I will ${event.target.innerHTML} the dragon`, "user"); 
        break;
      case 4 :
        showMessage(`I will take the ${event.target.id} with me!`, "user"); 
        break;
    }
    setTimeout(() => pathChoice(event.target.id), 2000);
  }))
} 

//! ------------------------- pathChoice ---------------------------
const pathChoice = (id) => {
  // Finding the selected path for the current intersection
  console.log('pathChoices[intersectionCounter]', pathChoices[intersectionCounter]);
  const currentPath = pathChoices[intersectionCounter].paths.find((path) => path.name === id);
  intersectionCounter ++;

  //Special cases where we don't check for items in inventory
  if (id === 'continue') {
    showMessage(currentPath.goodMessage,`bot`); 
  } else if (id === 'resign') {
    showMessage(currentPath.failMessage,`bot`); 
    setTimeout(() => gameOver(), 2000);
  } else if (id === 'puppy') {
    showMessage(currentPath.goodMessage,`bot`); 
    setTimeout(() => finalScene(), 2000)
  } else if (id === 'treasure') {
    showMessage(currentPath.failMessage,`bot`); 
    setTimeout(() => gameOver(), 2000)
  } else {
    //Checking for items in inventory
    if (hero.inventory.includes(currentPath.goodItem)) {
      setTimeout( () => {
        showMessage(currentPath.goodMessage,`bot`); 
        setTimeout( () => {showMessage(`Wohoo! 🥳`,`user`)}, 3500);  
      }, 1800);
    } else if (hero.inventory.includes(currentPath.okItem)) {
      setTimeout( () => { 
        hero.healthPoints -= 1;
        showMessage(currentPath.okMessage,`bot`); 
        console.log('hp vid ok item', hero.healthPoints)
        if (hero.healthPoints === 0) {
          setTimeout( () => {deathBy0Hp()}, 3000);
        } else {
          //TODO replace with showing a heart disapperaing from hp bar
          setTimeout( () => {showMessage(`Oh no! ❤️‍🩹`,`user`)}, 3500);
        }
      }, 1800);
    } else {
      hero.healthPoints = 0;
      showMessage(currentPath.failMessage,`bot`); 
      setTimeout(() => deathBy0Hp(), 3000);
    }
  }

  if (hero.healthPoints > 0 && id !== 'puppy' || id !== 'treasure') {
    setTimeout(() => displayChoices(intersectionCounter), 8000)
  } else if (hero.healthPoints === 0) {
    setTimeout( () => { 
      showMessage(currentPath.failMessage,`bot`); 
    }, 1800);
    setTimeout(gameOver, 8000);
  }
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
  const retryButton = document.querySelector(".replay-btn");
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