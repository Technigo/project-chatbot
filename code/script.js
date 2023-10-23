// DOM: Variables that point to selected DOM (HTML) elements:
// Added a link to the HTML elements - still not grasphing how this really works and have to try a while before I understand what to link where. It is not logical to me when to use what, so I spend a lot of time or look to how others solved it
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementsByClassName('send-btn');


// If you need any global variables that you can use across different functions, declare them here:

//IDENTIFY USER VS SENDER
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log(sender, message);
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
    console.log(sender, message);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // At the start of this project I did not understand the console.log, but now it is my best friend for logging and debugging

  // This makes the chat scroll to the last message 
  chat.scrollTop = chat.scrollHeight
}

// BOT STARTS THE CHAT HERE
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello traveller! What's your name?", 'bot')
}
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()

// Function (message) Delay: setTimeout(functionName, timeToWaitInMilliSeconds)
setTimeout(greetUser, 1000)


// Eventlisteners added underneath

//REPLY FROM USER
//I found the next part hard - I tried many combinations of the example in the read.me instructions but no luck. I found a thread about this topic in slack, so I did the same, which included the userName = nameInput.value part within this function. Not sure why this works and other things I tried do not.
// Also not sure how to dealy the message that comes from the user should I want to do so - tried many combinations.

let userName = ""

const handleNameInput = (event) => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showMessage(`Hello! My name is ${userName}`, "user");
  // After 1 second, show the next question by invoking the next function. Passing the name into it to have access to the user's name in the next question from the bot.
  setTimeout(() => reply1(userName), 1000)
  setTimeout(() => reply2(), 2500)
}

nameForm.addEventListener("submit", handleNameInput)

// REPLY FROM BOT 
//Two messages that show up with a little time apart, delay is defined in the reply from user function above
// User is asked to select a button as part of the second message
//REPLY1 FROM BOT
function reply1() {
  showMessage(`Welcome, ${userName}! How amazing that you are interested in an adventure with us!`, 'bot')
}

//REPLY2 FROM BOT
function reply2() {
  showMessage(`Which of our activities are you interested in booking?`, 'bot')
  //Link to HTML - ID specification (link to later) - name of button
  inputWrapper.innerHTML = `
    <button class="send-btn" id="surfing">Surfing</button>
    <button class="send-btn" id="skiing">Skiing</button>
    <button class="send-btn" id="sailing">Sailing</button>
    <button class="send-btn" id="yoga">Yoga</button>
  `
  // A confirmation message shows up when the user makes their selection - had trouble with this and had to look to some other codes. Dont really have the hang of params, events, callbacks, arguments etc, but by  adding to and removing from this code, I understood how it works, tried to break it up with comments underneath
  //Link to HTML - all
  const activityButtons = inputWrapper.querySelectorAll('.send-btn')
  //Funtion for.each to perform the action for each button when clicked on and connect it to the right id above
  activityButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedActivity = event.target.id
      //console.log which button was chosen
      console.log(selectedActivity)
      //message to be displayed when a button is selected and timeout for the next function
      showMessage(`Wonderful! You selected ${selectedActivity}. Lets dive in !`, 'bot')
      inputWrapper.innerHTML = ''; // Clear buttons
      //I first added inputWrapper.remove() to remove the buttons between the messages, but it makes it impossible to get new buttons later - took me a while to figure out that this was the issue.
      setTimeout(() => handleActivityChoice(selectedActivity), 1000)
    })
  })
}

//REPLY3
//NEXT IS FOR THE USER TO CHOOSE THE PLACE FOR THE ACTIVITY
// I kept looking for more efficient ways to make buttons than listing them up in long codes. I found someone else used the method I have used in my project, and found it to be short and effecient, so I tried to learn how to use it.

//declared function, added conditionals, added message, added options:

