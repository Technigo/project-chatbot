// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
let userName = ""


// Global variables, if you need any, declared here

// Functions declared here

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

//Question 1
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
}

const handleResponse = () => {
  let userName = document.getElementById('name-input').value;
  showMessage(`Nice to meet you ${userName}!`, 'bot') 
}

//Question 2
const watchMovie = () => {
  let userName = document.getElementById('name-input').value;
  showMessage(`I'm guessing you're having trouble finding something to watch on Netflix?`, 'bot')
  inputWrapper.innerHTML = `
    <button id="option1">Yes</button>
    <button id="option2">No</button>
    
    `
    document.getElementById("option1").addEventListener("click", () => {
      showMessage("Yes, i can't decide what to watch, help me!", 'user')
      setTimeout (() => showMessage("I'm happy to help! How are you feeling today?", "bot"), 1500)
      setTimeout (() => inputWrapper.innerHTML=`
      <button id="optHappy">😄</button>
      <button id="optSad">😥</button>
      <button id="optAngry">😡</button>
    `, 1500)
    })

     /*  document.getElementById("optHappy").addEventListener("click", () => {
        showMessage("I'm feeling happy today!", 'user')
    
      })
      setTimeout (() => showMessage("Since you are happy, I have few recommendations for you", 'bot'), 1500)
      setTimeout (() => inputWrapper.innerHTML=`
      <button id="optHappyFeet">Happy Feet</button>
      <button id="optPrettyWoman">Pretty Woman</button>
      <button id="optSingingInTheRain">Singing in the Rain</button>
    `, 1500)
       })
      */
    document.getElementById("option2").addEventListener("click", () => {
      showMessage("No thanks, i just wanted to try the functions of this bot!", 'user')
      setTimeout (() => showMessage("Well, now that you know that it works, you're more than welcome back once you need my help!", "bot"), 1500)
      setTimeout (() => inputWrapper.innerHTML=`
      <p>Thanks for using this bot!</p>
    `, 1500)
    
    })
}

//Question 2(Happy)
/*const movieMoods = () => {
  document.getElementById('optHappy').addEventListener('click', () => {
  showMessage("Since you are happy! I recommend this comedy", 'bot')
  //setTimeout (() => movieMoods(value, 'bot'), 1000)
 })
}
*/

//Question 2(Sad)


//Question 2(Angry)
  



// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.getElementById('name-input').value;
  showMessage(value, 'user')
});

/*form.addEventListener('submit', (event) => {
  event.preventDefault();
  showMessage(value, 'bot')
});
*/

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.getElementById('name-input').value;
  setTimeout (() => handleResponse(value, 'bot'), 1000)
  setTimeout (() => watchMovie(value, 'bot'), 2000)
});



/*
form.addEventListener('submit', (event) => {
  event.preventDefault();
  showMessage(value, 'bot')
  setTimeout (() => watchMovie(value, 'bot'), 1000)
});
*/

setTimeout(greeting, 1000)