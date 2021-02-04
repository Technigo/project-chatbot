// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('user-input')
const submit = document.getElementById('send-btn')

// Global variables, if you need any, declared here
let questionNumber = 1
console.log(questionNumber);

let movLength;
let genderDir;

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(sender); //added console.log
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user3.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log(sender);//added console.log
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot2.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

//This function will lead the user to a button where they can reload the bot after pressing no to the second question
const reloadBot = () => {
  showMessage('Too bad, let me know if you change your mind!', 'bot')
  inputWrapper.innerHTML = `
    <div>
      <button id="reloadBtn">Restart</button>
    </div>
  `
  document.getElementById('reloadBtn').addEventListener('click', () => {
    location.reload()

  })
}

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => movieTips(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => movieLength(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => gender(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => movieGenre(message), 1000)
  }
  else if (questionNumber === 5) {
    userReply(message)
    setTimeout(() => movieMenu(message), 1000)
  }
  else if (questionNumber === 6) {
    userReply(message)
    setTimeout(() => chosenMovie(message), 1000)
  }
};

// Starts here 
const greeting = () => {
  questionNumber = 1
  showMessage(`Hello there, What's your name?`, 'bot')
}

const movieTips = (msg) => {
  questionNumber++
  showMessage(`Nice to meet you ${msg}. As you might know, I'm quite the movie expert. 
  Would you like some tips for tonight?`, 'bot')
  inputWrapper.innerHTML = `
      <div>
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
      </div>
    `
  document.getElementById('yesBtn').addEventListener('click', () => nextQuestion('Yes'))
  document.getElementById('noBtn').addEventListener('click', () => reloadBot())
}


const movieLength = (yes) => {
  questionNumber++
  showMessage(`${yes} great! How much time do you have to watch the movie?`, 'bot')
  inputWrapper.innerHTML = `
      <div>
        <button id="underBtn">Under 2h</button>
        <button id="overBtn">Over 2h</button>
      </div>
    `
  document.getElementById('underBtn').addEventListener('click', () => nextQuestion('Under 2h'))
  document.getElementById('overBtn').addEventListener('click', () => nextQuestion('Over 2h'))
}

const gender = (length) => {
  movLength = length;
  questionNumber++
  showMessage(`${length}, right. Do you want to watch a movie made by a male or female director?`, 'bot')
  inputWrapper.innerHTML = `
      <div>
        <button id="fBtn">Female</button>
        <button id="mBtn">Male</button>
      </div>
    `
  document.getElementById('fBtn').addEventListener('click', () => nextQuestion('Female director'))
  document.getElementById('mBtn').addEventListener('click', () => nextQuestion('Male director'))
  //showMessage(`Great to know your preferences! Now let's move further into the movie djungle...`, 'bot')
} //can I have one more showMessage here??
//add extra time here as a suspension, before the next Question? 

const movieGenre = (gender) => {
  genderDir = gender;
  questionNumber++
  showMessage(`${gender} - got it! What genre are you in the mood for?`, 'bot')
  inputWrapper.innerHTML = `
      <div>
        <button id="dramaBtn">Drama</button>
        <button id="thrillerBtn">Thriller</button>
        <button id="comedyBtn">Comedy</button>
        <button id="documentaryBtn">Documentary</button>
      </div>
    `
  document.getElementById('dramaBtn').addEventListener('click', () => nextQuestion('drama'))
  document.getElementById('thrillerBtn').addEventListener('click', () => nextQuestion('thriller'))
  document.getElementById('comedyBtn').addEventListener('click', () => nextQuestion('comedy'))
  document.getElementById('documentaryBtn').addEventListener('click', () => nextQuestion('documentary'))
}


