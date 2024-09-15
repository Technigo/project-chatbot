// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const locationForm = document.getElementById('location-form')
const locationInput = document.getElementById('location-input')


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
        <img src="user.png" alt="User" />  
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
        <img src="bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight

  // Clear the input field after submission
  locationInput.value = ''
}

// A function to start the conversation
const greetUser = () => {
  showMessage("Hello, I can help you choose the perfect outfit based on the weather. What's your location?📍", 'bot')
}

// A function for the location input
const handleLocationInput = (event) => {
  event.preventDefault() // Prevent from refreshing the page
  const userLocation = locationInput.value

  if (userLocation) {
    showMessage(userLocation, 'user')


    // Remove the event listener for location input after being hanlded
    locationForm.removeEventListener('submit', handleLocationInput);

    // Checking weather...
    setTimeout(() => {
      showMessage(`Checking the weather for ${userLocation}...`, 'bot')

      setTimeout(() => {
        const weather = "sunny☀️ and between 18-20 degrees"
        showMessage(`It looks like it's going to be ${weather} today in ${userLocation}.`, 'bot')
        setTimeout(showClothingOptions, 1000)
      }, 2000)
    }, 1000)
  }
}

// Function to create buttons for choosing casual or formal clothing
const showClothingOptions = () => {
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
      showMessage(`I prefer ${choice} clothing.`, 'user');

      // Remove event listeners 
      const buttons = document.querySelectorAll('.clothing-choice');
      buttons.forEach(button => {
        button.removeEventListener('click', handleClothingChoice);
      });

      // Remove event listener for invalid input after a valid choice
      locationForm.removeEventListener('submit', handleInvalidInput);

      // Ask about the occasion 
      setTimeout(() => {
        askForOccasion(choice);
      }, 1000);
    }
  }

  // Function to ask about the occasion
  const askForOccasion = (clothingChoice) => {
    showMessage("Are you dressing for a specific occasion or activity (e.g., work, party, exercise)?", 'bot');

    const occasionInputHandler = (event) => handleOccasionInput(event, clothingChoice, occasionInputHandler);
    locationForm.addEventListener('submit', occasionInputHandler);
  }

  // Eevent listeners to the buttons to handle the user's choice
  const buttons = document.querySelectorAll('.clothing-choice');
  buttons.forEach(button => {
    button.addEventListener('click', handleClothingChoice);
  });

  // Event listener to handle invalid input
  locationForm.addEventListener('submit', handleInvalidInput);

}

// Function to handle invalid input (user typing text instead of clicking buttons)
const handleInvalidInput = (event) => {
  event.preventDefault();

  const userInput = locationInput.value;

  if (userInput) {
    showMessage(userInput, 'user');
    showMessage("That's not a valid answer. Please refresh the chat and try again.", 'bot');

  }
};

// Function to handle the occasion input
const handleOccasionInput = (event, clothingChoice, occasionInputHandler) => {
  event.preventDefault();

  const occasion = locationInput.value;
  if (occasion) {
    showMessage(occasion, 'user');
    locationInput.value = '';

    // Remove the event listener to prevent duplicates
    locationForm.removeEventListener('submit', occasionInputHandler);

    setTimeout(() => {
      OutfitSuggestion(clothingChoice, occasion);
    }, 1000);
  }
}

// Function for outfit suggestion
const OutfitSuggestion = (clothingChoice, occasion) => {
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

  // End the conversation
  setTimeout(() => {
    showMessage("Let me know if you need anything else!", 'bot');
  }, 2000);
}

setTimeout(greetUser, 1000)

// Listen for the form submit event to capture user's location input
locationForm.addEventListener('submit', handleLocationInput)
