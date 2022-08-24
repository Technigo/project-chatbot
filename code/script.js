// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById('room-form');
const roomInput = document.getElementById('room-input'); //user writes their room
const sendBtn = document.getElementById('send-btn');
const collapse = document.getElementsByClassName("main-collapse");
const wakeUpInput = document.getElementById('wakeUp-input');
const wakeUpForm = document.getElementById('wakeUp-form');

  // added variables pointing to html Ids, changed it to room numbers instad of name //

  
// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment


  // This function will add a chat bubble in the correct place based on who the sender is
  for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function(){
        this.classList.toggle("active");

        let content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/guest.svg" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log('bot-message') //added console log
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/hotel-svgrepo-com.svg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
    // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Conversations starts here

// Question 1 - What is your room number?

const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello, what is your room number?", 'bot'); //changed message/S//
};

// Answer with room number from user 

const handleFormInput = (event) => { // at submit this function will be invoked
  event.preventDefault() // prevents website refresh at submit
  const room = roomInput.value // input value will be stored in the const name
  showMessage(`My room number is ${room}`, 'user') // users answer 
  roomInput.value = '' // clearing room input setting it to an empty string
  setTimeout(() => helpSelection(room), 1000) // passing the arguments to next function with 1sec delay
}

// Question 2 - What do you need help with today?

const helpSelection = () => {
  showMessage(`Hello "room", what can I help you with today?`, 'bot');
  inputWrapper.innerHTML = `
<<<<<<< HEAD
  <button id="amenities" type="sbumit" class="chat-btn">Amenities </button>
  <button id="room-service" type="submit" class="chat-btn">Rooom service </button>
  <button id="wake-up-call" type="submit" class="chat-btn">Wake-up call </button>
=======
  <button id="amenities" type="sbumit">Amenities </button>
  <button id="room-service" type="submit">Rooom service </button>
  <button id="wake-up-call" type="submit">Wake-up call </button>
>>>>>>> 3c8259872d112946eb8aadc73d78a8c0454f9b05
  `
  document.getElementById('amenities').addEventListener('click',() => selectionAnswer ('amenities'));
  document.getElementById('room-service').addEventListener('click',() => selectionAnswer ('room-service'));
  document.getElementById('wake-up-call').addEventListener('click',() => selectionAnswer ('wake-up-call'));
}

// functions for what the guest chooses

