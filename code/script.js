// Variables that point to selected DOM elements
const chat = document.getElementById('chat')

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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)

//nameInput.addEventListener('input', handleNameInput);


const handleNameInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = nameInput.value;
  showMessage(name, "user");
  nameInput.value = "";

};


  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
 // setTimeout(() => showFoodOptions(name), 1000);



/*In this code line 74:
We define a foodOptions object to map food categories (Pizza, Sushi, Pasta) to arrays of options.
We check if the user's input matches one of the keys in the foodOptions object.
If it does, we retrieve the corresponding array of food options and display them.
If the input doesn't match any of the keys, we display a message indicating that the food category is not recognized.*/

/*function showFoodOptions(name) {
  // Define a mapping of food categories to options
  const foodOptions = {
    Pizza: ["Margerita", "Napoletana", "Opera"],
    Sushi: ["California", "Philadelphia", "Sashimi"],
    Pasta: ["Bolognese", "Mac n cheese", "Alfredo"]
  };

  // Check if the user's choice is in the mapping
  if (name in foodOptions) {
    const userChoice = foodOptions[name];
    // Display the user's food options
    showMessage(`Here are some ${name} options: ${userChoice.join(", ")}`, "bot");
  } else {
    // Handle the case where the user's choice is not recognized
    showMessage("I'm sorry, I don't have options for that food category.", "bot");
  }
}






