// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const sendButton = document.querySelector('.send-btn');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name-form"')
// const userDiv= document.createElement('div');
// const userimg = document.createElement('img');
// userimg.src = './assets/user.png';
// userimg.style.height='60px';
// userimg.style.width='60px';


// If you need any global variables that you can use across different functions, declare them here:
let userName=" "; 
let question= 0; 


// Declare your functions after this comment
sendButton.addEventListener('click', (e) => {
  e.preventDefault();
    // chat.appendChild(userDiv);
  // userDiv.appendChild(nameInput);
  // userDiv.appendChild(userimg);
  const name = nameInput.value;
  showMessage(name, 'user');
  nameInput.value = ''; 

})

const allQuestions=(answer)=>{
  if(questionNumber===1){
 
    input.value=""
  }

} 



// This function will add a chat bubble in the correct place based on who the sender is
// const sender = userName.value;

const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender

  showMessage("Hello there, What's your name?", 'bot');
  
  // showMessage(`${nameInput.value}`,'user' );
  // showMessage('What do you want to eat today? ', 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}


// Set up your eventlisteners here

// const pizzaBtn = document.createElement('button');
// inputWrapper.appendChild(pizzaBtn);


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);