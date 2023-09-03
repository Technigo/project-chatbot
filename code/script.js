// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:
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
        <img src="assets/user.jpeg" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("Welcome to our cakeshop!");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}


// Starts here
const greetUser = () => {
  console.log("Hi user!")
  showMessage("Hello there, What's your name?", 'bot')
}

// Set up your eventlisteners here

document.getElementById('name-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = event.target[0].value;

  showMessage(name, 'user');
  showMessage(`Nice to meet you, ${name}! What kind of cake would you like to order?`, 'bot');

  event.target[0].value = "";

  updateInput('cake');
});

const showCakeOptions = (userName) => {
  console.log("Cake options")
  // Send a bot message to the chat
  showMessage(userName, 'user');
  showMessage();

  // Update the input section with the cake options
  updateInput('cake');
}

const updateInput = (step) => {
  const inputWrapper = document.getElementById('input-wrapper');
  let htmlContent = '';

  switch (step) {
      case 'cake':
          htmlContent = `
              <div id="cake-buttons">
                  <button onclick="handleCakeChoice('Cheesecake')">Cheesecake</button>
                  <button onclick="handleCakeChoice('Carrot Cake')">Carrot Cake</button>
                  <button onclick="handleCakeChoice('Strawberry Cake')">Strawberry Cake</button>
              </div>
          `;
          break;

      case 'people':
            htmlContent = `
                <form id="people-form" onsubmit="handlePeopleCount(event)">
                  <input type="number" name="peopleCount" placeholder="Enter number of people" required>
                  <button type="submit">Submit</button>
                </form>
              `;
              break;
        
            case 'confirmOrder':
              htmlContent = `
                <div id="confirm-buttons">
                  <button onclick="handleOrderConfirmation('yes')">Yes</button>
                  <button onclick="handleOrderConfirmation('no')">No</button>
                </div>
              `;
              break;

  }

  inputWrapper.innerHTML = htmlContent;
}

const handleCakeChoice = (cake) => {
  // Display the user's cake choice in the chat
  showMessage(cake, 'user');
  // Continue the conversation based on the user's cake choice
  showMessage(`Great choice! How many people will be eating?`, 'bot');
  // Proceed to ask about the number of people
  updateInput('people');

 }


const handlePeopleCount = (event) => {
  event.preventDefault();
  
  const peopleCount = event.target[0].value;
  
  showMessage(peopleCount, 'user');
  showMessage(`Thank you! That will be for ${peopleCount} people. Would you like to confirm your order?`, 'bot');
  
  updateInput('confirmOrder');

}

const handleOrderConfirmation = (confirmation) => {
  if (confirmation === 'yes') {
    showMessage('Yes', 'user');
    showMessage('Thank you for your order! We are processing it now.', 'bot');
    inputWrapper.innerHTML = '';
  } else {
    showMessage('No', 'user');
    showMessage('No worries! Let us know if you change your mind.', 'bot');
    inputWrapper.innerHTML = '';
  }


}


setTimeout(greetUser, 1000);







// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
