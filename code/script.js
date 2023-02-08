// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const sendBtn = document.getElementById('sendBtn'); // 👈🏼 här kan du göra en "förkortning" till sendBtn
const nameForm = document.getElementById('nameForm'); // 👈🏼 här kan du göra en "förkortning" till nameForm
const nameInput =document.getElementById('nameInput')

// If you need any global variables that you can use across different functions, declare them here:
// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log ('User is replyng')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user_bot.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log ('Bot asking question')
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/laundry_bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Chat starting here when bot greets user
const greetUser = () => {
  showMessage("Hi there, what´s your name?", 'bot')
}

//User types in Name and a massage is shown with the users name
const handleNameInput = (event) => {
  event.preventDefault()
  console.log('Här ska vi ta hand om namnet')
  console.log(nameInput.value) // kolla in console om du ser namnet komma igenom
  // vi måste få namnet fårn nameInput.value. men igen måste vi hitta input genom
  // document.getElementById('nameInput') så det kan vi sätta upp högst upp, som en "shortcut"
  showMessage(nameInput.value, 'user') 
// skicka med input value och att det är user som skickar det nameInput.value är en variable så inga fnuttar där. bara fnuttar när det ska vara vanlig text

  nameInput.value = '' // det här är på slutet, för att tömma inputen.

  // Boten svarar med "Hi 'name', what a lovley day for laundry" + ny fråga  
}


// Set up your eventlisteners here
sendBtn.addEventListener('submit', handleNameInput);
// 💡 HÄR VET INTE KODEN VAD sendBtn ÄR. DU MÅSTE GÖRA SOM HÖGST UPP MED chat
// Jag gjorde det åt dig så kan du se hur det ser ut

nameForm.addEventListener('submit', handleNameInput);
// Lyssna till hela form submit. Eftersom man kan använda enter på tangentbordet också. Och inte bara själva kanppen

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
  setTimeout(greetUser, 1000);



  //Enter name and click button
 
  //Storing username for access later

  //What type of laundry will you be washing today?
  //-Dark? White? ........
