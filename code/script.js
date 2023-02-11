// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById('name-form');
const submit = document.getElementById('submit')
const nameInput = document.getElementById('name-input')
// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log('user')
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
    console.log('bot')
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
const greetUserOrder = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi there! We hope you're hungry, our donuts are awesome!", 'bot');
  setTimeout(() => userDecision(), 800)
}

//Bot asks user if they would like to place an order
const userDecision = () => { 
  showMessage("Would you like to place an order?", 'bot');
  setTimeout(() => yesOrNo(), 700)
}

//Yes or No-buttons for the user to click should appear
const yesOrNo = () => {
  inputWrapper.innerHTML = `
  <button id="option1">Yes</button>
  <button id="option2">No</button>
  `
  
document
  .getElementById("option1")
  .addEventListener("click", () => {
    showMessage("I would very much like to order, thanks!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => orderProceed("option1"), 1100)
    })

document
  .getElementById("option2")
  .addEventListener("click", () => {
    showMessage("No thanks, just having a look around!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => orderProceed("option2"), 900)
    })
} 

  //If the user clicks the yes-button, the bot continues the ordering process
const orderProceed = (selection) => {
  if (selection === "option1") {
    showMessage("Awesome! We have them as plain or with filling and frosting. Which type would you like to order?", 'bot')
    setTimeout(() => plainOrNot(), 700)

const plainOrNot = () => {
  inputWrapper.innerHTML = ` 
  <button id="plain">Plain</button>
  <button id="fillfrost">Pimped up</button>
  `

document
  .getElementById("plain")
  .addEventListener("click", () => {
    showMessage("I would love me some plain donuts!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => chooseDonuts("plain"), 800)
  })

document
  .getElementById("fillfrost")
  .addEventListener("click", () => {
    showMessage("Please get me the ones that are extra everything!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => chooseDonuts("fillfrost"), 800)
  })
}
}
//if user clicks no then the bot answers a nice goodbye message
 else if (selection === "option2") {
    showMessage("Ok, no worries! If you change your mind, just refresh the page. ❤️", 'bot')
    setTimeout(() => inputWrapper.innerHTML= `
    <p>Have a lovely day!</p>`, 1000)
} 

}
//If user selected plain, the bot asks how many they want to order
const chooseDonuts = (selection) => {
  if (selection === "plain") {
    showMessage("Good choice, they are really tasty. How many do you want to order?", 'bot')
    setTimeout(() => numberOfPlain(), 800)

  const numberOfPlain = () => {
    inputWrapper.innerHTML = `
    <button id="5">5</button>
    <button id="10">10</button>
    <button id="20">20</button>
    `
  document
  .getElementById("5")
  .addEventListener("click", () => {
    showMessage("5 donuts will get me through the day", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => deliverPlain("5"), 1000)
  })

  document
  .getElementById("10")
  .addEventListener("click", () => {
    showMessage("I think 10 donuts will be just the right amount", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => deliverPlain("10"), 1000)
  })

  document
  .getElementById("20")
  .addEventListener("click", () => {
    showMessage("I'm on a roll, get me 20 please!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => deliverPlain("20"), 1000)
  })

  }
  }
  //If user selected filling and frosting, they need to make some additional selections
  else if (selection === "fillfrost") {
    showMessage("Perfect, we have some different combos, please check the buttons below and choose your option", 'bot')
    setTimeout(() => typeOfDonutCombo(), 1200)

  const typeOfDonutCombo = () => {
    inputWrapper.innerHTML = `
    <button id="choc">Chocolate filling and frosting</button>
    <button id="rasp">Raspberry filling and frosting</button>
    <button id="van">Vanilla filling and chili frosting</button>
    `

    document
  .getElementById("choc")
  .addEventListener("click", () => {
    showMessage("I am a chocoholic, I'll have those!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => xxx("choc"), 800)
  })

  document
  .getElementById("rasp")
  .addEventListener("click", () => {
    showMessage("Raspberry feels like summer, get me those!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => xxx("rasp"), 800)
  })

  document
  .getElementById("van")
  .addEventListener("click", () => {
    showMessage("The vanilla/chili combo sounds interesting, I'll try it!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => xxx("van"), 800)
  })

  }
  }
}
//If user chose a number of plain donuts, the bot answers to their choices
const deliverPlain = (selection) => { 
  if (selection === "5") {
    showMessage("We agree, 5 donuts coming your way!", 'bot')
    setTimeout(() => plainDonutsName(), 800)
  }

  else if (selection === "10") {
    showMessage("You got it, 10 donuts coming up!", 'bot')
    setTimeout(() => plainDonutsName(), 800)
    }

  else if (selection === "20") {
    showMessage("Happy to keep you on that roll, 20 donuts it is!", 'bot')
    setTimeout(() => plainDonutsName(), 800)
  }

}
//the bot asks for the users name to finalize the order
const plainDonutsName = () => {
  showMessage("To complete your order, we also need your name. Please state your name in the field below, thanks!", 'bot');
  inputWrapper.innerHTML += `
  <input id="name-input" type="text" placeholder="type your response here"/>
  <button class="send-btn" type="submit">Send</button>
  `
  document
  .getElementById("name-input")
  .addEventListener("click", () => {
  showMessage("My name is ${name}.", 'user')
  nameInput.value = ''  
  setTimeout(() => finalQuePlain(), 900)
  })

}

//const handleNameInput = (event) => {}

const finalQuePlain = () => {
  showMessage("Before you go ${name}, do you think our donut shop is great??", 'bot');
  setTimeout(() => yayOrNay(), 700)
} 

const yayOrNay = () => {
  inputWrapper.innerHTML = `
  <button id="yay">Of course, it is the best!</button>
  <button id="nay">No, it really sucks!</button>
  `
  
document
  .getElementById("yay")
  .addEventListener("click", () => {
    showMessage("I love it!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => orderProceed("yay"), 900)
    })

document
  .getElementById("nay")
  .addEventListener("click", () => {
    showMessage("No, it sucks!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => orderProceed("nay"), 900)
    })
} 

// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
event.preventDefault();
const value = document.getElementById("name-input").value;
showMessage(value, 'user')
})


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUserOrder, 900);
