
// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
console.log(nameInput.value, "name-input")
const form = document.getElementById('name-form');

// Functions goes here 👇
// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    console.log("message from user")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    console.log("message from bot")
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

// A function to start the conversation
const greetUser = () => {
  showMessage("Hello there, what's your name?", 'bot')

}
//funktion som heter handlenameinput, möjliggör att kunna skriva sitt namn. 
const handleNameInput = (event) => {
  console.log("event", event)
  //this default does something
  event.preventDefault();
  //This connects with the html and collects the input value for name in form
  const name = nameInput.value;
  //This shows the message in the chatbubble 
  showMessage(name, "user");
  //This clears the input field... somehow?
  nameInput.value = "";
  setTimeout(() => movieOptions(name), 1000)
};

//eventlisteners - handlenameinput kallas när knappen klickas 
form.addEventListener("submit", handleNameInput);

//PART 2

// kallar på funktionen movieoptions 
const movieOptions = (name) => {
  showMessage(`Hello there ${name}, what's do you want to watch today?`, 'bot')
  form.removeEventListener("submit", handleNameInput);
  form.addEventListener("submit", movieOptions);
}


// const movieOptionInput = (event) => {
//   console.log("movieOption", event)
//   //this default does something
//   event.preventDefault();
//   //This connects with the html and collects the input value for name in form
//   const name = nameInput.value;
//   //This shows the message in the chatbubble 
//   showMessage(name, "user");
//   //This clears the input field... somehow?
//   nameInput.value = "";
//   setTimeout(() => movieOptions(name), 1000)
// };


setTimeout(greetUser, 1000)

const greetBot = () => {

}

