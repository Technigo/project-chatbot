// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const send = document.getElementById('send')

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
const greeting = () => {
  showMessage(`Hello, what is your name?`, 'bot') // denna är kopplad till <p>message</p>
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = nameInput.value;
  showMessage(name, 'user');
  nameInput.value = "";
  setTimeout(() => showDecade(name), 1000);
}

const showDecade = (name) => {
  showMessage(`Welcome ${name}. What decade do you feel like diving into?`, 'bot');

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
  showMessage(year, 'user');
  setTimeout(() => showMessage(`${year} you say! Cool, what genre do you feel like?`, 'bot'), 1000);

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
  setTimeout(() => showMessage(`You have chosen ${select}. Do you have a Netflix account?`, 'bot'), 1000);
  
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
    
  setTimeout(() => showMessage(`Too bad. This bot is sponsored by Netflix. Might we suggest opening an account`, 'bot'), 1000);
  inputWrapper.innerHTML = `
    <button id="noAccount"><a href="https://www.netflix.com">Sign up here!</a></button>
    `

  } else 
  setTimeout(() => showMessage(`Good. You know what to <a href="https://www.netflix.com">do</a>`, 'bot'), 1000);
}

// Set up your eventlisteners here. 

form.addEventListener('submit', handleNameInput);
 
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1200) 