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
    chat.innerHTML += `
      <section class="user-msg">
      <div class="bubble user-bubble">
          <p>${message}</p>
          </div>

      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
      <img src="assets/cinema-dude.png" alt="cinema-dude" />
        <div class="bubble bot-bubble">
        <p>${message}</p>
        </div>
        </section>
        `
      }

      //          <img src="assets/user.png" alt="User" />  

      // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
      chat.scrollTop = chat.scrollHeight
    }

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
        setTimeout(() => thankYouMessage(userAnswer), 2500)
      }
    }
    
    // Starts here
    const greeting = () => {
      questionNumber = 1
      replyBot(`Hello there, What's your name?`)
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
          <button id='kids-btn'>Kids</button>
          <button id='adults-btn'>Adults</button>
          ` 
      const kidsBtn = document.getElementById('kids-btn')
      const adultsBtn = document.getElementById('adults-btn')


      kidsBtn.addEventListener('click', () => {
        bringNextQuestion('Kids')
      })

      adultsBtn.addEventListener('click', () => {
        bringNextQuestion('Adults')
      })
    }

    
    const selectGenre = (type) => {
        questionNumber = 3
        replyBot(`Alright! What type of movie do you feel like watching?`) //Please select a genre for your movie
        if (type === 'kids-movie') {
          inPutWrapper.innerHTML = `
          <form>
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
            <form>
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
      replyBot(`${selectedMovie}, great choice! Then to the important part! What kind of snacks would you like to have?`) //what kind of snacks do you want

      inPutWrapper.innerHTML = `
      <button id='popcorn-btn'>Popcorn <img src="assets/popcorn.png" alt="popcorn" /></button>
      <button id='nachos-btn'>Nachos <img src="assets/nachos.png" alt="nachos" /></button>
      <button id='chips-btn'>Chips <img src="assets/chips.png" alt="chips" /></button>
      `
      const popcornBtn = document.getElementById('popcorn-btn')
      const nachosBtn = document.getElementById('nachos-btn')
      const chipsBtn = document.getElementById('chips-btn')
  
      popcornBtn.addEventListener('click', () => {
        bringNextQuestion(`Popcorn`)
      })
      nachosBtn.addEventListener('click', () => {
        bringNextQuestion(`Nachos`)
      })
      chipsBtn.addEventListener('click', () => {
        bringNextQuestion(`Chips`)
      })
    }


    const selectSweetSnacks = () => {
      questionNumber = 5  
      replyBot(`Ah yum! And what is your sweet tooth craving?`) //adding the answer from snacks to the reply?

      inPutWrapper.innerHTML = `
      <button id='chocolate-btn'>Chocolate <img src="assets/chocolate.png" alt="chocolate" /></button>
      <button id='liquorice-btn'>Salty Liquorice <img src="assets/salty-liquorice.png" alt="salty-liquorice" /></button>
      <button id='gummy-bears-btn'>Gummy Bears <img src="assets/gummy-bear.png" alt="gummy-bear" /></button>
      `
      const chocolateBtn = document.getElementById('chocolate-btn')
      const liquoriceBtn = document.getElementById('liquorice-btn')
      const gummyBearsBtn = document.getElementById('gummy-bears-btn')
  
      chocolateBtn.addEventListener('click', () => {
        bringNextQuestion(`Chocolate`)
      })
      liquoriceBtn.addEventListener('click', () => {
        bringNextQuestion(`Salty Liquorice`)
      })
      gummyBearsBtn.addEventListener('click', () => {
        bringNextQuestion(`Gummy Bears`)
      })
    }


    const selectDrinks = () => {
      questionNumber = 6  
      replyBot(`My favourite! How about drinks?`) //And what do you want to drink

      inPutWrapper.innerHTML = `
      <button id='coke-btn'>Coke <img src="assets/cola.png" alt="cola" /></button>
      <button id='fanta-btn'>Fanta <img src="assets/fanta.png" alt="fanta" /></button>
      <button id='sprite-btn'>Sprite <img src="assets/sprite.png" alt="sprite" /></button>
      <button id='water-btn'>Water <img src="assets/water.png" alt="water" /></button>
      `
      const cokeBtn = document.getElementById('coke-btn')
      const fantaBtn = document.getElementById('fanta-btn')
      const spriteBtn = document.getElementById('sprite-btn')
      const waterBtn = document.getElementById('water-btn')
  
      cokeBtn.addEventListener('click', () => {
        thankYouMessage(`Coke`)
      })
      fantaBtn.addEventListener('click', () => {
        thankYouMessage(`Fanta`)
      })
      spriteBtn.addEventListener('click', () => {
        thankYouMessage(`Sprite`)
      })
      waterBtn.addEventListener('click', () => {
        thankYouMessage(`Sparkling Water`)
      })
    }

    
    const thankYouMessage = () => {
      replyBot('Okey dokey! Your reservation is now ready. You can pay when arriving. We hope you enjoy the movie! And the snacks too of course ;)')
      inPutWrapper.innerHTML = ''
    }
    
  
    // 2. Look into timeOut-method
    // 4. Refactoring of code
    // 5. Styling!!!! 

    
    
    // When website loaded, chatbot asks first question.
    // normally we would invoke a function like this:
    // greeting()
    // But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 1000)