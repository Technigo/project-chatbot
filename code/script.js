// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const sendButton = document.getElementById("send-btn");

const chatInput = document.getElementById("chat-input");

// If you need any global variables that you can use across different functions, declare them here:
let questionCount = 0;
let departureCity ='';
let arrivalCity ='';
let travelDate = '';
let numberOfTickets ='';
let userName ='';

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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUserAndAskDepartureCity = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, Would you like to book a train ticket?", 'bot')
  
  chat.innerHTML += `
   <button id="yes-btn" class="inChatButton">Yes please</button>
   <button id="no-btn" class="inChatButton">No thanks</button>
  ` 
  document.getElementById('yes-btn').addEventListener('click',() => {
    showMessage('Yes please.', 'user')
    setTimeout(() => showMessage('Great! What is your city of departure?', 'bot'), 1000);
    //questionCount++;   
    //console.log("greetUser",questionCount);
  });

  document.getElementById('no-btn').addEventListener('click',() => {
    showMessage('No, thank you.', 'user')
    setTimeout(() => showMessage('Alright, have a good day then!', 'bot'), 1000);    
  });
  
  
  console.log(questionCount);
}

//Function to move to next question
const nextQuestion = () => {
  questionCount++;
  if(questionCount == 1){
    setTimeout (() => displayDepartureCityAndAskArrivalCity(), 1000);
  }
  
  else if(questionCount == 2){
    setTimeout (() => displayArrivalCity(), 1000);
  }

  else if(questionCount == 3){
    setTimeout (() => displayDatePickerandAskTickets(), 1000);
  }
  
  else if(questionCount == 4){
    setTimeout (() => displayNumberOfTicketsAndAskName(), 1000);
  }

  else if(questionCount == 5){
    setTimeout (() => displayName(), 1000);    
  }

  else if(questionCount == 6){
    setTimeout (() => ticketSummaryAndThankYouMessage(), 1000);
  }

}

//Departure Function
const displayDepartureCityAndAskArrivalCity = () =>{
  departureCity = chatInput.value;
  showMessage(`${departureCity}`,'user')
  chatInput.value='';
  showMessage('Nice! Where are you headed?','bot');
}

//Arrival Function
const displayArrivalCity = () =>{
  arrivalCity = chatInput.value;
  showMessage(`${arrivalCity}`,'user')
  chatInput.value='';
  setTimeout(() => 
  showMessage(`Alright. So ${departureCity} to ${arrivalCity}.`,'bot'),500);
  nextQuestion();
} 

//Date Function
const displayDatePickerandAskTickets = () => {
  showMessage('When would you like to travel?', 'bot')  
  chat.innerHTML += `<input id = "date-picker" class = "date-picker" type="date"/>`

    document.getElementById('date-picker').addEventListener('input',() => {
      travelDate  = document.getElementById('date-picker').value;
      
      setTimeout(() =>showMessage(`${travelDate}`,'user'),1000);      
      console.log(travelDate);
      setTimeout(() =>showMessage(`How many tickets would you like?`,'bot'),2000);      
      
    });
 
  chat.scrollTop = chat.scrollHeight;   
}

//Number of tickets Function
const displayNumberOfTicketsAndAskName = () =>{    
  numberOfTickets = chatInput.value;
  showMessage(`${numberOfTickets}`, 'user');
  chatInput.value='';
  setTimeout(() => showMessage(`In whose name shall I make the booking?`, 'bot'),500);     
}

//NameInput function
const displayName = () => {
  userName = chatInput.value;
  showMessage(`${userName}`, 'user');  
  chatInput.value ='';

  setTimeout(nextQuestion, 1000);
}

//Summary function
const ticketSummaryAndThankYouMessage = () => {
  showMessage(`You have booked ${numberOfTickets} tickets from ${departureCity} to ${arrivalCity} on ${travelDate}`, 'bot');
  setTimeout(() => showMessage(`Thank you for booking with us, ${userName}!`, 'bot'),1000);
}

//OnClick function of Send button
const onSendClick = (event) => {
  event.preventDefault();   
  nextQuestion();
} 

// Set up your eventlisteners here
sendButton.addEventListener("click", onSendClick);

//greetUser message appears 1 second after page load
setTimeout(greetUserAndAskDepartureCity, 1000);
