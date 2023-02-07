// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

// If you need any global variables that you can use across different functions, declare them here:
// this allow me to check the question in order
let i = 0

// Declare your functions after this comment
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
// question controller is used to control the order of my question and for them to foolow one after the other
const questionController = (message) => {
  console.log('questionNumber start', i, message)
  if(i === 1) {
    userReply(message)
    setTimeout(whatClothes(message), 1000)
    input.value = ''
  } else if(i === 2) {
    userReply(message)
    setTimeout(whichSize(message), 1000)
  } else if(i === 3) {
    userReply(message)
    setTimeout(showPrice(message), 1000)
  } else if(i === 4) {
    userReply(message)
    setTimeout(lastMessage(message), 1000)
  } else {
    console.log("sium")
  }
  console.log('questionNumber end', i, message)
}



const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument
  // "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  i++
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
sendBtn.addEventListener('click', () => questionController(input.value))

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greetUser, 1000); 

// App starts here
const whatClothes = (msg) => {
  i++
  botReply(`Nice to meet you ${msg}! What type of cloth do you want to shop today? Select from the option down below`, 'bot');
  inputWrapper.innerHTML = ''
  inputWrapper.innerHTML += `
    <div class="btn-div" id="shoes">
      Shoes
    </div>
    <div class="btn-div" id="pants">
      Pants
    </div>
    <div class="btn-div" id="hoodies">
      Hoodies
    </div>
  `

  document.getElementById('shoes').addEventListener('click', () => questionController('Shoes'))
  document.getElementById('pants').addEventListener('click', () => questionController('Pants'))
  document.getElementById('hoodies').addEventListener('click', () => questionController('Hoodies'))

}

const whichSize = (msg) => {
  i++
  botReply(`Nice choice with the ${msg}! What's your size?`, 'bot');
  inputWrapper.innerHTML = ''
  if (msg === "Shoes") {
    inputWrapper.innerHTML += `
    <select id="select-shoes">
      <option value="" selected disabled>👇 Select a size</option>  
      <option value="36">36</option>
      <option value="37">37</option>
      <option value="38">38</option>
      <option value="39">39</option>
      <option value="40">40</option>
      <option value="41">41</option>
      <option value="42">42</option>
      <option value="43">43</option>
    </select>
    `
    const selectShoes = document.getElementById('select-shoes')
    selectShoes.addEventListener('change', () => questionController(`Shoes Size: ${selectShoes.value}`))
    
  } else if (msg === "Pants") {
    inputWrapper.innerHTML += `
    <div class="btn-div" id="s">
      S
    </div>
    <div class="btn-div" id="m">
      M
    </div>
    <div class="btn-div" id="l">
      L
    </div>
    `
    document.getElementById('s').addEventListener('click', () => questionController('Small Pants'))
    document.getElementById('m').addEventListener('click', () => questionController('Medium Pants'))
    document.getElementById('l').addEventListener('click', () => questionController('Large Pants'))
    
  } else if (msg === "Hoodies") {
    inputWrapper.innerHTML += `
    <div class="btn-div" id="l">
      L
    </div>
    <div class="btn-div" id="xl">
      XL
    </div>
    `
    document.getElementById('xl').addEventListener('click', () => questionController('Extra Large Hoodies'))
    document.getElementById('l').addEventListener('click', () => questionController('Large Hoodies'))
    
  }
}

const showPrice = (msg) => {
  i++
  inputWrapper.innerHTML = ''
  inputWrapper.innerHTML += `
    <div class="btn-div" id="no">
      No
    </div>
    <div class="btn-div" id="yes">
      Yes
    </div>
  `
  if(msg.includes('Shoes')) {
    botReply(`You selected ${msg} <br/>Price: 90€<br/>Would you like to buy it now?`, 'bot');
  } else if(msg.includes('Pants')) {
    botReply(`You selected ${msg} <br/>Price: 60€<br/>Would you like to buy it now?`, 'bot');
  } else if (msg.includes('Hoodies')) {
    botReply(`You selected ${msg} <br/>Price: 50€<br/>Would you like to buy it now?`, 'bot');
  }

  document.getElementById('yes').addEventListener('click', () => questionController('Yes!'))
  document.getElementById('no').addEventListener('click', () => questionController('No..'))
}

const lastMessage = (msg) => {
  inputWrapper.innerHTML = ''
  if(msg.includes('Yes')) {
    botReply(`Thank you very much! You will not regret this`, 'bot');
  } else {
    botReply(`Go f*** yourself, you will never find anything better than this`, 'bot');
  }
  setTimeout(restartApp, 5000); 
}

const restartApp = () => {
  chat.innerHTML = ''
  i=0
  greetUser()
}

setTimeout(greetUser, 1000)