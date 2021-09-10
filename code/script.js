// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const sendBtn = document.getElementById('send-btn')
const userName = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')


// Global variables, if you need any, declared here
// This function creates an img html element and assigns a src and alt to it
const createCelebImg = (url, alt) => {
  let celeb = document.createElement("img")
  celeb.src = url
  celeb.alt = alt
  return celeb
};

const doug = createCelebImg("./assets/celebs/Doug_Jones_2015.jpg", "Doug Jones");
const christopher = createCelebImg("./assets/celebs/Christopher_Lee.jpeg", "Christopher Lee");
const anna = createCelebImg("./assets/celebs/anna_wintour.jpg", "Anna Wintour");
const carrot = createCelebImg("./assets/celebs/Carrot_top.jpeg", "Carrot Top");
const charles = createCelebImg("./assets/celebs/Charles_Dickens.png", "Charles Dickens");
const ed = createCelebImg("./assets/celebs/Ed_Sheeran.jpg", "Ed Sheeran");
const french = createCelebImg("./assets/celebs/french_and_saunders.jpg", "French and Saunders");
const halle = createCelebImg("./assets/celebs/Halle_Berry.jpeg", "Halle Berry");
const helena = createCelebImg("./assets/celebs/Helena_Bonham_Carter.jpeg", "Helena Bonham Carter");
const jamie = createCelebImg("./assets/celebs/Jamie_Lee_Curtis.jpeg", "Jamie Lee Curtis");
const jim = createCelebImg("./assets/celebs/Jim_Carrey.jpeg", "Jim Carrey");
const karl = createCelebImg("./assets/celebs/Karl_Lagerfeld.jpg", "Karl Lagerfeld");
const keira = createCelebImg("./assets/celebs/Keira_Knightley.jpeg", "Keira Knightley");
const kiss = createCelebImg("./assets/celebs/kiss.jpg", "Kiss");
const margaret = createCelebImg("./assets/celebs/MargaretAtwood.jpg", "Margaret Atwood");
const marilyn = createCelebImg("./assets/celebs/Marilyn_Manson.jpg", "Marilyn Manson");
const neil = createCelebImg("./assets/celebs/neil-gaiman.jpeg", "Neil Gaiman");
const prince = createCelebImg("./assets/celebs/Prince.jpg", "Prince");
const taylor = createCelebImg("./assets/celebs/Taylor_Swift.png", "Taylor Swift");
const tupac = createCelebImg("./assets/celebs/Tupac_Shakur.jpg", "Tupac Shakur");
const u2 = createCelebImg("./assets/celebs/u2.jpg", "U2");
const versace = createCelebImg("./assets/celebs/versace.jpg", "Donatella Versace");
const cent = createCelebImg("./assets/celebs/50_Cent.jpg", "50cent");
const jennifer = createCelebImg("./assets/celebs/Jennifer_Lopez.jpg", "Jennifer Lopez");
const elon = createCelebImg("./assets/celebs/Elon_Musk.jpg", "Elon Musk");
const ada = createCelebImg("./assets/celebs/Ada_Lovelace.jpg", "Ada Lovelace");
const stephen = createCelebImg("./assets/celebs/stephen.jpg", "Stephen Hawking");
const shrekImg = createCelebImg("./assets/celebs/shrekImg.jpeg", "Shrek");

// Function that asks the user if they want to play, and creates html buttons for their answer, then sends them to the next question
const wantToPlay = (user) => {
  showMessage(`Hi, ${user}, do you want to know who your celebrity soulmate is?`, 'bot')

  inputWrapper.innerHTML = `
  <button type="submit" id="yes">Yes</button>
  <button type="submit" id="no">No</button>
  `
  const yesBtn = document.getElementById('yes')
  const noBtn = document.getElementById('no')

  yesBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Yes!`, 'user')
    setTimeout(sundayAfternoon, 1000);
  })
  noBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`No!`, 'user')
    setTimeout(shrek, 1000);
  })
}

// Deals with 'no' input by assigning the user the celeb soulmate of Shrek
const shrek = () => {
  showCelebImg(shrekImg)
  showMessage(`Then, go back to your swamp!`, 'bot');

}

// Creates next question, with a dropdown menu and directs user to the next question
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
      inputWrapper.innerHTML = `
  <button>Waiting for bot</button>
  `
      showMessage(movie.innerHTML, 'user');
      setTimeout(showMovieOptions, 1000);
      setTimeout(() => { chat.scrollTop = chat.scrollHeight }, 1100)
      
    } else if (select.value === 'music') {
      inputWrapper.innerHTML = `
  <button>Waiting for bot</button>
  `
      showMessage(music.innerHTML, 'user');
      setTimeout(showMusicOptions, 1000);
      setTimeout(() => { chat.scrollTop = chat.scrollHeight }, 1100)

    } else if (select.value === 'books') {
      inputWrapper.innerHTML = `
  <button>Waiting for bot</button>
  `
      showMessage(books.innerHTML, 'user');
      setTimeout(showReadingOptions, 1000);
      setTimeout(() => { chat.scrollTop = chat.scrollHeight }, 1100)

    } else {

    }
  })
  
};

// Deals with users who selected "Netflix and Chill", creates movie choice question with buttons, and a path to next question from each button
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

  horrorBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Horror`, 'user')
    setTimeout(() => showSocialMedia('horror', 'movie'), 1000);
  })

  dramaBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Drama`, 'user')
    setTimeout(() => showSocialMedia('drama', 'movie'), 1000);
  })

  comedyBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Comedy`, 'user')
    setTimeout(() => showSocialMedia('comedy', 'movie'), 1000);
  })

};

