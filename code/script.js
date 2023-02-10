// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const input = document.getElementById('input');
const sendBtn = document.getElementById('send');
const form = document.getElementById("name-form");


// If you need any global variables that you can use across different functions, declare them here:
let questionNumber = 1;

// Declare your functions after this comment
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("user saying this:", message);
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
    console.log("bot saying this:", message);
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

// Conversation starts here
const greetUser = () => {
  showMessage("Hello, enter your name please", 'bot');
  
}

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    inputvalue = ''
    setTimeout(() => areYouOverTwenty(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message) 
    setTimeout(() => showWhiteOrRedWine(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showDifferentWines(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => goodDoYouWantOrder(message), 1000)
  }  else {
      userReply(message)
      setTimeout(thankYou, 1000)
    }
  }






const areYouOverTwenty = (msg) => {
  questionNumber++
  botReply(`Hello ${msg}! Are you over 20 years old?`)

  inputWrapper.innerHTML = `
    <button id="restart">NO</button>
    <button id="confirm">YES</button>
  `
  
const showWhiteOrRedWine = (msg) => {
  questionNumber++
  botReply(`Good! Do you like red or white wine?`)

  inputWrapper.innerHTML = `
  <button id="white">White wine</button>
  <button id="red">Red wine</button>
`


}
  
}

// Set up your eventlisteners here
sendBtn.addEventListener('submit', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})





form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("form submitted");
    showMessage (input.value, 'user')
    showMessage (`Hello ${input.value}! Are you over 20?`, 'bot')
    input.value = ""
// Here is the function that adds the yes and No buttons
    inputWrapper.innerHTML = `
    <button id="restart">NO</button>
    <button id="confirm">YES</button>
  `
//Here is function that shows buttons with red or white wine
  showMessage (`Good! Do you like red or white wine?`, 'bot')
  inputWrapper.innerHTML = `
  <button id="white">White wine</button>
  <button id="red">Red wine</button>
`

 


    

    
});


setTimeout(greetUser, 1000);
