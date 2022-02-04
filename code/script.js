// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const send = document.getElementById('send')
const startPage = document.getElementById('startPage')
const startBtn = document.getElementById('startBtn')

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/netbot-user.svg" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/netbot.svg" alt="Bot" />
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

startBtn.onclick = () => {
  startPage.style.display = "none"
  setTimeout(greeting, 1200)
}


const greeting = () => {
  showMessage(`Hi there, who is this?`, 'bot') // denna är kopplad till <p>message</p>
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = nameInput.value;
  showMessage(`It's me, ${name}. Please help!`, 'user');
  nameInput.value = "";
  setTimeout(() => showDecade(name), 1000);
}

const showDecade = (name) => {
  showMessage(`Welcome ${name}. Of course! First, please tell me what decade you feel like diving into?`, 'bot');
  setTimeout(() => selectMovie(year), 1000);

  inputWrapper.innerHTML = `
    <button id='1980Btn'>1980s</button>
    <button id='1990Btn'>1990s</button>
    <button id='2000Btn'>2000s</button>
  `

  document.getElementById('1980Btn').addEventListener("click", () => selectMovie('1980s'));
  document.getElementById('1990Btn').addEventListener("click", () => selectMovie('1990s'));
  document.getElementById('2000Btn').addEventListener("click", () => selectMovie('2000s'));
}
  
const selectMovie = (year) => {
  inputWrapper.innerHTML =""
  showMessage(`Really feel like watching something from the ${year} `,  'user');
  showMessage(`${year} you say! Cool, what genre do you feel like?`, 'bot');

  if (year === '1980s') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Pick a genre</option>
        <option value="1980's comedy">An 1980's comedy</option>
        <option value="1980's horror">An 1980's horror</option>
        <option value="1980's documentary">An 1980's documentary</option>
      </select>
    `
  } else if (year === '1990s') {
      inputWrapper.innerHTML = `
       <select id="select">
        <option value="" selected disabled>Pick a genre</option>
        <option value="1990's comedy">An 1990's comedy</option>
        <option value="1990's horror">An 1990's horror</option>
       <option value="1990's documentary">An 1990's documentary</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Pick a genre</option>
        <option value="2000's comedy">A 2000's comedy</option>
        <option value="2000's horror">A 2000's horror</option>
       <option value="2000's documentary">A 2000's documentary</option>
      </select>
    `
  }
  const select = document.getElementById('select')
  select.addEventListener('change', () => confirmation(select.value))
}

const confirmation = (select) => {
  showMessage(select, 'user');
  setTimeout(() => showMessage(`Ohh ${select}, fancy! Do you have a Netflix account?`, 'bot'), 1000);
  
  inputWrapper.innerHTML = `
    <button id='yesBtn'>Yes</button>
    <button id='noBtn'>No</button>
  `

  document.getElementById('yesBtn').addEventListener("click", () => tooBad('yes'));
  document.getElementById('noBtn').addEventListener("click", () => tooBad('no'));
  button.addEventListener('select', () => tooBad(answer));
}

const tooBad = (answer) => {
  showMessage(answer, 'user');

  if (answer === 'no') {
  setTimeout(() => showMessage(`Too bad. This bot is sponsored by Netflix. To get access to all my suggestions, please create an account. See you soon!`, 'bot'), 1000);
  inputWrapper.innerHTML = `
    <button id="signUpBtn"><a href="https://www.netflix.com/signup" target="_blank">Create an account</a></button>
    `
  } else {
  setTimeout(() => showMessage(`Awesome. However, despite your wishes, these are the three best movies of all times. So go ahead and pick one. Enjoy your meal!`, 'bot'), 1000);
  inputWrapper.innerHTML = `
  <button id="jawsBtn"><a href="https://www.netflix.com/se-en/title/60001220" target="_blank">Jaws</a></button>
  <button id="scaryBtn"><a href="https://www.netflix.com/se-en/title/60000870" target="_blank">Scary Movie</a></button>
  <button id="shindlerBtn"><a href="https://www.netflix.com/se/title/60036359" target="_blank">Schindler's List</a></button>
  `
}}

// Set up your eventlisteners here. 

form.addEventListener('submit', handleNameInput);
 
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// setTimeout(greeting, 1200) 