
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
        <img src="assets/icon-user.png" alt="User" />   
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/icon-bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  setTimeout (() => chat.scrollTop = chat.scrollHeight, 1)
}

//Question 1: Bot greets and asks for the user's name
const greeting = () => {
  showMessage(`Hello there, what's your name?`, 'bot')
}

const handleResponse = () => {
  let userName = document.getElementById('name-input').value;
  showMessage(`Nice to meet you ${userName}!`, 'bot') 
}

//Question 2: Bot asks if user is having trouble choosing a movie
const watchMovie = () => {
  showMessage(`I'm guessing you're having trouble finding something to watch on Netflix?`, 'bot')
  setTimeout (() => yesOrNo(), 1000)
}

//Question 2.1 The pop-up of the Yes- or No buttons
const yesOrNo = () => {
  inputWrapper.innerHTML = `
  <button id="option1">Yes</button>
  <button id="option2">No</button>  
  `
  document.getElementById("option1").addEventListener("click", () => {
    showMessage("Yes, I can't decide what to watch, help me!", 'user')  
    inputWrapper.innerHTML = ''
    setTimeout (() => doYouNeedHelp('option1'), 1000)
  })
  
  document.getElementById("option2").addEventListener("click", () => {
    showMessage("No thanks, i just wanted to try the functions of this bot!", 'user')
    inputWrapper.innerHTML = ''
    setTimeout (() => doYouNeedHelp('option2'), 1000)
  })
}

//Question 3: Bot's answer depending on if use chose Yes or No in Question 2
const doYouNeedHelp = (selection) => {
  if (selection === 'option1') {
    showMessage("I'm happy to help! How are you feeling today?", "bot")
    setTimeout (() => moodChoice (), 1000)
    
   const moodChoice = () =>  {
    inputWrapper.innerHTML= 
    `<button id="optHappy">😄</button>
    <button id="optSad">😥</button>
    <button id="optAngry">😡</button>`
   
    document.getElementById("optHappy").addEventListener('click', () => {
      showMessage("I'm feeling happy today", "user")
      inputWrapper.innerHTML = ''
      setTimeout (() => chooseByMood('optHappy'), 1000)
    })

    document.getElementById("optSad").addEventListener('click', () => {
      showMessage("I'm feeling sad today", "user")
      inputWrapper.innerHTML = ''
      setTimeout (() => chooseByMood('optSad'), 1000)
    })

    document.getElementById("optAngry").addEventListener('click', () => {
      showMessage("I'm feeling angry today", "user")
      inputWrapper.innerHTML = ''
      setTimeout (() => chooseByMood('optAngry'), 1000)
    })
  }
  } 
  
  else if (selection === 'option2') {
    showMessage("Well, now that you know that it works, you're more than welcome back once you need my help!", "bot")
    inputWrapper.innerHTML=`
    <p>Thanks for using this bot!</p>`
      }
    }

