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
const plantOptions = ["🪴", "Orchid", "Monstera", "Echeveria"];

const showPlantQuestion = (name) => {
  // Display the bot's question
  showMessage(`Nice to have you here today ${name}! What kind of plant do you need help with?`, 'bot');

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

    // After displaying the selected option, show the facts question
    setTimeout(() => showFactsQuestion(selectedOption), 1000); // Add this line
  });

  // Make sure to scroll to the new message
  chat.scrollTop = chat.scrollHeight;
};


//Show some facts depending on the users choice
const showFactsQuestion = (selectedOption) => {
  // Display the bot's question with "Yes" and "No" buttons
  showMessage(`Would you like to hear some facts about ${selectedOption}?`, 'bot');

  // Create "Yes" and "No" buttons
  const yesButton = document.createElement('button');
  yesButton.textContent = 'Yes';
  yesButton.id = 'yes-facts-button';

  const noButton = document.createElement('button');
  noButton.textContent = 'No';
  noButton.id = 'no-facts-button';

  // Add event listeners to the buttons
  yesButton.addEventListener('click', () => handleYesFactsButtonClick(selectedOption));
  noButton.addEventListener('click', () => handleNoButtonClick());

  // Replace the input wrapper content with the "Yes" and "No" buttons
  inputWrapper.innerHTML = '';
  inputWrapper.appendChild(yesButton);
  inputWrapper.appendChild(noButton);

  setTimeout(1000)

  // Make sure to scroll to the new message
  chat.scrollTop = chat.scrollHeight;
};

const showAdviceQuestion = (selectedOption) => {
  // Display the bot's question with "Yes" and "No" buttons
  showMessage(`Would you like to hear some care tips for ${selectedOption}?`, 'bot');

  // Create "Yes" and "No" buttons
  const yesButton = document.createElement('button');
  yesButton.textContent = 'Yes';
  yesButton.id = 'yes-advice-button';

  const noButton = document.createElement('button');
  noButton.textContent = 'No';
  noButton.id = 'no-advice-button';

  // Add event listeners to the buttons
  yesButton.addEventListener('click', () => handleYesAdviceButtonClick(selectedOption));
  noButton.addEventListener('click', () => handleNoButtonClick());

  // Replace the input wrapper content with the "Yes" and "No" buttons
  inputWrapper.innerHTML = '';
  inputWrapper.appendChild(yesButton);
  inputWrapper.appendChild(noButton);

  // Make sure to scroll to the new message
  chat.scrollTop = chat.scrollHeight;
};

const handleYesFactsButtonClick = (selectedOption) => {
  // Display the user's response in a user bubble
  const userResponse = 'Yes';
  showMessage(userResponse, 'user');

  // Display advice based on the selected plant option
  if (selectedOption === "Orchid") {
    showMessage("Did you know that Orchids are one of the largest families of flowering plants, with over 25,000 documented species? They have a unique pollination method where some orchids mimic the appearance and scent of female insects to attract pollinators. Cool right?", 'bot');
  } else if (selectedOption === "Monstera") {
    showMessage(`Did you know that Monstera plants are famous for their distinctive split leaves, earning them the nickname "Swiss Cheese Plant." These splits, or fenestrations, are thought to help the plant in its natural habitat by allowing wind and rain to pass through while reducing the risk of damage during storms. Aren't they intelligent?`, 'bot');
  } else if (selectedOption === "Echeveria") {
    showMessage("Did you know that Echeverias are known for their striking rosette-shaped foliage and belong to the succulent family? Another fun fact is that some varieties can change color in response to sunlight, temperature, and stress, making them quite fascinating to observe.", 'bot');
  }

  // Create "Yes" and "No" buttons
  const yesAnswerButton = document.createElement('button');
  yesAnswerButton.textContent = 'Yes';
  yesAnswerButton.id = 'yes-answer-button';

  const noButton = document.createElement('button');
  noButton.textContent = 'No';
  noButton.id = 'no-advice-button';

  // Add event listeners to the buttons
  yesAnswerButton.addEventListener('click', () => handleYesAnswerButtonClick(selectedOption));
  noButton.addEventListener('click', () => handleNoButtonClick());

  // Replace the input wrapper content with the "Yes" and "No" buttons
  inputWrapper.innerHTML = '';
  inputWrapper.appendChild(yesAnswerButton);
  inputWrapper.appendChild(noButton);
  // Make sure to scroll to the new message
  chat.scrollTop = chat.scrollHeight;
};


