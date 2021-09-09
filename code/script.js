// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputValue = document.getElementById('name-input')

// Global variables, if you need any, declared here

// Functions declared here


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('user is sending')

    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('bot is sending')

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
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
  showMessage(`Howdy there, what's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const genreQuestion = () => {
  showMessage('Which is your favourite genre?', 'bot')
  

}
// Tänkte lägga till en fråga men blev lite konstigt då den skickade frågan samtidigt som den tidigare frågan
// const answerQuestion = () => {
//   showMessage('Cool! my favourite genre is action!', 'bot')
// } 

// tänkte skriva något liknande som
// if(Horror) {
// showMessage('ooh spooky :(', 'bot')
// } else {
//   showMessage('That is my favorite too!', 'bot')
// }

// fick dock inte ihop om jag behöver skriva en ny "handleinputname" för user när jag föskte det funkade inte chatten

const handleNameInput = (event) => {
  event.preventDefault()
  
  const name = inputValue.value

  console.log(name)
  showMessage(name, 'user')
  inputValue.value = '' //får fältet att bli tomt efter att vi skrivit vårt namn





  //här börjar nästa fråga från boten
  // genreQuestion() Nej, vi wrappar den istället med tidsfördröjningen.
  setTimeout(genreQuestion, 1000)
  

}


// Set up your eventlisteners here
form.addEventListener('submit', handleNameInput)



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)

