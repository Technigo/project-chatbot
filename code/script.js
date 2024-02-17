// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const sendButton = document.querySelector('send-btn')
const nameForm = document.getElementById('name-form')



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

//Function to handle name input
const handleNameInput = (event) => {
  event.preventDefault();
  //the default action is to send the form data to the server and reload the page. By calling event.preventDefault() within an event handler, you can stop the browser from performing its default action and allow you to handle the event in a custom manner.
  const name = nameInput.value;
  showMessage(name, 'user');
  userName = nameInput.value;
  nameInput.value = '';

  setTimeout(() => {
    displayPlantOptions(userName);
  }, 1500);
  inputWrapper.innerHTML ='';
}


//Function to display plant options
const displayPlantOptions = (userName) => {
  showMessage(`Hi ${userName}, let's explore some plants together! Which plant would you like to have?`, 'bot');
  inputWrapper.innerHTML = `
    <button id='fiddle-leaf-fig'>Fiddle Leaf Fig</button>
    <button id='snake-plant'>Snake Plant</button>
    <button id='monstera'>Monstera</button>
  `;

  document.getElementById('fiddle-leaf-fig').addEventListener('click', () => {
    showMessage('Fiddle Leaf Fig', 'user');
    setTimeout(() => {
      handlePlantSelection('Fiddle Leaf Fig');
      askCaringNeeds();
    }, 1000);
  });

  document.getElementById('snake-plant').addEventListener('click', () => {
    showMessage('Snake Plant', 'user');
    setTimeout(() => {
      handlePlantSelection('Snake Plant');
      askCaringNeeds();
    }, 1000);
  });
    
  document.getElementById('monstera').addEventListener('click', () => {
    showMessage('Monstera', 'user');
    setTimeout(() => {
      handlePlantSelection('Monstera');
      askCaringNeeds();
    }, 1000);
  });
};

  
//Function to handle plant selection
const handlePlantSelection = (selectedOption) => {
showMessage(`You selected ${selectedOption}.`, 'bot')
selectedType = selectedOption;
setTimeout(() => {
  showMessage(`Great choice! Now, let´s talk about the care needs of your ${selectedOption}.`,'bot')
}, 1200)
};

//Function to ask about caring needs

const askCaringNeeds = () => {
  setTimeout(() => {
  showMessage(`How would you decribe yourself in terms of plant care:`, 'bot');

  //create select element
  const select = document.createElement('select')
  select.id = 'caring-needs';

  const options = [
    { value: 'plant-whisperer', label: 'A Plant Whisperer 🌱' },
    { value: 'forgetful-gardener', label: 'A Forgetful Gardener 🤦' },
    { value: 'serial-plant-killer', label: 'A Serial Plant Killer 🥀' }
  ];

  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    select.appendChild(optionElement);
});

  
 select.addEventListener('change', () => {
  const selectedCaringNeeds = select.value;
    showMessage(`You describe yourself as ${selectedCaringNeeds}.`, 'user');
    setTimeout(() => {
    showMessage(`Based on your caring needs, let me sugest a plant for you.`, 'bot')
    giveRandoomPlant(selectedCaringNeeds);
    }, 1800);
  });

  inputWrapper.innerHTML = '';
  inputWrapper.appendChild(select);
}, 1800)
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
nameForm.addEventListener('submit', handleNameInput);



// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 800);


