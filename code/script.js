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
  }}

//if user clicks no then the bot answers a nice goodbye message
 else if (selection === "option2") {
    showMessage("Ok, no worries! If you change your mind, just refresh the page. ❤️", 'bot')
    setTimeout(() => inputWrapper.innerHTML= `
    <p>Have a lovely day!</p>`, 1000)
  } 
}

//If user selected plain, the bot asks how many plain donuts the user want to order
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
  }}

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
    setTimeout(() => filledOrdering("choc"), 800)
  })

document
  .getElementById("rasp")
  .addEventListener("click", () => {
    showMessage("Raspberry feels like summer, get me those!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => filledOrdering("rasp"), 800)
  })

document
  .getElementById("van")
  .addEventListener("click", () => {
    showMessage("The vanilla/chili combo sounds interesting, I'll try it!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => filledOrdering("van"), 800)
  })
  }}
}

//then the bot asks how many filled donuts the user wants to order
const filledOrdering = () => {
  showMessage("Excellent choice! Please select how many you want to order, thanks!", 'bot');
  setTimeout(() => amountFilled(), 900)
}

const amountFilled = () => {
  inputWrapper.innerHTML = `
    <button id="five">5</button>
    <button id="ten">10</button>
    <button id="twenty">20</button>
    `
document
  .getElementById("five")
  .addEventListener("click", () => {
    showMessage("5 donuts will get me through the day", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => deliverFilled("five"), 1000)
  })

document
  .getElementById("ten")
  .addEventListener("click", () => {
    showMessage("I think 10 donuts will be just the right amount", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => deliverFilled("ten"), 1000)
  })

document
  .getElementById("twenty")
  .addEventListener("click", () => {
    showMessage("I'm on a roll, get me 20 please!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => deliverFilled("twenty"), 1000)
  })
}

//the bot answers to the chosen amount of plain donuts
const deliverPlain = (selection) => { 
  if (selection === "5") {
    showMessage("We agree, 5 plain donuts coming your way!", 'bot')
    setTimeout(() => plainDonutsTime(), 800)
  }

  else if (selection === "10") {
    showMessage("You got it, 10 plain donuts coming up!", 'bot')
    setTimeout(() => plainDonutsTime(), 800)
    }

  else if (selection === "20") {
    showMessage("Happy to keep you on that roll, 20 plain donuts it is!", 'bot')
    setTimeout(() => plainDonutsTime(), 800)
  }
}

//the bot answers to the chosen amount of filled donuts
const deliverFilled = (selection) => { 
  if (selection === "five") {
    showMessage("We hope your five filled donuts will be more than enough!", 'bot')
    setTimeout(() => filledDonutsTime(), 800)
  }

  else if (selection === "ten") {
    showMessage("We think you nailed it, ten filled donuts coming up!", 'bot')
    setTimeout(() => filledDonutsTime(), 800)
    }

  else if (selection === "twenty") {
    showMessage("20 filled donuts will help that roll, happy to get them for you!", 'bot')
    setTimeout(() => filledDonutsTime(), 800)
  }
}

//the bot asks for prefered delivery time for plain donuts and gives options
const plainDonutsTime = () => {
  showMessage("Please select your prefered delivery time today, thanks!", 'bot');
  setTimeout(() => delTimePlain(), 900)
  }

const delTimePlain = () => {
  inputWrapper.innerHTML = `
    <button id="delivery1">ASAP! (Extra charge 100 SEK)</button>
    <button id="delivery2">In 1-2 hours is fine</button>
    <button id="delivery3">You can deliver 2-3 hours from now</button>
    `
    
document
  .getElementById("delivery1")
  .addEventListener("click", () => {
    showMessage("Please deliver as soon as possible, max 30 minutes from now. I will pay extra!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => finalQuePlain("delivery1"), 1100)
    })
  
document
  .getElementById("delivery2")
  .addEventListener("click", () => {
    showMessage("I can wait 1-2 hours", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => finalQuePlain("delivery2"), 900)
    })

document
  .getElementById("delivery3")
  .addEventListener("click", () => {
    showMessage("I can wait 2-3 hours", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => finalQuePlain("delivery3"), 900)
    })
  } 

//the bot asks for prefered delivery time for filled donuts and gives options
const filledDonutsTime = () => {
  showMessage("Please select your prefered delivery time today, thanks!", 'bot');
  setTimeout(() => delTimeFilled(), 900)
  }

const delTimeFilled = () => {
  inputWrapper.innerHTML = `
    <button id="delfill1">ASAP! (Extra charge 100 SEK)</button>
    <button id="delfill2">In 1-2 hours is fine</button>
    <button id="delfill3">You can deliver 2-3 hours from now</button>
    `
    
document
  .getElementById("delfill1")
  .addEventListener("click", () => {
    showMessage("Please deliver as soon as possible, max 30 minutes from now. I will pay extra!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => finalQueFilled("delfill1"), 1100)
    })
  
document
  .getElementById("delfill2")
  .addEventListener("click", () => {
    showMessage("I can wait 1-2 hours", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => finalQueFilled("delfill2"), 900)
    })

document
  .getElementById("delfill3")
  .addEventListener("click", () => {
    showMessage("I can wait 2-3 hours", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => finalQueFilled("delfill3"), 900)
    })
  } 

//bot asks for feedback on the shop when ordering plain donuts
const finalQuePlain = (selection) => {
  if (selection === "delivery1") { 
    showMessage("Thank you for ordering our plain donuts! We will deliver ASAP! Before you go, do you agree that our donut shop is great?", 'bot');
    setTimeout(() => yayOrNay(), 700)
  }

  else if (selection === "delivery2", "delivery3") {
    showMessage("Thank you for ordering our plain donuts, we will deliver according to your selected time frame. Before you go though, please let us know if you think our donut shop is amazing!", 'bot')
    setTimeout(() => yayOrNay(), 700)
  }
} 

//bot asks for feedback when ordering filled donuts
const finalQueFilled = (selection) => {
  if (selection === "delivery1") { 
    showMessage("Thank you for ordering our filled donuts! We will deliver ASAP! Before you go, do you agree that our donut shop is great?", 'bot');
    setTimeout(() => yayOrNay(), 700)
  }

  else if (selection === "delivery2", "delivery3") {
    showMessage("Thank you for ordering our filled donuts, we will deliver according to your selected time frame. Before you go though, please let us know if you think our donut shop is amazing!", 'bot')
    setTimeout(() => yayOrNay(), 700)
  }
} 
//Feedback on the donut shop - options
//Saying that it sucks should render an invalid answer
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
    setTimeout(() => trueOrFalse("yay"), 900)
  })

document
  .getElementById("nay")
  .addEventListener("click", () => {
    showMessage("It sucks!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => trueOrFalse("nay"), 900)
  })
} 

const trueOrFalse = (selection) => { 
  if (selection === "yay") {
    showMessage("Welcome back anytime!💕")
    setTimeout(() => inputWrapper.innerHTML= `
    <p>Have a lovely day!</p>`, 1000)
  }

  else if  (selection === "nay") {

  }

}

// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
event.preventDefault();
})



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUserOrder, 900);
