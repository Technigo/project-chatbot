// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById('name-form');
// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log('user')
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
    console.log('bot')
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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUserOrder = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi there! We hope you're hungry, our donuts are awesome!", 'bot');
  showMessage("Would you like to place an order?", 'bot');
}

//Bot asks user if they would like to place an order
//const userYesOrNo = () => {
  
//setTimeout (() => yesOrNo(), 500)}

//Yes or No-buttons for the user to click
const yesOrNo = () => {
  inputWrapper.innerHTML += `
  <button class="send-btn" id="option1" type="submit">Yes</button>
  <button class="send-btn" id="option2" type="submit">No</button>`
  
document
  .getElementById("option1")
  .addEventListener('click', () => {
    showMessage("I would very much like to order, thanks!", 'user')
    inputWrapper.innerHTML = ''
    })

document
  .getElementById("option2")
  .addEventListener('click', () => {
    showMessage("No thanks, just having a look around!", 'user')
    inputWrapper.innerHTML = ''
    })
  } 





// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
event.preventDefault();
})
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUserOrder, 900);
