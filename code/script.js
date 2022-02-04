// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const formSubmitButton = document.querySelector('.send-btn')
const formInputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input')


// Global variables, if you need any, declared here


// Functions declared here


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // console.log('showMessage functions is invoked')
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user_2.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    // console.log('testing testing to see the log')
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot_2.png" alt="Bot" />
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
  showMessage(`Hello hey! What´s your name? I need to know!`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

//This function adds the name
const handleNameQuestion = (e) => {
  e.preventDefault()
  console.log('name question invoked', nameInput.value)

  //call showmessage function
  const name = nameInput.value
  showMessage( `You can call me ${name}`, 'user')
  nameInput.value = ''

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  // setTimeout(() => askDayOption (handleNameQuestion, 500)) //också problem!
  // setTimeout(handleNameQuestion, 500)

  //added below to get to the next question
  setTimeout(() => drinkRec(name), 1000) 
}

// interaction 2 Day or evening
const drinkRec = (name) => {
  showMessage(`Would you like me to suggest a drink for you, ${name}?`, 'bot')

  formInputWrapper.innerHTML=
  `<button id="yes" type="submit">Yes</button>
    <button id="no" type="submit">No</button>`
    
  document
    .getElementById('yes')
    .addEventListener('click', () => {
      showMessage('Yes I´m intrigued!', 'user')
      setTimeout(() => softyOrWild('yes'), 1000) 
    })
    

  document
    .getElementById('no')
    .addEventListener('click', () => {
      showMessage('No, I´m good!', 'user')
      setTimeout( () => noThankYou(), 1000) 
      //call next function with a paremeter for no
      
    })   
}

  
// Interaction 3  
const softyOrWild = () => {
  showMessage(`Are you a softy or a wildcat?`, 'bot')
  formInputWrapper.innerHTML=
  `<button id="softy" type="button">Softy</button>
    <button id="wildCat" type="button">Wildcat</button>`

    document
    .getElementById('softy')
    .addEventListener('click', () => {
      showMessage('I´m a softy!', 'user')
      setTimeout( () => yourSoftyDrink(), 1000) //Yoursofty ist för softy i parentes
})

      document
      .getElementById('wildCat')
      .addEventListener('click', () => {
        showMessage('I got my groove on', 'user')
        setTimeout( () => yourWildDrink(), 1000) 
        //call next function with a paremeter for no
      })   
}

// Interaction 4  
const noThankYou = () => {
  showMessage(`Oh well, see you another day then!`, 'bot')
  formInputWrapper.innerHTML = ''
  }


// Interaction 5
const yourSoftyDrink = () => {
  showMessage(`A mocktail is your cup of tea!`, 'bot')
  setTimeout( () => mocktailImg(), 1000) 
}
 //Picture of mocktail 
 //("undefined" is showing when picture is loaded in bubble, don´t know why)
const mocktailImg = () => {
  formInputWrapper.innerHTML=
  showMessage('<img src="assets/paige-ledford-1Di03LTniYE-unsplash.jpg" alt="Bot"/>', 'bot')
  setTimeout( () => satisfied(), 3000) 
}

// Interaction 6
const yourWildDrink = () => {
  showMessage(`A whiskey on the rocks for you then!`, 'bot')
  setTimeout( () => whiskeylImg(), 1000) 
}

//Picture of whiskey
//("undefined" is showing when picture is loaded in bubble, don´t know why)
const whiskeylImg = () => {
  formInputWrapper.innerHTML=
  showMessage('<img src="assets/ambitious-creative-co-rick-barrett-UyF3Tal_KXw-unsplash.jpg" alt="Bot"/>', 'bot')
  setTimeout( () => satisfied(), 3000) 
}

// Interaction 7 = conditionals
const satisfied = () => {

  showMessage(`Are you happy with your drink?`, 'bot')
  formInputWrapper.innerHTML=
  `<button id="yes" type="submit">Yes!</button>
   <button id="no" type="submit">No</button>`

    document
    .getElementById('yes')
    .addEventListener('click', () => {
      showMessage('Yes, it´s all good', 'user')
      endingPhrase('yes') //call next function with a parameter for yes
    })

    document
    .getElementById('no')
    .addEventListener('click', () => {
      showMessage('Nah, I don´t like it..', 'user')
      endingPhrase('no') //call next function with a parameter for no
    })
  }

// Interaction 8 = conditionals  
const endingPhrase = (satisfied) => {

  if (satisfied === 'yes') {
  showMessage('Hope you enjoy your evening!', 'bot')
  console.log('yes to drinks')
  formInputWrapper.innerHTML = ''
  } else if (satisfied === 'no') {
  showMessage('So sad to hear that! Click <a href="https://www.worlddrinksawards.com/">here</a> to get some more inspiration!', 'bot')
  console.log('nonono')
  formInputWrapper.innerHTML = '' //reset input field
  }
}

  
// Set up your eventlisteners here
form.addEventListener('submit', handleNameQuestion)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)


