// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');


// Function handling name input

const handleNameInput = (event) => {
  event.preventDefault()
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''

  setTimeout(() => likingMusic(name), 1000 )
}

//event listner method is starting function handleNameInput
form.addEventListener("submit", handleNameInput);

//starting question
const likingMusic = (name) => {
  showMessage(`Hi ${name}. Do you like listening to music?`, 'bot')
  setTimeout(() => yesOrNo(), 100)
}
// two options to choose from

const yesOrNo = () => {
  inputWrapper.innerHTML = `
  <button id="optionOne">YES</button>
  <button id="optionTwo">NO</button>
  `
  document.getElementById('optionOne').addEventListener("click", () => {
    showMessage(`Great, what is your favourite genre?`, 'bot')
     inputWrapper.innerHTML = '' // this will remove button YES from 
    setTimeout (() => genreQuestion('optionOne'), 100)
  })

  document.getElementById('optionTwo').addEventListener("click", () => {
    showMessage(`Ok, it seems like there is nothing for me to do here. Good bye" 🎮 ❌`, 'user')
    inputWrapper.innerHTML = '' // this is removing NO button
    setTimeout (() => genreQuestio('optionTwo'), 100)
  })
}

// Genre questions
const genreQuestion = () => {
  inputWrapper.innerHTML = `
  <button id="optionPop">POP 🎤🎤🎤</button>
  <button id="optionRock">ROCK-ROLL 🎸🎸🎸</button>
  <button id="optionClassical">CLASSICAL 🎻🎻🎻</button>
  `
  document.getElementById('optionPop').addEventListener("click", () => {
    showMessage(`Wow, you like POP music 🧑‍🎤`, 'bot')
    showMessage(`Check out "Superstition" by Stevie Wonder 🧑`, 'bot')
    inputWrapper.innerHTML = '' 
    setTimeout(() => nextFuntion('optionPop'), 2000)
  })

  document.getElementById('optionRock').addEventListener("click", () => {
    showMessage(`Great, you like Rock music 🤘`, 'bot')
    showMessage(`Check out "Stairway to Heaven" by Led Zeppelin 🤘`, 'bot')
    inputWrapper.innerHTML = '' 
    setTimeout(() => nextFuntion('optionRock'), 1000)
  })

  document.getElementById('optionClassical').addEventListener("click", () => {
    showMessage(`I am impressed, you like Classical music 🎹`, 'bot')
    showMessage(`Check out Tchaikovsky's Symphony No. 5 and
    Vivaldi's The Four Seasons 🎹`, 'bot')
    inputWrapper.innerHTML = '' 
    setTimeout(() => nextFuntion('optionClassical'), 1000)
  })
}


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
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}
setTimeout(greetUser, 1000);
