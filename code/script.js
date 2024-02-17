// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')
const carringNeedsSelect = document.getElementById('caring-needs')
const sendButton = document.querySelector('send-btn')


let userName = '';
let selectedType = "";

const plantOptions = ['Fiddle Leaf Fig', 'Snake Plant', 'Monstera']

//Define handleUserResponse as a global function
const handleUserResponse = (message, sender) => {
  console.log(`User response: ${message}`);
  console.log(`Sender: ${sender}`);
};

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
  // Here we call the function showMessage, that we declared earlier with the argument:
  showMessage("What a great day to chat? I am Giny, the plant giver. Who are you?", 'bot')
}

//Function to greet the user and ask if the would like to order
const greetAndAskOrder = (userName) => {
  showMessage(`Nice to meet you, ${userName}! Lets see what what plants do I have in my magic pot.`, 'bot')
  displayPlantOptions();
};

//Function to handle name input
const handleNameInput = (event) => {
  event.preventDefault();
  //the default action is to send the form data to the server and reload the page. By calling event.preventDefault() within an event handler, you can stop the browser from performing its default action and allow you to handle the event in a custom manner.
  userName = nameInput.value;
  showMessage(userName, 'user');
  nameInput.value = '';
  if (userName) {
    setTimeout(() => {
      greetAndAskOrder(userName)
    }, 1200)
    } else {
      showMessage("My roots says that this is not a name. Please try again!", 'bot')
    }
    handleUserResponse(userName, 'user')
};

//Function to display plant options
const displayPlantOptions = () => {
  nameForm.style.display = 'block';

  plantOptions.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.value = option;
    button.addEventListener('click', () => {
      handleUserResponse(option, 'user');
      handlePlantSelection(option);
      askCaringNeeds();
  });
    nameForm.appendChild(button);
  });

  handleUserResponse('Displaying plant options', 'bot')
};
 
//Function to handle plant selection
carringNeedsSelect.style.display = 'none';
plantOptions.display = 'none'

const handlePlantSelection = (selectedOption) => {
showMessage(`You selected ${selectedOption}.`, 'user')
selectedType = selectedOption;
  showMessage(`Great choice! Now, let´s talk about the care needs of your ${selectedOption}.`,'bot')
  askCaringNeeds();
};


//Function to ask about caring needs
const askCaringNeeds = () => {
  showMessage(`Would you decribe yourself in terms of plant care:`, 'bot');
  
 carringNeedsSelect.addEventListener('change', () => {
  const selectedCaringNeeds = carringNeedsSelect.value;
    showMessage(`You describe yourself as ${selectedCaringNeeds}.`, 'user');
    setTimeout(() => {
    showMessage(`Based on your caring needs, let me sugest a plant for you.`, 'bot')
    giveRandoomPlant(selectedCaringNeeds);
    }, 1400);
  });
};

// Function to randomly give a plant based on user choice from caring needs
const giveRandoomPlant = (selectedCaringNeeds) => {
  let suggestedPlants = [];
  // Based on the user's caring needs, suggest appropriate plants
  switch (selectedCaringNeeds) {
    case 'plant-whisperer':
      suggestedPlants = ['Fiddle Leaf Fig', 'Monstera'];
      break;
    case 'forgetful-gardener':
      suggestedPlants = ['Snake Plant', 'Pothos'];
      break;
    case 'serial-plant-killer':
      suggestedPlants = ['Cactus', 'Succulent'];
      break;
    default:
      suggestedPlants = ['Spider Plant', 'ZZ Plant'];
  }
  const randomPlant = suggestedPlants[Math.floor(Math.random() * suggestedPlants.length)];
  showMessage(`Based on your caring needs, I suggest you get a ${randomPlant}. Enjoy! 🌱`, 'bot');
};



//Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const userInput = nameInput.value;
  if (userInput !== '') {
    showMessage(userInput, 'user')
  } else {
    showMessage("Please enrer a valit input!", 'bot');
  }
  nameInput.value = '';
  }


// Function to ask about caring package
const askForCaringPackage = () => {
  showMessage(`Choose from the options below:`, 'bot');
  setTimeout(() => {
    showMessage(`1. Deluxe Plant Spa Treatment 🌿\n2. Basic Plant TLC Package 🍃\n3. No, thanks, I'll wing it! 🦋`, 'bot');
  }, 1000);
};

// Function to handle caring package response
const handleCaringPackageResponse = (response) => {
  showMessage(`You opted for option ${response}.`, 'user');
  setTimeout(() => {
    showMessage(`Thank you for confirming! Your ${selectedType} is all set for a happy life! 🌟`, 'bot');
  }, 1000);
};


// Eventlisteners goes here 👇
document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.querySelector('.send-btn');
  sendButton.addEventListener('click', handleFormSubmit);
});


// Event listener for carring needs options
carringNeedsSelect.addEventListener('change', () => {
const selectedCaringNeeds = carringNeedsSelect.value;
  showMessage(`You describe yourself as ${selectedCaringNeeds}.`, 'user');
  setTimeout(() => {
    showMessage(`Based on your caring needs, let me suggest a plant for you.`, 'bot');
    giveRandoomPlant(selectedCaringNeeds);
  }, 1400);
});

// Event listener for caring package options
document.body.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'BUTTON' && target.classList.contains('caring-package-option')) {
    handleCaringPackageResponse(target.textContent);
  }
});

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 800);
setTimeout(displayPlantOptions, 1800);
