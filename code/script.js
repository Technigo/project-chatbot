// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const btn = document.getElementById("btn");
const nameInput = document.getElementById("name-input");
const btnsEl = document.getElementById("buttons");
const nameFormEl = document.getElementById("name-form");
const pizzaBtn = document.getElementById("pizzabtn");
const pastaBtn = document.getElementById("pastabtn");
const saladBtn = document.getElementById("saladbtn");
const pizzaMenue = document.getElementById("pizza-menue");
const pastaMenue = document.getElementById("pasta-menue");
const saladMenue = document.getElementById("salad-menue");

btnsEl.style.display = "none";
nameFormEl.style.display = "flex";
pizzaMenue.style.display = "none";
pastaMenue.style.display = "none";
saladMenue.style.display = "none";

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}


// Set up your eventlisteners here
btn.addEventListener("click" , (e) => {
  e.preventDefault();

  message = nameInput.value;
  showMessage(`${message}` , 'user');
  clearInput();
  setTimeout(() => {
    showMessage(`Nice to meet you ${message}.what type of food would you like to order?` , 'bot')
    btnsEl.style.display = "flex";
    nameFormEl.style.display = "none";
  },1000);

});

const clearInput = () =>{
  nameInput.value = "";
}

// When website loaded, chatbot asks first question.

// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
pizzaBtn.addEventListener("click" , () =>{
  showMessage(`Pizza` , 'user');
  btnsEl.style.display = "none";
  setTimeout(()=>{
    showMessage(`oh so you are in the mood for Pizza? Great choice! please select something from menue `, 'bot')

  },1000)
  
});
pastaBtn.addEventListener("click" , () =>{
  showMessage(`Pasta` , 'user');
  btnsEl.style.display = "none";
  
});
saladBtn.addEventListener("click" , () =>{
  showMessage(`Salad` , 'user');
  btnsEl.style.display = "none";
})

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
