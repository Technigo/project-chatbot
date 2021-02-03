// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
let value = document.getElementById('input-value').value; // added .value to the end
const inputWrapper = document.getElementById("input-wrapper")

let userName = "" /* when do we call this variable?*/

//Question 1 -warm or cold 
const askForWarmOrCold = () => {
  showMessage (`I am here to help you chose your next holiday destination. What do you prefer?`, "bot")
  inputWrapper.innerHTML=`
  <button id="warmButton">Warm</button>
  <button id="coldButton">Cold</button>
  `
document
  .getElementById("warmButton")
  .addEventListener("click", () => {
  showMessage ("I prefer to be hot as the sun", "user")
  setTimeout (() => askForLocation(), 1000)
  })
document
  .getElementById("coldButton")
  .addEventListener("click", () =>{
  showMessage ("I prefer to be cold as an icebear", "user")
  setTimeout (() => askForLocation (), 1000)
  })
}

// Question 2 - m
const askForLocation = () => {
  showMessage(`Is that so.. then let me know what view you prefer... `, "bot")
  inputWrapper.innerHTML= `
  <select id= "select">
    <option id= "" selected disabled> Chose from this list</option>
    <option value="1" id="mountainOption">Mountain</option>
    <option value="2" id="cityOption">City</option>
    <option value="3" id="beachOption">Beach</option>
  </select>
  `
const select = document.getElementById("select")
    select.addEventListener("change", () => {
    if (select.value === "1") {
    showMessage ("I wanna go all the way up", "user")
    setTimeout (() => askForDrink (), 3000) 
   } else if (select.value === "2") {
    showMessage ("I wanna spend money", "user")
    setTimeout(()=> askForDrink(), 3000)
   } else {
    showMessage ("I don't wanna do anything", "user")
    setTimeout(() => askForDrink (), 3000)
   } 
  })
}
  

 // question number 2 
  const askForDrink = (drinkChoice) => {
    showMessage(`What kind of drinker are you`, "bot")
    inputWrapper.innerHTML=`
    <button id="drinkButton1">umbrella</button>
    <button id="drinkButton2">make it hot</button>
    <button id="drinkButton3">sweet</button>
    `
  document
    .getElementById("drinkButton1")
    .addEventListener("click", () => {
    showMessage ("I like those umbrella drinks", "user")
    setTimeout (() => yourDestination(), 1000)
    })
  document
    .getElementById("drinkButton2")
    .addEventListener("click", () =>{
    showMessage ("As long as its hot I am good", "user")
    setTimeout (() => yourDestination (), 1000)
  })
  document
    .getElementById("drinkButton3")
    .addEventListener("click", () =>{
    showMessage ("I like it sweet", "user")
    setTimeout (() => yourDestination (), 1000)
  })
}

const yourDestination = () => {
  showMessage (`so let me think for a second.. you seem to be a special case.. `)
}

// form.innerHTML = ""; to add last - it will clear the html 


  /*
  if (document.getElementById('mountainOption').selected === True){
    showMessage ("I wanna go all the way up", "user")
    setTimeout (() => askForDrink (), 1000) 
  } else if (document.getElementById("cityOption").selected === True) {
      showMessage ("I wanna spend money", "user")
      setTimeout(()=> askForDrink(), 1000)
    } else {
      showMessage ("I don't wanna do anything", "user")
    setTimeout(() => askForDrink (), 1000)
    }
  }// dont leave this bracket in the wrong place, should be after IF statement. 
  */


// Global variables, if you need any, declared here

// Functions declared here

/*this is suppose to make the button and enter with same result 
name.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('button').click ();
  }
}); */


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
form.addEventListener('submit', (event) => {
  event.preventDefault();


const value = document.getElementById('input-value').value; 
chat.innerHTML += `
  <section class="user-msg">
    <div class="bubble user-bubble">${value}</div>
     <img src="assets/user.png" alt="User" />
  </section>
  `
  setTimeout (() => showMessage(`Nice to meet you ${value}! My name is Vacation Bot`, "bot"), 1000)
  setTimeout(()=> askForWarmOrCold (), 3000);

  document.getElementById('input-value').value = "";  // !!! added this line 

});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
