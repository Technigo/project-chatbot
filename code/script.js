// DOM selectors goes here 👇
const chat = document.getElementById("chat")
const nameInput = document.getElementById("name-input")
const submitButton = document.getElementById("submit-button")
const inputWrapper = document.getElementById("input-wrapper")

// Global Variables go here 👇
let nameUser =""
let weatherTypeText =""
let tripLengthText =""
let groupTypeText =""
let permissionTypeText = ""

// Functions goes here 👇
const showMessage = (message, sender) => {
  if (sender === "user") {
    console.log(`${message}`)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user02.png" alt="User" />  
      </section>`
  } else if (sender === "bot") {
    console.log(`${message}`)
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot02.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>`
  }
  //+= means add to it only = would exchange everything.
  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

const greetUser = () => {
  showMessage("Hello there, what's your name?", "bot")
}
setTimeout(greetUser, 1500)

const handleNameInput = (event) => {
  event.preventDefault()
  nameUser = nameInput.value.trim()
  if (nameUser !== "") {
    showMessage(nameUser, "user")
  }
  else {
    showMessage("Please enter your name!", "bot")
    handleNameInput()
  }
  nameInput.value = ""
  setTimeout(() => askWeatherType(), 1000)
}
//Remember put the setTimeout into the function before the one that should be called afterwards. 

const askWeatherType = () => {
  showMessage(`Hi and welcome ${nameUser} to your personal Travel Advisor, what type of weather do you like?`, "bot")
  inputWrapper.innerHTML = `
    <div id="weather-type">
      <button id="cold-weather" type="button">Cold Weather</button>
      <button id="warm-weather" type="button">Warm Weather</button>
      <button id="hot-weather" type="button">Hot Weather</button>
    </div>`
    
  const weatherType = document.getElementById("weather-type")
  const coldWeather = document.getElementById("cold-weather")
  const warmWeather = document.getElementById("warm-weather")
  const hotWeather = document.getElementById("hot-weather")

  weatherTypeText = weatherType.value

  coldWeather.addEventListener("click", () => handleWeatherInput("Cold Weather"))
  warmWeather.addEventListener("click", () => handleWeatherInput("Warm Weather"))
  hotWeather.addEventListener("click", () => handleWeatherInput("Hot Weather"))
}

const handleWeatherInput = (weatherType) => {
  showMessage(weatherType, "user")
  weatherTypeText = weatherType
  setTimeout(() => askTripLength(weatherType), 1000)
}

const askTripLength = (weatherType) => {
  showMessage(`${weatherType} is a great choice! How long do you want your holiday to last?`, "bot")
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
}

const handleTripInput = (tripLengthText) => {
  showMessage(tripLengthText, "user")
  setTimeout(() => askGroupType(tripLengthText), 1000)
}

const askGroupType = (tripLengthText) => {
  showMessage(`Your trip will last ${tripLengthText}. What kind of Group will you be travelling with? I will travel...`, "bot")
  inputWrapper.innerHTML = `
    <div id="group-type">
      <button id="solo" type="button">alone.</button>
      <button id="partner" type="button">with a partner.</button>
      <button id="family" type="button">with family.</button>
      <button id="group" type="button">with a group.</button>
    </div>`

  const groupType = document.getElementById("group-type")
  const soloGroupType = document.getElementById("solo")
  const partnerGroupType = document.getElementById("partner")
  const familyGroupType = document.getElementById("family")
  const groupGroupType = document.getElementById("group")

  groupTypeText = groupType.value

  soloGroupType.addEventListener("click", () => handleGroupInput("alone."))
  partnerGroupType.addEventListener("click", () => handleGroupInput("with a partner."))
  familyGroupType.addEventListener("click", () => handleGroupInput("with family."))
  groupGroupType.addEventListener("click", () => handleGroupInput("with a group."))
}

const handleGroupInput = (groupType) => {
  showMessage(groupType, "user")
  groupTypeText = groupType
  setTimeout(() => askPermission(groupType), 1000)
}

const holidayDestination = () => {
  if (weatherTypeText === "Cold Weather") {
    if (tripLengthText === "three to four Days") {
      if (groupTypeText === "alone.") {
        return ("Denmark")
      }
      else if (groupTypeText === "with a partner.") {
        return ("Finland")
      }
      else if (groupTypeText === "with family.") {
        return ("Norway")
      }
      else if (groupTypeText === "with a group.") {
        return ("the Netherlands")
      }
    }
    else if (tripLengthText === "one to two Weeks") {
      if (groupTypeText === "alone.") {
        return ("Faroe Islands")
      }
      else if (groupTypeText === "with a partner.") {
        return ("Iceland")
      }
      else if (groupTypeText === "with family.") {
        return ("Ireland")
      }
      else if (groupTypeText === "with a group.") {
        return ("Estonia")
      }
    }
    else if (tripLengthText === "more than two Weeks") {
      if (groupTypeText === "alone.") {
        return ("Canada")
      }
      else if (groupTypeText === "with a partner.") {
        return ("Alaska")
      }
      else if (groupTypeText === "with family.") {
        return ("Canada")
      }
      else if (groupTypeText === "with a group.") {
        return ("Canada")
      }
    }
  }
  else if (weatherTypeText === "Warm Weather") {
    if (tripLengthText === "three to four Days") {
      if (groupTypeText === "alone.") {
        return ("Austria")
      }
      else if (groupTypeText === "with a partner.") {
        return ("France")
      }
      else if (groupTypeText === "with family.") {
        return ("Croatia")
      }
      else if (groupTypeText === "with a group.") {
        return ("Croatia")
      }
    }
    else if (tripLengthText === "one to two Weeks") {
      if (groupTypeText === "alone.") {
        return ("Portugal")
      }
      else if (groupTypeText === "with a partner.") {
        return ("Italy")
      }
      else if (groupTypeText === "with family.") {
        return ("Greece")
      }
      else if (groupTypeText === "with a group.") {
        return ("Spain")
      }
    }
    else if (tripLengthText === "more than two Weeks") {
      if (groupTypeText === "alone.") {
        return ("Greece")
      }
      else if (groupTypeText === "with a partner.") {
        return ("Madeira")
      }
      else if (groupTypeText === "with family.") {
        return ("the USA")
      }
      else if (groupTypeText === "with a group.") {
        return ("the USA")
      }
    }
  }
  else if (weatherTypeText === "Hot Weather") {
    if (tripLengthText === "three to four Days") {
      if (groupTypeText === "alone.") {
        return ("Türkiye")
      }
      else if (groupTypeText === "with a partner.") {
        return ("Türkiye")
      }
      else if (groupTypeText === "with family.") {
        return ("Andorra")
      }
      else if (groupTypeText === "with a group.") {
        return ("Monaco")
      }
    }
    else if (tripLengthText === "one to two Weeks") {
      if (groupTypeText === "alone.") {
        return ("Morocco")
      }
      else if (groupTypeText === "with a partner.") {
        return ("the United Arab Emirates")
      }
      else if (groupTypeText === "with family.") {
        return ("Egypt")
      }
      else if (groupTypeText === "with a group.") {
        return ("the United Arab Emirates")
      }
    }
    else if (tripLengthText === "more than two Weeks") {
      if (groupTypeText === "alone.") {
        return ("Thailand")
      }
      else if (groupTypeText === "with a partner.") {
        return ("the Seychelles")
      }
      else if (groupTypeText === "with family.") {
        return ("the Maldives")
      }
      else if (groupTypeText === "with a group.") {
        return ("Puerto Rico")
      }
    }
  }
}

const askPermission = () => {
  showMessage(`All right, ${nameUser}! According to your preferences:
    ${weatherTypeText}.
    A trip lenght of ${tripLengthText}.
    And the fact that you are travelling ${groupTypeText}
    We will book a trip to ${holidayDestination()} for you.
    Do you want us to book this trip?
  `, "bot")

  inputWrapper.innerHTML = `
    <div id="permission-type">
      <button id="yes" type="button">Yes!</button>
      <button id="no" type="button">No.</button>
      <button id="again" type="button">Start over.</button>
    </div>`

  const yesPermission = document.getElementById("yes")
  const noPermission = document.getElementById("no")
  const startOverPermission = document.getElementById("again")
  const permissionType = document.getElementById("permission-type")

  permissionTypeText = permissionType.value

  yesPermission.addEventListener("click", () => handlePermissionInput("Yes!"))
  noPermission.addEventListener("click", () => handlePermissionInput("No."))
  startOverPermission.addEventListener("click", () => handlePermissionInput("Start over."))
}

const handlePermissionInput = (permissionType) => {
  showMessage(permissionType, "user")
  permissionTypeText = permissionType
  setTimeout(() => confirmChoice(), 1000)
}

const confirmChoice = () => {
  inputWrapper.innerHTML =""
  if (permissionTypeText === "Yes!") {
    showMessage(`Thank you for your booking. We are looking forward to seeing you again soon, ${nameUser}!`, "bot")
  }
  else if (permissionTypeText === "No.") {
    showMessage(`Sadly we can't book your trip this way. Please come back for your next holiday, ${nameUser}`, "bot")
  }
  else if (permissionTypeText === "Start over.") {
    showMessage(`Your planning will start from the beginning, ${nameUser}`, "bot")
    setTimeout(() => askWeatherType(), 1500) 
  }
}
//Name Function as verbs so it explains what is does

// Eventlisteners goes here 👇
submitButton.addEventListener("click", handleNameInput)