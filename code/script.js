// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
// const input = document.getElementById('input-wrapper');

// Global variables, if you need any, declared here
let step = 1;

// Functions declared here
const postAnswer = (value) => {
  if (value != "") {
    showMessage(value, 'user');
    showMessage(`Welcome ${value}, what style are you looking for? Funny, scary or cute?`, 'bot');
  } else {
    step -= 1;
  }
}

const threeWayQuestion = (value) => {

  showMessage(value, 'user');

  let normalizeValue = value.toLowerCase();

  if (normalizeValue.includes('funny')) {
    showMessage(`What's you favorite Disney movie?`, 'bot');
    chat.innerHTML += `
      <div class="choice-btn-container">
        <button id='a' class="choice-btn">a</button>
        <button id='b' class="choice-btn">b</button>
        <button id='c' class="choice-btn">c</button>
      </div>
    `
    document.getElementById('a').addEventListener("click", () => {
      console.log("a")
    });
    document.getElementById('b').addEventListener("click", () => {
      console.log("b")
    });
    document.getElementById('c').addEventListener("click", () => {
      console.log("c")
    });
      
  } else if (normalizeValue.includes('scary')) {
    showMessage(`What's you favorite Disney movie?`, 'bot');
    chat.innerHTML += `
      <div class="choice-btn-container">
        <button id='a' class="choice-btn">a</button>
        <button id='b' class="choice-btn">b</button>
        <button id='c' class="choice-btn">c</button>
      </div>
    `
    document.getElementById('a').addEventListener("click", () => {
      console.log("a")
    });
    document.getElementById('b').addEventListener("click", () => {
      console.log("b")
    });
    document.getElementById('c').addEventListener("click", () => {
      console.log("c")
    });

  } else if (normalizeValue.includes('cute')) {
    showMessage(`What's you favorite Disney movie?`, 'bot');
    chat.innerHTML += `
      <div class="choice-btn-container">
        <button id='a' class="choice-btn">a</button>
        <button id='b' class="choice-btn">b</button>
        <button id='c' class="choice-btn">c</button>
      </div>
    `
    document.getElementById('a').addEventListener("click", () => {
      console.log("a")
    });
    document.getElementById('b').addEventListener("click", () => {
      console.log("b")
    });
    document.getElementById('c').addEventListener("click", () => {
      console.log("c")
    });

  } else {
    showMessage(`Please answer the question, What style are you looking for? Funny, scary or cute?`, 'bot');
    step -= 1;
  }
}




// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => { 
  if (sender === 'user') {
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

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
document.getElementById("button").addEventListener("click", (event) => {
  event.preventDefault();
  const value = document.getElementById(`name-input`).value;
  document.getElementById(`name-input`).value = "";
  // console.log(value);
  if(step === 1) {
    postAnswer(value);
    step += 1;
  } else if (step === 2) {
    threeWayQuestion(value);
    step += 1;  
  }
});


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