//Question 4: Bot's answer depends on which Mood-button has been chosen
const chooseByMood = (selection) => {
 if (selection === "optHappy") {
  showMessage("Great to hear that you are happy! Then one of these movies might suit your mood", "bot")
  setTimeout (() => happyFilmButtons (), 1000)
  
  const happyFilmButtons = () => {
  inputWrapper.innerHTML=`
      <button id="happyFeet">Happy feet</button>
      <button id="singingInTheRain">Singing in the Rain</button>
      <button id="greaseMovie">Grease</button>`

      document.getElementById("happyFeet").addEventListener('click', () => {
        showMessage("I'll watch Happy Feet tonight!", "user")
        inputWrapper.innerHTML = ''
        setTimeout (() => lastReplyHappy('happyFeet'), 1000)
      })

      document.getElementById("singingInTheRain").addEventListener('click', () => {
        showMessage("I'll watch Singing in the rain tonight!", 'user')
        inputWrapper.innerHTML = ''
        setTimeout (() => lastReplyHappy('singingInTheRain'), 1000)
      })

      document.getElementById("greaseMovie").addEventListener('click', () => {
        showMessage("I'll watch Grease tonight", 'user')
        inputWrapper.innerHTML = ''
        setTimeout (() => lastReplyHappy('grease'), 1000)
      }) 
    }
  }

 else if (selection === "optSad") {
  showMessage("I'm so sorry to hear that you are not feeling good. Sometimes all you need is a good cry. I can help you get there.", "bot")
  setTimeout (() => sadFilmButtons (), 1000)
  
  const sadFilmButtons = () => {
  inputWrapper.innerHTML=`
      <button id="titanic">Titanic</button>
      <button id="theNotebook">The Notebook</button>
      <button id="brokebackMountain">Brokeback Mountain</button>`
 
        document.getElementById("titanic").addEventListener('click', () => {
        showMessage("I'll watch Titanic tonight!", "user")
        inputWrapper.innerHTML = ''
        setTimeout (() => lastReplySad('titanic'), 1000)
        })

        document.getElementById("theNotebook").addEventListener('click', () => {
        showMessage("I'll watch The Notebook tonight!", 'user')
        inputWrapper.innerHTML = ''
        setTimeout (() => lastReplySad('theNotebook'), 1000)
        })

        document.getElementById("brokebackMountain").addEventListener('click', () => {
        showMessage("I'll watch Brokeback Mountain tonight", 'user')
        inputWrapper.innerHTML = ''
        setTimeout (() => lastReplySad('brokebackMountain'), 1000)
        }) 
      }
    }

 else if (selection === "optAngry") {
  showMessage("Oh dear, I can feel your anger through the screen. Perhaps one of these films could be a good fit for you?", "bot")
  setTimeout (() => angryFilmButtons(), 1000)
  
  const angryFilmButtons = () => {
  inputWrapper.innerHTML=`
        <button id="angerManagement">Anger Management</button>
        <button id="terminator2">Terminator 2</button>
        <button id="djangoUnchained">Django Unchained</button>`

        document.getElementById("angerManagement").addEventListener('click', () => {
          showMessage("I'll watch Anger Management tonight!", "user")
          inputWrapper.innerHTML = ''
          setTimeout (() => lastReplyAngry('angerManagement'), 1000)
        })
  
        document.getElementById("terminator2").addEventListener('click', () => {
          showMessage("I'll watch Terminator 2 tonight!", 'user')
          inputWrapper.innerHTML = ''
          setTimeout (() => lastReplyAngry('terminator2'), 1000)
        })
  
        document.getElementById("djangoUnchained").addEventListener('click', () => {
          showMessage("I'll watch Django Unchained tonight", 'user')
          inputWrapper.innerHTML = ''
          setTimeout (() => lastReplyAngry('djangoUnchained'), 1000)
        })  
    }
  }
}

//Question 5: This is where the user chooses one of 3 movies that were suggested based on the user's mood
const lastReplyHappy = (selection) => {
  if (selection === "happyFeet") {
    showMessage("Great pick! Happy feet is one of my all time favorites. Enjoy the movie!", 'bot');
    setTimeout (() => inputWrapper.innerHTML = `
      <p>Thank you for using this bot!</p>
    `, 1000)
  }
  else if (selection === "singingInTheRain") {
    showMessage("Good choice! Singing in the Rain sure is 10/10!", 'bot')
    setTimeout (() => inputWrapper.innerHTML = `
      <p>Thank you for using this bot!</p>
    `, 1000)
  }
  else if (selection === "grease") {
    showMessage("Great pick! I LOVE Grease!", 'bot')
    setTimeout (() => inputWrapper.innerHTML = `
      <p>Thank you for using this bot!</p>
    `, 1000)
  }
}

const lastReplySad = (selection) => {
  if (selection === "titanic") {
    showMessage("Classic, maybe this time Jack will fit on the door!", 'bot')
    setTimeout (() => inputWrapper.innerHTML = `
    <p>Thank you for using this bot!</p>
    `, 1000)
  }
  
  else if (selection === "theNotebook") {
    showMessage("Great choice, make sure to bring napkins!", 'bot')
    setTimeout (() => inputWrapper.innerHTML = `
    <p>Thank you for using this bot!</p>
    `, 1000)
  }

  else if (selection === "brokebackMountain") {
    showMessage("Nice, that's one of my overall favorites!", 'bot')
    setTimeout (() => inputWrapper.innerHTML = `
    <p>Thank you for using this bot!</p>
    `, 1000)
  }
}

const lastReplyAngry = (selection) => {
  if (selection === "angerManagement") {
    showMessage("Good one, sounds like it could be needed!", 'bot')
    setTimeout (() => inputWrapper.innerHTML = `
    <p>Thank you for using this bot!</p>
    `, 1000)
  }

  else if (selection === "terminator2") {
    showMessage('Great choice. Hasta la vista, baby!', 'bot')
    setTimeout (() => inputWrapper.innerHTML = `
    <p>Thank you for using this bot!</p>
    `, 1000)
  }

  else if (selection === "djangoUnchained") {
    showMessage("Good movie, one of Tarantinos best works!", 'bot') 
    setTimeout (() => inputWrapper.innerHTML = `
    <p>Thank you for using this bot!</p>
    `, 1000)
  }
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