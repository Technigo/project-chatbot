// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameInput = document.getElementById("name-input")
const submitButton = document.getElementById("submit-button")
const inputWrapper = document.getElementById("input-wrapper")


// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    console.log(`${message}`)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `

    //+= means add to it only = would exchange everything. Here we only always want to add things

    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    console.log(`${message}`)
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
  console.log(`${message}`)
}

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
}

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1500)

// Eventlisteners goes here 👇

let nameUser =""

const handleNameInput = (event) => {
  event.preventDefault()
  nameUser = nameInput.value
  showMessage(nameUser, 'user')
  nameInput.value = ""
  setTimeout(() => askWeatherType(), 1000)
}

//Remember put the setTimeout into the function before the one that should be called afterwards. 

submitButton.addEventListener("click", handleNameInput)

let coldWeather
let warmWeather
let hotWeather

const askWeatherType = () => {
  showMessage(`Hi and welcome ${nameUser} to your personal Travel Advisor, what type of weather do you like?`, 'bot')
  inputWrapper.innerHTML = `
    <button id="cold-weather" type="button">Cold Weather</button>
    <button id="warm-weather" type="button">Warm Weather</button>
    <button id="hot-weather" type="button">Hot Weather</button>`
  coldWeather = document.getElementById("cold-weather")
  warmWeather = document.getElementById("warm-weather")
  hotWeather = document.getElementById("hot-weather")
  coldWeather.addEventListener("click", () => handleWeatherInput(`Cold Weather`))
  warmWeather.addEventListener("click", () => handleWeatherInput(`Warm Weather`))
  hotWeather.addEventListener("click", () => handleWeatherInput(`Hot Weather`))
}

let weatherTypeText

const handleWeatherInput = (weatherType) => {
  showMessage(weatherType, 'user')
  weatherTypeText = weatherType.value
  setTimeout(() => askTripLength(weatherType), 1000)
}

console.log(askWeatherType)
//console.log(weatherType)

let tripLengthText

const askTripLength = (weatherType) => {
  showMessage(`${weatherType} is a great choice! How long do you want your holiday to last?`, 'bot')
  inputWrapper.innerHTML = `
    <select id="trip-length">
      <option value="" disabled selected hidden>Choose from the following options:</option>
      <option value="three to four Days">Three to four Days</option>
      <option value="one to two Weeks">One to two Weeks</option>
      <option value="more than two Weeks">More than two Weeks</option>
    </select>`
  const tripLength = document.getElementById("trip-length")
  tripLength.addEventListener("change", () => {
    tripLengthText = tripLength.value
    handleTripInput(tripLengthText)
  })
  console.log(tripLength)
}

console.log(askTripLength)

const handleTripInput = (tripLengthText) => {
  showMessage(tripLengthText, 'user')
  setTimeout(() => askGroupType(tripLengthText), 1000)
}

console.log(handleTripInput)

let soloGroupType
let partnerGroupType
let familyGroupType
let groupGroupType

const askGroupType = (tripLengthText) => {
  showMessage(`Your trip will last ${tripLengthText}. What kind of Group will you be travelling with? I will travel...`, 'bot')
  inputWrapper.innerHTML = `
    <button id="solo" type="button">alone.</button>
    <button id="partner" type="button">with a partner.</button>
    <button id="family" type="button">with family.</button>
    <button id="group" type="button">with a group.</button>`
  soloGroupType = document.getElementById("solo")
  partnerGroupType = document.getElementById("partner")
  familyGroupType = document.getElementById("family")
  groupGroupType = document.getElementById("group")
  soloGroupType.addEventListener("click", () => handleGroupInput(`alone.`))
  partnerGroupType.addEventListener("click", () => handleGroupInput(`with a partner.`))
  familyGroupType.addEventListener("click", () => handleGroupInput(`with family.`))
  groupGroupType.addEventListener("click", () => handleGroupInput(`with a group.`))
}

let groupType

const handleGroupInput = (groupType) => {
  showMessage(groupType, 'user')
  setTimeout(() => askPermission(groupType), 1000)
}

console.log(askGroupType)

let yesPermission
let noPermission
let startOverPermission

const askPermission = () => {
  showMessage(`All right, ${nameUser}! According to your preferences:
    ${weatherTypeText}
    A trip lenght of ${tripLengthText}.
    And the fact that you are travelling ${groupType}.
    We will book a trip to XYZ for you.
    Do you want us to book this trip?
  `)
  inputWrapper.innerHTML = `
    <button id="yes" type="button">Yes!</button>
    <button id="no" type="button">No.</button>
    <button id="again" type="button">Start over.</button>`
    yesPermission = document.getElementById("yes")
    noPermission = document.getElementById("no")
    startOverPermission = document.getElementById("again")
    yesPermission.addEventListener("click", () => handlePermissionInput(`Yes!`))
    noPermission.addEventListener("click", () => handlePermissionInput(`No.`))
    startOverPermission.addEventListener("click", () => handlePermissionInput(`Start over.`))
}

console.log(askPermission)

let permissionType

const handlePermissionInput = (permissionType) => {
  showMessage(permissionType, 'user')
}

//If we create new HTML elements in JS we can't declare them at the top of the file. Do this when working next time to fix the null error! we need to add them inside the function

//Name Function as verbs so it explains what is does