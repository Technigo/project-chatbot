// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn');
const nameForm = document.getElementById('name-form');

// Plant array
const plants = [
  {
    name: "aglaonema",
    image: "assets/aglaonema.svg",
    waterCondition: "littleWater",
    lightCondition: "dark",
    beginner: false
  },
  {
    name: "aloe vera",
    image: "assets/aloe.svg",
    waterCondition: "littleWater",
    lightCondition: "light",
    beginner: true
  },
  {
    name: "alocasia",
    image: "assets/alocasia.svg",
    waterCondition: "anyWater",
    lightCondition: "light",
    beginner: false
  },
  {
    name: "begonia",
    image: "assets/begonia.svg",
    waterCondition: "anyWater",
    lightCondition: "light",
    beginner: true
  },
  {
    name: "birds nest fern",
    image: "assets/birdsnest.svg",
    waterCondition: "anyWater",
    lightCondition: "dark",
    beginner: false
  },
  {
    name: "bromelia",
    image: "assets/bromelia.svg",
    waterCondition: "littleWater",
    lightCondition: "light",
    beginner: false
  },
  {
    name: "cactus",
    image: "assets/cactus.svg",
    waterCondition: "littleWater",
    lightCondition: "light",
    beginner: true
  },
  {
    name: "calathea",
    image: "assets/calathea.svg",
    waterCondition: "lotWater",
    lightCondition: "dark",
    beginner: false
  },
  {
    name: "coleus",
    image: "assets/coleus.svg",
    waterCondition: "lotWater",
    lightCondition: "light",
    beginner: true
  },
  {
    name: "coral cactus",
    image: "assets/coralcactus.svg",
    waterCondition: "littleWater",
    lightCondition: "light",
    beginner: false
  },
  {
    name: "croton plant",
    image: "assets/crotonplant.svg",
    waterCondition: "lotWater",
    lightCondition: "light",
    beginner: false
  },
  {
    name: "dieffenbach seguine",
    image: "assets/dieffenbachseguine.svg",
    waterCondition: "lotWater",
    lightCondition: "dark",
    beginner: true
  },
  {
    name: "dracaena fragrans",
    image: "assets/dracaenafragrans.svg",
    waterCondition: "anyWater",
    lightCondition: "anyLight",
    beginner: true
  },
  {
    name: "fern",
    image: "assets/fern.svg",
    waterCondition: "lotWater",
    lightCondition: "dark",
    beginner: false
  },
  {
    name: "geranium",
    image: "assets/geraniumplant.svg",
    waterCondition: "anyWater",
    lightCondition: "light",
    beginner: true
  },
  {
    name: "golden pothos",
    image: "assets/goldenphotos.svg",
    waterCondition: "anyWater",
    lightCondition: "anyLight",
    beginner: true
  },
  {
    name: "ivy plant",
    image: "assets/ivyplant.svg",
    waterCondition: "lotWater",
    lightCondition: "dark",
    beginner: false
  },
  {
    name: "money plant",
    image: "assets/moneyplant.svg",
    waterCondition: "anyWater",
    lightCondition: "anyLight",
    beginner: true
  },
  {
    name: "monstera",
    image: "assets/monstera.svg",
    waterCondition: "anyWater",
    lightCondition: "dark",
    beginner: true
  },
  {
    name: "orchid",
    image: "assets/orchid.svg",
    waterCondition: "littleWater",
    lightCondition: "anyLight",
    beginner: false
  },
  {
    name: "oxalis",
    image: "assets/oxalis.svg",
    waterCondition: "lotWater",
    lightCondition: "anyLight",
    beginner: false
  },
  {
    name: "parlor palm",
    image: "assets/parlorpalm.svg",
    waterCondition: "lotWater",
    lightCondition: "anyLight",
    beginner: true
  },
  {
    name: "peperomia",
    image: "assets/peperomia.svg",
    waterCondition: "anyWater",
    lightCondition: "dark",
    beginner: true
  },
  {
    name: "red stemmed dracaena",
    image: "assets/redstemmeddracaena.svg",
    waterCondition: "anyWater",
    lightCondition: "dark",
    beginner: true
  },
  {
    name: "snake plant",
    image: "assets/snakeplant.svg",
    waterCondition: "littleWater",
    lightCondition: "dark",
    beginner: true
  },
  {
    name: "spider plant",
    image: "assets/spiderplant.svg",
    waterCondition: "anyWater",
    lightCondition: "anyLight",
    beginner: true
  },
  {
    name: "succulent",
    image: "assets/succulent.svg",
    waterCondition: "littleWater",
    lightCondition: "light",
    beginner: true
  },
  {
    name: "strelitzia",
    image: "assets/strelitzia.svg",
    waterCondition: "lotWater",
    lightCondition: "anyLight",
    beginner: false
  },
  {
    name: "umbrella plant",
    image: "assets/umbrellaplant.svg",
    waterCondition: "anyWater",
    lightCondition: "anyLight",
    beginner: true
  },
  {
    name: "fig",
    image: "assets/weepingfig.svg",
    waterCondition: "anyWater",
    lightCondition: "anyLight",
    beginner: true
  },
  {
    name: "yucca plant",
    image: "assets/yucca.svg",
    waterCondition: "littleWater",
    lightCondition: "anyLight",
    beginner: true
  },
  {
    name: "ZZ plant",
    image: "assets/zzplant.svg",
    waterCondition: "littleWater",
    lightCondition: "dark",
    beginner: true
  }
]


