// Variables that point to selected DOM elements (declaring variables)
const chat = document.getElementById("chat");
const userInput = document.getElementById("user-input");
const label = document.getElementById("input-label");
const sendButton = document.getElementById("send");
const inputWrapper = document.getElementById("input-wrapper");
const inputForm = document.getElementById("inputForm");
const buttonForm = document.getElementById("buttonForm"); //fångar upp buttonform

// If you need any global variables that you can use across different functions, declare them here:

let questionNumber = 1;

let userName = ""; //this means that i want userNamne to be available in any of our functions (and not only in the funciotn where it is declared)

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
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
};

//const nextQuestion = (message) => {};
// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
};

// Store the value in a variable so I can access it after we

// Initial button click, here I should get the name entered
sendButton.addEventListener("click", function clickHandler(event) {
  event.preventDefault();
  userName = userInput.value; //username is here reassigned to mean what we want it to mean in this specific function
  showMessage(`${userName}`, "user");
  userInput.value = ""; // clear it from the input
  setTimeout(() => { 
    askZodiacSigns();
    sendButton.removeEventListener("click", clickHandler)
  }, 1000); //calls the function askZodiac
});

//Here I call the function where I welcome the user and ask them to tell me their zodiac sign
const askZodiacSigns = () => {
  console.log("this works");
  showMessage(
    `OMG ${userName} is my favourite name in the whole world 🥳!! What's your zodiac sign?`,
    "bot"
  );
  setTimeout(() => zodiacQuestion(), 1000); //calls the function nextQuestion
};

const zodiacQuestion = () => {
  //this function is whats defining what we mean with the function nextQuestion
  console.log("next question works!");
  /*  showMessage(´next question is working´ , "user"); */


  label.innerText = "Zodiac";

  botZodiacReply();
};

//This is all one and the same funciton (botZodiacReply)

const botZodiacReply = () => {
  console.log("bot reply works");

  sendButton.addEventListener("click", function clickHandler(event) {
    event.preventDefault();
    console.log("zodiac buttton is working");
    const zodiacSign = userInput.value
    showMessage(`${zodiacSign}`, "user");
    userInput.value = ""; // clear it from the input
    
    setTimeout(() => {
      showMessage(
        `Oh fantasctic! ${zodiacSign} are amazing at doing affirmation work 🌟 So you are basically half way there 😉!`,
        "bot"
      );

      sendButton.removeEventListener("click", clickHandler)

      threeQuestion()
    }, 1000); //calls the function askZodiac
  });
  //next function goes here down
  
};

const threeQuestion = () => {
  //this function is whats defining what we mean with the function nextQuestion
  console.log("three question works!");
  /*  showMessage(´next question is working´ , "user"); */


  buttonForm.classList.remove("hidden")
  inputForm.classList.add("hidden")

};

const button1 = document.getElementById("button1"); //fångar upp button1

button1.addEventListener('click', function button1ClickHandler(e) {
  e.preventDefault()

  generateCardBaseOnCategory("cat1")

})

const button2 = document.getElementById("button2"); //fångar upp button2

button2.addEventListener('click', function button2ClickHandler(e) {
  e.preventDefault()
  generateCardBaseOnCategory("cat2")
  
})

const button3 = document.getElementById("button3"); //fångar upp button3

button3.addEventListener('click', function button3ClickHandler(e) {
  e.preventDefault()
  generateCardBaseOnCategory("cat3")
  
})

const generateCardBaseOnCategory = (category) => {
  console.log(category)

  if(category === "cat1")
  {

  } else if (category === "cat2") {

  } else if (category === "cat3") {

  }

  showMessage(`You picked ${category}`, "bot");

  buttonForm.classList.add("hidden") //hides the buttons 
}


setTimeout(greetUser, 1000);
