// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send')

//Global variables. I have one for userName to be able to use the value in more than first reply.
let userName;
// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
//without the ${message} the actual message(parameter) in const greetUser will not be passed, only string message. Only the parameter 'bot' 
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-image.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot-image.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// My "Conversation" for the Chat starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier. With the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome, What's your name?", 'bot');
}

// Initial button click, here I should get the name entered
sendBtn.addEventListener('click', (event) => {
  event.preventDefault() 
  if (nameInput.value === "" || undefined) {
    showMessage("Sorry I did not catch that, please enter your name!", 'bot')
    event.preventDefault()
  } else {
    // Store the value in a variable so I can access it after we clear it from the input. 
    // The variable were the value will be stored is outside of this function to be able to use it in more places. In here it get assigned
    userName = nameInput.value
    showMessage(`${userName}`, 'user');
    // Clears the input field
    nameInput.value = ''
    //Here I call the function where I present the dishes to choose from. I will also pass the userName
    setTimeout(() => whatKindOfDish(userName), 1000)
  }
})


//function to present the first option, the different themes of food to choose from. Pass the name entered in the greeting
const whatKindOfDish = (msg) => {
  showMessage(`Hello ${msg}! What kind of dish would you like to cook Today?`, 'bot');

  inputWrapper.innerHTML = `
<button id="soupBtn">Soup</button>
<button id="pastaBtn">Pasta</button>
<button id="stewBtn">Stew</button>
`

  document
    .getElementById('soupBtn')
    .addEventListener('click', () => userReply1('soup'))
  document
    .getElementById('pastaBtn')
    .addEventListener('click', () => userReply1('pasta'))
  document
    .getElementById('stewBtn')
    .addEventListener('click', () => userReply1('stew'))
}

const userReply1 = (type) => {
  showMessage(`${type}`, 'user');
  setTimeout(() => moreSpecificDish(type), 1000);
}

const moreSpecificDish = (type) => {
  showMessage(`Ok great! So ${type} it is. What kind of ${type} would you like to make?`, "bot");
  if (type === 'soup') {
    inputWrapper.innerHTML = `
  <select id="select">
    <option value="" selected disabled>⬇ Select what type...</option>
    <option value="Spicy">Spicy</option>
    <option value="Creamy">Creamy</option>
    <option value="Green">Green</option>
  </select>`
  } else if (type === 'pasta') {
    inputWrapper.innerHTML = `
  <select id="select">
    <option value="" selected disabled>⬇Select what type...</option>
    <option value="Spaghetti">Spaghetti</option>
    <option value="Gnocchi">Gnocchi</option>
    <option value="Lasagne">Lasagne</option>
  </select>`
  } else {
    inputWrapper.innerHTML = `
  <select id="select">
    <option value="" selected disabled>⬇Select what type...</option>
    <option value="Chili">Chili</option>
    <option value="Lentil">Lentil</option>
    <option value="Curry">Curry</option>
  </select>`
  }

  const select = document.getElementById('select');
  select.addEventListener('change', () => userReply2(select.value));
}

const userReply2 = (type) => {
  showMessage(`${type}`, 'user');
  setTimeout(() => displayRecipeLink(type), 1000);
}

const displayRecipeLink = (answer) => {
  if (answer === 'Spicy') {
    showMessage(`Excellent choice! Find the link to recipe here <a href="https://ohsheglows.com/2020/04/25/cozy-at-home-spicy-any-veggie-soup/" target="_blank">${answer} Soup</a>`, 'bot');
  } else if (answer === 'Creamy') {
    showMessage(`Excellent choice! Find the link here <a href="https://www.inspiredtaste.net/9603/creamy-vegetable-soup-recipe/" target="_blank">${answer} Soup</a>`, 'bot');
  } else if (answer === 'Green') {
    showMessage(`Interesting choice! Find the link here <a href="https://www.recipetineats.com/immunity-boosting-green-goddess-soup-its-delish/" target="_blank">${answer} Soup</a>`, 'bot');
  } else if (answer === 'Spaghetti') {
    showMessage(`Excellent choice! Find the link here <a href="https://www.jamieoliver.com/recipes/pasta-sauce-recipes/veggie-bolognese-sauce/" target="_blank">${answer} Recipe!</a>`, 'bot');
  } else if (answer === 'Gnocchi') {
    showMessage(`Excellent choice! Find the link here <a href="https://www.gousto.co.uk/cookbook/vegetarian-recipes/mediterranean-veg-gnocchi-with-basil" target="_blank">${answer} Recipe!</a>`, 'bot');
  } else if (answer === 'Lasagne') {
    showMessage(`Excellent choice! Find the link here <a href="https://cookieandkate.com/best-vegetable-lasagna-recipe/" target="_blank">${answer} Recipe!</a>`, 'bot');
  } else if (answer === 'Chili') {
    showMessage(`Excellent choice! Find the link here <a href="https://simple-veganista.com/texas-three-bean-chili-sweet-chia/" target="_blank">${answer} stew recipe!</a>`, 'bot');
  } else if (answer === 'Lentil') {
    showMessage(`Excellent choice! Find the link here <a href="https://choosingchia.com/lentil-stew/" target="_blank">${answer} stew recipe!</a>`, 'bot');
  } else {
    showMessage(`Excellent choice! Find the link here <a href="https://choosingchia.com/lentil-stew/" target="_blank">${answer} stew recipe!</a>`, 'bot');
  }
  setTimeout(() => areYouHappy(), 1000);
}

const areYouHappy = (answer) => {
  showMessage(`Ok ${userName}, I just want to check. Are you happy with your recipe? 👀`, 'bot');
  inputWrapper.innerHTML = `
  <button id="yesBtn">Yes 😋</button>
  <button id="noBtn">No 🤢</button>
  `
  document
    .getElementById('yesBtn')
    .addEventListener('click', () => userReply3('Yes 😋'))
  document
    .getElementById('noBtn')
    .addEventListener('click', () => userReply3('No 🤢'))
}

const userReply3 = (answer) => {
  showMessage(`${answer}`, 'user');
  inputWrapper.innerHTML = '';
  setTimeout(() => happyValidation(answer), 1000);
}

const happyValidation = (answer) => {
  if (answer === 'Yes 😋') {
    showMessage('So nice to hear, enjoy your dinner 🌻', 'bot');
    inputWrapper.innerHTML = '';
  } else {
    showMessage('Wooops, sorry to hear that! Want to give it another try? 🤞', 'bot');
    setTimeout(() => finalCheck(), 1000);
  }
}

const finalCheck = () => {
  inputWrapper.innerHTML = `
  <button id="yeesBtn">Yeees!</button>
  <button id="nooBtn">No, thanks!</button>
  `
  document
    .getElementById('yeesBtn')
    .addEventListener('click', () => userReply4('Yeeees!'))
  document
    .getElementById('nooBtn')
    .addEventListener('click', () => userReply4('No, thanks!'))

  setTimeout(() => userReply4(reply), 1000);
}

const userReply4 = (reply) => {
  showMessage(`${reply}`, 'user');
  setTimeout(() => finalAction(reply), 1000);
}

const finalAction = (reply) => {
  if (reply === 'Yeeees!') {
    location.reload();
    return false
  } else {
    showMessage('Ok fine, I tried! Maybe you are not even hungry 👻', 'bot')
    inputWrapper.innerHTML = '';
  }
}



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
