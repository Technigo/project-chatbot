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

const botReplyPic = (src) => {
  showPicture(src);
}

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

const showPicture = (src) => {
  chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <img class="bot-img-reply" src="${src}" alt="" />
        </div>
      </section>
    `
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
    setTimeout(() => userReply("I feel really great!"),500)
    setTimeout(() => botReply("How splendid, what do you want to do now?"),1000)
    inputWrapper.innerHTML = `
      <button id = "spread" type = "submit">Spread the love</button>
      <button id = "dayOff" type = "submit">Take the day of</button>
    `
    document.getElementById('spread').addEventListener('click' , () => { userReply("How do i contribute to the world with my happiness?")
    setTimeout(() => toDo('spread')),1000  // calling out the next answer in a new function named facts
    }) 
    document.getElementById('dayOff').addEventListener('click' , () => { userReply("I want the day off!")
    setTimeout(() => toDo('dayOff')),1000  // calling out the next answer in a new function named facts
    }) 
  }
  else if (userAnswer === 'okey') {
    setTimeout(() => botReply("Only okey? Let's make you feel great!"),500)
    userReply(userAnswer);
    setTimeout(() => userReply("Yes, I would like that!"),1000)
    setTimeout(() => botReply("Choose your prefered way:"),1500)
    inputWrapper.innerHTML = `
      <button id = "cute" type = "submit">Show me something</button>
      <button id = "funny" type = "submit">Tell me something</button>
    `
    document.getElementById('cute').addEventListener('click' , () => { userReply("Show me something cute")
    setTimeout(() => toDo('cute')),1000  // calling out the next answer in a new function named facts
    }) 
    document.getElementById('funny').addEventListener('click' , () => { userReply("Tell me a joke")
    setTimeout(() => toDo('funny')),1000  // calling out the next answer in a new function named facts
    }) 
  }
  else if (userAnswer === 'meh') {
    setTimeout(() => userReply("Not so good actually"),500)
    setTimeout(() => botReply("I'm sad to hear that, I would recomend the following:"),1500)
      
    inputWrapper.innerHTML = `
      <button id = "therapy" type = "submit">Therapy</button>
      <button id = "d-metal" type = "submit">Death metal</button>
      `
    document.getElementById('therapy').addEventListener('click' , () => { userReply("Some therapy would be good thanks")
    setTimeout(() => toDo('therapy')),3000  
    }) 
    document.getElementById('d-metal').addEventListener('click' , () => { userReply("Hook me up with some metal🛠")
    setTimeout(() => toDo('d-metal')),1000  
    }) 
}}


const toDo = (lastChoice) => {
  if (lastChoice === 'spread'){
    setTimeout(() => botReply("Say something nice to the next person you see!"),1000)
    setTimeout(() => closure()),1000 
  }
  else if (lastChoice === 'dayOff') {
    setTimeout(() => botReply("Here's a validation for your boss, you have earned the day off!"),1000)
    setTimeout(() => botReplyPic("https://i.pinimg.com/564x/32/a9/e3/32a9e33772eaddec23df3c319a741bdb.jpg"),1200)  
    setTimeout(() => closure()),1000    
  }
  else if (lastChoice === 'cute') {
    setTimeout(() => botReplyPic("http://placekitten.com/200/200"),500)  
    setTimeout(() => closure()),800  
  }
  else if (lastChoice === 'funny') {
    setTimeout(() => botReply("What do you call Batman when he skips church?"),500)
    setTimeout(() => botReply("..."),1000)
    setTimeout(() => botReply("Christian Bale 🤣"),1500)
    setTimeout(() => closure('funny2')),3000  
    }
  else if (lastChoice === 'therapy') {
    setTimeout(() => botReply("Remember, life isn't about the moments that take your breath away..."), 1000);
    setTimeout(() => botReply("That's asthma, you're thinking of asthma."), 2500);
    setTimeout(() => closure('funny2')),3000 
  }
  else if (lastChoice === 'd-metal') {
      setTimeout(() => botReply(`I suggest you listen to this, <a href="https://youtu.be/e6f9bjBT-DM">Click here</a>`),1000);
      setTimeout(() => notGood()),3000 
    }}

const notGood = (bob) => {
  setTimeout(() => botReply("You don't like metal?"), 2000)
  inputWrapper.innerHTML = `
      <button id = "yes" type = "submit">ofc I do.</button>`
    document.getElementById('yes')
    .addEventListener('click' , () => { userReply("METAL is the best!!!")
    setTimeout(() => botReply("Ok... You should maybe leave this chat and go outside! Have a marvelous day tough guy!🤘🏻")),1500 
    setTimeout(() => bye('end')),2000  
    })
    
}

const closure = (end) => {
  setTimeout(() => botReply("Would you like to talk more?"),3000)
    inputWrapper.innerHTML = `
      <button id = "yes" type = "submit">Yes, hit me.</button>
      <button id = "no" type = "submit">I'm done talking.</button>
      `
  document.getElementById('yes')
  .addEventListener('click' , () => { userReply("What else can should I do?")
  setTimeout(() => botReply("You should leave this chat and go outside! Have a marvelous day and show that beautiful smile of yours!")),1500 
  setTimeout(() => bye('end')),2000  
  })

  document
    .getElementById('no')
    .addEventListener('click' , () => { userReply("That's enough, had fun though!")
    setTimeout(() => bye('no')),1000
    })
  }

  const bye = () => {
    setTimeout(() => botReply("Goodbye, thank you for your time 💜 "),1000)
    inputWrapper.innerHTML = `
    <h3>Chat is now closed</h3>
    `
    }



// Set up your eventlisteners here

form.addEventListener('submit', handleInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500);


//const element = document.getElementById("theLast")
//element.remove("yes");