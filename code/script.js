// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const sendBtn = document.getElementById('sendBtn');
const nameForm = document.getElementById('nameForm');
const nameInput =document.getElementById('nameInput')

// If you need any global variables that you can use across different functions, declare them here:
// Declare your functions after this comment
let username // 👈🏼 FATTAR! om du vill använda username i flera funktioner kan du spara det i en global variabel

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
  console.log(nameInput.value) 
  showMessage(nameInput.value, 'user') 
  
  // Save thee username for later
  username = nameInput.value 
//Empty input
  nameInput.value = ''
//Fördröjning till callback
  setTimeout(() => firstAnswer() , 1000)
}

  // Boten svarar med "Hi 'name', what a lovley day for laundry" + ny fråga  
const firstAnswer = () => {
  showMessage(`Hi ${username}, what a lovley day for laundry! ` ,'bot') 
  setTimeout(() => firstQuestion() , 3000)
}

const firstQuestion = () => {
  showMessage ('What kind of laundry will you be doing today?' , 'bot')
}




// Set up your eventlisteners here
// sendBtn.addEventListener('submit', handleNameInput); <== behövs denna?
nameForm.addEventListener('submit', handleNameInput);


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
