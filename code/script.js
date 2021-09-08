// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const sendBtn = document.getElementById('send-btn')
// const formSumbit = document.getElementById('name-form')
const userName = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')


// Global variables, if you need any, declared here

// Functions declared here
const wantToPlay = (user) => {
  console.log(user);
  showMessage(`Hi, ${user} do you want to know who your celebrity soulmate is?`, 'bot')
  
  inputWrapper.innerHTML = `
  <button type="submit" id="yes">Yes</button>
  <button type="submit" id="no">No</button>
  `
  const yesBtn = document.getElementById('yes')
  const noBtn = document.getElementById('no')

  yesBtn.addEventListener('click', (e) => {
    showMessage(`Yes!`, 'user')
    e.preventDefault();
    sundayAfternoon();
  })
  noBtn.addEventListener('click', (e) => {
    showMessage(`No!`, 'user')
    e.preventDefault();
    shrek()
  })
}

const shrek = () => {
    showMessage(`Then, go back to your swamp!`, 'bot');
    inputWrapper.innerHTML = `
    <form>
        <button type="submit" class="restart">Start again</button>
    </form>
    `
    // const restartBtn = document.getElementById('restart');

    // restartBtn.addEventListener('click', ())
}

const sundayAfternoon = () => {
  showMessage(`What do you do on a sunday afternoon?`, 'bot');
  inputWrapper.innerHTML = `
  <select id="select">
    <option value="" selected disabled> Select an answer </option>
    <option id="movie" value="movie">I like to Netflix and chill.</option>
    <option id="music" value="music">I like to shake my booty.</option>
    <option id="books" value="books">I bury my head in a book.</option>
  </select>
  `

  const select = document.getElementById('select')
  const movie = document.getElementById('movie')
  const music = document.getElementById('music')
  const books = document.getElementById('books')

  select.addEventListener('change', (e) => {
    if (select.value === 'movie') {
        showMessage(movie.innerHTML,'user');
        showMovieOptions()

      console.log('yes this works')
    } else if (select.value === 'music') {
      showMessage(music.innerHTML,'user');
      showMusicOptions()

      
    } else if (select.value === 'books') {
      showMessage(books.innerHTML,'user');
      showReadingOptions()


    } else {

    }
  })

};

const showMovieOptions = () => {
  showMessage('Movies, great! What kind of movies do you like?','bot')

};

const showMusicOptions = () => {
  showMessage('Music, awesome! What would you like to shake your booty to?','bot')

};

const showReadingOptions = () => {
  showMessage('Awesome, what would you like to read?', 'bot')

};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(message, sender);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log(message, sender);
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
  showMessage(`Hello there, What's your instagram username?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
sendBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const name = userName.value;
  showMessage(name, 'user');
  wantToPlay(name);
})
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)

