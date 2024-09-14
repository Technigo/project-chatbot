// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const locationForm = document.getElementById('location-form') // Form to capture the user's input
const locationInput = document.getElementById('location-input') // Input field for user's location


// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    // add a console.log here to see when it's being logged and not
    console.log("Message is:", message);
    console.log("Sender is:", sender);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation
const greetUser = () => {
  showMessage("Hello, I can help you choose the perfect outfit based on the weather. What's your location?", 'bot')
}

// A function to handle the location input and continue the conversation
const handleLocationInput = (event) => {
  event.preventDefault() // Prevent form from submitting and refreshing the page

  const userLocation = locationInput.value // Get the user's input from the input field

  if (userLocation) { // Check if user entered a location
    // Show user's location as their message
    showMessage(userLocation, 'user')

    // Clear the input field after submission
    locationInput.value = ''

    // Remove the event listener for location input after we've handled it
    locationForm.removeEventListener('submit', handleLocationInput);

    // Simulate a bot response with a weather-related message after 1 second
    setTimeout(() => {
      showMessage(`Checking the weather for ${userLocation}...`, 'bot')

      // Simulate checking the weather 
      setTimeout(() => {
        const weather = "sunny☀️ and between 18-20 degrees"
        showMessage(`It looks like it's going to be ${weather} today in ${userLocation}.`, 'bot')

        setTimeout(showClothingOptions, 1000) // Wait 1 second and show clothing options
      }, 2000) // Wait 2 seconds before showing the weather message
    }, 1000) // Wait 1 second before showing the "checking weather" message
  }
}


// Function to create buttons for casual or formal clothing choice
const showClothingOptions = () => {
  // Remove existing event listener for invalid input to avoid duplicates
  locationForm.removeEventListener('submit', handleInvalidInput);

  chat.innerHTML += `
    <section class="bot-msg clothing-options">
      <img src="assets/bot.png" alt="Bot" />
      <div class="bubble bot-bubble">
        <p>Would you prefer casual or formal clothing?</p>
        <button class="clothing-choice" data-choice="casual">Casual</button>
        <button class="clothing-choice" data-choice="formal">Formal</button>
      </div>
    </section>
  `

  // Function to handle clothing choice
  const handleClothingChoice = (event) => {
    const choice = event.target.getAttribute('data-choice');

    if (choice) {
      // Show the user's choice
      showMessage(`I want ${choice} clothing.`, 'user');

      // Remove event listeners to prevent multiple triggers
      const buttons = document.querySelectorAll('.clothing-choice');
      buttons.forEach(button => {
        button.removeEventListener('click', handleClothingChoice);
      });

      // Remove event listener for invalid input after a valid choice
      locationForm.removeEventListener('submit', handleInvalidInput);

      // Ask about the occasion after a short delay
      setTimeout(() => {
        askForOccasion(choice);
      }, 1000);
    }
  }

  // Add event listeners to the buttons to handle the user's choice
  const buttons = document.querySelectorAll('.clothing-choice');
  buttons.forEach(button => {
    button.addEventListener('click', handleClothingChoice);
  });

  // Add event listener to handle invalid input during this phase
  locationForm.addEventListener('submit', handleInvalidInput);

  chat.scrollTop = chat.scrollHeight
}

// Function to handle invalid input (user typing text instead of clicking buttons)
const handleInvalidInput = (event) => {
  event.preventDefault();

  const userInput = locationInput.value.trim();

  if (userInput) {
    // Show user's message
    showMessage(userInput, 'user');

    // Show bot's response
    showMessage("That's not a valid answer. Please refresh the chat and try again.", 'bot');

    // Clear the input field
    locationInput.value = '';
  }
};

// Function to ask about the occasion
const askForOccasion = (clothingChoice) => {
  showMessage("Are you dressing for a specific occasion or activity (e.g., work, party, exercise)?", 'bot');

  // Add event listener to handle user's occasion input
  const occasionInputHandler = (event) => handleOccasionInput(event, clothingChoice, occasionInputHandler);
  locationForm.addEventListener('submit', occasionInputHandler);
}

// Function to handle the occasion input
const handleOccasionInput = (event, clothingChoice, occasionInputHandler) => {
  event.preventDefault();

  const occasion = locationInput.value.trim();
  if (occasion) {
    showMessage(occasion, 'user');
    locationInput.value = '';

    // Remove the event listener to prevent duplicates
    locationForm.removeEventListener('submit', occasionInputHandler);

    setTimeout(() => {
      provideOutfitSuggestion(clothingChoice, occasion);
    }, 1000);
  }
}

// Function to provide the final outfit suggestion
const provideOutfitSuggestion = (clothingChoice, occasion) => {
  let suggestion = '';

  if (clothingChoice === 'casual') {
    if (occasion.toLowerCase().includes('work')) {
      suggestion = "A casual shirt and chinos might be perfect for work. 👔";
    } else if (occasion.toLowerCase().includes('party')) {
      suggestion = "How about jeans and a stylish t-shirt for the party? 🎉";
    } else if (occasion.toLowerCase().includes('exercise')) {
      suggestion = "Athletic wear would be great for exercising! 🏃";
    } else {
      suggestion = "A t-shirt and jeans would be great! 👕👖";
    }
  } else if (clothingChoice === 'formal') {
    if (occasion.toLowerCase().includes('work')) {
      suggestion = "A blazer with dress pants would suit you well for work. 💼";
    } else if (occasion.toLowerCase().includes('party')) {
      suggestion = "A cocktail dress or a sharp suit would be ideal for the party. 🥂";
    } else if (occasion.toLowerCase().includes('exercise')) {
      suggestion = "For exercise, comfort is key! Maybe opt for formal sportswear. 😉";
    } else {
      suggestion = "A suit and tie might be a great option! 👔";
    }
  }

  showMessage(suggestion, 'bot');

  // End the conversation or reset as needed
  setTimeout(() => {
    showMessage("Let me know if you need anything else!", 'bot');
  }, 2000);
}

// Event listeners goes here 👇

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built-in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greetUser, 1000)

// Listen for the form submit event to capture user's location input
locationForm.addEventListener('submit', handleLocationInput)
