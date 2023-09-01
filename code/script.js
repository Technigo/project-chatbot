// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementsByClassName('send-btn');
const inputWrapper = document.getElementById('input-wrapper');


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
  showMessage("Hello and welcome to the Game! What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

/* ----- User enters name ------ */
const handleNameInput = (event) => {
  event.preventDefault()
  const name = nameInput.value;
  nameInput.value = ""; //clears the input field after bubble appears
  showMessage(`${name}`, 'user')
  setTimeout(() => greetStart(name), 1000);
  //nameInput.remove(); // removes input fiels
  //submitBtn[0].style.display = "none"; // hides submitt button
}; 

const greetStart = (name) => {
showMessage(`Nice to meet you ${name}! Are you ready to test your knowledge?`, 'bot'); 
//showMessage("Are you ready to test your knowledge?", 'bot');
setTimeout(yesOrNo, 1000);
}


const yesOrNo = (event) => {
  inputWrapper.innerHTML = `
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>`

  document.getElementById('yesBtn').addEventListener('click', () => userAnsw('yes'));
  document.getElementById('noBtn').addEventListener('click', () => userAnsw('no'));
}

const userAnsw = (userAnsw) => {
  if(userAnsw === 'yes') {
  showMessage(`Yes! I am super ready!`, 'user')
  setTimeout(() => firstQuestion(), 1000);
  } else if(userAnsw === 'no') {
  showMessage(`No`, 'user')
  showMessage("Too bad. See you next time!", 'bot')
  inputWrapper.innerHTML = ``;
  } } 

const firstQuestion = () => {
  showMessage(`Awesome! Here is your first question: What is the capital of France?`, 'bot');
  inputWrapper.innerHTML = `
  <button id="london">London</button>
  <button id="paris">Paris</button>
  <button id="rome">Rome</button>
  `
  document.getElementById('london')
  .addEventListener('click', () => answOne('london'));
  
  document.getElementById('paris')
  .addEventListener('click', () => answOne('paris'));
  
  document.getElementById('rome')
  .addEventListener('click', () => answOne('rome'));
}

const answOne = (answOne) => {
  if(answOne === 'london') {
    showMessage(`London`, 'user');
    showMessage(`I'm sorry, that was the wrong answer. But you are still awesome!`, 'bot');
    setTimeout(() => secondQuestion(), 1500);
  } else if(answOne === 'rome') {
    showMessage(`Rome`, 'user');
    showMessage(`I'm sorry, that was the wrong answer. But you are still awesome!`, 'bot');
    setTimeout(() => secondQuestion(), 1500);
  } else if( answOne === 'paris') {
    showMessage(`Paris`, 'user');
    showMessage(`That's correct! You're great at this!`, 'bot');
    setTimeout(() => secondQuestion(), 1500);
  }
}

const secondQuestion = () => {
  showMessage(`Let's try another question!`, 'bot')
  showMessage(`Which actor played the role of Captain Jack Sparrow in the "Pirates of the Caribbean" movies?`, 'bot');
  inputWrapper.innerHTML = `
  <button id="jP">Johnny Depp</button>
  <button id="theRock">Dwayne Johnson</button>
  <button id="will">Will Ferrell</button>
  `
  document.getElementById('jP')
  .addEventListener('click', () => answTwo('jP'));
  
  document.getElementById('theRock')
  .addEventListener('click', () => answTwo('theRock'));
  
  document.getElementById('will')
  .addEventListener('click', () => answTwo('will'));
}

const answTwo = (answTwo) => {
  if(answTwo === 'theRock') {
    showMessage(`Dwayne Johnson`, 'user');
    showMessage(`I'm sorry, that was the wrong answer. But I'm sure you'll get the next one!`, 'bot');
    setTimeout(() => thirdQuestion(), 1500);
  } else if(answTwo === 'will') {
    showMessage(`Will Ferell`, 'user');
    showMessage(`I'm sorry, that was the wrong answer. But I'm sure you'll get the next one!`, 'bot');
    setTimeout(() => thirdQuestion(), 1500);
  } else if( answTwo === 'jP') {
    showMessage(`Johnny Depp`, 'user');
    showMessage(`You arrrr right! You know your pirates!`, 'bot');
    setTimeout(() => thirdQuestion(), 1500);
  }
}

const thirdQuestion = () => {
  showMessage(`Okay, last question!`, 'bot')
  showMessage(`What is 2 + 2?`, 'bot');
  inputWrapper.innerHTML = `
  <button id="one">1</button>
  <button id="ten">10</button>
  <button id="four">4</button>
  <button id="threeSix">36</button>
  `
 
  document.getElementById('one')
  .addEventListener('click', () => answThree('one'));

  document.getElementById('ten')
  .addEventListener('click', () => answThree('ten'));

  document.getElementById('four')
  .addEventListener('click', () => answThree('four'));

  document.getElementById('threeSix')
  .addEventListener('click', () => answThree('threeSix'));
}

const answThree = (answThree) => {
  if(answThree === 'one') {
    showMessage(`1`, 'user');
    showMessage(`I'm sorry, that was the wrong answer. I mean .. come on! You can do better! Try again.`, 'bot');
    showMessage(`What is 2 + 2?`, 'bot')
    //setTimeout(() => thirdQuestion(), 1000);
  } else if(answThree === 'ten') {
    showMessage(`10`, 'user');
    showMessage(`Nope, that's not it.. You can do better! Try again.`, 'bot');
    showMessage(`What is 2 + 2?`, 'bot')
    //setTimeout(() => thirdQuestion(), 1000);
  } else if( answThree === 'threeSix') {
    showMessage(`36`, 'user');
    showMessage(`Hmmm are you sure? Try again.`, 'bot');
    showMessage(`What is 2 + 2?`, 'bot')
    //setTimeout(() => thirdQuestion(), 1000);
  } else if (answThree === "four") {
    showMessage(`4`, 'user')
    showMessage(`You genius, that's correct!`, 'bot')
    setTimeout(() => finish(), 1500);
  }
}

const finish = (finish) => {
  showMessage("Congratulations! You just won the Game! Here's your prize!", 'bot')
  showMessage("👏🏼", 'bot');
  inputWrapper.innerHTML = `
    <button id="prize">🏆</button>`

    document.getElementById('prize')
    .addEventListener('click', () => finish('prize'));
}

form.addEventListener("submit", handleNameInput);

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)

