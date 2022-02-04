// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const btn = document.getElementById('send-btn')
const userName = document.getElementById('name-input')
const form = document.getElementById('name-form')
const inPutWrapper = document.getElementById('input-wrapper')

const replyBot = (message) => {
  showMessage(message, 'bot')
} 

const replyUser = (message) => {
  showMessage(message, 'user')
}

// Global variables, if you need any, declared here
// Functions declared here
// const selectTargetGroup = () => {
//   console.log('Does it work?')
// }
let questionNumber = 1

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    const userMessage = message[0].toUpperCase() + message.substring(1)
    chat.innerHTML += `
      <section class="user-msg">
      <div class="bubble user-bubble">
          <p>${userMessage}</p>
          </div>
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
      <img src="assets/bot.svg" alt="bot" />
        <div class="bubble bot-bubble">
        <p>${message}</p> 
        </div>
        </section>
        `
      }
      chat.scrollTop = chat.scrollHeight 
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
      


    const bringNextQuestion = (userAnswer) => {
      console.log('Number of the question is:', questionNumber)

      if (questionNumber === 1) {
        replyUser(userAnswer)
        //moved userName.value = '' to row 87"
        setTimeout(() => selectTargetGroup(userAnswer), 800)
      } else if (questionNumber === 2) {
        replyUser(userAnswer)
        setTimeout(() => selectGenre(userAnswer), 800)
      } else if (questionNumber === 3) {
        replyUser(userAnswer)
        setTimeout(() => selectSavourySnacks(userAnswer), 800)
      } else if (questionNumber === 4) {
        replyUser(userAnswer)
        setTimeout(() => selectSweetSnacks(userAnswer), 800)
      } else if (questionNumber === 5) {
        replyUser(userAnswer)
        setTimeout(() => selectDrinks(userAnswer), 800)
      } else if (questionNumber === 6) {
        replyUser(userAnswer)
        setTimeout(() => confirmReservation(userAnswer), 800)
      } else {
        replyUser(userAnswer)
        setTimeout(() => thankYouMessage(userAnswer), 1500)
      }
    }
    
    // Starts here if (questionNumber === 6)
    const greeting = () => {
      questionNumber = 1
      replyBot(`Hello there, what's your name?`)
    }
    
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      bringNextQuestion(userName.value)
    })
    
    const selectTargetGroup = () => {
      questionNumber = 2
      replyBot(`Hey ${userName.value}! Are you looking for a movie for kids or adults?`)
      userName.value = ''
      inPutWrapper.innerHTML = `
          <button id='kids-btn'>Kids <img src="assets/kids.png" alt="kid" /></button>
          <button id='adults-btn'>Adults <img src="assets/adults.png" alt="adult" /></button>
          ` 
      document.getElementById('kids-btn').addEventListener('click', () => {
        bringNextQuestion('Kids')
      })
      document.getElementById('adults-btn').addEventListener('click', () => {
        bringNextQuestion('Adults')
      })
    }

    
    const selectGenre = (type) => {
        questionNumber = 3
        replyBot(`Alright! What type of movie do you feel like watching?`)
        if (type === 'Kids') {
          inPutWrapper.innerHTML = `
          <form class="input-wrapper">
          <select id='select-genre'>
            <option value='' selected disabled>Select movie genre</option>
            <option value='adventure'>An Adventure movie</option> 
            <option value='musical'>A Musical</option>
            <option value='cartoon'>A Cartoon</option>
          </select>
          </form>
          `

        } else {
            inPutWrapper.innerHTML = `
            <form class="input-wrapper">
            <select id='select-genre'>
              <option value='' selected disabled>Select movie genre</option>
              <option value='action'>An Action movie</option> 
              <option value='comedy'>A Comedy</option>
              <option value='horror'>A Horror movie</option>
              <option value='fantasy'>A Fantasy movie</option>
            </select>
            </form>
            `
        }
        
        const selectMovie = document.getElementById('select-genre')  
        selectMovie.addEventListener('change', () => {
        const selectedMovie = selectMovie[selectMovie.selectedIndex].text 
          bringNextQuestion(selectedMovie)
        })
    }


    const selectSavourySnacks = (selectedMovie) => {
      questionNumber = 4
      replyBot(`${selectedMovie}, great choice! Then to the important part! What kind of snacks would you like to have? &#128523`)

      inPutWrapper.innerHTML = `
      <button id='popcorn-btn'>Popcorn <img src="assets/popcorn.png" alt="popcorn" /></button>
      <button id='nachos-btn'>Nachos <img src="assets/nachos.png" alt="nachos" /></button>
      <button id='chips-btn'>Chips <img src="assets/chips.png" alt="chips" /></button>
      `
      
      document.getElementById('popcorn-btn').addEventListener('click', () => {
        bringNextQuestion(`popcorn`)
      })
      document.getElementById('nachos-btn').addEventListener('click', () => {
        bringNextQuestion(`nachos`)
      })
      document.getElementById('chips-btn').addEventListener('click', () => {
        bringNextQuestion(`chips`)
      })
    }


    const selectSweetSnacks = (snack) => {
      questionNumber = 5  
      replyBot(`Ah yum, ${snack}! And what is your sweet tooth craving?`)

      inPutWrapper.innerHTML = `
      <button id='chocolate-btn'>Chocolate <img src="assets/chocolate.png" alt="chocolate" /></button>
      <button id='liquorice-btn'>Salty Liquorice <img src="assets/salty-liquorice.png" alt="salty-liquorice" /></button>
      <button id='gummy-bears-btn'>Gummy Bears <img src="assets/gummy-bear.png" alt="gummy-bear" /></button>
      `
      document.getElementById('chocolate-btn').addEventListener('click', () => {
        bringNextQuestion(`Chocolate`)
      })
      document.getElementById('liquorice-btn').addEventListener('click', () => {
        bringNextQuestion(`Salty Liquorice`)
      })
      document.getElementById('gummy-bears-btn').addEventListener('click', () => {
        bringNextQuestion(`Gummy Bears`)
      })
    }


    const selectDrinks = () => {
      questionNumber = 6  
      replyBot(`My favourite! How about drinks?`)

      inPutWrapper.innerHTML = `
      <button id='coke-btn'>Coke <img src="assets/cola.png" alt="cola" /></button>
      <button id='fanta-btn'>Fanta <img src="assets/fanta.png" alt="fanta" /></button>
      <button id='sprite-btn'>Sprite <img src="assets/sprite.png" alt="sprite" /></button>
      <button id='water-btn'>Water <img src="assets/water.png" alt="water" /></button>
      `
  
      document.getElementById('coke-btn').addEventListener('click', () => {
        bringNextQuestion(`Coke`)
      })
      document.getElementById('fanta-btn').addEventListener('click', () => {
        bringNextQuestion(`Fanta`)
      })
      document.getElementById('sprite-btn').addEventListener('click', () => {
        bringNextQuestion(`Sprite`)
      })
      document.getElementById('water-btn').addEventListener('click', () => {
        bringNextQuestion(`Sparkling Water`)
      })
    }

    const confirmReservation = () => {
      questionNumber = 7
      replyBot(`Alright! Now you can press confirm to send your order or press restart if you want to start a new order instead &#129303`)

      inPutWrapper.innerHTML = `
      <button id='confirm-btn'>Confirm </button>
      <button id='restart-btn'>Restart </button>
      `

      document.getElementById('confirm-btn').addEventListener('click', () => {
        bringNextQuestion(`Confirm`)
      })
      document.getElementById('restart-btn').addEventListener('click', () => {
        chat.innerHTML = ``
        greeting()
      })
    }
    
    const thankYouMessage = () => {
      replyBot(`Okey dokey! Your reservation is now ready. You can pay when arriving. We hope you enjoy the movie! &#127871 &#129380 &#128525`)
      const audio = new Audio('assets/tadaa.mp3')
      audio.play()
      inPutWrapper.innerHTML = ``
    }
    
  
    
    // When website loaded, chatbot asks first question.
    // normally we would invoke a function like this:
    // greeting()
    // But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 1000)