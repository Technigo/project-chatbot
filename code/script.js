// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const userInput = document.getElementById('name-input');
const sendChatBtn = document.querySelector('.send-btn');
const optionsContainer = document.querySelector('.options');
const div = document.createElement('div');
// const chatForm = document.getElementById('chat-form');

let userName = "";
let foodType = "";
let foodSubtype = "";
// let message = "";
// let sender = "";
// let chatBubble = "";
// let botBubble = "";
// let userBubble = "";
// let img = "";
// let p = "";

const welcomeMessage = "Hello, what is your name?";

const sendBotMessage = (message) => {
    sendMessage(message, 'bot');
}


const sendMessage = (message, sender) => {
  const chatBubble = document.createElement('div');
  chatBubble.classList.add(`${sender}-msg`);
  chatBubble.innerHTML = `
      <div class="bubble ${sender}-bubble">
          <p>${message}</p>
      </div>
      <img src="assets/${sender}.png" alt="${sender}" />
      </div>
    `;

 

chat.appendChild(chatBubble);
chat.scrollTop = chat.scrollHeight;


};


const showOptions = (options) => {
    optionsContainer.innerHTML = '';
    options.forEach((option) => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option-btn');
        optionButton.innerText = option;
        optionButton.addEventListener('click', () => {
            processMessage(option);
            optionsContainer.innerHTML = '';
        });
        optionsContainer.appendChild(optionButton);
    });
}

// const getUserName = () => {
//     userName = userInput.value.trim();
//     sendBotMessage(`Nice to meet you, ${userName}!`);
//     sendBotMessage(`Do you want ${pizza}, ${pasta}, or ${sushi}?`);
// }



const getFoodVariants = (foodType) => {
    switch (foodType) {
        case 'Pizza':
            return ['Margherita', 'Pepperoni', 'Hawaiian'];
        case 'Pasta':
            return ['Spaghetti Carbonara', 'Lasagna', 'Fettuccine Alfredo'];
        case 'Sushi':
            return ['California Roll', 'Sashimi', 'Dragon Roll'];
        default:
            return [];
    }
}

const processMessage = () => {
    const messageText = userInput.value.trim();
  
    if (!userName) {
        userName = messageText;
        sendBotMessage(`Nice to meet you, ${userName}!`);
        sendBotMessage(`Do you want Pizza, Pasta, or Sushi?`);
    } else if (!foodType) {
        if (messageText.toLowerCase().includes('pizza')) {
            foodType = 'Pizza';
            const variants = getFoodVariants(foodType);
            if (variants.length > 0) {
                sendBotMessage(`Great choice, ${foodType}! Please choose a subtype: ${variants.join(', ')}.`);
            } else {
                sendBotMessage("I'm sorry, we currently don't have specific subtypes for pizza.");
            }
        } else if (messageText.toLowerCase().includes('pasta')) {
            foodType = 'Pasta';
            const variants = getFoodVariants(foodType);
            if (variants.length > 0) {
                sendBotMessage(`Great choice, ${foodType}! Please choose a subtype: ${variants.join(', ')}.`);
            } else {
                sendBotMessage("I'm sorry, we currently don't have specific subtypes for pasta.");
            }
        } else if (messageText.toLowerCase().includes('sushi')) {
            foodType = 'Sushi';
            const variants = getFoodVariants(foodType);
            if (variants.length > 0) {
                sendBotMessage(`Great choice, ${foodType}! Please choose a subtype: ${variants.join(', ')}.`);
            } else {
                sendBotMessage("I'm sorry, we currently don't have specific subtypes for sushi.");
            }
        } else {
            sendBotMessage("Please choose a valid food option: pizza, pasta, or sushi.");
        }
    } else if (!foodSubtype) {
        const variants = getFoodVariants(foodType);
        if (variants.includes(messageText)) {
            foodSubtype = messageText;
            sendBotMessage(`You chose ${foodSubtype}. How old are you?`);
        } else {
            sendBotMessage(`Please choose a valid subtype for ${foodType}: ${variants.join(', ')}.`);
        }
    } else {
        const age = parseInt(messageText);
        if (!isNaN(age)) {
            const price = age >= 18 ? '€20' : '€10';
            sendBotMessage(`You are ${age} years old. Your order (${foodType} - ${foodSubtype}) costs ${price}.`);
        } else {
            sendBotMessage("Please enter a valid age.");
        }
    }

   
}

sendChatBtn.addEventListener('click', (event) => {
    event.preventDefault();
    processMessage();
    console.log("processmessage");
    userInput.value = '';
});

// userInput.addEventListener('keyup', (event) => {
//     if (event.key === 'Enter') {
//         processMessage();
//         userInput.value = '';
//     }
// });

// sendChatBtn.addEventListener('submit', (event) => {
//     event.preventDefault();
//     processMessage(console.log("hello"));
//     userInput.value = '';
// });

// Open up the chat with welcome message
sendBotMessage(welcomeMessage);





