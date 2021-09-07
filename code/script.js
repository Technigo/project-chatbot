// DOM SELECTORS 
const chat = document.getElementById('chat');
const button = document.getElementById('btn')
const nameInput = document.getElementById('name-input');

let currentQuestion = 1;

//EVENTS LISTENER

// FUNCTIONS:

// 1.Function showMessage: This function will add a chat bubble in the correct place based on who the sender is
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

// 2. Function greeting: This function invokes ('calls') the first function, so when the function greeting is invokes, invokes the first function.
const greeting = () => {
showMessage(`What's your name?`, 'bot')
}

setTimeout(greeting,1000);

// 3. Function HandleNameInput
 const handleNameInput = (event) => {
  event.preventDefault()

  if (currentQuestion === 1) {
    let name = nameInput.value
    showMessage(name, 'user')
    nameInput.value = ''
  
    setTimeout(() => showFoodOptions(name), 1000)
    setTimeout(() => {
      showMessage(`What type of flowers do you need, roses,tulips,sunflowers? ${name}?`, 'bot')
    }, 2000);
    currentQuestion = 2;

  } else if (currentQuestion === 2){
  console.log('Question2')
  }
  
}

button.addEventListener('click',handleNameInput);






// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.