const handleYesAnswerButtonClick = (selectedOption) => {
  // Display the user's response in a user bubble
  const userResponse = "Yes";
  showMessage(userResponse, 'user');
  
  // Call the function to show advice based on the selected plant option
  showAdviceQuestion(selectedOption);
};

const handleYesAdviceButtonClick = (selectedOption) => {
  // Display the user's response in a user bubble
  const userResponse = 'Yes';
  showMessage(userResponse, 'user');

  // Display advice based on the selected plant option
  if (selectedOption === "Orchid") {
    showMessage("They are amazing plants, but they need some extra lovin! Here are some tips on how you should take care of them: Place in bright, indirect light and water when the potting mix feels dry to the touch. Mist the leaves occasionally for humidity.", 'bot');
  } else if (selectedOption === "Monstera") {
    showMessage("They are awesome plants! This is what they need: Keep in bright, indirect light and allow the soil to dry moderately between waterings. Clean the leaves regularly to prevent dust buildup.", 'bot');
  } else if (selectedOption === "Echeveria") {
    showMessage("Fantastic right?! Here are some cool tips of how to take care of them: Provide well-draining soil and plenty of sunlight. Water sparingly, allowing the soil to dry out between watering.", 'bot');
  }

  // Create a "Thank you" button
  const thankYouButton = document.createElement('button');
  thankYouButton.textContent = 'Thank you';
  thankYouButton.id = 'thank-you-button';

  // Add an event listener to the "Thank you" button to end the chat
  thankYouButton.addEventListener('click', () => handleThankYouButtonClick());

  // Replace the input wrapper content with the "Thank you" button
  inputWrapper.innerHTML = '';
  inputWrapper.appendChild(thankYouButton);

  // Make sure to scroll to the new message
  chat.scrollTop = chat.scrollHeight;
};

const handleThankYouButtonClick = () => {
  // Display the user's response in a user bubble
  const userResponse = "Thank you";
  showMessage(userResponse, 'user');

  // Display the bot's response
  showMessage("You're welcome! Feel free to come back anytime you have more questions. Have a great day!", 'bot');

  // Replace the input wrapper content with null
  inputWrapper.innerHTML = '';

  // After a brief delay, reset the chat from the beginning
  setTimeout(() => resetChat(), 4000);
};


const handleNoButtonClick = () => {
  // Display the user's response in a user bubble
  const userResponse = 'No';
  showMessage(userResponse, 'user');

  // Display the bot's response
  showMessage("I see, you're already a plant expert. It was nice having you here. Come back whenever you want!", 'bot');

  // After a brief delay, reset the chat from the beginning
  setTimeout(() => resetChat(), 3000);
};

const resetChat = () => {
  // Clear the chat content
  chat.innerHTML = '';

  // Reset the input wrapper to contain the name input field and submit button
  inputWrapper.innerHTML = '';
  inputWrapper.appendChild(nameInput);
  inputWrapper.appendChild(btnSend); // Add the submit button

  // Scroll to the top of the chat
  chat.scrollTop = 0;

  // Restart the chat by invoking greetUser after a brief delay
  setTimeout(() => {
    showPlantQuestion(''); // Restart the chat from the beginning
  }, 1000);
};




// Set up your eventlisteners here

// Add an event listener for the form submission
form.addEventListener('submit', handleNameInput);



//Echeveria: Provide well-draining soil and plenty of sunlight. Water sparingly, allowing the soil to dry out between watering.
//Orchid: Place in bright, indirect light and water when the potting mix feels dry to the touch. Mist the leaves occasionally for humidity.
//Monstera: Keep in bright, indirect light and allow the soil to dry moderately between waterings. Clean the leaves regularly to prevent dust buildup.


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
