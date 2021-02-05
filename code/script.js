// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
let value = document.getElementById('input-value').value;
const inputWrapper = document.getElementById("input-wrapper")

//Question 1 - location
const askForLocation = () => {
  showMessage (`I am here to help you chose your next holiday destination. Let me know what view you prefer...`, "bot")
  inputWrapper.innerHTML= `
    <select id= "select">
      <option id= "" selected disabled> Chose from this list</option>
      <option value="mountain" id="mountainOption">Mountain</option>
      <option value="city" id="cityOption">City</option>
      <option value="beach" id="beachOption">Beach</option>
    </select>
  `
const select = document.getElementById("select")
  select.addEventListener("change", () => {
  if (select.value === "mountain") {
      showMessage ("I wanna go all the way to the top!", "user")
      setTimeout (() => askForWarmOrColdMountain (), 2000) 
  } else if (select.value === "city") {
      showMessage ("I wanna spend money!", "user")
      setTimeout(()=> askForWarmOrColdCity(), 2000)
  } else {
      showMessage ("I want to relax in the beach", "user")
      setTimeout(() => askForWarmOrColdBeach (), 2000)
    } 
 })
}

// Question 2 - warm or cold
const askForWarmOrColdMountain = () => {
  showMessage (`We can make that happen! Now, should there be cold or warm in the top?`, "bot")
  inputWrapper.innerHTML=`
    <button value= "warm" class="warm-button" id="warm-button">Warm</button>
    <button value= "cold" class="cold-button" id="cold-button">Cold</button>
  `
  document.getElementById("warm-button").addEventListener("click", () => {
    showMessage ("I prefer to be hot as the sun.", "user")
    setTimeout (() => showResultMountainWarm(), 1000)
  })

  document.getElementById("cold-button").addEventListener("click", () =>{
    showMessage ("I prefer to be cold as an icebear.", "user")
    setTimeout (() => showResultMountainCold(), 1000)
  })
}

const askForWarmOrColdCity = () => {
  showMessage (`So i have an idea where to send you. But i do need to know a bit more.. Please choose`, "bot")
  inputWrapper.innerHTML=`
    <button value= "warm" class="warm-button" id="warm-button">Warm</button>
    <button value= "cold" class="cold-button" id="cold-button">Cold</button>
    `
  document.getElementById("warm-button").addEventListener("click", () => {
    showMessage ("I prefer to be hot as the sun.", "user")
    setTimeout (() => showResultCityWarm(), 1000)
  })
  document.getElementById("cold-button").addEventListener("click", () =>{
    showMessage ("I prefer to be cold as an icebear.", "user")
    setTimeout (() => showResultCityCold (), 1000)
  })
}

const askForWarmOrColdBeach = () => {
  showMessage (`hmm you like to get those feet sandy.. but what should the water be like?`, "bot")
  inputWrapper.innerHTML=`
    <button value= "warm" class="warm-button" id="warm-button">Warm</button>
    <button value= "cold" class="cold-button" id="cold-button">Cold</button>
    `
  document.getElementById("warm-button").addEventListener("click", () => {
    showMessage ("I prefer it to be hot as the sun.", "user")
    setTimeout (() => showResultBeachWarm(), 1000)
  })
  document.getElementById("cold-button").addEventListener("click", () =>{
    showMessage ("I prefer to be cold as an icebear.", "user")
    setTimeout (() => showResultBeachCold (), 1000)
  })
} 

//Results to question 2
const showResultMountainWarm  = () => {
  showMessage (`so let me think for a second.. you seem to be a special case.. `, 'bot')
  setTimeout(() => showMessage("wait for it...", "bot"), 2000)
  setTimeout(() => showMessage("wait for it...", "bot"), 3000)
  setTimeout(() => showMessage("wait for it...", "bot"), 4000)
  setTimeout(() => showMessage("Your next destination will be...", "bot"), 5500)
  setTimeout(()=> showMessage ("The Kilimanjaro!!", "bot" ), 7000)
  setTimeout(()=> satisfaction (), 8000)
} 

const showResultMountainCold = () => {
  showMessage (`so let me think for a second.. you seem to be a special case.. `, 'bot')
  setTimeout(() => showMessage("wait for it...", "bot"), 2000)
  setTimeout(() => showMessage("wait for it...", "bot"), 3000)
  setTimeout(() => showMessage("wait for it...", "bot"), 4000)
  setTimeout(() => showMessage("Your next destination will be...", "bot"), 5500)
  setTimeout(()=> showMessage ("Napoli!!", "bot"), 7000)
  setTimeout(()=> satisfaction (), 8000)
} 

const showResultCityWarm = () => {
  showMessage (`so let me think for a second.. you seem to be a special case.. `, 'bot')
  setTimeout(() => showMessage("wait for it...", "bot"), 2000)
  setTimeout(() => showMessage("wait for it...", "bot"), 3000)
  setTimeout(() => showMessage("wait for it...", "bot"), 4000)
  setTimeout(() => showMessage("Your next destination will be...", "bot"), 5500)
  setTimeout(()=> showMessage ("Mexico City!", "bot" ), 7000)
  setTimeout(()=> satisfaction (), 8000)
} 
const showResultCityCold = () => {
  showMessage (`so let me think for a second.. you seem to be a special case.. `, 'bot')
  setTimeout(() => showMessage("wait for it...", "bot"), 2000)
  setTimeout(() => showMessage("wait for it...", "bot"), 3000)
  setTimeout(() => showMessage("wait for it...", "bot"), 4000)
  setTimeout(() => showMessage("Your next destination will be...", "bot"), 5500)
  setTimeout(()=> showMessage ("Moscow!!", "bot"), 7000)
  setTimeout(()=> satisfaction (), 8000)
} 

const showResultBeachWarm= () => {
  showMessage (`so let me think for a second.. you seem to be a special case.. `, 'bot')
  setTimeout(() => showMessage("wait for it...", "bot"), 2000)
  setTimeout(() => showMessage("wait for it...", "bot"), 3000)
  setTimeout(() => showMessage("wait for it...", "bot"), 4000)
  setTimeout(() => showMessage("Your next destination will be...", "bot"), 5500)
  setTimeout(()=> showMessage ("Aruba!!", "bot"), 7000)
  setTimeout(()=> satisfaction (), 8000)
} 

const showResultBeachCold= () => {
  showMessage (`so let me think for a second.. you seem to be a special case.. `, 'bot')
  setTimeout(() => showMessage("wait for it...", "bot"), 2000)
  setTimeout(() => showMessage("wait for it...", "bot"), 3000)
  setTimeout(() => showMessage("wait for it...", "bot"), 4000)
  setTimeout(() => showMessage("Your next destination will be...", "bot"), 5500)
  setTimeout(()=> showMessage ("Iceland!!", "bot"), 7000)
  setTimeout(()=> satisfaction (), 9000)
} 
//Question 3 - Satisfaction button 
const satisfaction = () => {
  showMessage ("Are you ready to pack?", "bot")
  inputWrapper.innerHTML=`
    <button value= "yes" class="yes" id="yes-button">Yes</button>
    <button value= "no" class="no" id="no-button">No</button>
    `
  document.getElementById("yes-button").addEventListener("click", () => {
    setTimeout (() => showMessage("HAPPY HOLIDAYS!! We did our best!", "bot"),1000)
    inputWrapper.innerHTML = "";
  })
  document.getElementById("no-button").addEventListener("click", () =>{
    setTimeout (() => askForLocation (), 1000)
  })
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
  setTimeout(()=> askForLocation (), 3000);
  
  document.getElementById('input-value').value = "";   
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)

setTimeout(greeting, 1000)
