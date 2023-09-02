// // Variables that point to selected DOM elements
// const chat = document.getElementById('chat')

// // If you need any global variables that you can use across different functions, declare them here:


// // Declare your functions after this comment

// // This function will add a chat bubble in the correct place based on who the sender is
// const showMessage = (message, sender) => {
//   // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
//   if (sender === 'user') {
//     chat.innerHTML += `
//       <section class="user-msg">
//         <div class="bubble user-bubble">
//           <p>${message}</p>
//         </div>
//         <img src="assets/user.png" alt="User" />  
//       </section>
//     `
//     // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
//   } else if (sender === 'bot') {
//     chat.innerHTML += `
//       <section class="bot-msg">
//         <img src="assets/bot.png" alt="Bot" />
//         <div class="bubble bot-bubble">
//           <p>${message}</p>
//         </div>
//       </section>
//     `
//   }
//   // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
//   chat.scrollTop = chat.scrollHeight
// }

// // Starts here
// const greetUser = () => {
//   // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
//   showMessage("Hello there, What's your name?", 'bot')
//   // Just to check it out, change 'bot' to 'user' here 👆
// }

// // Set up your eventlisteners here

// // When website loaded, chatbot asks first question.
// // normally we would invoke a function like this:
// // greeting()
// // But if we want to add a little delay to it, we can wrap it in a setTimeout:
// // setTimeout(functionName, timeToWaitInMilliSeconds)
// // This means the greeting function will be called one second after the website is loaded.
// setTimeout(greetUser, 1000)

const chat = document.getElementById('chat');
const inputForm = document.getElementById('message-form');
const input = document.getElementById('name-input');

let userResponses = [];

const greetUser = () => {
    showMessage("Hello there, What's your name?", "bot");
};

const showMessage = (msg, sender) => {
    if (sender == "user") {
        chat.innerHTML += 
        `<section class="user-msg">
            <div class="bubble user-bubble">
                <p>${msg}</p>
            </div>
            <img src="./assets/user.png" alt="user bot">
        </section>`;
    } else if (sender == "bot") {
        chat.innerHTML += 
        `<section class="bot-msg">
            <img src="./assets/bot.png" alt="chat bot">
            <div class="bubble bot-bubble">
                <p>${msg}</p>
            </div>
        </section>`;
    }
};

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = input.value;
    showMessage(userMessage, "user");
    userResponses.push(userMessage);

    if (userResponses.length === 1) {
        showMessage("Great! Would you like pizza, pasta, or salad?", "bot");
    } else if (userResponses.length === 2) {
        const foodChoice = userMessage.toLowerCase();
        if (foodChoice === "pizza" || foodChoice === "pasta" || foodChoice === "salad") {
            showMessage(`Excellent choice! What type of ${foodChoice} would you like?`, "bot");
        } else {
            showMessage("I'm sorry, I didn't understand your choice. Please select pizza, pasta, or salad.", "bot");
            userResponses.pop(); // Remove the invalid choice from the array
        }
    } else if (userResponses.length === 3) {
        showMessage(`Got it! Would you like the ${userMessage} for a child or an adult?`, "bot");
    } else if (userResponses.length === 4) {
        showMessage(`Perfect! You've selected ${userMessage} for ${userResponses[3]}. Would you like to confirm your order?`, "bot");
    } else if (userResponses.length === 5) {
        if (userMessage.toLowerCase() === "yes") {
            showMessage("Great! Your order has been confirmed. Thank you for choosing Pizzaria Technigo!", "bot");
        } else {
            showMessage("Your order has been canceled. If you change your mind, feel free to let me know!", "bot");
        }
    }
    
    input.value = '';
});

greetUser();
