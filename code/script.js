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
      showMessage(movie.innerHTML, 'user');
      showMovieOptions()

      console.log('yes this works')
    } else if (select.value === 'music') {
      showMessage(music.innerHTML, 'user');
      showMusicOptions()


    } else if (select.value === 'books') {
      showMessage(books.innerHTML, 'user');
      showReadingOptions()


    } else {

    }
  })

};

const showMovieOptions = () => {
  showMessage('Movies, great! What kind of movies do you like?', 'bot')
  inputWrapper.innerHTML = `
    <button type="submit" id="horror">Horror</button>
    <button type="submit" id="drama">Drama</button>
    <button type="submit" id="comedy">Comedy</button>
    `
  const horrorBtn = document.getElementById('horror')
  const dramaBtn = document.getElementById('drama')
  const comedyBtn = document.getElementById('comedy')

  horrorBtn.addEventListener('click', (e) => {
    showMessage(`Horror`, 'user')
    e.preventDefault();
    showSocialMedia('horror', 'movie');
  })

  dramaBtn.addEventListener('click', (e) => {
    showMessage(`Drama`, 'user')
    e.preventDefault();
    showSocialMedia('drama', 'movie');
  })

  comedyBtn.addEventListener('click', (e) => {
    showMessage(`Comedy`, 'user')
    e.preventDefault();
    showSocialMedia('comedy', 'movie');
  })

};

const showMusicOptions = () => {
  showMessage('Music, awesome! What would you like to shake your booty to?', 'bot')
  inputWrapper.innerHTML = `
    <button type="submit" id="rock">Rock</button>
    <button type="submit" id="hiphop">HipHop</button>
    <button type="submit" id="pop">Pop</button>
    `
  const rockBtn = document.getElementById('rock')
  const hiphopBtn = document.getElementById('hiphop')
  const popBtn = document.getElementById('pop')

  rockBtn.addEventListener('click', (e) => {
    showMessage(`Rock`, 'user')
    e.preventDefault();
    showSocialMedia('rock', 'music');
  })

  hiphopBtn.addEventListener('click', (e) => {
    showMessage(`Hiphop`, 'user')
    e.preventDefault();
    showSocialMedia('hiphop', 'music');
  })

  popBtn.addEventListener('click', (e) => {
    showMessage(`Pop`, 'user')
    e.preventDefault();
    showSocialMedia('pop', 'music');
  })


};

const showReadingOptions = () => {
  showMessage('Awesome, what would you like to read?', 'bot')
  inputWrapper.innerHTML = `
    <button type="submit" id="novels">Novels</button>
    <button type="submit" id="magazines">Magazines</button>
    <button type="submit" id="academic">Academic papers</button>
    `
  const novelsBtn = document.getElementById('novels')
  const magazinesBtn = document.getElementById('magazines')
  const academicBtn = document.getElementById('academic')

  novelsBtn.addEventListener('click', (e) => {
    showMessage(`Novels`, 'user')
    e.preventDefault();
    showSocialMedia('novels', 'books');
  })

  magazinesBtn.addEventListener('click', (e) => {
    showMessage(`Magazines`, 'user')
    e.preventDefault();
    showSocialMedia('magazines', 'books');
  })

  academicBtn.addEventListener('click', (e) => {
    showMessage(`Academic Papers`, 'user')
    e.preventDefault();
    showSocialMedia('academic', 'books');
  })

};

const showSocialMedia = (genre, hobby) => {
  console.log("Go us")
  showMessage('How many social media followers do you have?', 'bot')
  inputWrapper.innerHTML = `
    <button type="submit" id="some">Some</button>
    <button type="submit" id="lots">200k</button>
    <button type="submit" id="grandma">My grandma</button>
    `
  const someBtn = document.getElementById('some')
  const lotsBtn = document.getElementById('lots')
  const grandmaBtn = document.getElementById('grandma')

  someBtn.addEventListener('click', (e) => {
    showMessage(`Some`, 'user')
    e.preventDefault();
    showMyAnswer('Some', genre, hobby)
  })

  lotsBtn.addEventListener('click', (e) => {
    showMessage(`Lots`, 'user')
    e.preventDefault();
    showMyAnswer('Lots', genre, hobby)
  })

  grandmaBtn.addEventListener('click', (e) => {
    showMessage(`My grandma`, 'user')
    e.preventDefault();
    showMyAnswer('My grandma', genre, hobby)
  })

}

const showMyAnswer = (media, genre, hobby) => {
  if (media === 'Some') {
    if (hobby === 'movie') {
      if (genre === 'horror') { 
        console.log(media, hobby, genre)
      }
      else if (genre === 'drama') { }
      else if (genre === 'comedy') { }
    }
    else if (hobby === 'music') {
      if (genre === 'hiphop') { }
      else if (genre === 'pop') { }
      else if (genre === 'rock') { }
    }
    else if (hobby === 'books') {
      if (genre === 'novels') { }
      else if (genre === 'magazines') { }
      else if (genre === 'academic') { }
    }
  } else if (media === 'Lots') {
    if (hobby === 'movie') {
      if (genre === 'horror') { }
      else if (genre === 'drama') { }
      else if (genre === 'comedy') { }
    }
    else if (hobby === 'music') {
      if (genre === 'hiphop') { }
      else if (genre === 'pop') { }
      else if (genre === 'rock') { }
    }
    else if (hobby === 'books') {
      if (genre === 'novels') { }
      else if (genre === 'magazines') { }
      else if (genre === 'academic') { }
    }
  } else if (media === 'My grandma') {
    if (hobby === 'movie') {
      if (genre === 'horror') { }
      else if (genre === 'drama') { }
      else if (genre === 'comedy') { }
    }
    else if (hobby === 'music') {
      if (genre === 'hiphop') { }
      else if (genre === 'pop') { }
      else if (genre === 'rock') { }
    }
    else if (hobby === 'books') {
      if (genre === 'novels') { }
      else if (genre === 'magazines') { }
      else if (genre === 'academic') { }
    }
  }
}
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

