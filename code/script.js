document.addEventListener('DOMContentLoaded', ()=> {
  // Variables that point to selected DOM elements
  const chat = document.getElementById('chat');
  const nameInput = document.getElementById('name-input')
  const submitBtn = document.getElementById('send-btn')     // we created the variables to work with it.
  const nameForm = document.getElementById('name-form')
  const inputWrapper = document.getElementById('input-wrapper')
  
  // If you need any global variables that you can use across different functions, declare them here:

  let counter = 1

  // Declare your functions after this comment

  const botReplay = (message) => {
    showMessage(message, 'bot')
  }

  const userReplay = (message) => {
    showMessage(message, 'user')
  }

  const resetCounter = () => {
    userReplay('Reset')
    setTimeout (() => botReplay('What can I do for you then?'), 750)
    counter = 2
    const message = 'Reset'
    nextMessage()
    //nextMessage(message)
  };
  
  const backCounter = () => {
    //userReplay('Back')
    //counter = 4
   counter = 3
    const message = 'Back'
    //nextMessage(message)
    setTimeout(() => nextMessage('Back'), 750)
  };
  
  const nextMessage = (message) => {
    console.log('counter', counter)
    if (counter == 2) {
      console.log("test1")
     // userReplay(message)
      nameInput.value = ''
      setTimeout (showOptions(), 750)
    
    } else if (counter == 3 ) {
      console.log("test2")
      userReplay(message)
      nameInput.value = ''
      setTimeout (() => showPlans('Plan'), 750)
      
    } else if (counter == 4 ) {
      console.log('test4')
      userReplay(message)
      nameInput.value= ''
      setTimeout (() => showPlansABC(message), 750)
      
    }
  }

  const handleNameInput = (event) => {      // Here we creat a function to avoid the submit when we click or press the button sumbit.
    event.preventDefault()                  // .preventDefault() avoits the refresh the page.
    const name = nameInput.value            // we create a new variable with the typed message in the input bar to use for the chatbot.
    userReplay(name)               // here calls the function showMessage() to see what was typed before.
    nameInput.value = ''                    
    //counter += 1
    setTimeout(() => showMessage(`Welcome ${name}. Want to talk about you Plan, or do you have some problem?`, 'bot'), 750)
    setTimeout(() => nextMessage(showOptions()),750)
    console.log('counter', counter)
  };

  // This function will add a chat bubble in the correct place based on who the sender is
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
    counter = 1 
    botReplay("Hi, My name is Alex and I'm redy to help you. What's your name?");
    // Just to check it out, change 'bot' to 'user' here 👆
  }
  
  //Question 1 
  const showOptions = (message) => {
    counter++
    inputWrapper.innerHTML = `
    <section class='button' id='plan'>
        <button type="onclick"> Plan </button>
    </section>
    <section class='button' id='problem'>
        <button type="onclick"> Problem </button>
    </section>
    `
    document.getElementById('plan').addEventListener('click', () => nextMessage('Plan'))
    document.getElementById('problem').addEventListener('click', () => newFunction())
    
  }
  
  //Choosed option - Problem question2 
  const newFunction = (problem) => {
    userReplay('Problem')
    setTimeout(() => botReplay('What problem do you have today? Do you want to talk with an operator?'), 750)
    inputWrapper.innerHTML = `
    <section class='button' id='Yes'>
        <button type="onclick"> Yes </button>
    </section>
    <section class='button' id='No'>
    <button type="onclick"> No </button>
  </section>
    `
    const yesButton = document.getElementById('Yes');
    yesButton.addEventListener('click', () => showPhoneBar())
    const noButton = document.getElementById('No');
  noButton.addEventListener('click', () => resetCounter())
  }
  
  // choosed option YES - question 3 phone number. 
  const showPhoneBar = () => {
    userReplay('Yes')
    botReplay('Tell us your phone number to call you!')
    inputWrapper.innerHTML = `
    <div class="phone-bar" id="phone-bar">
          <form id="phone-form">
            <label for="phone-input"></label>
            <input id="phone-input" type="number" required />
            <button id="send-btn" class="send-btn" type="submit">
              Send
            </button>
          </form>
        </div>
    `
    const sendBtn = document.getElementById('send-btn')
    const phoneForm = document.getElementById('phone-form')
    const handlePhoneInput = (event) => {      
      event.preventDefault()
      
      const phoneInput = document.getElementById('phone-input')
      const phone = phoneInput.value
      phoneInput.value = ''
      showHuman(phone)
  
    };
    
    //submit question for Problem - talk w/ operator. 
    const showHuman = (message) => {
      userReplay(message)
      console.log(message)
      setTimeout(() => botReplay(`Thank you! an operator will reach out to you at ${message} shortly, have a nice day`), 750)
    
      inputWrapper.innerHTML = `
      <section class='button' id='reset'>
      <button type="onclick"> Reset </button>
    </section> 
      `
      const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', () => resetCounter())
    
    }
    
    phoneForm.addEventListener('submit', handlePhoneInput)
  }
  
  // choosed option Plan from question 1/ row 111 
  const showPlans = (type) => {
    console.log(type)
    counter++
     botReplay(`And which ${type} do you have?`)
      inputWrapper.innerHTML = `
        <section id='selector'>
          <select id='select'>
            <option value="" selected disabled> Choose your plan.</option>
            <option value="plan A" id="planA">Plan A</option>
            <option value="plan B" id="planB">Plan B</option>
            <option value="plan C" id="planC">Plan C</option>
          </select>
        </section>
      `
      const select = document.getElementById('select')
      select.addEventListener('change', () => nextMessage(select.value))
     
  }
  
  // option Plan - question 2 
  
  const showPlansABC = (plan) => {
   console.log(plan, counter)
    counter++
    botReplay(`I see, you have ${plan}. What do you want to know?`)
   
     inputWrapper.innerHTML = `
     <section class='button' id='price'>
        <button type="onclick"> Price </button>
    </section> 
    <section class='button' id='back'>
        <button type="onclick"> Back </button>
    </section> 
    <section class='button' id='reset'>
        <button type="onclick"> Reset </button>
    </section> 
  `
  
  const priceButton = document.getElementById('price');
  priceButton.addEventListener('click', () => showPrice(plan))
  
  const backButton = document.getElementById('back')
    backButton.addEventListener('click', () => backCounter())
  
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => resetCounter())
  
  }
  // option Plan - question 3
  const showPrice = (message) => {
    userReplay(message, counter)
    let price
    if (message === 'plan A') {
      price = '€20'
    } else if( message === 'plan B') {
      price = '€15'
    } else {
      price = '€10'
    }
    setTimeout(() => botReplay(`The price of ${message} is ${price}`), 750)
    inputWrapper.innerHTML = `
    <section class='button' id='back'> 
    <button type="onclick"> Back </button>
    </section> 
    `
    const backButton = document.getElementById('back')
    backButton.addEventListener('click', () => backCounter())
  }
  
  // Set up your eventlisteners here
  
  nameForm.addEventListener('submit', handleNameInput);
  //inputWrapper.addEventListener('click',nextMessage)
  
  
  // When website loaded, chatbot asks first question.
  // normally we would invoke a function like this:
  // greeting()
  // But if we want to add a little delay to it, we can wrap it in a setTimeout:
  // setTimeout(functionName, timeToWaitInMilliSeconds)
  // This means the greeting function will be called one second after the website is loaded.
  setTimeout(greeting, 1000);
  });