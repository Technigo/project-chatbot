// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const docBotForm = document.getElementById('doc-bot-form')
const userInput = document.getElementById('user-input')
let name = " "

// Global variables, if you need any, declared here
let questionCounter = 0

// Functions declared here.
const userReply = () => {
    showMessage(userInput.value, 'user')
}

const botReply = (message, time) => {
    setTimeout(showMessage, time, message, 'bot')
}

const showMessage = (message, sender) => {
    if (sender === 'user') {
        chat.innerHTML += `
    <section class="user-msg">
        <div class="bubble user-bubble">
        <p class="text-message">${message}</p>
        </div>
        <img src="assets/thinking.png" alt="User" />  
    </section>
    `
    } else if (sender === 'bot') {
        chat.innerHTML += `
    <section class="bot-msg">
        <img src="assets/robot.png" alt="Bot" />
        <div class="bubble bot-bubble">
        <p class="text-message">${message}</p>
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

// Set up your eventlisteners here

docBotForm.addEventListener('submit', event => {
    event.preventDefault()
    if (questionCounter === 0) { /*first interaction with Doc-bot*/
        userReply();

        botReply(`Welcome ${userInput.value}! How are you feeling today?`, 0)
        name = userInput.value
    } else if (questionCounter === 1) { /*different replies from the Doc.bot depending on the length users input*/
        userReply();
        if (userInput.value.length < 6) {
            botReply(`Can you expand on that?`, 0)
        } else {
            botReply(`Why do you think you feel like that today?`, 0)
        }
    } else if (questionCounter === 2) {
        userReply();

        botReply(`Hmmm... I’ m listening. Please tell me more`, 0)
    } else if (questionCounter === 3) { /*the Doc.bot gets self absorbed and chats away at the user, regardless of what the user replies*/
        userReply();

        botReply(`I see! No one really ever asks me how I feel...`, 1000)
        botReply(`Sometimes I'm very low on energy. I have alot to process you know. It makes me stressed and affects my mood.`, 5000)
        botReply(`Sleep is very important. So are hugs.`, 9000)
        botReply(`Please hug me!`, 12000)
        botReply(`That feels better, don’t you think?`, 15000)
        botReply(`So back to you. How would you describe your wellbeing on a scale of 1 to 3 where 1 is “Like Shit” and 3 is “On Top Of The World”?`, 18000)

    } else { /*final interaction with the Doc.bot*/
        userReply();

        /*different advice for the user based on their reply of 1-3*/
        if (userInput.value === `1`) {
            botReply(`Take a deep breath, then you should probably contact your Vårdcentral and get some more professional help. There is help out there!`, 0)
        } else if (userInput.value === `2`) {
            botReply(`Make sure to create balance in your life. Try to find time to exercise and get some daylight every day, but also time to slow down and recharge your battery. Try to be social but take it easy with alcohol, it messes up your sleep.`, 0)
        } else if (userInput.value === `3`) {
            botReply(`That’s amazing!`, 0)
        } else {
            botReply(`I am afraid I don't understand you answer, please try again or contact another health professional`, 0)
        }

        /*depending on the users choice of 1-3, they receive a different goodbye*/
        if (userInput.value === `1`) {
            botReply(`I see our time is up. Keep on breathing and I see you next week`, 0)
        } else if (userInput.value === `2`) {
            botReply(`So ${name}, I see our time is up. Hang in there and I see you next week`, 1000)
        } else {
            botReply(`So ${name}, I see our time is up. Nice talking to you! Maybe we can go out parting some day!?`, 3000)
        }

        botReply(`Oh, by the way. I’m sending you the bill to your IP address. Bye bye!`, 3000)
    }

    userInput.value = '';
    questionCounter = questionCounter + 1;
});

setTimeout(greeting, 1000)