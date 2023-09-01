// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const form = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const btnSend = document.getElementById('send-btn')

// If you need any global variables that you can use across different functions, declare them here:



// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("USER MESSAGE")
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
    console.log("BOT MESSAGE")
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

const handleNameInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = nameInput.value;
  showMessage(name, "user");
  nameInput.value = "";

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  setTimeout(() => showPlantQuestion(name), 1000);
};

// Define an array of plant options
const plantOptions = ["🪴", "Orchid", "Fiddle Leaf Fig", "Bromeliad"];

const showPlantQuestion = (name) => {
  // Display the bot's question
  showMessage(`Nice to have you here today ${name}! What kind of plant are you looking for?`, 'bot');

  // Create a new select element
  const select = document.createElement('select');
  select.id = 'plant-options';

  // Create and append options with the plant options to the select element
  plantOptions.forEach((optionText, index) => {
    const option = document.createElement('option');
    option.value = `option${index + 1}`;
    option.text = optionText;
    select.appendChild(option);
  });

  // Replace the name input with the select element
  inputWrapper.innerHTML = '';
  inputWrapper.appendChild(select);

  // Add an event listener to the select element
  select.addEventListener('change', () => {
    const selectedIndex = select.selectedIndex;
    const selectedOption = plantOptions[selectedIndex];

    // You can handle the selected plant option here, for example, by displaying a message
    showMessage(`${selectedOption}`, 'user');

    // After displaying the selected option, show the advice question
    setTimeout(() => showAdviceQuestion(name), 1000);
  });

  // Make sure to scroll to the new message
  chat.scrollTop = chat.scrollHeight;
};


const showAdviceQuestion = () => {
  showMessage("Do you want advice on how to take care of this plant?", 'bot');

  // Create a "Yes" button for advice
  const yesButton = document.createElement('button');
  yesButton.textContent = 'Yes';
  yesButton.id = 'yes-advice-button';

  // Create a "No" button for advice
  const noButton = document.createElement('button');
  noButton.textContent = 'No';
  noButton.id = 'no-advice-button';

  // Replace the selected option message with the "Yes" and "No" buttons for advice
  inputWrapper.innerHTML = '';
  inputWrapper.appendChild(yesButton);
  inputWrapper.appendChild(noButton);

  // Make sure to scroll to the new message
  chat.scrollTop = chat.scrollHeight;
};

// Set up your eventlisteners here

// Add an event listener for the form submission
form.addEventListener('submit', handleNameInput);




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
