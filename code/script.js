// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn');
const nameForm = document.getElementById('name-form');

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
  inputWrapper.innerHTML = ''
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
  document.getElementById('littleWaterBtn').addEventListener('click', () => {userMessage("I keep forgetting to water plants!");
  inputWrapper.innerHTML = '';
  setTimeout(() => waterResponse('littleWater'), 1000)});
  document.getElementById('lotWaterBtn').addEventListener('click', () => {userMessage("I love watering, I keep drowning my plants...");
  inputWrapper.innerHTML = '';
  setTimeout(() => waterResponse('lotWater'), 1000)});
  document.getElementById('naWaterBtn').addEventListener('click', () => {userMessage("I water my plants like a pro!");
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
  <button id="lightBtn" value="light">Sunny all day, baby!</button>
  <button id="darkBtn" value="dark">A dark corner</button>
  <button id="naLightBtn" value="anyLight">Not sure!</button>
  `
  document.getElementById('lightBtn').addEventListener('click', () => {userMessage ("Sunny all day, baby!")
  setTimeout(() => showPlant(waterAnswer, 'light'), 1000)});
  document.getElementById('darkBtn').addEventListener('click', () => {userMessage("A dark corner...")
  setTimeout(() => showPlant(waterAnswer, 'dark'), 1000)});
  document.getElementById('naLightBtn').addEventListener('click', () =>{userMessage("I'm not sure yet!")
  setTimeout(() => showPlant(waterAnswer, 'anyLight'), 1000)});
}

const showPlant = (waterAnswer, lightAnswer) => {
  inputWrapper.innerHTML = '';
  if (waterAnswer === 'littleWater' && lightAnswer === 'light') {
    botMessage(`You should get a succulent! <br><img src="assets/succulent.png" alt="A succulent plant">`)
  }
  else if (waterAnswer === 'lotWater' && lightAnswer === 'light') {
    botMessage (`In that case, try a coleus plant! <br><img src="assets/coleus.png" alt="a coleus plant, also called fire nettle">`)
  }
  else if (waterAnswer === 'anyWater' && lightAnswer === 'light') {
    botMessage (`You might like a geranium! <br><img src="assets/geranium.png" alt="a potted geranium">`)
  }
  else if (waterAnswer === 'littleWater' && lightAnswer === 'dark') {
    botMessage (`You might like a ZZ plant! <br><img src="assets/zzplant.png" alt="a potted ZZ plant">`)
  }
  else if (waterAnswer === 'lotWater' && lightAnswer === 'dark') {
    botMessage (`You should get an ivy plant! <br><img src="assets/ivy.png" alt="a potted ivy plant">`)
  }
  else if (waterAnswer === 'anyWater' && lightAnswer === 'dark') {
    botMessage (`Try a monstera perhaps? <br><img src="assets/monstera.png" alt="a potted monstera plant">`)
  }
  else if (waterAnswer === 'littleWater' && lightAnswer === 'anyLight') {
    botMessage (`You might like an aloe vera! <br><img src="assets/aloe.png" alt="aloe vera plant">`)
  }
  else if (waterAnswer === 'lotWater' && lightAnswer === 'anyLight') {
    botMessage (`Try a croton plant! <br><img src="assets/croton.png" alt="croton plant">`)
  }
  else if (waterAnswer === 'anyWater' && lightAnswer === 'anyLight') {
    botMessage (`A spider plant might be right for you! <br><img src="assets/spiderplant.png" alt="a potted spider plant">`)
  }
else {
  botMessage ("I think something went wrong, please reset!")
}
setTimeout(() => lastQuestion(), 1000)
}

const lastQuestion = () => {
  botReply("Are you happy with this recommendation?");
  inputWrapper.innerHTML=`
  <button id="yesBtn" value="yesBtn">Yes, I love it!</button>
  <button id="noBtn" value="noBtn">No, I want to try again!</button>
  `;

  document.getElementById('yesBtn').addEventListener('click', () => botMessage("Hope you will enjoy your plant!", 'bot'));
  document.getElementById('noBtn').addEventListener('click', () => window.location.reload());
}

//starts here

setTimeout(greetUser, 500);


