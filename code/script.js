// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const startButton = document.getElementById("start-btn");
const music = document.getElementById("music");
const inputWrapper = document.getElementById("input-wrapper")
const main = document.getElementById("main")
const body = document.getElementById("body")
// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    console.log("The user said something")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="https://thenounproject.com/api/private/icons/2401070/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="User" />  
      </section>
    `
    
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("The bot said something")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="https://thenounproject.com/api/private/icons/6018841/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
//this is the startscreen, not showing the chat
const startScreen = () => {
main.style.display = 'none'

}
startScreen()


const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  main.style.display = 'flex'
  showMessage("Welcome to Trivia Quiz Bot!! What's your name, contestant?", 'bot');
  
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {
  console.log("submit")
  event.preventDefault();
  const name = nameInput.value;
  nameInput.value = '';
  showMessage (`${name}`, `user`)
  showMessage (`${name}, are you ready for your first question?`, `bot`);
  
  setTimeout(ready, 1000);
  }
const ready = () => {
  inputWrapper.innerHTML =`
    <button class="yesReady" id="yesBtn">YES</button>
    <button class="noReady" id="noBtn">NO</button>
    `

}

const pizzaOption = () => {

    showMessage (`What pizza would you like?`, 'bot')
  
    form.innerHTML = `
      <button class="options" id="margheritaBtn">margherita</button>
      <button class="options" id="vesuvioBtn">vesuvio</button>
      <button class="options" id="funghiBtn">funghi</button>
  `
  document.getElementById('margheritaBtn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); selectedPizza ('margherita')})
  setTimeout(selectedPizza, 1000)
  document.getElementById('vesuvioBtn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); selectedPizza ('vesuvio')})
  setTimeout(selectedPizza, 1000)
  document.getElementById('funghiBtn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); selectedPizza ('funghi')})
  setTimeout(selectedPizza, 1000)
}

const selectedPizza = (selectedPizza) => {

  if (selectedPizza === 'margherita'){
    showMessage(`I want a Margherita!`, 'user')
    showMessage(`One Margherita for You!`, 'bot')
    setTimeout(byeBye, 1000)
    
  } else if (selectedPizza === 'vesuvio'){
    showMessage(`I want a Vesuvio!`, 'user')
    showMessage(`One Vesuvio for You!`, 'bot')
    setTimeout(byeBye, 1000)
    
  } else if (selectedPizza === 'funghi'){
    showMessage(`I want a Funghi!`, 'user')
    showMessage(`One Funghi for You!`, 'bot')
    setTimeout(byeBye, 1000)
    
  }
 
}

const byeBye = () => {
  showMessage(`Bye Bye!`, 'bot')
  form.innerHTML = ``

}

// Set up your eventlisteners here


form.addEventListener("submit", (handleNameInput));
startButton.addEventListener('click', function() {
  setTimeout (greetUser, 500);
  startButton.style.display = 'none';
  music.play(); 
});
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greetUser, 1000)
