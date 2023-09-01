// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')

// Global variable to prevent the chat-bubbles to start over
let run = true;

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

    //console.log("Current message:", message);

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // Makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}


// Starts here
//Conversation starts here. First greet from bot 

const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Bonjour developer student, what's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

//Global setTimeout for the Greeting
setTimeout(greetUser, 800)

// Set up your eventlisteners here
//When name is input by user.
const handleNameInput = event => {
  event.preventDefault();

  if (run) {
    userName = nameInput.value;
    nameInput.value = '';
    showMessage(`${userName}`, "user");
    setTimeout(reply, 800);
  }
}

nameForm.addEventListener('submit', handleNameInput);


const reply = () => {
  showMessage(`I think you need a riddle to relax your mind ${userName}. Choose a riddle by clicking on one of the apples below:`, 'bot');

  nameForm.innerHTML = `
      <button class="options" id='oneBtn'>🍏</button>
      <button class="options" id='twoBtn'>🍎</button>
    `

  document.getElementById('oneBtn')
    .addEventListener('click', () => riddleOption('one'))



  document.getElementById('twoBtn')
    .addEventListener('click', () => riddleOption('two'))
}

//Different options of riddles that occurs depending on apple-choice
const riddleOption = option => {
  if (option === "one") {
    showMessage('🍏', 'user')
    showMessage('🍏: I am used for styling, look and feel. Colors and layout make it real. In files separate, my rules align. Junior dev, what am I, in web design?', 'bot')

    nameForm.innerHTML = `
    <button class="options" id='htmlBtn'>HTML</button>
    <button class="options" id='cssBtn'>CSS</button>
  `

    document.getElementById('htmlBtn')
      .addEventListener('click', () => greenWrongAnswer('greenHtml'))
    document.getElementById('cssBtn')
      .addEventListener('click', () => greenCorrectAnswer('greenCss'))
  }
  else if (option === "two") {
    showMessage('🍎', 'user')
    showMessage('🍎: I bring interactivity, make things fun. With functions and events, the job has begun. In the browser realm, where actions play smart. Junior dev can you name this part?', 'bot')

    nameForm.innerHTML = `
      <button class="options" id='jsBtn'>JavaScript</button>
      <button class="options" id='htmlBtn'>HTML</button>
    `

    document.getElementById('jsBtn')
      .addEventListener('click', () => redCorrectAnswer('redJs'))
    document.getElementById('htmlBtn')
      .addEventListener('click', () => redWrongAnswer('redHtml'))

  }
}

//Depending on the answer of the riddles, one of these functions will start:
const greenWrongAnswer = () => {
  showMessage('HTML', 'user')
  showMessage('Almost! Correct answer is CSS. Thanks for playing with me! Good luck on your studies, you are awesome!', 'bot')
  showMessage('<img src="https://cdn.pixabay.com/photo/2020/05/02/09/59/pup-5120625_1280.jpg" alt="Happy dog" style="width: 225px; height: auto;" />', 'bot');
  run = false;
}

const greenCorrectAnswer = () => {
  showMessage('CSS', 'user')
  showMessage('CSS is correct! Thanks for playing with me! Good luck on your studies, you are awesome!', 'bot')
  showMessage('<img src="https://cdn.pixabay.com/photo/2020/05/02/09/59/pup-5120625_1280.jpg" alt="Happy dog" style="width: 225px; height: auto;" />', 'bot');
  run = false;

}

const redCorrectAnswer = () => {
  showMessage('JavaScript', 'user')
  showMessage('Good job! JavaScript is the correct answer! Good luck on your studies, you are awesome!', 'bot')
  showMessage('<img src="https://cdn.pixabay.com/photo/2020/05/02/09/59/pup-5120625_1280.jpg" alt="Happy dog" style="width: 225px; height: auto;" />', 'bot');
  run = false;

}

const redWrongAnswer = () => {
  showMessage('HTML', 'user')
  showMessage('Naaah, correct answer is JavaScript. Good luck on your studies, you are awesome!', 'bot')
  showMessage('<img src="https://cdn.pixabay.com/photo/2020/05/02/09/59/pup-5120625_1280.jpg" alt="Happy dog" style="width: 225px; height: auto;" />', 'bot');
  run = false;

}



