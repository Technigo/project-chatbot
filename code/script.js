// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const sendBtn = document.getElementById('send-btn')
// const formSumbit = document.getElementById('name-form')
const userName = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')


// Global variables, if you need any, declared here
const doug = document.createElement("img");
doug.src = "./assets/celebs/Doug_Jones_2015.jpg"
doug.alt = "Pic of Doug Jones"

const christopher = document.createElement("img");
christopher.src = "./assets/celebs/Christopher_Lee.jpeg"
christopher.alt = "Pic of Christopher Lee"

const anna = document.createElement("img");
anna.src = "./assets/celebs/anna_wintour.jpeg"
anna.alt = "Pic of Anna Wintour"

const carrot = document.createElement("img");
carrot.src = "./assets/celebs/Carrot_top.jpeg"
carrot.alt = "Pic of Carrot Top"

const charles = document.createElement("img");
charles.src = "./assets/celebs/Charles_Dickens.png"
charles.alt = "Pic of Charles Dickens"

const ed = document.createElement("img");
ed.src = "./assets/celebs/Ed_Sheeran.webp"
ed.alt = "Pic of Ed Sheeran"

const french = document.createElement("img");
french.src = "./assets/celebs/french_and_saunders.jpg"
french.alt = "Pic of French and Saunders"

const halle = document.createElement("img");
halle.src = "./assets/celebs/Halle_Berry.jpg"
halle.alt = "Pic of Doug"

const helena = document.createElement("img");
helena.src = "./assets/celebs/Helena_Bonham_Carter.jpg"
helena.alt = "Pic of Helena Bonham Carter"

const jamie = document.createElement("img");
jamie.src = "./assets/celebs/Jamie_Lee_Curtis.jpg"
jamie.alt = "Pic of Jamie Lee Curtis"

const jim = document.createElement("img");
jim.src = "./assets/celebs/Jim_ Carrey.jpeg"
jim.alt = "Pic of Jim Carrey"

const karl = document.createElement("img");
karl.src = "./assets/celebs/Karl_lagerfeld.jpg"
karl.alt = "Pic of Karl Lagerfeld"

const keira = document.createElement("img");
keira.src = "./assets/celebs/Kiera_Knightley.jpeg"
keira.alt = "Pic of Kiera Knightley"

const kiss = document.createElement("img");
kiss.src = "./assets/celebs/kiss.jpg"
kiss.alt = "Pic of kiss"

const margaret = document.createElement("img");
margaret.src = "./assets/celebs/Margaret_Atwood"
margaret.alt = "Pic of Margaret Atwood"

const marilyn = document.createElement("img");
marilyn.src = "./assets/celebs/Marilyn_Manson.jpg"
marilyn.alt = "Pic of Marilyn Manson"

const neil = document.createElement("img");
neil.src = "./assets/celebs/neil-gaiman.jpg"
neil.alt = "Pic of Neil Gaiman"

const prince = document.createElement("img");
prince.src = "./assets/celebs/Prince.jpg"
prince.alt = "Pic of Prince"

const taylor = document.createElement("img");
taylor.src = "./assets/celebs/Taylor_Swift.webp"
taylor.alt = "Pic of Taylor Swift"

const tupac = document.createElement("img");
tupac.src = "./assets/celebs/Tupac_Shakur.jpg"
tupac.alt = "Pic of Tupac Shakur"

const u2 = document.createElement("img");
u2.src = "./assets/celebs/u2.jpg"
u2.alt = "Pic of u2"

const versace = document.createElement("img");
versace.src = "./assets/celebs/versace.jpg"
versace.alt = "Pic of Versace"

const cent = document.createElement("img");
cent.src = "./assets/celebs/50_Cent.jpg"
cent.alt = "Pic of 50cent"

const doug = document.createElement("img");
doug.src = "./assets/celebs/Doug_Jones_2015.jpg"
doug.alt = "Pic of Doug"

const doug = document.createElement("img");
doug.src = "./assets/celebs/Doug_Jones_2015.jpg"
doug.alt = "Pic of Doug"

const doug = document.createElement("img");
doug.src = "./assets/celebs/Doug_Jones_2015.jpg"
doug.alt = "Pic of Doug"

const doug = document.createElement("img");
doug.src = "./assets/celebs/Doug_Jones_2015.jpg"
doug.alt = "Pic of Doug"

const doug = document.createElement("img");
doug.src = "./assets/celebs/Doug_Jones_2015.jpg"
doug.alt = "Pic of Doug"

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
        showCelebImg(jamie)
      }
      else if (genre === 'drama') { 
        showCelebImg(helena)
      }
      else if (genre === 'comedy') { 
        showCelebImg(carrot)
      }
    }
    else if (hobby === 'music') {
      if (genre === 'hiphop') { 
        showCelebImg(jennifer)
      }
      else if (genre === 'pop') { 
        showCelebImg(ed)}
      else if (genre === 'rock') { 
        showCelebImg(marilyn)
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
        showCelebImg(jennie)
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
        showCelebImg(donnatella)
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
        showCelebImg(doug)
      }
      else if (genre === 'comedy') { 
        showCelebImg(doug)
      }
    }
    else if (hobby === 'music') {
      if (genre === 'hiphop') { 
        showCelebImg(doug)
      }
      else if (genre === 'pop') { 
        showCelebImg(doug)
      }
      else if (genre === 'rock') { 
        showCelebImg(doug)
      }
    }
    else if (hobby === 'books') {
      if (genre === 'novels') { 
        showCelebImg(doug)
      }
      else if (genre === 'magazines') { 
        showCelebImg(doug)
      }
      else if (genre === 'academic') { 
        showCelebImg(doug)
      }
    }
  }
}

const showCelebImg = (celeb) => {
  chat.innerHTML += `
  <section class="bot-msg">
  <img src="assets/bot.png" alt="Bot" /> 
   <div class="bubble bot-bubble ">
      <p>Your celebrity soulmate is!</p>
      <img class="celeb-img" src="${celeb.src}" alt="${celeb.alt}" />  
    </div>
  </section>
`
chat.scrollTop = chat.scrollHeight

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

