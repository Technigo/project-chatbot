// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const formSubmitButton = document.querySelector('.send-btn')
const formInputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input')


// Global variables, if you need any, declared here



// Functions declared here

// const botReplay = (msg) => {
//   showMessage(msg, 'bot')
// }

// const userReplay = (msg) => {
//   showMessage(msg, 'user')
// }

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // console.log('showMessage functions is invoked')
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
    // console.log('testing testing to see the log')
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


// kopierat från technigo 
// const nextQuestion = (message) => {
//   console.log('questionNumber', questionNumber)

//   if (questionNumber === 1) {
//     userReply(message)
//     input.value = ''
//     setTimeout(() => showFoodTypes(message), 1000)
//   } else if (questionNumber === 2) {
//     userReply(message)
//     setTimeout(() => showMenu(message), 1000)
//   } else if (questionNumber === 3) {
//     userReply(message)
//     setTimeout(() => showDishSize(message), 1000)
//   } else if (questionNumber === 4) {
//     userReply(message)
//     setTimeout(() => showPrice(message), 1000)
//   } else {
//     userReply(message)
//     setTimeout(thankYou, 1000)
//   }
// }

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
  setTimeout(() => drinkRec(name), 1000) //Added thursday
}

// interaction 2 Day or evening
const drinkRec = (name) => {
  showMessage(`Would you like a drinkrecommendation, ${name}?`, 'bot')

  formInputWrapper.innerHTML=
  `<button id="yes" type="button">Yes</button>
    <button id="no" type="button">No</button>`
    
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


const softyOrWild = (yes) => {
  showMessage(`Are you a softy or a wild cat?`, 'bot')
  formInputWrapper.innerHTML=
  `<button id="softy" type="button">Softy</button>
    <button id="wildCat" type="button">Wild cat</button>`

    document
    .getElementById('softy')
    .addEventListener('click', () => {
      showMessage('Yes I´m soft', 'user')
      setTimeout(() => drinkRecTwo(''), 1000) 
})

      document
      .getElementById('wildCat')
      .addEventListener('click', () => {
        showMessage('I got my groove on', 'user')
        setTimeout( () => drinkRecTwo(), 1000) 
        //call next function with a paremeter for no
      })   

}

const noThankYou = () => {
  showMessage(`Ok, have a nice life then! You can still press yes if you change your mind`, 'bot')
  }



  // if (option === 'morning') {
  //   setTimeout(showMessage('Are you a softy or  wild cat?', 'bot'), 1000)
  //   formInputWrapper.innerHTML=
  //   `<button id="softy" type="submit">softy</button>
  //    <button id="wildCat" type="submit">wild cat</button>`
  //   input.value = ''
  //   // Also add some code in here to add answer options for next message

  // } else if (option === 'evening'){
  //   setTimeout(showMessage('Are you a sassy lady or a cool cat?', 'bot'), 1000)
  //   formInputWrapper.innerHTML=
  //   `<button id="sassyLady" type="submit">Sassy Lady</button>
  //    <button id="coolCat" type="submit">Cool Cat</button>`
  //    input.value = ''
  //   // Also add some code in here to add answer options for next message

  





    // setTimeout(showMessage('Are you a softy or a wild cat?', 'bot'), 1000)
    // formInputWrapper.innerHTML=
    // `<button id="softy" type="submit">softy</button>
    //  <button id="wildCat" type="submit">wild cat</button>`
    //  input.value = ''
    // // Also add some code in here to add answer options for next message


    //  formInputWrapper.innerHTML=
    // `<button id="softy" type="submit">softy</button>
    //  <button id="wildCat" type="submit">wild cat</button>`
    //  input.value = ''
    // Also add some code in here to add answer options for next message
  

//Interaction 3  () 

// const nextFunction = () => {

//   if (morning ===)

//   showMessage(`Then you should have a tea, probably green)
// } 


// Interaction 4 Evening..




// Set up your eventlisteners here
form.addEventListener('submit', handleNameQuestion)




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)


