// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById('name-form');
const nameInput= document.getElementById('name-input');

// If you need any global variables that you can use across different functions, declare them here:
// let name=""
// Declare your functions after this comment

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
  showMessage("Hello there, What's your name?", 'bot')
  console.log('This is bot writing')
  // Just to check it out, change 'bot' to 'user' here 👆
}

   const nameQuestion = (event) => {event.preventDefault()
   const name = nameInput.value 
   console.log('text')
   showMessage(`My name is ${name} and I want to know more about the spa packets!`, 'user')
   nameInput.value = ''
   setTimeout(() => showSpaOptions(name), 1000)
   }

  const showSpaOptions = () => {
    showMessage(`We can offer you three kinds of spa packages, what are you interested in more?`, 'bot')
    chat.innerHTML += `
     <button id= 'birthdayButton' type="click">Birthday spa breaks</button>
     <button id= 'dinnerButton' type="click">Dinner & Spa breaks</button>
     <button id= 'boxingButton'type="click">Boxing Day Spa breaks</button>
     `
   }
 
   const answerPackets = (event) => {event.preventDefault()
    console.log('packet')
    showMessage(`My option is `, 'user')
    // setTimeout(() => showBithdaySpaOptions(name), 1000)
       
  }

  


//   const emailAdressQuestion = (event) => {event.preventDefault()
//    // do stuff here 
//    //call message function
//     showMessage(`Great! You chose ${choice} package! That will cost 2000kr. Please, Can you give your 
//     email adress? So we send you the information and payment method.`, 'bot')
//     nameInput.value = '' 
//      setTimeout(() => showptions(), 1000)
//        }
 
//    const emailAdressAnswer = (event) => {event.preventDefault()
//         // do stuff here 
//         //call message function
//          showMessage(`${email}`, 'user')
//          nameInput.value = '' 
//           setTimeout(() => showtions(), 1000)
//             }

//    const emailAdressAnswer = (event) => {event.preventDefault()
//               // do stuff here 
//               //call message function
//                showMessage(`Perfect! In a few minutes you will receive an email. Enjoy your day with us!`, 'bot')
//                nameInput.value = '' 
//                 setTimeout(() => shotions(), 1000)
//                   }
            
//  // Set up your eventlisteners here
 
 
  form.addEventListener("submit", nameQuestion)
  chat.addEventListener("click", answerPackets)
 


// // When website loaded, chatbot asks first question.
// // normally we would invoke a function like this:
// // greeting()
// // But if we want to add a little delay to it, we can wrap it in a setTimeout:
// // setTimeout(functionName, timeToWaitInMilliSeconds)
// // This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 100);