function handleActivityChoice(choice) {
  inputWrapper.innerHTML = ''

  if (choice === 'surfing') {
    showMessage(`Choose your preferred beaches to hit the waves!`, 'bot')
    const surfingPlaces = ['Portugal - €500', 'South Africa - €1000', 'Australia - €1500']
    showOptions(surfingPlaces)
  } else if (choice === 'skiing') {
    showMessage(`Where would you like to hit the slopes?`, 'bot')
    const skiingOptions = ['Austria - €500', 'Norway - €750', 'Canada - €1200']
    showOptions(skiingOptions)
  } else if (choice === 'sailing') {
    showMessage(`Where would you most want to get lost at sea?`, 'bot')
    const sailingOptions = ['Greece - €350', 'Kroatia - €600', 'the Carribbean - €1000']
    showOptions(sailingOptions)
  } else if (choice === 'yoga') {
    showMessage(`What is your favourite place to be a little zen?`, 'bot')
    const yogaOptions = ['Portugal - €300', 'Indonesia - €750', 'India - €1000']
    showOptions(yogaOptions)
  }
}

// declare button funcions
function showOptions(options) {
  inputWrapper.innerHTML = '';

  options.forEach(option => {
    const button = document.createElement('button')
    button.className = 'send-btn'
    button.textContent = option
    //eventlistender to receive the user response
    button.addEventListener('click', () => {
      console.log(option)
      showMessage(`You have selected an adventure to ${option}.`, 'bot')
      //indicate next bot reply
      setTimeout(userLevel, 1000)
    })
    //buttons disappear without the following - not sure why and why it has to be behind the curlybrackets after console.log. Did not have the time to try to move it around a lot.
    inputWrapper.appendChild(button)
  })
}

//BOT REPLY4 
//Message after the user has chosen location and price, in order to determine the users level - by buttons
function userLevel() {
  showMessage(`Amazing! Now please let us know which level you are at, so we can adjust the activities for you!`, 'bot');
  inputWrapper.innerHTML = '' // Clear buttons

  //ID in and name of new buttons
  const levelButtons = document.createElement('div')
  levelButtons.innerHTML = `
    <button class="send-btn" id="beginner">Beginner</button>
    <button class="send-btn" id="intermediate">Intermediate</button>
    <button class="send-btn" id="advanced">Advanced</button>
  `

  inputWrapper.appendChild(levelButtons)

  //Button functions declared
  const levelButtonsElements = levelButtons.querySelectorAll('.send-btn')
  levelButtonsElements.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedLevel = event.target.id
      console.log(selectedLevel)
      //Bot confirms choice
      showMessage(`You have selected ${selectedLevel} level. Our professional instructors will tailor the program for you!`, 'bot')
      inputWrapper.innerHTML = '' // Clear buttons
      //Time next bot reply
      setTimeout(userConfrim, 1000)
    })
  })
}

//BOT REPLY5
//Message to have the user confirm booking or cancel 
function userConfrim() {
  showMessage(`Almost there! Please confirm your booking by selecting the "Confirm Booking" button.`, 'bot');
  inputWrapper.innerHTML = '' // Clear buttons

  //ID in and name of new buttons
  const confirmButton = document.createElement('div')
  confirmButton.innerHTML = `
  <button class="send-btn" id="confirm">Confirm Booking</button>
  <button class="send-btn" id="cancel">Cancel Booking</button>
`
  //buttons disappear without these - as mentioned above, I dont understand what this does - why child?:
  inputWrapper.appendChild(confirmButton)

  //Button functions declared 
  const confirmButtonElements = confirmButton.querySelectorAll('.send-btn')
  confirmButtonElements.forEach(button => {
    button.addEventListener('click', (event) => {
      const confirmationChoice = event.target.id
      console.log(confirmationChoice)
      inputWrapper.innerHTML = '' // Clear buttons

      //Conditional statement based on the users button-choice - end of bot
      if (confirmationChoice === 'confirm') {
        showMessage(`Congratulations on making the best decision of your life! Now hurry packing, we leave tomorrow!`, 'bot')
      } else if (confirmationChoice === 'cancel') {
        showMessage(`Not ready to book yet? We understand! Please do not hesitate to contact us with any qestions! We hope to see you again soon.`, 'bot')
      }
    })
  })
}


