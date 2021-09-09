// All the DOM selectors stored as short variables
const handleNameInput = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')


let questionNumber = 1

// Global variables, if you need any, declared here

// Functions declared here
const greeting = () => {
  questionNumber++
  showMessage(`Hello, welcome to the café! What's your name?`, 'bot')
}

const questionName = () => {
//  event.preventDefault();
  questionNumber++
  console.log(`we are at ${questionNumber}`);

  let inputedName = handleNameInput.value;
  showMessage(inputedName, 'user');
  handleNameInput.value ='';

  showMessage(`Hello ${inputedName}! What would you like to drink?`, 'bot');

  drinkButtons();
}

const drinkButtons = () => {
  inputWrapper.innerHTML = `
  <button id="coffeeBtn">Coffee</button>
  <button id="teaBtn">Tea</button>
  <button id="juiceBtn">Juice</button>`

  const coffee = document.getElementById('coffeeBtn')
  const tea = document.getElementById('teaBtn')
  const juice = document.getElementById('juiceBtn')

  coffee.addEventListener('click', () => drinkChoice('coffee'));
  tea.addEventListener('click', () => drinkChoice('tea'));
  juice.addEventListener('click', () => drinkChoice('juice'));


}

drinkChoice = (type) => {
  questionNumber++


  if (type === 'coffee') {
    inputWrapper.innerHTML = `
      <select id="coffeeChoices">
        <option value="" selected disabled>👇 Select your coffee...</option>
        <option value="black">Black</option>
        <option value="white">With milk</option>
        <option value="chaiLatte">chai latte</option>
      </select>
    `
    const coffee = document.getElementById('coffeeChoices')
    coffee.addEventListener('change', () => theEnd('coffee'));

  } else if (type === 'tea') {
    inputWrapper.innerHTML = `
      <select id="teaChoices">
        <option value="" selected disabled>👇 Select your tea...</option>
        <option value="blackTea">Black Tea</option>
        <option value="redTea">Red Tea</option>
        <option value="whiteTea">white Tea</option>
      </select>
    `
    const tea = document.getElementById('teaChoices')
    tea.addEventListener('change', () => theEnd('tea'));
  } else {
    inputWrapper.innerHTML = `
      <select id="juiceChoices">
        <option value="" selected disabled>👇 Select juice...</option>
        <option value="orange">Orange Juice</option>
        <option value="apple">Apple Juice</option>
        <option value="carrot">Carrot Juice</option>
      </select>
    `
    const juice = document.getElementById('juiceChoices')
    juice.addEventListener('change', () => theEnd('juice'));
  }
}


const theEnd = () => {
  questionNumber++
  showMessage(`Thank you for your order of!`, 'bot')
}





// Starts here


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(showMessage)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
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
  chat.scrollTop = chat.scrollHeight
}


const botChat = (event) => {
  event.preventDefault();
  console.log('running bot chat');
  console.log(questionNumber);
  if (questionNumber === 1) {
    setTimeout(greeting, 500)
  } else if  
    (questionNumber === 2) {
      console.log('hej');
      setTimeout(questionName, 500);
  } else if 
    (questionNumber === 3) {
      
  } else {

  }
}





// Set up your eventlisteners here
nameForm.addEventListener('submit', botChat);




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.




setTimeout(greeting, 500)
//botChat()