const selectionAnswer = (selection) => {

  if (selection === 'amenities') {
    showMessage(`I need amenities, please`, 'user')
    setTimeout(() => showMessage(`Sure, what do you need?`, 'bot'),1000);
    inputWrapper.innerHTML = `
<<<<<<< HEAD
    <button id="toothbrush" type="submit" class="chat-btn">Toothbrush & paste </button>
    <button id="shampoo" type="submit" class="chat-btn">Schampoo & Conditioner </button>
    <button id="toiletrykit" type="submit" class="chat-btn">Toiletry Kit </button>
    <button id="shavingkit" type="submit" class="chat-btn">Shaving Kit </button>
=======
    <button id="toothbrush" type="submit">Toothbrush & paste </button>
    <button id="shampoo" type="submit">Schampoo & Conditioner </button>
    <button id="toiletrykit" type="submit">Toiletry Kit </button>
    <button id="shavingkit" type="submit">Shaving Kit </button>
>>>>>>> 3c8259872d112946eb8aadc73d78a8c0454f9b05
    `
    document.getElementById('toothbrush').addEventListener('click',() => 
      setTimeout(() => showMessage(`I need some toothbrush and toothpaste`, 'user')), 1000);
    document.getElementById('shampoo').addEventListener('click',() =>
      setTimeout(() => showMessage(`I need some shampoo and conditioner`, 'user')),1000);
    document.getElementById('toiletrykit').addEventListener('click',() => 
      setTimeout(() => showMessage(`I need a toiletry kit`, 'user')), 1000);
    document.getElementById('shavingkit').addEventListener('click',() => 
      setTimeout(() => showMessage(`I need a shaving kit`, 'user')), 1000);

  }

  else if (selection === 'room-service') {
    showMessage(`I need food, please`, 'user')
    setTimeout(() => showMessage(`Of course, what are you in the mood for?`, 'bot'),1000);
    inputWrapper.innerHTML = `
<<<<<<< HEAD
    <button id="pasta" type="submit" class="chat-btn">Pasta Carbonara </button>
    <button id="sallad" type="submit" class="chat-btn">Ceaser Salad</button>
    <button id="tomatoesoup" type="submit" class="chat-btn">Tomatoe Soup </button>
=======
    <button id="pasta" type="submit">Pasta Carbonara </button>
    <button id="sallad" type="submit">Ceaser Salad</button>
    <button id="tomatoesoup" type="submit">Tomatoe Soup </button>
>>>>>>> 3c8259872d112946eb8aadc73d78a8c0454f9b05
     `
    document.getElementById('pasta').addEventListener('click', () =>
    setTimeout(() => showMessage(`I would love some Pasta Carbonara`, 'user')), 1000);
    document.getElementById('sallad').addEventListener('click', () =>
    setTimeout(() => showMessage(`I could eat a Ceaser Salad`, 'user')), 1000);
    document.getElementById('tomatoesoup').addEventListener('click', () =>
    setTimeout(() => showMessage(`I crave some Tomatoe Soup`, 'user')), 1000);
  }

  else  {
    showMessage(`I need a wake-up-call.`, 'user');
     
    setTimeout(() => showMessage(`Sure, at what time?`, 'bot'),1000);
    inputWrapper.innerHTML = `
<<<<<<< HEAD
        <form id="wakeUp-form"> 
          <input id="wakeUpInput" type="text" placeholder="wake-up time.."/>  
          <button id="send-btn" class="send-btn" type="submit"> 
            Send
          </button>
        </form>
       `
    const handleWakeUpInput = (event) => { // at submit this function will be invoked
      event.preventDefault() // prevents website refresh at submit
      const wakeUp = wakeUp.value // input value will be stored in the const name
      showMessage(`Wake me up at ${wakeUp}`, 'user') // users answer 
      roomInput.value = '' // clearing room input setting it to an empty string
      setTimeout(() => goodbye, 1000) // passing the arguments to next function with 1sec delay
    }
   
=======
    <button id="6" type="sbumit">06.00 </button>
    <button id="7" type="submit">07.00 </button>
    <button id="8" type="submit">08.00 </button>
   `
   document.getElementById('6').addEventListener('click', () => 
   setTimeout(() => showMessage(`I need to wake up at 06.00, please`, 'user')), 1000);
   document.getElementById('7').addEventListener('click', () => 
   setTimeout(() => showMessage(`I need to wake up at 07.00, please`, 'user')), 1000);
   document.getElementById('8').addEventListener('click', () => 
   setTimeout(() => showMessage(`I need to wake up at 08.00, please`, 'user')), 1000);

>>>>>>> 3c8259872d112946eb8aadc73d78a8c0454f9b05
  }

}

// Thank you message and asking if anything else is needed?

const goodbye = () => {
showMessage('We will take care of that for you right away. Do you need anything else?', 'bot')
inputWrapper.innerHTML = `
  <button id="yes" type="sbumit" class="chat-btn">Yes, please </button>;
  <button id="no" type="submit" class="chat-btn">No, thank you</button>;
  `
document.getElementById('yes').addEventListener('click',() => goodbyeAnswer ('yes'));
document.getElementById('no').addEventListener('click',() => goodbyeAnswer ('no'));

}

//if (goodbyeAnswer === 'yes') {
  //showMessage('I need some more..', 'user')
//}

//else {
  //showMessage('Ok. Have a nice day', 'bot')
//}
//}



// Set up your eventlisteners here

form.addEventListener('submit', handleFormInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 600);