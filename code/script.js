// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const noButton = document.getElementById("no-btn");
const inputWrapper = document.getElementById('input-wrapper');
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-btn");

// If you need any global variables that you can use across different functions, declare them here:
let questionCount = 0;
let departureCity ='';
let arrivalCity ='';
let travelDate = '';
let tickets ='';

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
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, Would you like to book a train ticket?", 'bot')
  
  chat.innerHTML += `
   <button id="yes-btn" class="inChatButton">Yes please</button>
   <button id="no-btn" class="inChatButton">No thanks</button>
  ` 
  document.getElementById('yes-btn').addEventListener('click',() => {
    showMessage('Yes please.', 'user')
    setTimeout(() => showMessage('Great! What is your city of departure?', 'bot'), 1000);
    questionCount++;
    console.log("greetUser",questionCount);
  })

  document.getElementById('no-btn').addEventListener('click',() => {
    showMessage('No, thank you.', 'user')
    setTimeout(() => showMessage('Alright, have a good day then!', 'bot'), 1000);    
})

console.log(questionCount);
}

const handleDepartureCity = () =>{
  departureCity = chatInput.value;
  showMessage(`${departureCity}`,'user')
  chatInput.value='';
  setTimeout(() => showMessage('Nice! And where are you headed?','bot'),1000);
  
  console.log(departureCity);
}

const handleArrivalCity = () =>{
  arrivalCity = chatInput.value;
  showMessage(`${arrivalCity}`,'user')
  chatInput.value='';
  setTimeout(() => 
  showMessage(`Alright. So ${departureCity} to ${arrivalCity}.`,'bot'),500);
  
  setTimeout(printTravelDate, 1500);
} 

const printTravelDate = () => {
  showMessage('When would you like to travel?', 'bot')  
  chat.innerHTML += `<input id = "date-picker" class = "date-picker" type="date"/>`

    document.getElementById('date-picker').addEventListener('input',() => {
      travelDate  = document.getElementById('date-picker').value;
      setTimeout(() =>showMessage(`${travelDate}`,'user'),1000);      
      console.log(travelDate);
      setTimeout(() =>showMessage(`How many tickets would you like?`,'bot'),2000);  
      
      setTimeout(nextQuestion, 2500);
    });
 
  chat.scrollTop = chat.scrollHeight;   
}

const handleTicketNumbers = () =>{
    
    tickets = chatInput.value;
    showMessage(`${tickets}`, 'user');
    chatInput.value='';

    setTimeout(purchaseSummary, 2000);
  
}

const purchaseSummary = () => {
  showMessage(`You have booked ${tickets} tickets from ${departureCity} to ${arrivalCity} on ${travelDate}`, 'bot');
  showMessage(`In whose name shall I make this booking?`, 'bot');
  
  setTimeout(nextQuestion, 2500);
}

const handleNameInput = () => {
  const name = chatInput.value;
  showMessage(`${name}`, 'user');
  setTimeout(() => showMessage(`Thank you for booking with us, ${name}!`, 'bot'),1000);
  chatInput.value ='';
}

const nextQuestion = (event) => {
  
  if(questionCount == 1){
    event.preventDefault();
    handleDepartureCity();
    questionCount++;
    console.log("departureCity",questionCount);
  }
  
  else if(questionCount == 2){
    event.preventDefault();
    handleArrivalCity();
    questionCount++;
    console.log("after arrivalCity",questionCount);  
  }
  
  else if(questionCount == 3){
    event.preventDefault();
    handleTicketNumbers();
    questionCount++;
    console.log("after ticketnumbers",questionCount);
  }

  else if(questionCount == 4){
    event.preventDefault();
    handleNameInput();
    questionCount++;
    console.log("after nameInput",questionCount);
  }
  // }
  // Store the value in a variable so we can access it after we clear it from the input
  // const inputstring = chatInput.value;
  // showMessage(`You age is ${inputstring}`, 'user'); 

  // const age = parseInt(inputstring);
  // if(age > 18)
  //   showMessage("You are an adult!", 'bot');
  // else
  // showMessage("You are a child!", 'bot');
  // chatInput.value = ''

  // setTimeout(() => {

  //   document.getElementById('date-picker').addEventListener('click',() => {
  //     const travelDate  = document.getElementById('date-picker').value;
  //     setTimeout(() =>showMessage(`${travelDate}`,'user'),2500);
  //     console.log(travelDate);
  //   });
  // });
   
}


// Set up your eventlisteners here

sendButton.addEventListener("click", nextQuestion);


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
