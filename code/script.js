// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const formAnswer = document.getElementById('name-form');
// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}
const showFlowerChoice = () =>{
  formAnswer.innerHTML = `
  <button class="arrangement-button" id="bouquet">Bouquet</button>
  <button class="arrangement-button" id="busket">Busket</button>
  <button class="arrangement-button" id="box">Box</button>
  `
  const optionOne = document.getElementById("bouquet")
  optionOne.addEventListener('click', () => {
    showMessage(`Bouquet`, 'user')
    setTimeout (() => showMessage(`Thank you, what flowers do you want in your bouquet?`, 'bot'), 1000)
  });
  const optionTwo = document.getElementById("busket") 
  optionTwo.addEventListener('click', () => {
    showMessage(`Busket`, 'user')
    showMessage(`Thank you, what flowers do you want in your busket?`, 'bot');
  });
  const optionThree = document.getElementById("box")
  optionThree.addEventListener('click', () => {
    showMessage (`Box`, 'user')  
    showMessage(`Thank you, what flowers do you want in your box?`, 'bot');
  }); 
};

const showFlowerSelector = () => {
  formAnswer.innerHTML = `
  <select id="flowerselector"> 
    <option value="" selected disabled>Choose flowers</option> 
    <option value="roses">Roses</option>
    <option value="tulips">Tulips</option>
    <option value="lilies">Lilies</option>
    <option value="sunflowers">Sunflowers</option>
  </select>`
}; 

const showSize = () => {
  formAnswer.innerHTML = `
  <button class="size-button" id="size-small">Small</button>
  <button class="size-button" id="size-medium">Medium</button>
  <button class="size-button" id="size-large">Large</button>
  `
};

const finalConfirmation = () => {
  formAnswer.innerHTML =`
  <button class="confirmation-button" id="yes-button">Yes</button>
  <button class="confirmation-button" id="no-button" type="reset">No</button>
  `
};


// Starts here
setTimeout(greeting, 1000);
// Set up your eventlisteners here
formAnswer.addEventListener('submit', (event) => {
  event.preventDefault();
  const formInputMessage = document.getElementById('name-input').value;
  showMessage (formInputMessage, 'user');
  setTimeout (() => showMessage(`Hello, ${formInputMessage}, what flower arrangement would you like today?`, 'bot'), 1000);
  setTimeout (() => showFlowerChoice(), 2000);
  formAnswer.addEventListener('submit', () => {
    showFlowerSelector();})
});


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