// Functions

// This function will add a chat bubble in the correct place based on who the sender is
function showMessage(message, sender) {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  chat.scrollTop = chat.scrollHeight;
}

// Shortening of the bot message function
const botMessage = (msg) => {
  showMessage(msg, 'bot')
}
//Shortening of the user message function
const userMessage = (msg) => {
  showMessage(msg, 'user')
}

// User greeting
const greetUser = () => {
  botMessage(`Hi! Let's find you the perfect plant! What's your name?`);
}

//Handling of username
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  userMessage(name);
  
  if (name !== '') {
    setTimeout (() => waterQuestion(), 1000);
  } else {
    botMessage ("Please fill in a name!");
  }
}

//Event listener for handling the name input
nameForm.addEventListener('submit', handleNameInput);

//Question 1, user clicks, triggers bot answer and question 2
const waterQuestion = () => {
  botMessage(`How much do you water your plants, ${nameInput.value}? `);
  inputWrapper.innerHTML = `
  <button id="littleWaterBtn">A little</button>
  <button id="lotWaterBtn">A lot!</button>
  <button id="naWaterBtn">As needed</button>
  `
  document
  .getElementById('littleWaterBtn').addEventListener('click', () => {userMessage("I keep forgetting to water plants!");
  inputWrapper.innerHTML = '';
  setTimeout(() => waterResponse('littleWater'), 1000)});
  document
  .getElementById('lotWaterBtn').addEventListener('click', () => {userMessage("I love watering, I keep drowning my plants...");
  inputWrapper.innerHTML = '';
  setTimeout(() => waterResponse('lotWater'), 1000)});
  document.
  getElementById('naWaterBtn').addEventListener('click', () => {userMessage("I water my plants like a pro!");
  inputWrapper.innerHTML = '';
  setTimeout(() => waterResponse('anyWater'), 1000)});

const waterResponse = (waterAnswer) => {
  inputWrapper.innerHTML = ``;
  if (waterAnswer === 'littleWater') {
    botMessage("So do I! Don't worry, we'll find you a good match.")
  }
  else if (waterAnswer === 'lotWater') {
    botMessage("It's so easy to water too much! Let's find you a plant that likes water.")
  }
  else if (waterAnswer === 'anyWater') {
    botMessage("Wow, you're so cool! Let's find you a good plant!")
  }

setTimeout(() => lightQuestion(waterAnswer), 1000);
}
}

const lightQuestion = (waterAnswer) => {
  botMessage(`So, how will you place your plant?`);
  inputWrapper.innerHTML = `
  <select class="light-selector" id="lightSelector">
  <option value="" selected disabled>Please choose...</option>
  <option id="lightSel" value="light">☀️ Sunny</option>
  <option id="darkSel" value="dark">🌑 Dark</option>
  <option id="anyLightSel" value="anyLight">⛅ Not sure!</option>
  </select>
  `

  const select = document.getElementById('lightSelector');
  select.addEventListener('change', () => setTimeout(() => difficultyQuestion(waterAnswer, select.value), 1000));
}

const difficultyQuestion = (waterAnswer, lightAnswer) => {
  botMessage("Are you a beginner with plants?")
  inputWrapper.innerHTML = `
  <button id="yesBtn">Yes!</button>
  <button id="noBtn">No!</button>
  `
  document
  .getElementById('yesBtn').addEventListener('click', () => {userMessage("Yes, I need a beginner plant!");
  inputWrapper.innerHTML = '';
  setTimeout(() => showPlant(waterAnswer, lightAnswer, true), 1000)});
  document
  .getElementById('noBtn').addEventListener('click', () => {userMessage("No, give me a challenge!");
  inputWrapper.innerHTML = '';
  setTimeout(() => showPlant(waterAnswer, lightAnswer, false), 1000)});
}

const showPlant = (waterAnswer, lightAnswer, beginner) => {
  inputWrapper.innerHTML = '';

const matchingPlants = plants.filter(plant => plant.waterCondition === waterAnswer && plant.lightCondition === lightAnswer && plant.beginner === beginner);
  
if (matchingPlants.length > 0) {
    const randomIndex = Math.floor(Math.random() * matchingPlants.length);
    const selectedPlant = matchingPlants[randomIndex];
    
    botMessage(`You should get a ${selectedPlant.name}! <br><img src="${selectedPlant.image}" alt="${selectedPlant.name}">`);
  } else {
    botMessage("I couldn't find a matching plant. Please try again with different conditions.");
  }

  setTimeout(() => lastQuestion(), 1000);
};


const lastQuestion = () => {
  botMessage("Are you happy with this recommendation?");
  inputWrapper.innerHTML=`
  <button id="yesBtn" value="yes">Yes, I love it!</button>
  <button id="noBtn" value="no">No, I want to try again!</button>
  `;

  document.getElementById('yesBtn').addEventListener('click', () => botMessage("Hope you will enjoy your plant!"));
  document.getElementById('noBtn').addEventListener('click', () => window.location.reload());
}

//starts here

setTimeout(greetUser, 500);


