// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const input = document.getElementById('name-input');
const sendBtn = document.getElementById('send');

// If you need any global variables that you can use across different functions, declare them here:
let questionNumber = 1 


// Declare your functions after this comment


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user_2.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot_2.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

    // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
    chat.scrollTop = chat.scrollHeight;
  }

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    showMessage(message)
    input.value = ''
    setTimeout(() => showDecade(message), 1000)
  } else if (questionNumber === 2) {
    showMessage(message)
    setTimeout(() => showYear(message), 1000)
  } else  {
    showMessage(message)
    setTimeout(() => showEvent(message), 1000)
  } 
  } 



// Starts here
const greetUser = () => {
  questionNumber === 1
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}  
// Initial button click, here I should get the name entered
sendBtn.addEventListener('click', (event) => {
  event.preventDefault()

  // Store the value in a variable so I can access it after we 
  // clear it from the input
  let userName = input.value
  showMessage(`${userName}`, 'user');

  // Clears the input field
  input.value = ''
  //Here I call the function where I present the dishes to choose from. I will also pass the userName
  setTimeout(() => showDecade(userName), 1000)
})

const showDecade = (userName) => {
  questionNumber++
  showMessage(
    `Nice to meet you ${userName}. When do you want to go?`, 'bot' )

  inputWrapper.innerHTML = `
    <button id="1920Btn">1920's</button>
    <button id="1980Btn">1980's</button>
    <button id="2000Btn">2000's</button>
  `

  document
    .getElementById('1920Btn')
    .addEventListener('click', () => nextQuestion('1920'))
  document
    .getElementById('1980Btn')
    .addEventListener('click', () => nextQuestion('1980'))
  document
    .getElementById('2000Btn')
    .addEventListener('click', () => nextQuestion('2000'))
}

  const showYear = (type) => {
    questionNumber++

  showMessage(
    `${type}'s`, 'user')

    showMessage (
    `Great choice! The ${type}'s were exciting times!`, 'bot')

  showMessage(
    `Where do you want to go?`, 'bot')

  if (type === '1920') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Take me to...</option>
        <option value="Black Thursday">Oct 24th 1929, Wall Street, New York</option>
        <option value="Steamboat Willie">Nov 18th 1928, Universal's Colony Theater, New York</option>
        <option value="Amelia Earhart">June 18th 1928, Pwil, Wales</option>
      </select>
    `
  } else if (type === '1980') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Take me to...</option>
        <option value="Live Aid">July 13th 1985, Wembley, London</option>
        <option value="Tank Man">June 5th 1989, Tiananmen Square, Bejing</option>
        <option value="Berlin Wall">Nov 9th 1989, Berlin, Germany</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Take me to...</option>
        <option value="Millenium ">Jan 1st 2000, London, UK</option>
        <option value="iPhone">Jan 9th 2007, San Fransisco, California</option>
        <option value="Obama">Jan 20th 2009, Capitol Building, Washington D.C</option>
      </select>
    `
  }

  const selectElement = document.getElementById("select");
  const selectedValue = selectElement.value;
  select.addEventListener('change', () => nextQuestion(select.value)) 
}

const showEvent = (selectedValue) => {
  questionNumber++ 


  if (selectedValue === "Black Thursday") {
    window.open('https://www.youtube.com/watch?v=A53Os-DuS94');
    input.value = ''
  }
  else if (selectedValue === "Steamboat Willie") {
    window.open('https://www.youtube.com/watch?v=BBgghnQF6E4');
    input.value = ''
  }
  else if (selectedValue === "Amelia Earhart") {
    window.open('https://www.youtube.com/watch?v=4BgAKnpK7p4');
    input.value = ''
  }
  else if (selectedValue === "Live Aid") {
    window.open('https://www.youtube.com/watch?v=zP120YaAL8w&list=PLGjpH5uqT5EKflp4LoMJ6FLpkNk16agsH');
    input.value = ''
  }
  else if (selectedValue === "Tank Man") {
    window.open('https://www.youtube.com/watch?v=YeFzeNAHEhU');
    input.value = ''
  }
  else if (selectedValue === "Berlin Wall") {
    window.open('https://www.youtube.com/watch?v=zmRPP2WXX0U');
    input.value = ''
  }
  else if (selectedValue === "iPhone") {
    window.open('https://www.youtube.com/watch?v=VQKMoT-6XSg');
    input.value = ''
  }
  else if (selectedValue === "Millenium") {
    window.open('https://www.youtube.com/watch?v=m4FPHa2zZrQ');
    input.value = ''
  }
  else {
    window.open('https://www.youtube.com/watch?v=S4VoolvEsyQ');
    input.value = ''
  }

}
// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000); 

