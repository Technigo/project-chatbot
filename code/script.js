// VARIABLES THAT POINT TO SPECIFIC DOM ELEMENTS
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')

//OUR JOKE ARRAY
const jokeList = [
"Why is 2019 afraid of 2020? Cause they had a fight and 2021.",
"What's orange and sounds like a parrot? A carrot.",
"What do you call a boomerang that doesn't come back? A stick.",
"Did you hear about the first restaurant to open on the moon? It had great food, but no atmosphere.",
"What did one ocean say to the other ocean? Nothing, it just waved.",
"What’s the difference between a hippo and a zippo? One is really heavy and the other’s a little lighter.",
"When does a joke become a ‘dad’ joke? When it becomes apparent.",
"Uh oh, I'm all out of jokes :("
]; 

let jokeCounter = 0; //This keeps track of what joke we're on
let joke = jokeList[jokeCounter]; //this variable contains whatever joke we're on, determined by the jokeCounter above.
const laughtrack = new Audio('laughtrack.mp3'); //Our laugh track


//OUR FUNCTIONS

// This function adds a chat bubble in the correct place based on whether the user or bot is sending the message.
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message. The chat.innerHTML adds all the child elements within the section 'chat' in the HTML!
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
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message.
  } else if (sender === 'bot') {
    console.log(`Our bot said something!`)
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

// OUR CONVERSATION LOOP

//This function greets the user. It appears after 1 second due to the setTimeout function at the bottom.
const greeting = () => {
  showMessage("Hello there, What's your name?", 'bot');
}

//This function saves the text entered in the nameInput variable as a new variable (name) and invokes the showMessage function to render it in the chat. After that, it clears the input field.
const handleNameInput = (event) => { 
  event.preventDefault()
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''
  // After 1 second, it renders the next question by invoking the next function. We're taking the 'name' variable with us to the next function.
  setTimeout(() => intro(name), 1000)
}

//This function displays a bot message in response to the handleNameInput function above and invokes the next question/function.
const intro = (name) => {
  showMessage (`Hello ${name}! I'm Jokey. Wanna hear a joke?`, 'bot');
  setTimeout(showYesNoBtn, 1000)
}

//This function modifies the content of the inputWrapper to display 2 buttons ('Sure!' or 'No thanks.'). The eventlistener takes us to the next function when the user clicks on one of the buttons.
const showYesNoBtn = () => {
  inputWrapper.innerHTML = `
  <button id="yesBtn">Sure!</button>
  <button id="noBtn">No thanks.</button>
  `
  document.getElementById('yesBtn').addEventListener('click', () => userReply('Sure!'));
  document.getElementById('noBtn').addEventListener('click', () => userReply('No thanks.'));
}

//This function displays the user response in the chat and invokes one of two functions (tellJoke or sayGoodbye), based on which button the user pressed in the above function.
const userReply = (userReply) => {
  if (userReply === 'Sure!') {
    showMessage(`Sure!`, 'user')
    setTimeout(tellJoke, 1000)
  } else if (userReply === 'No thanks.') {
    showMessage(`No thanks.`, 'user')
    setTimeout(sayGoodbye, 1000)
  }
 }

 //If the user said 'Sure!', this function tells a joke from our array of jokes before invoking the laughter function.
 const tellJoke =  () => {
  showMessage (joke, 'bot');
  setTimeout(laughter, 1000)
}

//This function activates a laughter audio track, invokes the anotherJoke function AND adds +1 to the jokeCounter variable. We then refresh the definition of the joke variable to = the next joke in the jokeList array.
const laughter = () => {
  laughtrack.play();
  setTimeout(anotherJoke, 1000)
  jokeCounter ++;
  joke = jokeList[jokeCounter];
}

//If the user hates having fun, they clicked on the 'No thanks' button and get this disappointed message from the bot. This ends the conversation.
 const sayGoodbye = () => {
  showMessage (`Alright. See you another time! :(`, 'bot');
}

//This function appears after the bot's told a joke and asks whether the user would like to hear another one.
const anotherJoke = () => {
  showMessage(`Would you like to hear another joke?`, 'bot')
  setTimeout(yesNoPlease, 1000)
}

const yesNoPlease = () => {
  inputWrapper.innerHTML = `
  <button id="yesPleaseBtn">Yes please!</button>
  <button id="noBtn">No thanks.</button>
  `
  document.getElementById('yesPleaseBtn').addEventListener('click', () => userReply1('Yes please!'));
  document.getElementById('noBtn').addEventListener('click', () => userReply1('No thanks.'));
}

const userReply1 = (userReply1) => {
  if (userReply1 === 'Yes please!') {
    showMessage(`Yes please!`, 'user')
    setTimeout(tellJoke, 1000)
  } else if (userReply1 === 'No thanks.') {
    showMessage(`No thanks.`, 'user')
    setTimeout(sayGoodbye, 1000)
  }
 }

// Set up your eventlisteners here

nameForm.addEventListener('submit', handleNameInput) //This listens for inputs submitted in the input field of the name form and invokes the handleNameInput function when triggered.

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
