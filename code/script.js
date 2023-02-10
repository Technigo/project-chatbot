// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:


// Sunction handling name input

const handleNameInput = (event) => {
  event.preventDefault()
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''

  setTimeout(() => firstQuestion(name), 1000 )
}

//event listner method is starting function handleNameInput
form.addEventListener("submit", handleNameInput);


//First question

const firstQuestion = (name) => {
  showMessage(`Hi nice to meet you ${name}. What kind of music do you listen to? `, 'bot')
  setTimeout(() => showMusicOptions(name), 1000 )
}
 // Add drop down menu to first question

const showMusicOptions = () => {
  form.innerHTML = `  
<form id="music-genre">
  <select id="genre-type">
    <option value="">Please select</option>
    <option value="Pop">POP 🎤🎤🎤 POP 🎤🎤🎤 POP 🎤🎤🎤</option>
    <option value="Rock-Roll">ROCK-ROLL 🎸🎸🎸 ROCK-ROLL 🎸🎸🎸 ROCK-ROLL 🎸🎸🎸</option>
    <option value="Classical">CLASSICAL 🎻🎻🎻 CLASSICAL 🎻🎻🎻 CLASSICAL 🎻🎻🎻</option>
  </select>
<button class="genrebtn" type="submit"> Submit! </button>
</form>`
 
const musicGenre = document.getElementById('genre-type');
musicGenre.addEventListener("click", () => {
  //const genre = musicGenre.value;
})
}




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
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);



//END

// // Variables that point to selected DOM elements
// const chat = document.getElementById('chat');
// const nameInput = document.getElementById('name-input');
// const form = document.getElementById('mame-form');
// const main = document.getElementById('main');
// const inputWrapper = document.getElementById('input-wrapper');

// // If you need any global variables that you can use across different functions, declare them here:




// // Declare your functions after this comment

// // This function will add a chat bubble in the correct place based on who the sender is
// const showMessage = (message, sender) => {
//   // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
//   if (sender === 'user') {
//     console.log(`Hi it's me sende:`)
//     chat.innerHTML += `
//       <section class="user-msg">
//         img src="assets/user.png" alt="User bot" /> 
//         <div class="bubble user-bubble">
//           <p>${message}</p>
//         </div>
//       </section>
//     `
//     // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
//   } else if (sender === 'bot') {
//     console.log(`show the console messages here:`)
//     chat.innerHTML += `
//       <section class="bot-msg">
//         <img src="assets/bot.png" alt="Bot" />
//         <div class="bubble bot-bubble">
//           <p>${message}</p>
//         </div>
//       </section>
//     `
//   }
//   // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
//   chat.scrollTop = chat.scrollHeight;
// }

// // Starts here
// const greetUser = () => {
//   showMessage("Hello there, What's your name?", 'bot');
// }

// setTimeout(greetUser, 200);
// // Listen for the form submit event


// const handleNameInput = (event) => { // when submiting this function is invoked
//   event.preventDefault() //preventing refreshing website at submitting
//   const name = nameInput.value  //input value will be stored in name variable
//   showMessage(name, 'user') //users answer
//   nameInput.value = ''
  
//   setTimeout(() => showMusicOptions(name), 2000);
  
// }

// // show genre options
// const showMusicOptions = (name) => {
//   showMessage(`Hello ${name} what is your fav music genre?`, 'bot');
//   //button options
//   inputWrapper.innerHTML = `
//   <button id = "pop" value="submit">POP🎵</button>
//   <button id = "rock-roll" value="submit">ROCK-ROLL🎵</button>
//   <button id = "clasical" value="submit">CLASICAL🎵</button>
//   `

//   document.getElementById('pop').addEventListener('click' ChoosePop,);
//   document.getElementById('rock-roll').addEventListener('click' ChooseRock,);
//   document.getElementById('clasical').addEventListener('click' ChooseClasical,);
// }

// const ChoosePop = => {

// }


// const ChooseRock = => {

// }

// const ChooseClasical = => {

// }



// // iteratio 2


// // const form = document.getElementById('name-form');
// // name-form.addEventListener('submit', (event) => {

// // })
// // addEventListener('submit', (event) => {});


// // onsubmit = (event) => {};

// // Set up your eventlisteners here

// // const form = document.getElementById("myForm");
// // const myForm = document.getElementById("myForm");

// // form.addEventListener("submit", function(event) {
// //   event.preventDefault(); 

// //   const username = form.elements.username.value;
// //   console.log(`your name: ${username}`);

// //   const username1 = form.elements.username.value;
// //   const newUsername = document.createElement("p");
// //   newUsername.innerText = `User: ${username}`;
// //   myForm.appendChild(newUsername);
// // });


// //In the event listener function, we first call event.preventDefault to prevent the default 
// // form submission behavior. This allows us to handle the form submission in our own custom way,
// // in this case by logging the value of the username input to the console.





// //   setTimeout(() => showMusicOptions(name), 3000)
// // }

// // When website loaded, chatbot asks first question.
// // normally we would invoke a function like this:
// // greeting()
// // But if we want to add a little delay to it, we can wrap it in a setTimeout:
// // setTimeout(functionName, timeToWaitInMilliSeconds)
// // This means the greeting function will be called one second after the website is loaded.



