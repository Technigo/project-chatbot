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
          <button id="kids-btn">Kids</button>
          <button id="adults-btn">Adults</button>
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

    //
    
    const selectGenre = (type) => {
        replyBot(`Great! Please select a genre for your movie`)
        if (type === 'kids-movie') {
          inPutWrapper.innerHTML = `
          <select id="select-genre">
            <option value='' selected disabled>Movie genre</option>
            <option value='adventure'>Adventure movie</option> 
            <option value='musical'>Musical</option>
            <option value='cartoon'>Cartoon</option>
          </select>`
          
        const selectGenre = document.getElementById("select-genre").value

      } else {
          inPutWrapper.innerHTML = `
          <select id="select-genre">
            <option value='' selected disabled>Movie genre</option>
            <option value='action'>Action</option> 
            <option value='comedy'>Comedy</option>
            <option value='horror'>Horror</option>
            <option value='fantasy'>Fantasy</option>
          </select>`
      }
    }
    
     //const handleNameInput = (event) => {
    //  event.preventDefault()
    // }

    //   const name = userName.value
    //   showMessage(name, 'user')
    //  userName.value = ''
    //   setTimeout(() => {
    //     selectTargetGroup(name)
    //  }, 1000);
    // }
    // Set up your eventlisteners here

    //form.addEventListener('submit', handleNameInput())
    
    // When website loaded, chatbot asks first question.
    // normally we would invoke a function like this:
    // greeting()
    // But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)