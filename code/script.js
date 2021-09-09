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

  showMessage(`${answer}`, 'user')

  if (answer === 'yes') {
    
    showMessage('Always happy to help! Two of the potions below will strengthen you, but one is poisonus to Hobbits. I cant remember which one. Shame!', 'bot')
    
    inputWrapper.innerHTML =`
      <section class="input-wrapper">
          <button id="blue">The blue potion 💙</button>
          <button id="green">The green potion 💚</button>
          <button id="purple">The purple potion 💜</button>
      </section>
    `
    
    document.getElementById('blue').addEventListener('click', () => potionResult('blue'))
    document.getElementById('green').addEventListener('click', () => potionResult('green'))
    document.getElementById('purple').addEventListener('click', () => potionResult('purple'))
    //answer.preventDefault()

  } else {
    showMessage(`You fool! Never show your hairy feet here again! *door slam*`, 'bot')
    inputWrapper.innerHTML =`
    <button id="restart">Restart</button> 
    `

    //Push button to start over
    document.getElementById('restart').addEventListener('click', () => {
      location.reload()
    })
  }
}

const potionResult = (potion) => {
  console.log('Potion result', potion);

  inputWrapper.innerHTML = '';
  showMessage(`${potion}`, 'user')

  if (potion === 'blue') {
    
    showMessage(`You are poisoned!`, 'bot')
    inputWrapper.innerHTML =`
    <section class='input-wrapper'>
    <button id="revive">Revive</button>
    </section>
    `
    //Push button to start over
    document.getElementById('revive').addEventListener('click', () => {
      location.reload()
    })
    
  } 
  
  else if (potion === 'green') {
  
  showMessage(`You are now strong as a giant!`, 'bot')
  inputWrapper.innerHTML =`
  <section class='input-wrapper'>
  <button id="ring">destroy the ring</button>
  <button id="orks">defeat orks</button>
  </section>
  `

  document.getElementById('ring').addEventListener('click', () => afterPotionResult('ringPhoto'))
  document.getElementById('orks').addEventListener('click', () => afterPotionResult('orksPhoto'))


  } else if (potion === 'purple') {
  showMessage(`You have defeated The Ring!`, 'bot')
    inputWrapper.innerHTML =`
    <select id=purplechoice class="input-wrapper">
    <option value"" selected disabled> Go to sleep </option>
    <option value="sleep" id="sleep">Go to sleep</option>
    <option value="nosleep" id="sleep">Go to party</option>
    </select>
    `
    document.getElementById('purplechoice').addEventListener('change', (ev) => purplePotion(ev.target.value))

  } else {

  }

  
}

const afterPotionResult = (antitode) => {
  showMessage(`${antitode}`, 'user')

  if (antitode === 'ringPhoto') {
    inputWrapper.innerHTML =`
    <div>
    <img src="assets/ring.jpeg">
    </div>`
  
  }
  else {
    inputWrapper.innerHTML = `
    <div>
    <img src="assets/ring.jpeg">
    </div>`
}

}

const purplePotion = (party) => {


  if (party === 'sleep' ) {
    showMessage(`ZZZZ`, 'bot')
    
  }

  else if (party === 'nosleep') {
    showMessage(`Woo Hoo`, 'bot')
    inputWrapper.value = ''
  }

  else {
    
  }
  inputWrapper.innerHTML = ''
 
}
//event.preventDefault()

setTimeout(greeting, 1000)