// Deals with users who selected "Shaking their booty", creates music choice question with buttons, and a path to next question from each button
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

  rockBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Rock`, 'user')
    setTimeout(() => showSocialMedia('rock', 'music'), 1000);
  })

  hiphopBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Hiphop`, 'user')
    setTimeout(() => showSocialMedia('hiphop', 'music'), 1000);
  })

  popBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Pop`, 'user')
    setTimeout(() => showSocialMedia('pop', 'music'), 1000);
  })

};

// Deals with users who selected "bury head in book", creates reading choice question with buttons, and a path to next question from each button
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

  novelsBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Novels`, 'user')
    setTimeout(() => showSocialMedia('novels', 'books'), 1000);
  })

  magazinesBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Magazines`, 'user')
    setTimeout(() => showSocialMedia('magazines', 'books'), 1000);
  })

  academicBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Academic Papers`, 'user')
    setTimeout(() => showSocialMedia('academic', 'books'), 1000);
  })

};

// Asks question about social media, creates button elements, takes in arguments from previous question so these can be passed to the next function
const showSocialMedia = (genre, hobby) => {
  showMessage('How many social media followers do you have?', 'bot')
  inputWrapper.innerHTML = `
    <button type="submit" id="some">Some</button>
    <button type="submit" id="lots">200k</button>
    <button type="submit" id="grandma">My grandma</button>
    `
  const someBtn = document.getElementById('some')
  const lotsBtn = document.getElementById('lots')
  const grandmaBtn = document.getElementById('grandma')

  someBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Some`, 'user')
    showMyAnswer('Some', genre, hobby)
  })

  lotsBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`Lots`, 'user')
    showMyAnswer('Lots', genre, hobby)
  })

  grandmaBtn.addEventListener('click', () => {
    inputWrapper.innerHTML = `
    <button>Waiting for bot</button>
    `
    showMessage(`My grandma`, 'user')
    showMyAnswer('My grandma', genre, hobby)
  })

}

// Nested conditional statements that take in the previous answers to determine which celebrity image should be shown
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
        showCelebImg(ed)
      }
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

// Adds the celebrity image to the chat HTML and adds a "try again" button to the input HTML
const showCelebImg = (celeb) => {
  setTimeout(() => showMessage('Your celebrity soulmate is...', 'bot'), 800)
  setTimeout(() => showMessage('... computing...', 'bot'), 1600)
  setTimeout(() => {
    chat.innerHTML += `
  <section class="bot-msg">
  <img class="bot-img" src="assets/bot.png" alt="Bot" /> 
   <div class="bubble bot-bubble ">
      <p>${celeb.alt}!</p>
      <img class="celeb-img" src="${celeb.src}" alt="${celeb.alt}" />  
    </div>
  </section>
`}, 2400);
  setTimeout(() => {
    inputWrapper.innerHTML = `
  <form>
      <button type="submit" class="restart">Not happy? Then start again</button>
  </form>
  `}, 2500);
  setTimeout(() => { chat.scrollTop = chat.scrollHeight }, 2600)

}
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img class="user-img"src="./assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
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
  inputWrapper.innerHTML = `
  <button>Waiting for bot</button>
  `
  e.preventDefault()
  const name = userName.value;
  showMessage(name, 'user');
  setTimeout(() => wantToPlay(name), 1000);
})
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)

