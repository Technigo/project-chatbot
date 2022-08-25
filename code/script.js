// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const moodButtons = document.getElementById('mood-buttons')
let userName = ""


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

//Question 2++
const watchMovie = () => {
  //let userName = document.getElementById('name-input').value; Onödig kod-rad?
  showMessage(`I'm guessing you're having trouble finding something to watch on Netflix?`, 'bot')
  inputWrapper.innerHTML = `
    <button id="option1">Yes</button>
    <button id="option2">No</button>  
    `
    document.getElementById("option1").addEventListener("click", () => {
      showMessage("Yes, i can't decide what to watch, help me!", 'user')
      setTimeout (() => showMessage("I'm happy to help! How are you feeling today?", "bot"), 1000)
      inputWrapper.innerHTML=` 
        <button id="optHappy">😄</button>
        <button id="optSad">😥</button>
        <button id="optAngry">😡</button>
       `
   
      optHappy.addEventListener('click', () => {
        console.log("Happy indeed!")
        showMessage("I'm feeling happy today", "user")
        setTimeout (() => showMessage("Great to hear that you are happy! Then one of these movies might suit your mood", "bot"), 1000)
        inputWrapper.innerHTML=`
          <label> Take a pick!
              <button id="happyFeet">Happy feet</option>
              <button id="singingInTheRain">Singing in the Rain</option>
              <button id="greaseMovie">Grease</option>
            </select>
          </label>`

          happyFeet.addEventListener('click', () => {
            console.log("I hope this works!!!")
            showMessage("i'll watch Happy feet tonight!", 'user')
            setTimeout (() => showMessage("Great pick! Happy feet is one of my all time favorites. Enjoy the movie!", 'bot'), 1000)
            setTimeout (() => inputWrapper.innerHTML=`
              <p>Thanks for using this bot!</p>
              `, 1000)
          })

          singingInTheRain.addEventListener('click', () => {
            console.log("I'm sure this works too")
            showMessage("i'll watch Singing in the rain tonight!", 'user')
            setTimeout (() => showMessage("Good choice! Singing in the Rain sure is 10/10!", 'bot'), 1000)
            setTimeout (() => inputWrapper.innerHTML=`
              <p>Thanks for using this bot!</p>
              `, 1000)

          })

          greaseMovie.addEventListener('click', () => {
            console.log("I'm sure this works too")
            showMessage("i'll watch Grease tonight!", 'user')
            setTimeout (() => showMessage("Great pick! I LOVE Grease!", 'bot'), 1000)
            setTimeout (() => inputWrapper.innerHTML=`
              <p>Thanks for using this bot!</p>
              `, 1000)
          })
        })

      optSad.addEventListener('click', () => {
        console.log("Sad :(")
        showMessage("I'm feeling sad today", "user")
        setTimeout (() => showMessage("I'm so sorry to   hear that you are not feeling good. Sometimes all you need is a good cry. I can help you get there.", "bot"), 1000)
        setTimeout (() => inputWrapper.innerHTML=`
          <label> Take a pick!
            <select name="sad-movies">
              <option value="titanic">Titanic</option>
              <option value="ps-i-love-uou">PS I Love You</option>
              <option value="brokeback-mountain">Brokeback Mountain</option>
            </select>
          </label>`, 1000)
        })
    
      optAngry.addEventListener('click', () => {
        console.log("grrr!")
        showMessage("I'm feeling angry today", "user")
        setTimeout (() => showMessage("Oh dear, I can feel your anger through the screen. Perhaps one of these films could be a good fit for you?", "bot"), 1000)
        setTimeout (() => inputWrapper.innerHTML=`
          <label> Take a pick!
            <select name="angry-movies">
              <option value="anger-management">Anger Management</option>
              <option value="terminator-2">Terminator 2: Judgement Day</option>
              <option value="django-unchained">Django Unchained</option>
            </select>
          </label>`, 1000)
        })
    })

    document.getElementById("option2").addEventListener("click", () => {
      showMessage("No thanks, i just wanted to try the functions of this bot!", 'user')
      setTimeout (() => showMessage("Well, now that you know that it works, you're more than welcome back once you need my help!", "bot"), 1500)
      setTimeout (() => inputWrapper.innerHTML=`
      <p>Thanks for using this bot!</p>
    `, 1500)
    
    })
}

// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
  console.log("Look at this!")
  event.preventDefault();
  const value = document.getElementById('name-input').value;
  showMessage(value, 'user')
  setTimeout (() => handleResponse(value, 'bot'), 1000)
  setTimeout (() => watchMovie(value, 'bot'), 2000)
});



setTimeout(greeting, 1000)
