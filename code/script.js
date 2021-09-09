// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const sendBtn = document.getElementById('send-btn')
// const formSumbit = document.getElementById('name-form')
const userName = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')


// Global variables, if you need any, declared here
const doug = document.createElement("img");
doug.src = "./assets/celebs/Doug_Jones_2015.jpg"
doug.alt = "Doug Jones"

const christopher = document.createElement("img");
christopher.src = "./assets/celebs/Christopher_Lee.jpeg"
christopher.alt = "Christopher Lee"

const anna = document.createElement("img");
anna.src = "./assets/celebs/anna_wintour.jpg"
anna.alt = "Anna Wintour"

const carrot = document.createElement("img");
carrot.src = "./assets/celebs/Carrot_top.jpeg"
carrot.alt = "Carrot Top"

const charles = document.createElement("img");
charles.src = "./assets/celebs/Charles_Dickens.png"
charles.alt = "Charles Dickens"

const ed = document.createElement("img");
ed.src = "./assets/celebs/Ed_Sheeran.jpg"
ed.alt = "Ed Sheeran"

const french = document.createElement("img");
french.src = "./assets/celebs/french_and_saunders.jpg"
french.alt = "French and Saunders"

const halle = document.createElement("img");
halle.src = "./assets/celebs/Halle_Berry.jpeg"
halle.alt = "Halle Berry"

const helena = document.createElement("img");
helena.src = "./assets/celebs/Helena_Bonham_Carter.jpeg"
helena.alt = "Helena Bonham Carter"

const jamie = document.createElement("img");
jamie.src = "./assets/celebs/Jamie_Lee_Curtis.jpeg"
jamie.alt = "Jamie Lee Curtis"

const jim = document.createElement("img");
jim.src = "./assets/celebs/Jim_Carrey.jpeg"
jim.alt = "Jim Carrey"

const karl = document.createElement("img");
karl.src = "./assets/celebs/Karl_Lagerfeld.jpg"
karl.alt = "Karl Lagerfeld"

const keira = document.createElement("img");
keira.src = "./assets/celebs/Keira_Knightley.jpeg"
keira.alt = "Keira Knightley"

const kiss = document.createElement("img");
kiss.src = "./assets/celebs/kiss.jpg"
kiss.alt = "Kiss"

const margaret = document.createElement("img");
margaret.src = "./assets/celebs/MargaretAtwood.jpg"
margaret.alt = "Margaret Atwood"

const marilyn = document.createElement("img");
marilyn.src = "./assets/celebs/Marilyn_Manson.jpg"
marilyn.alt = "Marilyn Manson"

const neil = document.createElement("img");
neil.src = "./assets/celebs/neil-gaiman.jpeg"
neil.alt = "Neil Gaiman"

const prince = document.createElement("img");
prince.src = "./assets/celebs/Prince.jpg"
prince.alt = "Prince"

const taylor = document.createElement("img");
taylor.src = "./assets/celebs/Taylor_Swift.png"
taylor.alt = "Taylor Swift"

const tupac = document.createElement("img");
tupac.src = "./assets/celebs/Tupac_Shakur.jpg"
tupac.alt = "Tupac Shakur"

const u2 = document.createElement("img");
u2.src = "./assets/celebs/u2.jpg"
u2.alt = "U2"

const versace = document.createElement("img");
versace.src = "./assets/celebs/versace.jpg"
versace.alt = "Donatella Versace"

const cent = document.createElement("img");
cent.src = "./assets/celebs/50_Cent.jpg"
cent.alt = "50cent"

const jennifer = document.createElement("img");
jennifer.src = "./assets/celebs/Jennifer_Lopez.jpg"
jennifer.alt = "Jennifer Lopez"

const elon = document.createElement("img");
elon.src = "./assets/celebs/Elon_Musk.jpg"
elon.alt = "Elon Musk"

const ada = document.createElement("img");
ada.src = "./assets/celebs/Ada_Lovelace.jpg"
ada.alt = "Ada Lovelace"

const stephen = document.createElement("img");
stephen.src = "./assets/celebs/stephen.jpg"
stephen.alt = "Stephen Hawking"

const shrekImg = document.createElement("img");
shrekImg.src = "./assets/celebs/shrekImg.jpeg"
shrekImg.alt = "Shrek"

// Functions declared here
const wantToPlay = (user) => {
  console.log(user);
  showMessage(`Hi, ${user}, do you want to know who your celebrity soulmate is?`, 'bot')

  inputWrapper.innerHTML = `
  <button type="submit" id="yes">Yes</button>
  <button type="submit" id="no">No</button>
  `
  const yesBtn = document.getElementById('yes')
  const noBtn = document.getElementById('no')

  yesBtn.addEventListener('click', (e) => {
    showMessage(`Yes!`, 'user')
    e.preventDefault();
    setTimeout(sundayAfternoon, 200);
  },{once : true})
  noBtn.addEventListener('click', (e) => {
    showMessage(`No!`, 'user')
    e.preventDefault();
    setTimeout(shrek, 200);
  },{once : true})
}

const shrek = () => {
  showCelebImg(shrekImg)
  showMessage(`Then, go back to your swamp!`, 'bot');
  // const restartBtn = document.getElementById('restart');

  // restartBtn.addEventListener('click', ())
}

