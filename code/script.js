// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const wineForm = document.getElementById('wine-form');
const wineInput = document.getElementById('wine-input');
const inputWrapper = document.getElementById('input-wrapper');

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
    if (sender === 'user') {
        console.log(showMessage);
        chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    } else if (sender === 'bot') {
        console.log(showMessage);
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
const greeting = () => {
    showMessage(`Hello there! Do you prefer white or red wine?`, 'bot')
        // Just to check it out, change 'bot' to 'user' here 👆
}

setTimeout(greeting, 1000); //Fundera på placering

//Question 1
const handleWineInput = (event) => {      
  event.preventDefault(); 
  const wineChoice = wineInput.value;
  showMessage(wineChoice, 'user');
  wineInput.value = '';
  setTimeout(() => validateResponse(wineChoice), 1000);
};

//Question 2
const validateResponse = wineChoice => {     

  if (wineChoice.toLowerCase() === 'red') {
    showMessage(`${wineChoice} is it?`, 'bot');
    setTimeout(() => questionRed(), 2000);
  } else if (wineChoice.toLowerCase() === 'white') {
    showMessage(`${wineChoice}... Are you sure?`, 'bot');
    setTimeout(() => questionWhite(), 2000);
  } else {
    showMessage(`Please answer if you prefer red or white.`, 'bot');
  }
};

//Question 3 - Red wine (questionRed) 

const questionRed = wineCountry => {
 showMessage(`Great choice! Which of the following countries would you say that you prefer when it comes to red wine?`, 'bot');
};

//Question 3 - White wine (questionWhite) 

const questionWhite = badPreference => {
  showMessage(`I mean, are you really sure about it? Red is pretty popular and the taste is absolutely fantastic. I'll ask again; red or white?`, 'bot');

  inputWrapper.innerHTML = `
  <button id="continue">Red</button>
  <button id="theEnd">White</button>
  `

  document.getElementById('continue').addEventListener('click', () => {
    showMessage('red', 'user');
    setTimeout(() => questionRed(), 2000);
  })

  document.getElementById('theEnd').addEventListener('click', () => {
    showMessage('white', 'user');
    setTimeout(() => oneChance(), 2000);
  })
 };
 

 //Question 4 - White wine (oneChance)

 const oneChance = oneChance => {
  showMessage(`I hope you realize what you're missing out on...`, 'bot');
  setTimeout(() => lastChance(), 2000);
 };
 

 //Question 5 - White wine (lastChance)

 const lastChance = nowOrNever => {
  showMessage(`Last chance. What's your final answer?`, 'bot');

  inputWrapper.innerHTML = `
  <button id="regretChoice">I've changed my mind. Red it is!</button>
  <button id="itsFinal">White, it's final!</button>
  `

  document.getElementById('regretChoice').addEventListener('click', () => {
    showMessage('regretChoice', 'user');
    setTimeout(() => questionRed(), 2000);
  })

  document.getElementById('itsFinal').addEventListener('click', () => {
    showMessage('White is my final answer.', 'user');
    setTimeout(() => endOfConvo(), 2000);
  })
 };

 //Question 6 - White wine (endOfConvo)

 const endOfConvo = goodBye => {
  showMessage(`OK. Then our conversation ends here.`, 'bot');
  const removeElement = document.getElementById('regretChoice');
  const removeElementAgain = document.getElementById('itsFinal');
  setTimeout(() => removeElement.remove(), removeElementAgain.remove(), 1000);
};





// Set up your eventlisteners here
wineForm.addEventListener('submit', handleWineInput);


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.