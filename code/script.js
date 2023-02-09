// Variables that point to selected DOM elements
const chat = document.getElementById('chat');


// If you need any global variables that you can use across different functions, declare them here:



// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("Message from user");
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `} else if (sender === 'bot') {
    console.log("Message from bot");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p id="message">${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = () => {
  showMessage("Greetings stranger! Are you ready to play?", 'bot');
}



// Set up your eventlisteners here


setTimeout(greetUser, 1000);

//function for userAnswer
const userAnswer = () => {
  let userInput = document.getElementById("user-input").value;
  showMessage(userInput, "user");
  //clear text-field
  document.getElementById('user-input').value=null;
};

//prevents page from reloading
document.getElementById("send").addEventListener("click", function(event){
  event.preventDefault();
});
