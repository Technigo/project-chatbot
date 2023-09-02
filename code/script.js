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

    // After displaying the selected option, show the advice question
    setTimeout(() => showFactsQuestion(selectedOption), 1000);
  });

  // Make sure to scroll to the new message
  chat.scrollTop = chat.scrollHeight;
};

const showFactsQuestion = (selectedOption) => {
  // Now, you can directly use the selectedOption in this function
  if (selectedOption === "Orchid") {
    showMessage(`Did you know that Orchids are one of the largest families of flowering plants, with over 25,000 documented species? They have a unique pollination method where some orchids mimic the appearance and scent of female insects to attract pollinators. Cool, right?`, 'bot');
  } else if (selectedOption === "Monstera") {
    showMessage(`Did you know that Monstera plants are famous for their distinctive split leaves, earning them the nickname "Swiss Cheese Plant." These splits, or fenestrations, are thought to help the plant in its natural habitat by allowing wind and rain to pass through while reducing the risk of damage during storms. Aren't they intelligent?`, 'bot');
  } else if (selectedOption === "Echeveria") {
    showMessage(`Did you know that Echeverias are known for their striking rosette-shaped foliage and belong to the succulent family? Another fun fact is that some varieties can change color in response to sunlight, temperature, and stress, making them quite fascinating to observe.`, 'bot');
  } else {
    showMessage(`Oops. Try again!`, 'bot');
  }
}







const showAdviceQuestion = () => {
  showMessage("Do you know how to take care of this plant?", 'bot');

  // Create a "Yes" button for advice
  const yesButton = document.createElement('button');
  yesButton.textContent = 'Yes';
  yesButton.id = 'yes-advice-button';

  // Create a "No" button for advice
  const noButton = document.createElement('button');
  noButton.textContent = 'No';
  noButton.id = 'no-advice-button';

  // Add event listeners to the "Yes" and "No" buttons
  yesButton.addEventListener('click', () => handleYesButtonClick());
  noButton.addEventListener('click', () => handleNoButtonClick());


  // Replace the selected option message with the "Yes" and "No" buttons for advice
  inputWrapper.innerHTML = '';
  inputWrapper.appendChild(yesButton);
  inputWrapper.appendChild(noButton);

  // Make sure to scroll to the new message
  chat.scrollTop = chat.scrollHeight;
};



const handleYesButtonClick = () => {
  showMessage("This is what you need to think about", 'bot');
};

const handleNoButtonClick = () => {
  showMessage("No worries, I understand that you're already a plant expert!", 'bot');
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
