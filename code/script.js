// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:


// MY FUNCTIONS

// 1. This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log(`The user said something!`)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // 2. the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log(`The bot said something!`)
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // 3. This thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// THE CONVERSATION LOOP

// here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
const greetUser = () => {
  showMessage("Hello there, What's your name?", 'bot');
}

// CHANGE This function saves the text entered in the nameInput variable as a new variable (name) and invokes the showMessage function to render it in the chat. After that, it clears the input field.
const handleNameInput = (event) => { 
  event.preventDefault();
  const name = nameInput.value
  showMessage(name, 'user');
  nameInput.value = ''
  // Change this. After 1 second, it renders the next question by invoking the next function. We're taking the 'name' variable with us to the next function.
  setTimeout(() => intro(name), 1000);
};

//Change this.This function displays a bot message in response to the handleNameInput function above and invokes the next question/function.
const intro = (name) => {
  showMessage (`Hi ${name}! Do you want to learn some Danish?`, 'bot');
  setTimeout(showYesNobtn, 1000);
}

const showYesNobtn = () => {
  inputWrapper.innerHTML = `
  <button id="yesBtn">Sure!</button>
  <button id="noBtn">No thanks.</button>
  `
  document.getElementById('yesBtn').addEventListener('click', () => userReply('Sure!'));
  document.getElementById('noBtn').addEventListener('click', () => userReply('No thanks.'));
}
//Add comment
const userReply = (userReply) => {
  if (userReply === 'Sure!') {
    showMessage(`Sure!`, 'user')
    setTimeout(() => question2(), 1000);
  } else if (userReply === 'No thanks.') {
    showMessage(`No thanks.`, 'user')
    setTimeout(sayGoodbye, 1000)
  }
}

//If the user clicks on "No thanks." this happens
const sayGoodbye = () => {
  showMessage (`Alright. See you another time! :(`, 'bot');
  inputWrapper.innerHTML = ``;
}

//If the user clicks on "Sure!" this happens
const question2 = () => {
  showMessage(`Nice! What word would you like to learn?`, "bot");
  inputWrapper.innerHTML = `
  <button id="sausage">Sausage</button>
  <button id="milk">Milk</button>
  <button id="butter">Butter</button>
`;
document.getElementById('sausage').addEventListener('click', () => showSausageMessage());
  document.getElementById('milk').addEventListener('click', () => showMilkMessage());
  document.getElementById('butter').addEventListener('click', () => showButterMessage());
}
const showSausageMessage = () => {
  showMessage(`You chose Sausage. In danish it's called "pølse".`, 'bot');
  setTimeout(() => askAnotherWord(), 1000); // Wait for 1 second and then ask
  // Add your logic for displaying information about Sausage here
}

const showMilkMessage = () => {
  showMessage(`You chose Milk. In danish it's called "melk".`, 'bot');
  setTimeout(() => askAnotherWord(), 1000);
  // Add your logic for displaying information about Milk here
}

const showButterMessage = () => {
  showMessage(`You chose Butter. In danish it's called "smør".`, 'bot');
  setTimeout(() => askAnotherWord(), 1000);
}

const askAnotherWord = () => {
  showMessage(`Do you want to learn another word?`, 'bot');
  inputWrapper.innerHTML = `
    <button id="yesLearnAnother">Yes</button>
    <button id="noLearnAnother">No</button>
  `;

  document.getElementById('yesLearnAnother').addEventListener('click', () => startLearning());
  document.getElementById('noLearnAnother').addEventListener('click', () => sayGoodbye());
}

const startLearning = () => {
  showMessage(`Great! Let's learn another word.`, 'bot');
  inputWrapper.innerHTML = ``;
  setTimeout(() => question2(), 1000);
}



// Set up your eventlisteners here
nameForm.addEventListener('submit', handleNameInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
