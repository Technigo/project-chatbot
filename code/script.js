// (Pseudo code) Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const input = document.getElementById('input'); 
const sendBtn = document.getElementById('send'); 

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is(two arguments handled w conditionals)
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
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
};

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showServingOptions(message), 800)
  } else if (questionNumber === 2){
    userReply(message)
    input.value = ''
    setTimeout(() => showTypes(message), 800)
  } else if (questionNumber === 3){
    userReply(message)
    input.value = ''
    setTimeout(() => showSizes(message), 800)
  } else if (questionNumber === 4){
    userReply(message)
    input.value = ''
    setTimeout(() => showServingTopping(message), 800)
  } else if (questionNumber === 5){
    userReply(message)
    input.value = ''
    setTimeout(() => showToppingOptions(message), 800)
  } else if (questionNumber === 6){
    userReply(message)
    input.value = ''
    setTimeout(() => showPlaceOrder(message), 800)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}


// When the website has loaded (function)
const greetUser = () => {
  showMessage("Hey buddy, what's your name?", 'bot');
  //showMessage("Hey my name is Emma", 'user' )
}
setTimeout(greetUser, 800);

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment




// Set up your eventlisteners here
  //document.getElementById("").addEventListener("",() {
    //get inputs 
  //});


let userName = nameInput.value
showMessage(`${userName}`, 'user'); 


//const handleNameInput = (event) => {
  //event.preventDefault()

//const name = nameInput.value
//showMessage(name, 'user')

//nameInput.value = ''
//}

//setTimeout(functionName, timeToWait)
//greetUser();

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

