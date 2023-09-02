const chat = document.getElementById('chat')
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

  // This makes the chat scroll to the last message when there are too many to be shown in the chat box. When I put it in a setTimeout-function I can delay the load time so the whole bubble shows instead of breaking it off early.
  setTimeout(() => {
      chat.scrollTop = chat.scrollHeight
  }, 200)
}

// Starts here
const greetUser = () => {
  showMessage("Hello gamer, what do you call yourself?", 'bot')
}

//The user enters their name and the chat is started
const handleNameInput = (event) => {
  event.preventDefault();

  //Save name for later
  const name = nameInput.value;

  //Checks if the input field is empty. If it is, notify the user to write something.
  if (name === '') {
    showMessage("You need to write something, even if it's your ID on Discord 😉" , 'bot')
  } else {
    showMessage(name, 'user');
    username = nameInput.value;
    nameInput.value = '';

    setTimeout(() => gameOption(nameInput.value), 1200);
    inputWrapper.innerHTML =''
  }

};

//This block dispalys three buttons for the user to click on
const gameOption = () => {
  showMessage(`Hi ${username}, which game category would you like to play today?` ,'bot') 
  inputWrapper.innerHTML = `
  <button id='detectiveGames'>Detective Games</button>
  <button id='fantasy'>Fantasy</button>
  <button id='openWorld'>Open world</button>
  `
    document.getElementById('detectiveGames')
    .addEventListener('click', () => {
    showMessage('Detective Games' , 'user')
    setTimeout(() => gameQuestion('Detective Games'), 1500)})
  
    document.getElementById('fantasy')
    .addEventListener('click', () => {
    showMessage('Fantasy' , 'user')
    setTimeout(() => gameQuestion('Fantasy'), 1500)})
  
    document.getElementById('openWorld')
    .addEventListener('click', () => {
    showMessage('Open world' , 'user')
    setTimeout(() => gameQuestion('Open world'), 1500)})
}

//This block displays different games to choose from dependig on what the user chose in the last block.
let game = ""
let gameChoice = ""
let selectedGame = ""
  
const gameQuestion = (selectedGameOption) => {
  showMessage(`Cool, ${selectedGameOption}, that has some very cool games! Choose a game from our library below 👇` , 'bot')

  switch (selectedGameOption) {
  case "Detective Games": 
    game = ["Sherlock Holmes", "Detroit: Become Human", "Disco Elysium"]
      inputWrapper.innerHTML = `
        <select id="gameChoiceSelect">
         <option value="" selected disabled>Choose a game below 🎮</option>
         <option value="1">Sherlock Holmes</option>
         <option value="2">Detroit: Become Human</option>
         <option value="3">Disco Elysium</option>
       </select>
      `
    break

  case "Fantasy": 
    game = ["Final Fantasy", "Forspoken", "Harry Potter - Hogwarts Legacy"]
      inputWrapper.innerHTML = `
         <select id="gameChoiceSelect">
          <option value="" selected disabled>Choose a game below 🎮</option>
          <option value="1">Final Fantasy</option>
          <option value="2">Forspoken</option>
          <option value="3">Harry Potter - Hogwarts Legacy</option>
        </select>
      `
    break

  case "Open world": 
    game = ["Assassin's Creed", "Red Dead Redemption", "We Happy Few"]
      inputWrapper.innerHTML = `
        <select id="gameChoiceSelect">
          <option value="" selected disabled>Choose a game below 🎮</option>
         <option value="1">Assassin's Creed</option>
         <option value="2">Red Dead Redemption</option>
         <option value="3">We Happy Few</option>
       </select>
      `
    break
      process.exit(1)
  }
  
  //Drop down menu to show
  const gameChoiceSelect = document.getElementById('gameChoiceSelect')

  gameChoiceSelect.addEventListener('change', () => {
    const gameChoice = parseInt(gameChoiceSelect.value)
    selectedGame = game[gameChoice - 1] 
    showMessage(selectedGame , 'user')

    inputWrapper.innerHTML =''
    setTimeout(() => verifyGame(), 1000)
    })
}

//This block provides the confirmation buttons for the users choice in the drop down
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

//Depending on what the users response was in the previous block (verifyGame) the bot shows a message accordingly.
const response = (response) => {
  if (response === 'Yes') {
    showMessage ('Awesome! The game will load soon. Have fun!' ,'bot')
  } else {
    showMessage ("I'm sorry to hear that. I stopped the download of the game. Hope you change your mind and will be playing with us soon!" ,'bot')
  }
  inputWrapper.innerHTML = ''
}

// Set up your eventlisteners here
  nameForm.addEventListener('submit', handleNameInput)

setTimeout(greetUser, 1000)
