// Element references
const chat = document.getElementById('chat');
const userInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper'); 
const sendChatBtn = document.querySelector('.send-btn');
const closeChatBtn = document.querySelector('.close-chat-btn');


// State variables
let state = 'GET_NAME'; 
let userName = '';
let pizzaType = '';
let pizzaSubtype = '';


// Initial states and variables
const welcomeMessage = "Hello, what is your name?";

// Start the chat with a welcome message
const startChat = () => {
    sendMessage(welcomeMessage);
    state = 'GET_NAME';
    

   
};

// Send a message from the bot
const sendBotMessage = (message) => {
    sendMessage(message, 'bot');
    
};

// Send a message (general function for both user and bot)
const sendMessage = (message, sender) => {
    const chatBubble = document.createElement('div');
    chatBubble.classList.add(`${sender}-msg`);
    chatBubble.innerHTML = `
        <div class="bubble ${sender}-bubble">
            <p>${message}</p>
        </div>
    `;
    chat.appendChild(chatBubble);
    chat.scrollTop = chat.scrollHeight;
};

// Show options as buttons in the input wrapper
const showOptions = (options) => {
    const buttons = options.map(option => 
        `<button class="option-btn" data-value="${option}">${option}</button>`
    ).join('');
    inputWrapper.innerHTML = `<div>${buttons}</div>`;
};

// Function to handle different pizza types
const getFoodVariants = (type) => {
    switch (type) {
        case 'Thin Crust':
            return ['Margherita', 'Pepperoni', 'Veggie', 'Meat Lovers'];
        case 'Thick Crust':
            return ['Margherita', 'Pepperoni', 'Veggie', 'Meat Lovers'];
        default:
            return [];
    }
};

// Main message processing function
const processMessage = () => {
    const messageText = userInput.value.trim();
    switch (state) {
        
        case 'GET_NAME':
            userName = messageText;
            if (userName) {
                sendBotMessage(`Nice to meet you, ${userName}! What type of crust would you like for your pizza?`);
                showOptions(['Thin Crust', 'Thick Crust']);
                state = 'GET_PIZZA_TYPE';
            } else {
                sendBotMessage("Please enter your name.");
            }
            break;

        case 'GET_PIZZA_TYPE':
            pizzaType = messageText;
            sendBotMessage(`Great choice, ${userName}! What toppings would you like on your ${pizzaType} pizza?`);
            showOptions(getFoodVariants(pizzaType));
            state = 'GET_PIZZA_SUBTYPE';
            break;

        case 'GET_PIZZA_SUBTYPE':
            pizzaSubtype = messageText;
            sendBotMessage(`You chose a ${pizzaType} pizza with ${pizzaSubtype}. Do you want to confirm your order?`);
            showOptions(['Yes', 'No']);
            state = 'WAITING_FOR_CONFIRMATION';
            
            break;

        case 'WAITING_FOR_CONFIRMATION':
            if (messageText.toLowerCase() === 'yes') {
                sendBotMessage(`Thank you for your order! A delicious ${pizzaSubtype} ${pizzaType} pizza will be ready in 15 minutes.`);
            } else {
                sendBotMessage('Your order has been cancelled.');
            }
            state = 'END';
            showCloseChatButton();
            break;

       

        default:
            break;
            

        }


    userInput.value = '';
};


const showCloseChatButton = () => {
    inputWrapper.innerHTML = `<button class="close-chat-btn">Close Chat</button>`;
    document.querySelector('.close-chat-btn').addEventListener('click', () => {
        closeChat();
    });
};

const closeChat = () => {
    setTimeout(() => {
        chat.style.display = messageText ('Restarting the chat...')
    }

    , 4000);

    location.reload();

};



// Event listeners for user interactions
inputWrapper.addEventListener('click', (event) => {

    if (event.target.classList.contains('close-chat-btn')) {

        closeChat();
        
    } else if (event.target.classList.contains('option-btn')) {
        
        const selectedOption = event.target.getAttribute('data-value');
        sendMessage(selectedOption, 'user');
        userInput.value = selectedOption; 
        processMessage();
    }
} );


userInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        processMessage();
    }
});

sendChatBtn.addEventListener('click', (event) => {
    event.preventDefault();
    processMessage();
});


startChat();