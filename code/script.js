// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')

const btnSelectMain = `
    <button id='sushi' type='submit'> Sushi</button>
    <button id='pokebowl' type='submit'> Pokebowl</button>
    <button id='yakisoba' type='submit'> Yakisoba</button>
    `

const selectSushi = `
<select name="sushi" id="select">
    <option value="" selected disabled>--Please choose an option--</option>
    <option value="9">Mixed 9 pcs</option>
    <option value="12">Mixed 12 pcs</option>
    <option value="16">Mixed 16 pcs</option>
</select>`

const selectPokebowl = `
<select name="pokebowl" id="select">
    <option value="" selected disabled>--Please choose an option--</option>
    <option value="salmon">Pokebowl salmon</option>
    <option value="schrimp">Pokebowl shrimp</option>
    <option value="tofu">Pokebowl tofu</option>
</select>
`

const selectYakisoba = `
<select name="Yakisoba" id="select">
    <option value="" selected disabled>--Please choose an option--</option>
    <option value="salmon">Yakisoba salmon</option>
    <option value="pork">Yakisoba pork</option>
    <option value="tofu">Yakisoba tofu</option>
</select>
`

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

// Interaction 1, initial greeting

const greeting = () => {
  showMessage(`Hello and welcome to Migaro! What is your name?`, 'bot')
}
  setTimeout(greeting, 1000) // This means the greeting function will be called one second after the website is loaded.

const handleNameInput = (event) => {
  event.preventDefault()

  const name = nameInput.value
  console.log(name)

  showMessage(name, 'user') 
  nameInput.value = '' //clearing name input setting it to an empty string
  
  setTimeout(() => foodOptions(btnSelectMain, name), 1000)
}  

// Interaction 2, Food options

const foodOptions = (selectMain, name) => {
  showMessage(`Nice to meet you ${name}! What are you craving today? See our options below.`, 'bot')
  form.innerHTML = selectMain
  document
  .getElementById('sushi')
  .addEventListener('click', () => {
    showMessage(`Sushi would make my day!`,'user')
    form.innerHTML = ''
    setTimeout(() => selectFinalOption(selectSushi), 1000)
  })

  document
  .getElementById('pokebowl')
  .addEventListener('click', () => {
    showMessage(`A pokebowl would make my day!`,'user')
    form.innerHTML = ''
    setTimeout(() => selectFinalOption(selectPokebowl), 1000)
  })

  document
  .getElementById('yakisoba')
  .addEventListener('click', () => {
    showMessage(`Yakisoba would make my day!`,'user')
    form.innerHTML = ''
    setTimeout(() => selectFinalOption(selectYakisoba), 1000)
  })
}

// Interaction 3 - choose what to eat

const selectFinalOption = (selectFinal) => {
  showMessage(`Of course, everybody loves sushi! Make your choice below`, 'bot')
  
  form.innerHTML = selectFinal
  const mainChoice = document.getElementById('select')
    mainChoice.addEventListener('change', () => {
      console.log(mainChoice)
      showMessage(`${mainChoice.value}`,'user')

      form.innerHTML = ''
      setTimeout(() => payment(), 1000)
    })
}

// Interaction 4 payment

const payment = () => {
  console.log('pay')
}

const handleFoodInput = (event) => {
  event.preventDefault()
}

// Set up your eventlisteners here

form.addEventListener('submit', handleNameInput)
