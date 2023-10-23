// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementsByClassName('send-btn');
const inputWrapper = document.getElementById('input-wrapper');
const startBtn = document.getElementById('startBtn');

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
  event.preventDefault() //prevents the chat to reload
  const name = nameInput.value.trim();      
    if (name === "" || name === " ") {       // prompts a message if the user leaves the input blank or only writes " "
      alert("Please enter your name.");   
      return;    
    }                                     
  nameInput.value = ""; // Clears the input field after the bubble appears
  showMessage(`${name}`, 'user');
  setTimeout(() => greetStart(name), 1000); // Calls the next function with a delay and adds "name"
}

/*----- Bot greats user ----*/
const greetStart = (name) => {
showMessage(`Nice to meet you ${name}! Are you ready to test your knowledge?`, 'bot'); 
setTimeout(yesOrNo, 1000);
}

/*----Function that creates and displays two new buttons ------ */
const yesOrNo = () => {
  //adds the buttons
  inputWrapper.innerHTML = `
    <button id="yesBtn" class="firstBtns">Yes</button>
    <button id="noBtn" class="firstBtns">No</button>
    `

    document.getElementById('yesBtn')
    .addEventListener('click', () => userAnsw('yes'));
    
    document.getElementById('noBtn')
    .addEventListener('click', () => userAnsw('no'));
}

/* ------ Displays users answer depending on what button they click ----- */
const userAnsw = (userAnsw) => {
  if(userAnsw === 'yes') {
    showMessage(`Yes! I am super ready!`, 'user')
    setTimeout(() => firstQuestion(), 1000); // "Yes" calls the next function
  } else if(userAnsw === 'no') {
      showMessage(`No`, 'user')
      showMessage("Too bad. See you next time!", 'bot')
      inputWrapper.innerHTML = ``;  // "No" clears the input field
  } 
} 

/* ---- Displays the first question and new buttons ----- */
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

/* ---- Displays the users first answer and if its right or wrong ------ */
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

/* ---- Displays the second question and new buttons ----- */
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


/* ---- Displays the users second answer and if its right or wrong ------ */
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

/* ---- Displays the third question and new buttons ----- */
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

/* ---- Displays the users second answer and loops the question until user chooses right answer ------ */
const answThree = (answThree) => {
  if(answThree === 'one') {
    showMessage(`1`, 'user');
    showMessage(`I'm sorry, that was the wrong answer. I mean .. come on! You can do better! Try again.`, 'bot');
    showMessage(`What is 2 + 2?`, 'bot')
  } else if(answThree === 'ten') {
      showMessage(`10`, 'user');
      showMessage(`Nope, that's not it.. You can do better! Try again.`, 'bot');
      showMessage(`What is 2 + 2?`, 'bot')
  } else if( answThree === 'threeSix') {
      showMessage(`36`, 'user');
      showMessage(`Hmmm are you sure? Try again.`, 'bot');
      showMessage(`What is 2 + 2?`, 'bot')
  } else if (answThree === "four") {
      showMessage(`4`, 'user')
      showMessage(`You're a genius, that's correct!`, 'bot')
      setTimeout(() => finish(), 1500); //only this answer calls for the next function
  }
}

/* ---- Last function ----- */
const finish = (finish) => {
  showMessage("Congratulations! You just won the Game! Here's your prize!", 'bot');
  showMessage("👏🏼", 'bot');
    inputWrapper.innerHTML = `
      <button id="prize" class="firtsBtns">🏆</button>
      `

      document.getElementById('prize')
      .addEventListener('click', () => finish('prize'));
}



startBtn.addEventListener('click', () => setTimeout(greetUser, 1000));
form.addEventListener("submit", handleNameInput);



// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.


