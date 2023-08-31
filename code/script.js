// Variables that point to selected DOM elements
const chat = document.getElementById('chat')

// If you need any global variables that you can use across different functions, declare them here:
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const sendButton = document.getElementById('send-btn')
const nameForm = document.getElementById('name-form')

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
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
  // This makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello gamer, what's your name?", 'bot')
}

//The user enters their name and the chat is started
const handleNameInput = (event) => {
  event.preventDefault();

  //Save name for later
  const name = nameInput.value;
  showMessage(name, 'user');
  username = nameInput.value;
  nameInput.value = '';

  setTimeout(() => gameOption(nameInput.value), 1000);
  inputWrapper.innerHTML =''
};


const gameOption = () => {
  showMessage(`Hi ${username}, which game category do you like?` ,'bot') 
  inputWrapper.innerHTML = `
  <button id='detectiveGames'>Detective Games</button>
  <button id='fantasy'>Fantasy</button>
  <button id='openWorld'>Open world</button>
  `
    document.getElementById('detectiveGames')
    .addEventListener('click', () => {
    showMessage('Detective Games' , 'user')
    setTimeout(() => gameQuestion('Detective Games'), 1000)})
  
    document.getElementById('fantasy')
    .addEventListener('click', () => {
    showMessage('Fantasy' , 'user')
    setTimeout(() => gameQuestion('Fantasy'), 1000)})
  
    document.getElementById('openWorld')
    .addEventListener('click', () => {
    showMessage('Open world' , 'user')
    setTimeout(() => gameQuestion('Open world'), 1000)})
}

  let game = ""
  let gameChoice = ""
  let selectedGame = ""
  
  const gameQuestion = (selectedGameOption) => {
    showMessage(`Cool, ${selectedGameOption}, that's an awesome category! Choose a game from our library 👇` , 'bot')

    console.log(`gameQuestion executed ${selectedGameOption}`);
    

    switch (selectedGameOption) {
    case "Detective Games": 
      
    game = ["Sherlock Holmes", "Detroit: Become Human", "Disco Elysium"]

      inputWrapper.innerHTML = `
      <select id="gameChoice">
        <option value="" selected disabled>Choose a game 👇</option>
        <option value="1">Sherlock Holmes</option>
        <option value="2">Detroit: Become Human</option>
        <option value="3">Disco Elysium</option>
      </select>
      `
      console.log('inputWrapper.innerHTML changed (detectiveGames)');

      break
    case "Fantasy": 
      
      game = ["Final Fantasy", "Forspoken", "Harry Potter - Hogwarts Legacy"]

      inputWrapper.innerHTML = `
      <select id="gameChoice">
        <option value="" selected disabled>Choose a game</option>
        <option value="1">Final Fantasy</option>
        <option value="2">Forspoken</option>
        <option value="3">Harry Potter - Hogwarts Legacy</option>
      </select>
      `
      console.log('inputWrapper.innerHTML changed (fantasy)');

      break
    case "Open world": 
      
    game = ["Assassin's Creed", "Red Dead Redemption", "We Happy Few"]

      inputWrapper.innerHTML = `
      <select id="gameChoice">
        <option value="" selected disabled>Choose a game</option>
        <option value="1">Assassin's Creed</option>
        <option value="2">Red Dead Redemption</option>
        <option value="3">We Happy Few</option>
      </select>
      `
      console.log('inputWrapper.innerHTML changed (openWorld)');

      break
      process.exit(1)
  }

  console.log('set gameChoice listener');
  
  //Drop down menu
  //const select=document.getElementById('gameChoice')
  const gameChoiceSelect = document.getElementById('gameChoiceSelect')

  //select.addEventListener('change', () => {
    //console.log(select.value)
    //const gameChoice = parseInt(select.value)
  gameChoiceSelect.addEventListener('change', () => {
    const gameChoice = parseInt(gameChoiceSelect.value)
    console.log(gameChoice)
    selectedGame = game[gameChoice - 1] 
    console.log(selectedGame)
        
    
    showMessage(selectedGame , 'user')

    inputWrapper.innerHTML =''
    setTimeout(() => verifyGame(), 1000)
    })
  }


const verifyGame = () => {
  showMessage (`${username}, are you happy with your choice?`, 'bot')
  inputWrapper.innerHTML = `
  <button id='yesBtn'>Yes</button>
  <button id='noBtn'>Nah</button>
  `
  document.getElementById('yesBtn')
    .addEventListener('click', () => {
    showMessage('Yes' , 'user')
    setTimeout(() => response('Yes'), 1000)})
  
    document.getElementById('noBtn')
    .addEventListener('click', () => {
    showMessage('Nah' , 'user')
    setTimeout(() => response('Nah'), 1000)})
}

const response = (response) => {
  if (response === 'Yes') {
    showMessage ('Awesome! Enjoy your game!' ,'bot')
  } else {
    showMessage ("That's too bad. I hope you'll be back soon!" ,'bot')
  }
  inputWrapper.innerHTML = ''
}


// Set up your eventlisteners here
  nameForm.addEventListener('submit', handleNameInput)

setTimeout(greetUser, 1000)
