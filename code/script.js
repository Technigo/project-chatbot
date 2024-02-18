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
        <img src="assets/userg.svg" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/genie.svg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll 
  chat.scrollTop = chat.scrollHeight
}


// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  showMessage("What a great day to chat! I am Genie, the plant giver. Who are you?", 'bot')
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
  }, 1200);
  inputWrapper.innerHTML ='';
}


//Function to display plant options
const displayPlantOptions = (userName) => {
  showMessage(`Hi ${userName}, let us explore some plants together! Which plant would you like to have?`, 'bot');
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
}, 1000)
};

//Function to ask about caring needs

const askCaringNeeds = () => {
  setTimeout(() => {
   showMessage(`How would you decribe yourself in terms of plant care:`, 'bot');

  //create select element
  const select = document.createElement('select')
  select.id = 'caring-needs';

  const options = [
    { value: 'select-option', label: 'Select Option' },
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
    giveRandomPlant(selectedCaringNeeds);
    }, 1800);
  });

  inputWrapper.innerHTML = '';
  inputWrapper.appendChild(select);
}, 2000)
};

// Function to randomly give a plant based on user choice from caring needs
const giveRandomPlant = (selectedCaringNeeds) => {
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
  setTimeout(() => {
    showMessage(`I suggest you get a ${randomPlant}.🌱 Do you want to confirm?`, 'bot');
    plantConfirmation(randomPlant);
  }, 1300)
};

// Function to handle user confirmation
const plantConfirmation = (randomPlant) => {
 inputWrapper.innerHTML = `
 <button id='yesButton'>YES</button>
 <button id='noButton'>NO</button>
 `;

 document.getElementById('yesButton').addEventListener('click', () => {
  showMessage('Yes', 'user')
  setTimeout(() => answerUser('YES', randomPlant), 1200 )
 });

 document.getElementById('noButton').addEventListener('click', () => {
  showMessage('No', 'user')
  setTimeout(() => answerUser('NO', randomPlant), 1200 )
 });

 //Function to handle user response to the confirmation
 const answerUser = (userResponse, randomPlant) => {
  if (userResponse === 'YES') {
    setTimeout(() => {
    showMessage(`Thank you for confirming! Your ${randomPlant} is all set for a happy life! 🌟.`, 'bot');
    }, 1000);
  } else if (userResponse === 'NO') {
    showMessage ('Sorry to hear that. Have a nice day! Reloading the page...', 'bot')
    setTimeout(() => {
      window.location.reload();
      }, 2000);
   }
  inputWrapper.innerHTML = '';
 };
};

// Eventlisteners goes here 👇
//however some eventlistener where add along with the functions as it was the only wat that worked for me. 
nameForm.addEventListener('submit', handleNameInput);

// the website is loaded. Normally we invoke functions like this: greeting()
setTimeout(greetUser, 1000)