const movieMenu = (type) => {
  questionNumber++
  showMessage(`Excellent choice - ${type} it is. Here is a list of movies that I think will suit you:`, 'bot')
  if (movLength === 'Under 2h') {
      if (type === 'drama') {
        if (genderDir === 'Female director') {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 shorter Dramas with Female directors</option>
              <option value="American Psycho">American Psycho</option>
              <option value="Lost In Translation">Lost In Translation</option>
              <option value="Monster">Monster</option>
            </select>
          `
      }  else /*if (genderDir === 'Male director')*/ {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 shorter Dramas with Male directors</option>
              <option value="La vita è Bella">La vita è Bella</option>
              <option value="Intouchables">Intouchables</option>
              <option value="Eternal Sunshine of the spotless mind">Eternal Sunshine of the spotless mind</option>
            </select>
          `
      }
  }  else if (type === 'thriller') {
        if (genderDir === 'Female director') {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 shorter Thrillers with Female directors</option>
              <option value="The hitch-hiker">The hitch-hiker</option>
              <option value="American psycho">American psycho</option>
              <option value="In the cut">In the cut</option>
            </select>
          `
      }  else /*if (genderDir === 'Male director')*/ {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 shorter Thrillers with Male directors</option>
              <option value="Taken">Taken</option>
              <option value="Reservoir dogs">Reservoir dogs</option>
              <option value="Escape room">Escape room</option>
            </select>
          `
      }
  }  else if (type === 'comedy') {
        if (genderDir === 'Female director') {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 shorter Comedies with Female directors</option>
              <option value="Afterwork stories">Afterwork stories</option>
              <option value="Clueless">Clueless</option>
              <option value="Booksmart">Booksmart</option>
            </select>

          `
      } else /*if (genderDir === 'Male director') */{
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 shorter Comedies with Male directors</option>
              <option value="Borat">Borat</option>
              <option value="Touchy feely">Touchy feely</option>
              <option value="Death to 2020">Death to 2020</option>
            </select>
          `
      }
  }  else {
        if (genderDir === 'Female director') {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 shorter documentaries with Female directors</option>
              <option value="Blackfish">Blackfish</option>
              <option value="The beginning of Life">The beginning of Life</option>
              <option value="Mommy Dead and Dearest">Mommy Dead and Dearest</option>
            </select>
          `
      } else /*if (genderDir === 'Male director') */{
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 shorter documentaries with Male directors</option>
              <option value="David Attenborough: A Life on Our Planet">David Attenborough: A Life on Our Planet</option>
              <option value="Man on Wire">Man on Wire</option>
              <option value="The Social Dilemma">The Social Dilemma</option>
            </select>
          `
      }
  }
  } else if (movLength === 'Over 2h') {
      if (type === 'drama') {
        if (genderDir === 'Female director') {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 longer Dramas with Female directors</option>
              <option value="The Hurt Locker">The Hurt Locker</option>
              <option value="Fish Tank">Fish Tank</option>
              <option value="Little Women">Little Women</option>
            </select>
          `
      } else /*if (genderDir === 'Male director')*/ {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 longer Dramas with Male directors</option>
              <option value="The Shawshank Redemption">The Shawshank Redemption</option>
              <option value="Forrest Gump">Forrest Gump</option>
              <option value="Interstellar">Interstellar</option>
            </select>
          `
      }
  } else if (type === 'thriller') {
        if (genderDir === 'Female director') {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 longer Thrillers with Female directors</option>
              <option value="Point break">Point break</option>
              <option value="Fatto di sangue fra due uomini per causa di una vedova. Si sospettano moventi politici">Fatto di sangue fra due uomini per causa di una vedova. Si sospettano moventi politici</option>
              <option value="Bastards">Bastards</option>
            </select>
          `
      } else /*if (genderDir === 'Male director')*/ {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 longer Thrillers with Male directors</option>
              <option value="The Killing of a Sacred Deer">The Killing of a Sacred Deer</option>
              <option value="Sangue do Meu Sangue">Sangue do Meu Sangue</option>
              <option value="Les Diaboliques">Les Diaboliques</option>
            </select>`
      }
  } else if (type === 'comedy') {
        if (genderDir === 'Female director') {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 longer comedies with Female directors</option>
              <option value="Slackwars">Slackwars</option>
              <option value="The New the Bad and the Lazy">The New the Bad and the Lazy</option>
              <option value="Heut ist mein Tag">Heut ist mein Tag</option>
            </select>
          `
      } else /*if (genderDir === 'Male director')*/ {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 longer comedies with Male directors</option>
              <option value="The Big Lebowski">The Big Lebowski</option>
              <option value="Miss Granny">Miss Granny</option>
              <option value="Naui gyeolhon wonjeonggi">Naui gyeolhon wonjeonggi</option>
            </select>
          `
      }
  } else {
        if (genderDir === 'Female director') {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 longer documentaries with Female directors</option>
              <option value="Selma">Selma</option>
              <option value="American Passages">American Passages</option>
              <option value="Totally Under Control">Totally Under Control</option>
            </select>
          `
      } else /*if (genderDir === 'Male director')*/ {
          inputWrapper.innerHTML = `
            <select id="select"> 
              <option value="" selected disabled>Top 3 longer documentaries with Male directors</option>
              <option value="Ikaros">Ikaros</option>
              <option value="Paradise Lost">Paradise Lost</option>
              <option value="Amy">Amy</option>
            </select>
          `
      }
  }
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
};

const chosenMovie = (select) => {
  questionNumber++
  showMessage(`Get the popcorn ready and enjoy watching the movie ${select}!`, 'bot')
  showMessage(`Press restart if you want to start over 👇`, 'bot')
    inputWrapper.innerHTML =`
      <div>
        <button id="restartBtn">Restart</button>
      </div>
    `

  document.getElementById('restartBtn').addEventListener('click', () => {
    location.reload()
  })

};


// Set up your eventlisteners here
submit.addEventListener('click', (event) => {
  event.preventDefault();
  nextQuestion(input.value)
})
// input.addEventListener('keypress', (event) => {
//   event.preventDefault();
//   if (event.key === 'Enter' && input.value) nextQuestion(input.value)
// })


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loadedname.
setTimeout(greeting, 1000)
