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
    
    // Starts here
    const greeting = () => {
      replyBot(`Hello there, What's your name?`)
      // Just to check it out, change 'bot' to 'user' here 👆
    }
    
    inPutWrapper.addEventListener('submit', (event) => {
      event.preventDefault()
      const nameInput = userName.value
      console.log(nameInput)
      replyUser(nameInput)
      userName.value = ''
      replyBot(`Hello ${nameInput}! Are you looking for a movie for kids or adults?`)
      selectTargetGroup()
    })

    const selectTargetGroup = () => {
      inPutWrapper.innerHTML = `
          <button id='kids-btn'>Kids</button>
          <button id='adults-btn'>Adults</button>
          ` 
      const kidsBtn = document.getElementById('kids-btn')
      const adultsBtn = document.getElementById('adults-btn')


      kidsBtn.addEventListener('click', () => {
        replyUser('Kids')
        selectGenre('kids-movie')
      })

      adultsBtn.addEventListener('click', () => {
        replyUser('Adults')
        selectGenre('adults-movie')
      })
    }

    
    const selectGenre = (type) => {
        replyBot(`Great! Please select a genre for your movie`)

        if (type === 'kids-movie') {
          inPutWrapper.innerHTML = `
          <select id='select-genre'>
            <option value='' selected disabled>Movie genre</option>
            <option value='adventure'>An Adventure movie</option> 
            <option value='musical'>A Musical</option>
            <option value='cartoon'>A Cartoon</option>
          </select>
          <button id='movie-btn'>Choose genre</button> `

        } else {
            inPutWrapper.innerHTML = `
            <select id='select-genre'>
              <option value='' selected disabled>Movie genre</option>
              <option value='action'>An Action movie</option> 
              <option value='comedy'>A Comedy</option>
              <option value='horror'>A Horror movie</option>
              <option value='fantasy'>A Fantasy movie</option>
            </select>
            <button id='movie-btn'>Choose genre</button> `
        }
        submitMovie()
    }

    const submitMovie = () => {
      const selectMovie = document.getElementById('select-genre')
      const movieBtn = document.getElementById('movie-btn') 

      movieBtn.addEventListener('click', () => {
        //If time/option 1: targeting text instead of value
        const selectedMovie = selectMovie.value
        replyUser(selectedMovie)  
        showSavourySnacks(selectedMovie) 
      })
    }

    const showSavourySnacks = (selectedMovie) => {
      //If time/option 2: Do uppercase for option value  
      replyBot(`${selectedMovie}, great choice! What kind of snacks do you want?`)

      inPutWrapper.innerHTML = `
      <button id='popcorn-btn'>Popcorn</button>
      <button id='nachos-btn'>Nachos</button>
      <button id='chips-btn'>Chips</button>
      `
      selectSavourySnacks()
    }

    const selectSavourySnacks = () => {
      const popcornBtn = document.getElementById('popcorn-btn')
      const nachosBtn = document.getElementById('nachos-btn')
      const chipsBtn = document.getElementById('chips-btn')

      popcornBtn.addEventListener('click', () => {
        replyUser(`Popcorn`)
        showSweetSnacks()
      })
      nachosBtn.addEventListener('click', () => {
        replyUser(`Nachos`)
        showSweetSnacks()
      })
      chipsBtn.addEventListener('click', () => {
        replyUser(`Chips`)
        showSweetSnacks()
      })
      
    }

    const showSweetSnacks = () => {
      //If time/option 2: Do uppercase for option value  
      replyBot(`And what is your sweet tooth craving?`)

      inPutWrapper.innerHTML = `
      <button id='chocolate-btn'>Chocolate</button>
      <button id='liquorice-btn'>Salty Liquorice</button>
      <button id='gummy-bears-btn'>Gummy Bears</button>
      `
      selectSweetSnacks()
    }

    const selectSweetSnacks = () => {
      const chocolateBtn = document.getElementById('chocolate-btn')
      const liquoriceBtn = document.getElementById('liquorice-btn')
      const gummyBearsBtn = document.getElementById('gummy-bears-btn')

      chocolateBtn.addEventListener('click', () => {
        replyUser(`Chocolate`)
        showDrinks()
      })
      liquoriceBtn.addEventListener('click', () => {
        replyUser(`Salty Liquorice`)
        showDrinks()
      })
      gummyBearsBtn.addEventListener('click', () => {
        replyUser(`Gummy Bears`)
        showDrinks()
      })
      
    }

    const showDrinks = () => {
      //If time/option 2: Do uppercase for option value  
      replyBot(`And what do you want to drink?`)

      inPutWrapper.innerHTML = `
      <button id='coke-btn'>Coke</button>
      <button id='fanta-btn'>Fanta</button>
      <button id='sprite-btn'>Sprite</button>
      <button id='water-btn'>Sparkling water</button>
      `
      selectDrinks()
    }

    const selectDrinks = () => {
      const cokeBtn = document.getElementById('coke-btn')
      const fantaBtn = document.getElementById('fanta-btn')
      const spriteBtn = document.getElementById('sprite-btn')
      const waterBtn = document.getElementById('water-btn')

      cokeBtn.addEventListener('click', () => {
        replyUser(`Coke`)
      })
      fantaBtn.addEventListener('click', () => {
        replyUser(`Fanta`)
      })
      spriteBtn.addEventListener('click', () => {
        replyUser(`Sprite`)
      })
      waterBtn.addEventListener('click', () => {
        replyUser(`Sparkling Water`)
      })
    }
    
    // 1. Last respons from bot
    // 2. Look into timeOut-method
    // 3. check problems on row 117 and 125
    // 4. Refactoring of code
    // 5. Styling!!!! 

    
    
    // When website loaded, chatbot asks first question.
    // normally we would invoke a function like this:
    // greeting()
    // But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 1000)