// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const chatInput = document.getElementById("chat-input");
const inputWrapper = document.getElementById('input-wrapper');
const sendButton = document.getElementById("send-btn");
const chatForm = document.getElementById("chat-form");

// If you need any global variables that you can use across different functions, declare them here:
let questionCount = 0;
let departureCity ='';
let arrivalCity ='';
let travelDate = '';
let numberOfTickets ='';
let userName ='';
let botAlertSound = new Audio("assets/bot-beep.mp3");
let userAlertSound = new Audio("assets/user-beep.mp3");


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-logo-black.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/st-logo.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

const disableChatInputAndSendButton = () => {
  chatInput.disabled = true;
  sendButton.disabled = true;
}

const enableChatInputAndSendButton = () => {
  chatInput.disabled = false;
  sendButton.disabled = false;
}

const userResponse = (message) => {
  showMessage(message, 'user');
  userAlertSound.play();
}

const botResponse = (message, disable = false) => {
  showMessage(message, 'bot');
  
  if(disable == false){
    botAlertSound.play();
  }
}

// Starts here: Greet User when page loads 
const greetUserAndAskDepartureCity = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  disableChatInputAndSendButton();  
  botResponse("Hello there, Would you like to book a train ticket?", true);
  
  chat.innerHTML += `
   <button id="yes-btn" class="inChatButton">Yes please</button>
   <button id="no-btn" class="inChatButton">No thanks</button>
  ` 
  document.getElementById('yes-btn').addEventListener('click',() => {
    userResponse('Yes Please.')
    setTimeout(() => botResponse('Great! What is your city of departure?'), 1000);
    enableChatInputAndSendButton();
  });

  document.getElementById('no-btn').addEventListener('click',() => {
    userResponse('No, thank you.');
    setTimeout(() => botResponse('Alright, have a good day then!'), 1000);    
  });

  chat.scrollTop = chat.scrollHeight;
  
}

//Function to move to next step of the chat
const nextStep = () => {
  questionCount++;
  if(questionCount === 1){
    setTimeout (() => displayDepartureCityAndAskArrivalCity(), 1000);
  }
  
  else if(questionCount === 2){
    setTimeout (() => displayArrivalCity(), 1000);
  }

  else if(questionCount === 3){
    setTimeout (() => displayDatePickerandAskTickets(), 1000);
  }
  
  else if(questionCount === 4){
    setTimeout (() => displayNumberOfTicketsAndAskName(), 1000);
  }

  else if(questionCount === 5){
    setTimeout (() => displayName(), 1000);    
  }

  else if(questionCount === 6){
    setTimeout (() => ticketSummary(), 1000);
  }
  else if(questionCount === 7){
    setTimeout (() => confirmOrRestartBooking(), 1000);
  }
 
 
}

//Departure Function
const displayDepartureCityAndAskArrivalCity = () =>{
  departureCity = chatInput.value;
  userResponse(`${departureCity}`);
  chatInput.value='';
  setTimeout(() =>botResponse('Nice! Where are you headed?'),1000);
}

//Arrival Function
const displayArrivalCity = () =>{
  arrivalCity = chatInput.value;
  userResponse(`${arrivalCity}`);
  chatInput.value='';
  setTimeout(() => 
  botResponse(`Alright. So ${departureCity} to ${arrivalCity}.`),1000);
  nextStep();
} 

//Date Function
const displayDatePickerandAskTickets = () => {
  setTimeout(() => botResponse('When would you like to travel?'),1000); 
  disableChatInputAndSendButton();
  setTimeout(() => {
    chat.innerHTML += `<input id = "date-picker" class = "date-picker" type="date"/>`
    document.getElementById('date-picker').addEventListener('input',() => {
      travelDate  = document.getElementById('date-picker').value;
      setTimeout(() =>userResponse(`${travelDate}`),1000);      
      setTimeout(() =>botResponse(`How many tickets would you like?`),2000);
      enableChatInputAndSendButton(); 
    });
    chat.scrollTop = chat.scrollHeight; 
  },2000);
}

//Number of tickets Function
const displayNumberOfTicketsAndAskName = () =>{    
  numberOfTickets = Number.parseInt(chatInput.value);
  if(Number.isNaN(numberOfTickets)) {
    questionCount--;
    chatInput.value='';
    botResponse(`Please enter a valid number.`);
  }
  else{
    userResponse(`${numberOfTickets}`);
    chatInput.value='';
    setTimeout(() => botResponse(`Let me make a note of that.`),500); 
    setTimeout(() => botResponse(`And in whose name shall I make the booking?`),2000); 
  }  
}

//NameInput function
const displayName = () => {
  userName = chatInput.value;
  userResponse(`${userName}`);  
  chatInput.value ='';
  nextStep();
}

//Summary function
const ticketSummary = () => {
  botResponse(`You have booked ${numberOfTickets} tickets from ${departureCity} to ${arrivalCity} on ${travelDate}`);
  disableChatInputAndSendButton();
  travelDate.value = '';  
  nextStep();
}

//Confirm Booking function
const confirmOrRestartBooking = () => {
  botResponse(`Please confirm or book another journey`);

  chat.innerHTML += `
  <button id="restart-btn" class="inChatButton">Book a Ticket</button>
  <button id="confirm-btn" class="inChatButton">Confirm Booking</button>  
 ` 
 document.getElementById('restart-btn').addEventListener('click',() => {
  userResponse(`I'd like to make another booking.`);
  setTimeout(() => {
    document.location.reload();
  }, 3000);
})
 
 document.getElementById('confirm-btn').addEventListener('click',() => {
   userResponse('Confirm Booking')
   setTimeout(() => botResponse(`Thank you for booking with us, ${userName}!`),1000);
   setTimeout(() => botResponse(`Feel free to <a href="mailto:support@stockholmtrains.se"><strong> contact us</strong></a> for any inquiries.`),2000);
 })

 chat.scrollTop = chat.scrollHeight;
}


//OnClick function of Send button
const onFormSubmit = (event) => {
  event.preventDefault();    
  nextStep();
} 

// Set up your eventlisteners here
chatForm.addEventListener("submit", onFormSubmit);

//greetUser message appears 1 second after page load
setTimeout(greetUserAndAskDepartureCity, 1000);
