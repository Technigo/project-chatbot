// Variables that point to the selected DOM elements
const chat = document.getElementById(`chat`);
const nameInput = document.getElementById(`name-input`);
const inputWrapper = document.getElementById(`input-wrapper`);

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  //the if statement checks if the sender is user and if that's the case outputs the message
  if (sender === "user") {
    console.log(sender);
    console.log(message);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-crab.jpg" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    //the else if statement checks if the sender is bot and if that's the case outputs the message
    console.log(message);
    console.log(sender);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot-fish.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // makes the chat scroll to the last message when there are too many
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation
const greetUser = () => {
  showMessage(
    `Hello. I'm Finnly. Nice to meet you. Wanna find out what kind of sea creature you are?`,
    `bot`
  );
  showMessage(
    `Great! Let's get started. But first, let me get your name.`,
    `bot`
  );
};

//user types in name
const nameOutput = () => {
  const name = nameInput.value;
  showMessage(`Hi, my name is ${name}`, `user`);
  username = name;
  nameInput.value = ``; //Clearing the input field
  inputWrapper.innerHTML = ``;
};
nameOutput(nameInput);

//bot welcomes the user and asks first question, 2 options of buttons to chose from
const creatureNature = (a, b) => {
  showMessage(
    `Hi ${username}. Now let's check out some of your personality traits to find out what sea creature suits you. Are you mor of an introvert or an extrovert?`,
    "bot"
  );
};

// Eventlisteners

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
