// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const input = document.getElementById('name-input') //trying to figure this out
const form = document.getElementById('name-form')
const submit = document.getElementById('submit')
const inputWrapper = document.getElementById('input-wrapper')

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment
const botReply = (msg) => {
  showMessage(msg, "bot");
};

const userReply = (msg) => {
  showMessage(msg, "user");
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("User is saying something")
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
    console.log("Bot is asking something")
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
  // call funtion showMessage, it is declared earlier with  argument 
  //"Hello there, What's your name?" for message, and the argument "bot" for sender

const greetUser = () => {
  botReply("Hi pretty, what's your name?");
}

const handleInput = (event) => { // when submiting this will be used
  event.preventDefault() // prevents chat from refreshing when submitting
  const msg = input.value // input value shall be stored in the const name 
  userReply(`${msg}`) // users answer 
  input.value = ''
  setTimeout(() => question1(msg), 500)
}

const question1 = (msg) => {
  botReply(`Nice to meet you ${msg}! How are you feeling today?`)

  //answer choices
  inputWrapper.innerHTML = `
    <button id="greatBtn" type="submit">🤩</button>
    <button id="okBtn" type="submit">😬</button>
    <button id="mehBtn" type="submit">🫠</button>`;

  document
    .getElementById("greatBtn")
    .addEventListener("click", () => userFeels("great"));
  document
    .getElementById("okBtn")
    .addEventListener("click", () => userFeels("okey"));
  document
    .getElementById("mehBtn")
    .addEventListener("click", () => userFeels("meh"));
};

  //answer of sort
const userFeels = (userAnswer) => {
  if (userAnswer === "great") {
    userReply(userAnswer);
    setTimeout(() => userAnswer("Oh how splendid"),1000)
    inputWrapper.innerHTML = `
    <button id = "spread" type = "submit">Spread the love</button>
    <button id = "dayOff" type = "submit">Take the day of</button>
    `
    document.getElementById('spread').addEventListener('click' , () => { userReply("How do i contribute to the world with my happiness?")
    setTimeout(() => facts('spread' , 'user')),1000  // calling out the next answer in a new function named facts
    }) 
    document.getElementById('dayOff').addEventListener('click' , () => { userReply("click for approval of day of")
    setTimeout(() => facts('dayOff' , 'user')),1000  // calling out the next answer in a new function named facts
    }) 
  }

  else if (userAnswer === "okey") {
    setTimeout(() => botReply("Lets make you feel great"),1000)
    inputWrapper.innerHTML = `
    <button id = "cute" type = "submit">Show me something</button>
    <button id = "funny" type = "submit">Tell me something</button>
    `
    document.getElementById('cute').addEventListener('click' , () => { userReply("Show me something cute")
    setTimeout(() => facts('cute' , 'user')),1000  // calling out the next answer in a new function named facts
    }) 
    document.getElementById('funny').addEventListener('click' , () => { userReply("Tell me a joke")
    setTimeout(() => facts('funny' , 'user')),1000  // calling out the next answer in a new function named facts
    }) 
}}

/*
  } else if (userAnswer === "okey") {
    setTimeout(() => botReply(`Do you wanna hear something funny to brighten your day?`), 1000);
  } else {}
}  
*/
/*
const answerTwo = (choice) => {      //answer , passing the parameter
  if ( choice === 'romance' ) { 
      setTimeout(() => showMessage("Ah, romance my favorite choice! Choose your category.", 'bot'),1000)
      inputWrapper.innerHTML = `
      <button id = "single" type = "submit">single</button>
      <button id = "marriage" type = "submit">marriage</button>
      `
      document.getElementById('single').addEventListener('click' , () => { showMessage("Dying to know about singleness.", 'user')
      setTimeout(() => facts('single' , 'user')),1000  // calling out the next answer in a new function named facts
      }) 
      document.getElementById('marriage').addEventListener('click' , () => { showMessage("Married facts for married people.", 'user')
      setTimeout(() => facts('marriage' , 'user')),1000  // calling out the next answer in a new function named facts
      }) 
    }}

                    //min kod häär om det skiter sig 
                const userFeels = (userAnswer) => {
                  if (userAnswer === "great") {
                    userReply(userAnswer);
                    setTimeout(() => botReply(`I'm happy for you!`), 1000);

                  } else if (userAnswer === "okey") {
                    setTimeout(() => botReply(`Do you wanna hear something funny to brighten your day?`), 1000);
                  } else {}
                }  
                    slut på min kod

    document
.getElementById('romance')
.addEventListener('click' , () => { showMessage("I would like to know more about romance", 'user')
setTimeout(() => answerTwo('romance' , 'user')),1000  
}) 
*/

// Set up your eventlisteners here

form.addEventListener('submit', handleInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500);
