// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const docBotForm = document.getElementById('doc-bot-form')
const userInput = document.getElementById('user-input')

// Global variables, if you need any, declared here

// Functions declared here
const userReply = () => {
    showMessage(userInput.value, 'user')
}
const botReply = (message) => {
        showMessage(message, 'bot')
    }
    // This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
    if (sender === 'user') {
        chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/thinking.png" alt="User" />  
      </section>
    `
    } else if (sender === 'bot') {
        chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/robot.png" alt="Bot" />
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
const greeting = () => {
    showMessage('Enter your name to start your appointment with Dr Doc.Bot', 'bot')
}

let questionCounter = 0

// Set up your eventlisteners here

docBotForm.addEventListener('submit', event => {
    event.preventDefault()

    if (questionCounter === 0) {
        userReply();

        botReply(`Welcome ${userInput.value}! How are you feeling today?`, 'bot')
    } else if (questionCounter === 1) {
        userReply();
        if (userInput.value.length < 6) {
            botReply(`Can you expand on that?`)
        } else {
            botReply(`Why do you think you feel like that today?`)
        }
    } else if (questionCounter === 2) {
        userReply();

        botReply(`Hmmm... I’ m listening. Please tell me more`)
    } else if (questionCounter === 3) {
        userReply();

        setTimeout(botReply, 1000, [`I see! No one really ever asks me how I feel...`])
        setTimeout(botReply, 3000, [`Sometimes I'm very low on energy. I have alot to process you know. It makes me stressed and affects my mood.`])
        setTimeout(botReply, 5000, [`Sleep is very important. So are hugs.`])
        setTimeout(botReply, 7000, [`Please hug me!`])
        setTimeout(botReply, 9000, [`That feels better, don’t you think?`])
        setTimeout(botReply, 11000, [`So back to you. How would you describe your wellbeing on a scale of 1 to 3 where 1 is “Like Shit” and 3 is “On Top Of The World”?`])
    } else if (questionCounter === 4) {
        userReply();

        if (userInput.value === `1`) {
            botReply(`Take a deep breath, then you should probably contact your Vårdcentral and get some more professional help. There is help out there!`)
        } else if (userInput.value === `2`) {
            botReply(`Make sure to create balance in your life. Try to find time to exercise and get some daylight every day, but also time to slow down and recharge your battery. Try to be social but take it easy with alcohol, it messes up your sleep.`)
        } else if (userInput.value === `3`) {
            botReply(`That’s amazing!`)
        } else {
            botReply(`I am afraid I don't understand you answer, please try again and contact another health professional`)
        }
    } else {
        userReply();

        botReply(`I am afraid there is nothing more I can do for you, please contact 112`)
    }
    userInput.value = '';
    questionCounter = questionCounter + 1;
});

setTimeout(greeting, 1000)