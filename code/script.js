// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const sendBtn = document.querySelector(".send-btn");
const form = document.getElementById("name-form");

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
  // This little thing makes the chat scroll to the last 
  //message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
// Input Name and Show on Chat Screen  
sendBtn.addEventListener("click", (e)=> {
  e.preventDefault();
  const nameInput = document.getElementById("name-input").value;
  showMessage(nameInput, "user");
  document.getElementById("name-input").value = "";

  // Bot update Name
  const answerName = () => {
    showMessage(`Nice to meet you ${nameInput}`, "bot");
    showMessage(`Please choose your food`, "bot");
    // Choose food
    foodOption();
  }
  setTimeout(answerName,1500);
  

  // Add foodOption to html
  const foodOption = () => {
    form.innerHTML = `
    <button id="pizza" type="button">Pizza</button>
    <button id="hamburger" type="button">Hamburger</button>
 `; 
   document.getElementById("pizza").addEventListener("click", function(){
       typeOfFood(pizza); //typeOfFood(food) 
       showMessage(`You are in mood for pizza, please choose size`, "bot");
       showMessage(`pizza`,'user')
   })
   document.getElementById("hamburger").addEventListener("click", function(){
       typeOfFood(hamburger);
       showMessage(`You are in mood for hamburger, please choose size`, "bot");
       showMessage(`hamburger`,'user')
   })

  const typeOfFood = (food) => {
    if (food === pizza) {
      form.innerHTML = `
      <label for="pizza-topping">Choose topping:</label>
      <select name="pizza" id="pizza-topping">
        <option value="chicken">Chicken</option>
        <option value="ham">Ham</option>
        <option value="vegan">Vegan</option>
      </select>
      `
     const topping=document.getElementById('pizza-topping');
     topping.addEventListener('change',function(){
      showMessage(`${topping.value}`,'bot')  
     })
    
    } else if (food === hamburger) {
      form.innerHTML = `
      <label for="salad-topping">Choose topping:</label>
  
      <select name="salad" id="salad-topping">
        <option value="tomato">tomato</option>
        <option value="egg">egg</option>
        <option value="salmon">salmon</option>
      </select>
      `
      const saladTopping=document.getElementById('salad-topping');
      saladTopping.addEventListener('change',function(){
        showMessage(`${saladTopping.value}`,'bot')
      })
    }
   }
  }
})

 // Choose size 
 const foodSize = (size) => {
  form.innerHTML = `
  <button id="big" type="button">Big 😍</button>
  <button id="small" type="button">Small 😢</button>
`;
 }


//Bot answer qi



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