const sundayAfternoon = () => {
  showMessage(`OK, what do you do on a sunday afternoon?`, 'bot');
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

  select.addEventListener('change', () => {
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
  showMessage('Movies, great! What kind of movies do you like?', 'bot');
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
  },{once : true})

  dramaBtn.addEventListener('click', (e) => {
    showMessage(`Drama`, 'user')
    e.preventDefault();
    showSocialMedia('drama', 'movie');
  },{once : true})

  comedyBtn.addEventListener('click', (e) => {
    showMessage(`Comedy`, 'user')
    e.preventDefault();
    showSocialMedia('comedy', 'movie');
  },{once : true})

};

const showMusicOptions = () => {
  showMessage('Music, awesome! What would you like to shake your booty to?', 'bot');
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
  },{once : true})

  hiphopBtn.addEventListener('click', (e) => {
    showMessage(`Hiphop`, 'user')
    e.preventDefault();
    showSocialMedia('hiphop', 'music');
  },{once : true})

  popBtn.addEventListener('click', (e) => {
    showMessage(`Pop`, 'user')
    e.preventDefault();
    showSocialMedia('pop', 'music');
  },{once : true})


};

const showReadingOptions = () => {
  showMessage('Awesome, what would you like to read?', 'bot');
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
  },{once : true})

  magazinesBtn.addEventListener('click', (e) => {
    showMessage(`Magazines`, 'user')
    e.preventDefault();
    showSocialMedia('magazines', 'books');
  },{once : true})

  academicBtn.addEventListener('click', (e) => {
    showMessage(`Academic Papers`, 'user')
    e.preventDefault();
    showSocialMedia('academic', 'books');
  },{once : true})

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
  },{once : true})

  lotsBtn.addEventListener('click', (e) => {
    showMessage(`Lots`, 'user')
    e.preventDefault();
    showMyAnswer('Lots', genre, hobby)
  },{once : true})

  grandmaBtn.addEventListener('click', (e) => {
    showMessage(`My grandma`, 'user')
    e.preventDefault();
    showMyAnswer('My grandma', genre, hobby)
  },{once : true})

}

const showMyAnswer = (media, genre, hobby) => {
  if (media === 'Some') {
    if (hobby === 'movie') {
      if (genre === 'horror') {
        showCelebImg(jamie)
      }
      else if (genre === 'drama') { 
        showCelebImg(helena)
      }
      else if (genre === 'comedy') { 
        showCelebImg(french)
      }
    }
    else if (hobby === 'music') {
      if (genre === 'hiphop') { 
        showCelebImg(jennifer)
      }
      else if (genre === 'pop') { 
        showCelebImg(ed)}
      else if (genre === 'rock') { 
        showCelebImg(kiss)
      }
    }
    else if (hobby === 'books') {
      if (genre === 'novels') { 
        showCelebImg(margaret)
      }
      else if (genre === 'magazines') { 
        showCelebImg(anna)
      }
      else if (genre === 'academic') { 
        showCelebImg(ada)
      }
    }
  } else if (media === 'Lots') {
    if (hobby === 'movie') {
      if (genre === 'horror') { 
        showCelebImg(christopher)
      }
      else if (genre === 'drama') { 
        showCelebImg(keira)
      }
      else if (genre === 'comedy') { 
        showCelebImg(jim)
      }
    }
    else if (hobby === 'music') {
      if (genre === 'hiphop') { 
        showCelebImg(cent)
      }
      else if (genre === 'pop') { 
        showCelebImg(taylor)
      }
      else if (genre === 'rock') { 
        showCelebImg(u2)
      }
    }
    else if (hobby === 'books') {
      if (genre === 'novels') { 
        showCelebImg(charles)
      }
      else if (genre === 'magazines') { 
        showCelebImg(versace)
      }
      else if (genre === 'academic') { 
        showCelebImg(elon)
      }
    }
  } else if (media === 'My grandma') {
    if (hobby === 'movie') {
      if (genre === 'horror') { 
        showCelebImg(doug)
      }
      else if (genre === 'drama') { 
        showCelebImg(halle)
      }
      else if (genre === 'comedy') { 
        showCelebImg(carrot)
      }
    }
    else if (hobby === 'music') {
      if (genre === 'hiphop') { 
        showCelebImg(tupac)
      }
      else if (genre === 'pop') { 
        showCelebImg(prince)
      }
      else if (genre === 'rock') { 
        showCelebImg(marilyn)
      }
    }
    else if (hobby === 'books') {
      if (genre === 'novels') { 
        showCelebImg(neil)
      }
      else if (genre === 'magazines') { 
        showCelebImg(karl)
      }
      else if (genre === 'academic') { 
        showCelebImg(stephen)
      }
    }
  }
}

const showCelebImg = (celeb) => {
  setTimeout(() => showMessage('Your celebrity soulmate is...', 'bot'), 1000)
  showMessage('... computing...', 'bot')
  setTimeout(()=> {chat.innerHTML += `
  <section class="bot-msg">
  <img class="bot-img" src="assets/bot.png" alt="Bot" /> 
   <div class="bubble bot-bubble ">
      <p>${celeb.alt}!</p>
      <img class="celeb-img" src="${celeb.src}" alt="${celeb.alt}" />  
    </div>
  </section>
`}, 1300);
setTimeout(()=> {inputWrapper.innerHTML = `
  <form>
      <button type="submit" class="restart">Not happy? Then start again</button>
  </form>
  `}, 1600);
setTimeout(() => {chat.scrollTop = chat.scrollHeight}, 1500)

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
        <img class="user-img"src="./assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log(message, sender);
    chat.innerHTML += `
      <section class="bot-msg">
        <img class="bot-img" src="./assets/bot.png" alt="Bot" />
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
  showMessage(`Hello there, what's your instagram username?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
sendBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const name = userName.value;
  showMessage(name, 'user');
  wantToPlay(name);
},{once : true})
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)

