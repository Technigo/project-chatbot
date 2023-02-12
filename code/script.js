// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputwrapper = document.getElementById("input-wrapper");
const nameform = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const submitButton = document.getElementById("send-btn");



// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment
const handleNameInput = (event) => {
  
  event.preventDefault();
  // Store the value in a variable so we can access it after we 
  //   clear it from the input
  const name = nameInput.value;
  showMessage(name, 'user');
  nameInput.value = "";

  // creat if...else to practice
  let botsay="";
  if(name === "Mr.P"){
    
    botsay = `Hi! ${name}! Nice to meet you, Do you have a reservation!`;
    //another way to setTimeout, but I think hard for people to read. so create a variable botsay.
    ////setTimeout(()=>showMessage(`Hi ${name}! You don't need a room card`,"bot"),1000);
  
  }else if(name === "Zlatan"){

    botsay = `Hi ${name}! Nice to meet you, Do you play basketball?`;
   
  }else{

    botsay = `Hi ${name}! Nice to meet you, do you have a room card?`;
   
  };
  setTimeout(() => showMessage(botsay,"bot"), 1000);

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  setTimeout(() => showBookingOptions(name), 1000);

}
// Question 2 from bot, and the user will get option to choose.

const showBookingOptions = () => {
  inputwrapper.innerHTML =
    `<button id="yes" class="yes"> YES </button>
   <button id="no" class="no"> NO </button>`;

    document.getElementById("yes").addEventListener("click", yesbutton);
    document.getElementById("no").addEventListener("click", nobutton);
}

// option answer from user
const yesbutton = (event) => {
  showMessage("Yes, I do!",'user');
  setTimeout(() =>showMessage("Here is your room card, See you next time!",'bot'), 1000); 
}
const nobutton = (event) => {
  showMessage("No, I don't!",'user');
  setTimeout(() =>idOption(), 1000);  
}


// question 3 from bot.
const idOption = () => {
  showMessage("Please choose your valid identity document!", 'bot');
  inputwrapper.innerHTML =
    `
  <form>
    <select class="drop-menu" name="drop-menu" id="drop-menu">
      <option value="id">Id Number</option>
      <option value="passport">Passport Number</option>
      <option value="others">Others</option>
    </select> 
    <button class="doc-btn" id="doc-btn">submit</button>
  </form>
  `;
  const docButton = document.getElementById("doc-btn");
  docButton.addEventListener("click", docSubmitButton);
}

// answer from uers to choose dropdown menu and submit it.
const docSubmitButton = (event) => {
 
  showMessage("Thank you for your booking! GoodBye!", "bot");
  event.preventDefault();

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
    // test: console.log("hi bot is working")
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

// Starts here: Question 1 from bot to greet user.
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
}

// Set up your eventlisteners here 
submitButton.addEventListener("click", handleNameInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);



