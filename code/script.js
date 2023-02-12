// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')


// If you need any global variables that you can use across different functions, declare them here:
const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link");
window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover"); 
      })
    })
/*  in the console you see the position of the coursor: console.log(x); */ 
  })   
})


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
        <img src="assets/love.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/plant.png" alt="Bot" />
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
// Greeting 
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi! Welcome to our amazing plant store! What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}
//User answering their name
const handleInput = (event) => {
  event.preventDefault(); // prevents refreshing the page
  let userName = nameInput.value;
  showMessage(`Hi! I'm ${userName}.`, "user");  //calling the function
  nameInput.value = ""; // erases the answer field
 
  setTimeout(() => question1(userName), 500);
  
};

//Bot - question 1
const question1 = (userName) => {
  showMessage(`Aloha ${userName}! How have you been? Good, fantastic, surviving, huh?`, "bot");
  nameForm.removeEventListener("submit", handleInput);
  nameForm.addEventListener("submit", handleInput2);
  
};

// User - answer1
const handleInput2 = (event) => {
  event.preventDefault();
  let moodType = nameInput.value;
  showMessage(`${moodType}`, "user"); //calling the function
  nameInput.value = "";
  setTimeout(() => question2(), 500);

}

//Bot - question 2
const question2 = (event) => {
  showMessage(`Music to my ears! I assume you need more plants?`, "bot");
  inputWrapper.innerHTML = `
  <button id="Yes" type="submit" class="chat-btn"> Yes, of course 🤩</button>
  <button id="No" type="submit" class="chat-btn"> It's so sorrowful, but actually no 😔 </button> `

  document.getElementById("Yes").addEventListener("click",yesChoice);
  document.getElementById("No").addEventListener("click",noChoice);
};

//User - answer 2 - no
const noChoice = (event) => {
  event.preventDefault();
  let denierAnswer = inputWrapper.value;
  showMessage("No, need to run, sorry!", "user");
  inputWrapper.value = "";
  setTimeout(() => endChat(denierAnswer), 1000);

};

//Bot - ending chat because of 'no' answer
const endChat = () => {
  showMessage("Have a lovely day!", "bot");
  inputWrapper.innerHTML = ""
};

//User - answer 2 - yes
const yesChoice = (event) => {
  event.preventDefault();
  let shoppingAnswer = inputWrapper.value;
  showMessage(`Yes, show me what you have!`, "user")
  inputWrapper.value = "";
  setTimeout(() => question3(shoppingAnswer), 1000);
}

//Bot asking which plant user wants to order
const question3 = (answerName) => {
  showMessage("It's your lucky day! We have these plants available. Which one do you wish to have?", "bot");
  inputWrapper.innerHTML = `
  <button id="calathea" type="submit" class="chat-btn">Calathea</button>
  <button id="monstera" type="submit" class="chat-btn">Monstera</button>
  <button id="begonia" type="submit" class="chat-btn">Begonia</button>
  `
  document.getElementById("calathea").addEventListener("click", calatheaChoice);
  document.getElementById("monstera").addEventListener("click", monsteraChoice);
  document.getElementById("begonia").addEventListener("click", begoniaChoice);
};


// 3 different choices
const calatheaChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let plantAnswer = inputWrapper.value;
  showMessage(`I'm a fighter! One calathea for me!`, "user");
  inputWrapper.value = "";
  setTimeout(() => question4(plantAnswer), 1000);
};

const monsteraChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let plantAnswer = inputWrapper.value;
  showMessage(`Holey leaves, give me this Swiss Cheese Plant! Monstera it will be.`, "user");
  inputWrapper.value = "";
  setTimeout(() => question4(plantAnswer), 1000);
};

const begoniaChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let plantAnswer = inputWrapper.value;
  showMessage('I spotted this dotted little flair. Lady Begonia for me, please.', "user");
  inputWrapper.value = '';
  setTimeout(() => question4(plantAnswer), 1000);
};

//Bot asking where to pick up the plant
const question4 = () => {
  showMessage("In which store would you like to pick up your plant?", "bot");
  inputWrapper.innerHTML = `
  <button id="lillaessingenBtn">Lilla Essingen</button>
  <button id="sodermalmBtn">Södermalm</button>
  `

  document.getElementById("lillaessingenBtn").addEventListener("click", () => finalDecision("Lilla Essingen"))
  document.getElementById("sodermalmBtn").addEventListener("click", () => finalDecision("Sodermalm"))
  ;}

//Final decision and video 
const finalDecision = (finalDecision) => {

  if (finalDecision === "Lilla Essingen"){
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 1000);
    setTimeout(() => showMessage("Lilla Essingen, I will be there!", "user"), 1500);
    setTimeout(() => showMessage("Your plant will be available to pick up at Lilla Essingen Funky Plant Store as soon as you see the Philodendron Pink Princess!", "bot"), 1500);
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 2000);
    setTimeout(() => showMessage("We're preparing your plant! You will be informed when it's ready! 🧑🏾‍🌾 Please, bear with us a little bit more 💝 ...", "bot"), 1500);

    
  } 
  
  else { 
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 1000);
    setTimeout(() => showMessage("Gonna take a walk on Söder, why not to pick it up there...", "user"), 1500);
    setTimeout(() => showMessage("Your plant will be available to pick up at Södermlam Funky Plant Store as soon as you see the Philodendron Pink Princess!", "bot"), 1500);
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 2000);
    setTimeout(() => showMessage("We're preparing your plant! You will be informed when it's ready! 🧑🏾‍🌾 Please, bear with us a little bit more 💝 ...", "bot"), 1500);
  }
  
  setTimeout(() => chat.innerHTML = `
  <img src="assets/pinklady.jpeg" alt="Thank you image" class="final-image"> <p class="final">Thank you for shopping with us!<br> You have now 24h to pick up your plant at the chosen localisation.</p> 
  `, 15500);
  setTimeout(() => inputWrapper.innerHTML = `<span>`, 7000 ); 
}

 

// Set up your eventlisteners here
nameForm.addEventListener("submit", handleInput);
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);

