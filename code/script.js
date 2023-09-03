// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');

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
        <img src="assets/danishbot.png" alt="Bot" />
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

// Here the the function showMessage is called, that was declared earlier with the argument "Hello there, What's your name?" as message, and the argument "bot" for sender
const greetUser = () => {
  showMessage("Hello there, What's your name?", 'bot');
}

// This function saves the information entered in the nameInput variable as a new variable (name) and invokes the showMessage function to render it in the chat. After that, it clears the input field.
const handleNameInput = (event) => { 
  event.preventDefault();
  // The trim method is to remove leading and trailing spaces to ensure that there are no unneccessary spaces around the enterd name
  const name = nameInput.value.trim(); 
  //This vailidates the name variable to ensure that the user only has typed in alphabetical characters and spaces
  const validNamePattern = /^[A-Za-z\s]+$/; 
  
  //These if and else statements show the message depending on if the user enterd name is consistent with validNamePattern. 
  if (!validNamePattern.test(name))  { 
    showMessage("Invalid input. Please enter only letters and spaces.", 'bot');
    nameInput.value = '';
  } else  { 
  showMessage(name, 'user');
  nameInput.value = '';
  // This renders the next question after 1 sec by invoking the next function. Taking the 'name' variable to the next function.
  setTimeout(() => intro(name), 1000);
  }
};

//This function displays a bot message in response to the handleNameInput function above and invokes the next question/function.
const intro = (name) => {
  showMessage (`Hi ${name}! Do you want to learn some Danish?`, 'bot');
  setTimeout(showYesNobtn, 1000);
}

//This function invokes two buttons "Sure!" and "No thanks."
const showYesNobtn = () => {
  inputWrapper.innerHTML = `
  <button id="yesBtn">Sure!</button>
  <button id="noBtn">No thanks.</button>
  `
  document.getElementById('yesBtn').addEventListener('click', () => userReply('Sure!'));
  document.getElementById('noBtn').addEventListener('click', () => userReply('No thanks.'));
}

//If the user clicks Sure! A new question will pop up after 1 sec. If the user clicks No thanks a goodbye message will appear after 1 sec and empty the input field.
const userReply = (userReply) => {
  if (userReply === 'Sure!') {
    showMessage(`Sure!`, 'user')
    setTimeout(() => presentWordOptions(), 1000);
  } else if (userReply === 'No thanks.') {
    showMessage(`No thanks.`, 'user')
    setTimeout(sayGoodbye, 1000)
  }
}

const sayGoodbye = () => {
  showMessage (`Alright. See you another time!`, 'bot');
  inputWrapper.innerHTML = ``;
}

//If the user clicks on "Sure!" this question will be asked and the user will be given three word options to chose from.
const presentWordOptions = () => {
  showMessage(`What word would you like to learn?`, "bot");
  inputWrapper.innerHTML = `
  <button id="sausage">Sausage</button>
  <button id="milk">Milk</button>
  <button id="butter">Butter</button>
`;
  document.getElementById('sausage').addEventListener('click', () => showSausageMessage());
  document.getElementById('milk').addEventListener('click', () => showMilkMessage());
  document.getElementById('butter').addEventListener('click', () => showButterMessage());
}

//This function will start if the user clicks on "Sausage". 
const showSausageMessage = (selectedWord) => {
  showMessage('Sausage!', 'user');
  setTimeout(() => {
    showMessage(`In Danish, it's called "pølse"`, 'bot');
    setTimeout(() => askLearnAnotherWord(selectedWord), 1000);
  }, 1000);
}

//This function will start if the user clicks on "Milk". 
const showMilkMessage = (selectedWord) => {
  showMessage('Milk!', 'user');
//add comment
  setTimeout(() => {
    showMessage(`In Danish, it's called "melk".`, 'bot');
    setTimeout(() => askLearnAnotherWord(selectedWord), 1000);
  }, 1000);
}

//This function will start if the user clicks on "Butter". 
const showButterMessage = (selectedWord) => {
  showMessage('Butter!', 'user');
  setTimeout(() => {
     showMessage(`In danish it's called "smør".`, 'bot');
     setTimeout(() => askLearnAnotherWord(selectedWord), 1000);
}, 1000);
}

//After picking a word the bot then will ask if you would like to learn another word.
const askLearnAnotherWord = (selectedWord) => {
  showMessage(`Do you want to learn another word?`, 'bot');
  setTimeout(() => { 
  inputWrapper.innerHTML = `
    <button id="yesLearnAnother">Yes</button>
    <button id="noLearnAnother">No</button>
  `;

  document.getElementById('yesLearnAnother').addEventListener('click', () => handleLearnAnotherWordResponse(true, selectedWord));
  document.getElementById('noLearnAnother').addEventListener('click', () => handleLearnAnotherWordResponse(false, selectedWord));
}, 1000); // Wait for 1 second and then ask
}

const handleLearnAnotherWordResponse = (userResponse, selectedWord) => {
  // Express the user's response
  showMessage(`${userResponse ? 'Yes' : 'No'}!`, 'user');

  // Wait for a moment before displaying the bot's response
  setTimeout(() => {
    if (userResponse) {
      showMessage(`Great! Let's learn another word.`, 'bot');
      setTimeout(() => presentWordOptions(), 1000); // Wait for 1 second and then ask
    } else {
      showMessage(`Alright. See you another time!`, 'bot');
      inputWrapper.innerHTML = ``;
    }
  }, 1000); 
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
