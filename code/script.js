// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');
const submitBtn = document.getElementsByClassName('send-btn')
let question = 0;

// If you need any global variables that you can use across different functions, declare them here:

/*const select = () => {
  document.getElementsByClassName('.select').addEventListener('change', () => showMessage(select.value, 'user'));
  console.log('test')
}*/

// Declare your functions after this comment
  const handleNameInput = (event) => {
    event.preventDefault()
    console.log("test")
    const name = nameInput.value
    showMessage(`Your appointment is booked. We will send you a confirmation at ${name}`, 'bot')
    nameInput.value = ''
  }
  
  const getEmail = () => {
    showMessage('Enter your details below', 'bot');
    inputWrapper.innerHTML = 
    `
    <form id="name-form">
          <label for="name-input"></label>
          <input id="name-input" type="email" />
          <button class="send-btn" type="submit">
            Send
          </button>
    </form>
    `
    submitBtn.addEventListener('click', (event) => {
      // event.preventDefault()
      console.log("test")
      const name = nameInput.value
      setTimeout(() => showMessage(`Your appointment is booked. We will send you a confirmation at ${name}`, 'bot'), 1000) ;
      nameInput.value = ''
  
  })
  }

  const showEmergencies = () => {
    inputWrapper.innerHTML = `
    <button id="bleached">Help! I accidently bleached my hair</button>
    <button id="bald"> I woke up bald!</button>
    <button id="wedding">Need a last minute wedding-do!</button>`
  
    document.getElementById("bleached")
    .addEventListener('click', () => setTimeout(() => showBleachedOptions(), 1000));  //nextQuestion('bleached'));
    document.getElementById("bald")
    .addEventListener('click', () => setTimeout(() => showBaldOptions(), 1000)); 
    document.getElementById("wedding")
    .addEventListener('click', () => setTimeout(() => showWeddingOptions(), 1000)); 
  }

  const showBleachedOptions = () => {
    showMessage("Accidentally bleached my hair!", 'user');
    setTimeout(()=> (showMessage("Oh no! 😱 What can we do for you?", 'bot'), 3000));
    inputWrapper.innerHTML = `
    <select id="select" class="select">
        <option value="" selected disabled>Select your fix</option>
        <option value="Color it back to normal">Color it back to normal</option>
        <option value="Cut it off">Cut it off</option>
    </select>
    `
    // select();
    //const select =
    question++; 
    document.getElementById('select').addEventListener('change', () => setTimeout(() => showMessage(select.value, 'user'), nextQuestion()));
    
 
    // HOW TO EMPTY INPUTWRAPPER?
      
    console.log("question number", question);
  }

  const showBaldOptions = () => {
    showMessage("I woke up bald!", 'user');
    const wig = `<a href=https://www.wig.se/>wig.se</a>`
    setTimeout(showMessage(`Sorry we cant help you 🤷‍♀️. Perhaps you can get help at ${wig}`, 'bot'), 3000);
  }

  const showWeddingOptions = () => {
    showMessage("Need a last minute wedding-do!", 'user');
    setTimeout(() => showMessage(`Oh how wonderful! Which hairdo would like?`, 'bot'), 3000);
    inputWrapper.innerHTML = `
    <button id="long">Long hair</button>
    <button id="short">Short hair</button>`

    question++; 
    document.getElementById("long")
    .addEventListener('click', () => setTimeout(() => showMessage('Long hair it is!', 'user'), nextQuestion(), 1000)); 
    document.getElementById("short")
    .addEventListener('click', () => setTimeout(() => showMessage('Short hair it is!', 'user'), nextQuestion(), 1000));    
    console.log("question number", question);

  }

  const timeSlots = () => {
    showMessage("Please pick a time below", 'bot');
    inputWrapper.innerHTML = `
    <select id="selectTime" class="select">
        <option value="" selected disabled>Select your time</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
        <option value="17:00">17:00</option>
      </select>
      `
      //const select = document.getElementById('selectTime');
      question++;
      document.getElementById('selectTime').addEventListener('change', () => setTimeout(() => showMessage(selectTime.value, 'user'), nextQuestion()));
      console.log("question number", question);
   
  }
  const nextQuestion = () => {
  //   console.log("question number", question);
  if (question === 1) {
    setTimeout(() => timeSlots(), 1000);
  } else if (question === 2) {
   setTimeout(() => getEmail(), 1000)
    }
  }

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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greeting = () => {
  question = 0
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello! What is your hair emergency?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
  showEmergencies();
}

 
// Set up your eventlisteners here

setTimeout(greeting, 1000);