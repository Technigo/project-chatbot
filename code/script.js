// DOM SELECTORS 
const chat = document.getElementById('chat');
const button = document.getElementById('btn');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');
// let selectBtn = document.getElementById('select');

// GLOBAL VARIABLES
let currentQuestion = 1;

// FUNCTIONS:

// First Function showMessage: This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => { 

  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="./Pictures/bill-chatbot.png" alt="User" />  
      </section>
    ` 
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./Pictures/julieta-chatbot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  chat.scrollTop = chat.scrollHeight// This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
}

// Secind Function greeting: This function invokes ('calls') the first function, so when the function greeting is invoked, it invokes the first function.
const greeting = () => {
showMessage(`Welcome to Flowerland! What's your name?`, 'bot');
}
setTimeout(greeting,1000);


// Third Function questions
 const questions = (e) => {
  e.preventDefault();

  if (currentQuestion === 1) {
    //user answer
    let name = nameInput.value;
    showMessage(name, 'user');
    nameInput.value = '';
   //bot answer after 2 seconds
    setTimeout(() => 
      showMessage(`What type of flowers would you like to order ${name}?`, 'bot'), 2000);
  //   inputWrapper.innerHTML = 
  //   `
  //   <select id="select">
  //     <option value = "" selected disabled> Click here to chose:</option>
  //     <option value = "roses">Roses</option>
  //     <option value = "tulips">Tulips</option>
  //     <option value = "sunflowers">Sunflowers</option>
  //     <option value = "lilies">Lilies</option>
  //   </select>  
  // `
  currentQuestion = 2;

  } else if (currentQuestion === 2) {
    let flower = nameInput.value;
    showMessage(flower,'user');
    nameInput.value = '';
    setTimeout(() => 
      showMessage(`You have chosen ${flower}! Great choice!`, 'bot'), 2000);
    currentQuestion = 3;
  }
}
  
  button.addEventListener('click',questions);


 





// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

//   inputWrapper.innerHTML = `
  //   <button id="rosesBtn">Roses</button>
  //   <button id="tulipsBtn">Tulips</button>
  //   <button id="sunflowersBtn">Sunflowers</button>
  // `
//   inputWrapper.innerHTML = 
  //   `
  //   <select id="select">
  //     <option value = "" selected disabled> Click here to chose:</option>
  //     <option value = "roses">Roses</option>
  //     <option value = "tulips">Tulips</option>
  //     <option value = "sunflowers">Sunflowers</option>
  //     <option value = "lilies">Lilies</option>
  //   </select>
   
  // `