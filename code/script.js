// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send')
// If you need any global variables that you can use across different functions, declare them here:
//This will be let variables, to be able to have different numbers on question to keep track


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
//without the ${message} the actual message(parameter) in const greetUser will not be passed, only string message. Only the parameter 'bot' 
function showMessage(message, sender) {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("Now the user is replying");
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("Now the bot is asking a question");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Initial button click 
sendBtn.addEventListener('click', (event) => {
  event.preventDefault()

  // Store the value in a variable so we can access it after we 
  // clear it from the input
  const userName = nameInput.value
  showMessage(`${userName}`, 'user');

  // Clears the input field
  nameInput.value = ''
  //Here I call the function where I present the dishes to choose from. I will also pass the userName
  setTimeout(() => whatKindOfDish(userName), 1000)
})


//function to present the different themes of food to choose from. Pass the name entered in the greeting
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
  setTimeout(() => nextQuestion(type), 1000)
}

const nextQuestion = (type) => {  
showMessage(`Ok great! So ${type} it is. What kind of ${type} would you like to make?`, "bot");
if (type === 'soup'){
  inputWrapper.innerHTML = `
  <select id="select">
    <option value="" selected disabled>⬇️ Select what type...</option>
    <option value="spicy">Spicy</option>
    <option value="creamy">Creamy</option>
    <option value="green">Green</option>
  </select>`
}else if (type === 'pasta'){
  inputWrapper.innerHTML = `
  <select id="select">
    <option value="" selected disabled>⬇️ Select what type...</option>
    <option value="spaghetti">Spaghetti</option>
    <option value="gnocchi">Gnocchi</option>
    <option value="lasagne">Lasagne</option>
  </select>`
}else {
  inputWrapper.innerHTML = `
  <select id="select">
    <option value="" selected disabled>⬇️ Select what type...</option>
    <option value="chili">Chili</option>
    <option value="lentil">Lentil</option>
    <option value="curry">Curry</option>
  </select>`
}

const select = document.getElementById('select')
  select.addEventListener('change', () => displayRecipeLink(select.value))
}

const displayRecipeLink = (answer) => {
if (answer === spaghetti) {
  showMessage(`${answer} find the link here`, 'bot');
} else {
  showMessage("Something else", 'bot');
}
}  
// Set up your eventlisteners here





// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
