// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const form = document.getElementById('name-form')
const input = document.getElementById('name-input')
const sendBtn = document.getElementById('button')

// This function will add a chat bubble in the correct place based on who the sender is


const showMessage = (message, sender) => {
  if (sender === 'user') {
   console.log(message, 'user')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('mordor', 'bot')
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
  showMessage(`Hello Hobbit, I'm Sarouman! What's your name?`, 'bot')
  form.addEventListener ('submit', (event) => {
    event.preventDefault()
    helpOptions()
  })
}

const helpOptions = (event) => {
  const userName = input.value
  showMessage(userName, 'user')
  input.value = ''
  showMessage(`Nice to meet you ${userName}! Do you need some help today?`, 'bot')

  inputWrapper.innerHTML = `
    <section class="input-wrapper">
      <button id="yesbtn">Yes</button>
      <button id="nobtn">No</button>
    </section>
  `
  
  document.getElementById('yesbtn').addEventListener('click', () => threePotions('yes'))
  document.getElementById('nobtn').addEventListener('click', () => threePotions('no'))

  input.value = ''
}

const threePotions = (answer) => {
  if (answer === 'yes') {
    showMessage(`${answer}`, 'user')
    showMessage('Always happy to help! Two of the potions below will strengthen you, but one is poisonus to Hobbits. I cant remember which one. Shame!', 'bot')
    
    inputWrapper.innerHTML =`
      <select id="selectPotion">
          <option value="" selected disabled>Select a potion 🧪</option>
          <option id="blue" value="blue">The blue potion 💙</option>
          <option id="green" value="green">The green potion 💚</option>
          <option id="purple" value="purple">The purple potion 💜</option>
      </select>
    `
    
    document.getElementById('selectPotion').addEventListener('change', (ev) => potionResult(ev.target.value))

    //answer.preventDefault()

  } else {
    showMessage(`You fool! Never show your hairy feet here again! *door slam*`, 'bot')
    inputWrapper.innerHTML =`
    <button id="restart">Restart</button> 
    `

    //Push button to start over
    document.getElementById('restart').addEventListener('click', () => {
      chat.innerHTML = '';
      greeting();
    })
  }
}

const potionResult = (potion) => {
  console.log('Potion result', potion);

  inputWrapper.innerHTML = '';

  if (potion === 'blue') {
    showMessage(`You are poisoned!`, 'bot')

  } else if (potion === 'green') {
  showMessage(`You are now strong as a giant!`, 'bot')

  } else if (potion === 'purple') {
  showMessage(`You have defeated The Ring!`, 'bot')

  } else {

  }
}

//event.preventDefault()

setTimeout(greeting, 1000)

