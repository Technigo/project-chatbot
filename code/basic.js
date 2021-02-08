const chat = document.getElementById('chat')
const sendBtn = document.getElementById('send-btn')

let currentQuestion = ''
let setRandomNameSuccess

const kittenLibrary = { 
  girlNames: ['Bella', 'Kitty', 'Lily', 'Lilly', 'Lucy', 'Chloe', 'Sadie', 'Princess', 'Sophie', 'Cleo', 'Daisy', 'Missy', 'Lulu', 'Jasmine', 'Fiona', 'Millie', 'Abby', 'Minnie', 'Olivia', 'Lola', 'Athena', 'Ruby', 'Penny', 'Emma', 'Belle', 'Binx', 'Boo', 'Rosie', 'Ella', 'Hazel', 'Maggie', 'Mimi', 'Annie', 'Layla', 'Leila', 'Kiki', 'Pippa', 'Dottie', 'Blanche', 'Daisy', 'Dahlia', 'Daffodil', 'Iris', 'Marigold', 'Clover', 'Poppy', 'Primrose', 'Protea', 'Thistle', 'Apple', 'Blossom', 'Magnolia', 'Buttercup', 'Rose', 'Lily', 'Petunia', 'Polly'],
  boyNames: ['Charlie', 'Leo', 'Milo', 'Jack', 'Sam', 'Ziggy', 'Tucker', 'Murphy', 'Jax', 'Frank', 'Romeo', 'Teddy', 'Oscar', 'Theo', 'Bob', 'Clyde', 'Joey', 'Ollie','Bobo', 'Toby', 'George', 'Sigge', 'Bagheera', 'Calvin', 'Thor', 'Gus', 'Walter', 'Archie', 'Gus', 'Gus', 'Jack', 'Koosh Ball'],
  neutralNames: ['Nala', 'Simba', 'Baby', 'Salem', 'Shadow', 'Izzy', 'Boots', 'Loki', 'Cooper', 'Oreo', 'Tiger', 'Jackson', 'Pepper', 'Bear', 'Moose', 'Pumpkin', 'Willow', 'Mittens', 'Coco', 'Sammy', 'Sammie', 'Kali', 'Tigger', 'Buddy', 'Marley', 'Ash', 'Scout', 'Gizmo', 'Louie', 'Ginger', 'Midnight', 'Mochi', 'Blue', 'Blu', 'Frankie', 'Lucky', 'Piper', 'Harley', 'Rocky', 'Peanut', 'Remy', 'Remi', 'Sunny', 'Riley', 'Frankie', 'Lucky', 'Mittens', 'Fluffy', 'Pip', 'Cricket', 'Pixie', 'Bubbles', 'Sunshine', 'Totoro', 'PeeWee', 'Marshmallow', 'Brownie', 'Pickles', 'Lemon', 'Biscuit', 'Lollipop', 'Kit', 'Kat', 'Shortcake', 'Peanut', 'Butter', 'Turnip', 'Merengue', 'Paw', 'Paw', 'Cantaloupe', 'Cataloupe', 'Fluffer', 'Nutter', 'Pop', 'Tart', 'Tartlet', 'Macaron', 'Tiger', 'Fritillary', 'Snap', 'Dragon', 'Monchichi', 'Popple', 'Hot Wheels', 'Ducky', 'Puffalump', 'Bear', 'Teddy', 'Ruxpin', 'Gudetama', 'Koopa', 'Luigi', 'Pusheen', 'Toothless', 'Sonic', 'Tamagotchi', 'Apple', 'Pocket'],
  pictures: [
    {
      imageSrc: './assets/kittenpics/christina-yang-MJWxBOVjuUI-unsplash.jpg',
      color: 'brown',
      environmentPreference: 'indoors',
      furState: 'furry',
    },
    {
      imageSrc: './assets/kittenpics/daniel-park-N91GMm_6TBM-unsplash.jpg',
      color: '',
      environmentPreference: 'indoors',
      furState: 'furry',
    },
    {
      imageSrc: './assets/kittenpics/dorothea-oldani-Hhm_fL04bE8-unsplash.jpg',
      color: 'white',
      environmentPreference: 'outdoors',
      furState: 'furry',
    },
    {
      imageSrc: './assets/kittenpics/fachy-marin-apO9wJ5caJc-unsplash.jpg',
      color: 'white',
      environmentPreference: 'outdoors',
      furState: 'furry',
    },
    {
      imageSrc: './assets/kittenpics/sahand-babali-tjrN1-gF11o-unsplash.jpg',
      color: 'black',
      environmentPreference: 'indoors',
      furState: 'furry',
    },
  ]
}

const kitten = {
  _name: '',
  _gender: '',
  _environmentPreference: '', 
  _ownerName: '',
  furState: '',
  imageSrc: '',
  nameConfirmation: false,
  set name(name) {
    this.name = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()
  },
  set gender(data) {
    if (data.toLowerCase() === 'girl') {
      this._gender = data
      console.log(this._gender)
      this.pronoun = 'she'
      this.possessivePronoun = 'her'
      this.personalPronoun = 'her'
    } else if (data.toLowerCase() === 'boy') {
      this._gender = data
      this.pronoun = 'he'
      this.possessivePronoun = 'his'
      this.personalPronoun = 'him'
    } else if (data.toLowerCase() === "doesn't matter") {
      this._gender = 'neutral'
      this.pronoun = 'it'
      this.possessivePronoun = 'its'
      this.personalPronoun = 'it'
    }
  },
  get gender() {
    return this._gender
  },
  set environmentPreference(data) {
    if (data.toLowerCase() === 'indoors') {
      this._environmentPreference = 'indoors' 
      this.activityPreference = 'cuddling up in the sofa'
    } else if (data.toLowerCase() === 'outdoors'){
      this._environmentPreference = 'outdoors' 
      this.activityPreference = 'going on cute little adventures'
    }
  },
  get environmentPreference() {
    return this._environmentPreference
  },
  set name(data) {
    this._name = data
  },
  get name() {
    return this._name
  },
  set ownerName(data) {
    this._ownerName = data.charAt(0).toUpperCase() + data.substr(1).toLowerCase()
  },  
  get ownerName() {
    return this._ownerName
  }
}

const playTypingAnimation = (time) => {
// console.log('play')
  chat.innerHTML +=
    `
    <div id="lottie-animation">
      <lottie-player src="https://assets5.lottiefiles.com/datafiles/t4b48ItXS0KF2VK/data.json"  background="transparent"  speed="0.6"  style="width: 50px; height: 40px;"  loop  autoplay></lottie-player>
    </div>
    `
  chat.scrollTop = chat.scrollHeight
  setTimeout(() => {
    const lottie = document.getElementById('lottie-animation')
    lottie.remove()
  }
  , time)
}

const setRandomName = (startLetter) => {
  let shortList = kittenLibrary.neutralNames
  if (kitten.gender === 'girl') {
    shortList = shortList.concat(kittenLibrary.girlNames)
  } else if (kitten.gender === 'boy') {
    shortList = shortList.concat(kittenLibrary.boyNames)
  } 
  let matchList = shortList.filter(name => {
    let firstChar = name.charAt(0)
    return firstChar.toLowerCase() === startLetter.toLowerCase() // Not really working 
  })
  if (!matchList.length) {
    setRandomNameSuccess = false
    matchList = shortList
  } else {
    setRandomNameSuccess = true
  }
  // kitten.name = getRandom(matchList)
  let name = matchList[Math.floor(Math.random() * matchList.length)]
  return name
}

const getKittenPic = (color, envPref, furState) => {
  console.log('getKittenPic ' + color, envPref, furState)
  let shortList = kittenLibrary.pictures
  console.log('shortList ' + shortList)
  let matchList = shortList
  matchList = matchList.filter(kitten => {kitten.color === color})
  matchList = matchList.filter(kitten => {kitten._environmentPreference === envPref})
  matchList = matchList.filter(kitten => {kitten.furState === furState})
  
  console.log('matchList ' + matchList)
  if (!matchList.length) {
    matchList = shortList
  }
  let kittenPic = matchList[Math.floor(Math.random() * matchList.length)].imageSrc
  console.log('kittenPic ' + kittenPic)
  kitten.pictureSrc = kittenPic
}
  
const getRandom = (arr) => {
  arr[Math.floor(Math.random() * arr.length)]
}

const toKebabCase = (str) => {
  return str.match(/[0-9]{1,}(?=\b)|[A-Z]{2,}(?=[A-Z][a-z]+|[0-9]|\b|_)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
  .map(x => x.toLowerCase())
  .join('-')
}

const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('showMessage user ' + message)
    chat.innerHTML += 
    `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <div class="avatar"><p>
          ${kitten.ownerName.charAt(0)}
        </p></div>
      </section>
    ` 
  } else if (sender === 'bot') {
    
// show thinking-dots here?
    setTimeout(()=>{
      playTypingAnimation(1500)
      setTimeout(()=> {
        // console.log('showMessage bot ' + message)
        chat.innerHTML += `
        <section class="bot-msg">
        <img src="assets/bot.svg" alt="Bot" />
        <div class="bubble bot-bubble">
        <p>${message}</p>
        </div>
        </section>
        `
        chat.scrollTop = chat.scrollHeight
      }, 1500)
      chat.scrollTop = chat.scrollHeight
    }, 500)
    chat.scrollTop = chat.scrollHeight
  }
  chat.scrollTop = chat.scrollHeight // <-- i know... at least one of these is unnecessary
}

const showButtons = (values) => {
  setTimeout(()=> {
    let buttons = ''
    chat.innerHTML += 
    `
    <section id="button-container" class="button-container">
    </section>
    `
    for (i = 0; i < values.length; i++) { 
      let id = toKebabCase(values[i])
      let value = values[i]
      buttons += `<button class="in-chat" id="`
      + id + `" value="` + value + `">` + value + `</button>`
    }
    const buttonContainer = document.getElementById('button-container')
    buttonContainer.innerHTML += buttons
    buttonContainer.addEventListener('click', (event) => {
      buttonContainer.remove()
      handleResponse(event.target.value)
    })
    chat.scrollTop = chat.scrollHeight
  }, 3000)
}

const removeButtons = () => {
  document.getElementById('button-container').remove()
}

const showImage = (imageRef) => {
  setTimeout(()=> {
    console.log('showImage' + imageRef)
    chat.innerHTML += `
    <section class="bot-msg">
    <img src="assets/bot.svg" alt="Bot" />
    <div class="bubble bot-bubble img">
    <img id="kitten-img" src="${kitten.pictureSrc}" />
    <p>${kitten.name}</p>
    </div>
    </section>
    `

    document.getElementById("kitten-img").onload = () => {
      (chat.scrollTop = chat.scrollHeight)
    }
  }, 1000)
}

const handleError = (receivedMessage) => {
  if (currentQuestion === 1) {
    showMessage("I said anything BUT <span>KittenBot Go!</span>... this will go a lot easier if you read my instructions... Want to try again?", 'bot')
  
  } else if (currentQuestion === 3) {
    showMessage("You can only type <span>Boy</span>, <span>Girl</span> or <span>Doesn't matter</span>", 'bot') 
    removeButtons()   
    showButtons(['Boy', 'Girl', "Doesn't matter"])
  } else if (currentQuestion === 5) {
    showMessage("Uh, you can only type 'indoors' or 'outdoors'... - i know, terrible UX but the guy who coded me doesn't really know what he is doing", 'bot')    
  }
}
const setName = (name) => {
  console.log('')
  kitten.name = name
  showMessage(`Oh wow! ${kitten.name}, that is a splendid name!`, 'bot')
  currentQuestion++
  fifthQuestion()
}

const handleResponse = (receivedMessage) => {
  if (receivedMessage != '' && receivedMessage != ' ') {
    console.log(kitten)
    console.log('handleResponse, currentQuestion: ' + currentQuestion)
    input.value = ''
    // 1
    if (currentQuestion === 1) {
      if (receivedMessage.toLowerCase() != 'kittenbot go!') {
        currentQuestion++
        secondQuestion()
      } else {
        handleError()
      }
      // 2  
    } else if (currentQuestion === 2) {
      kitten.ownerName = receivedMessage; 
      showMessage(receivedMessage, 'user') 
      showMessage(`Well hello ${kitten.ownerName} it is very nice to meet you!`)
      currentQuestion++
      thirdQuestion()
      // 3
    } else if (currentQuestion === 3) {
      showMessage(receivedMessage, 'user')    
      if (receivedMessage.toLowerCase() === 'boy' || receivedMessage.toLowerCase() === 'girl' || receivedMessage.toLowerCase() === "doesn't matter") {
        kitten.gender = receivedMessage
        currentQuestion++
        fourthQuestion()
      } else {
        handleError()
      }

      // 4
    } else if (currentQuestion === 4) {
      showMessage(receivedMessage, 'user')  
      
      //Success!
      if (receivedMessage.length > 1 && kitten.nameConfirmation === false) {
        console.log('')
        setName(receivedMessage)
      
      // User asks for name suggestion
      } else if (receivedMessage.length === 1) {
        console.log('')
        kitten.nameFirstLetter = receivedMessage
        kitten.nameSuggestion = setRandomName(kitten.nameFirstLetter)
      
        // console.log(kitten.nameSuggestion)
        // Bot found name starting with requested letter
        if (setRandomNameSuccess) {
          console.log('')
          showMessage(`Hmm... something beginning with ${receivedMessage.toUpperCase()}... Ok how about we call ${kitten.personalPronoun} ${kitten.nameSuggestion}?`, 'bot')
          userConfirmName()
          // Bot could not find name starting with requested letter
        } else {
          console.log('')
          showMessage(`Sorry, i don't know any names beginning with ${receivedMessage.toUpperCase()} :( ... is it ok if we just call ${kitten.personalPronoun} ${kitten.nameSuggestion}?`, 'bot')
          userConfirmName()
        } 
      } else if (receivedMessage.toLowerCase() === 'ok' && kitten.nameConfirmation) {
        console.log('')
        setName(kitten.nameSuggestion)
      } else if (receivedMessage === 'Hmm... do you have anything else?' && kitten.nameConfirmation) {
        console.log('')
        kitten.nameSuggestion = setRandomName(kitten.nameFirstLetter)
        showMessage(`How about ${kitten.nameSuggestion}?`, 'bot')
        userConfirmName()
      }
    
      
      // 5
    } else if (currentQuestion === 5) {
      console.log(receivedMessage)
      showMessage(receivedMessage, 'user')    
      if (receivedMessage.toLowerCase() === 'indoors' || receivedMessage.toLowerCase() === 'indoor') {
        kitten.environmentPreference = 'indoors'
      } else if (receivedMessage.toLowerCase() === 'outdoors' || receivedMessage.toLowerCase() === 'outdoor') {
        kitten.environmentPreference = 'outdoors'
      } else {
        handleError()
      }
      currentQuestion++
      sixthQuestion()
      // 6
    } else if (currentQuestion === 6) {
      console.log('six!')
      showMessage(receivedMessage, 'user')
      if (receivedMessage.toLowerCase() === 'furry' || receivedMessage.toLowerCase() === 'hairless') {
        // console.log('six in if!')
        kitten.furState = receivedMessage
      }
      currentQuestion++
      seventhQuestion()
      // 7
    } else if (currentQuestion === 7) {
      showMessage(receivedMessage, 'user')
      if (receivedMessage.toLowerCase() === 'white' ||
      receivedMessage.toLowerCase() === 'brown' ||
      receivedMessage.toLowerCase() === 'grey' ||
      receivedMessage.toLowerCase() === 'gray' ||
      receivedMessage.toLowerCase() === 'black') {
        kitten.color = receivedMessage
      }
      getKittenPic(kitten.color, kitten._environmentPreference, kitten.furState)
      eighthQuestion()
    }
  }
} 

const userConfirmName = () => {
  console.log('userConfirmName')
  kitten.nameConfirmation = true
  showButtons(['Ok', 'Hmm... do you have anything else?'])
}

const firstQuestion = () => {
  currentQuestion = 1
  showMessage("Welcome to KittenBot! Type anything but <span>KittenBot Go!</span> to start!", 'bot')
  sendBtn.addEventListener('click', (event) => {
    event.preventDefault()
    handleResponse(input.value) 
  })
}  

const secondQuestion = () => {
  showMessage(`Alright lets do this! What is your name?`, 'bot') 
}

const thirdQuestion = () => {
  showMessage(`Great to meet you ${kitten.ownerName}! Now let's build you a kitten! Should it be a boy or a girl?`, 'bot')
  showButtons(['Boy', 'Girl', "Doesn't matter"])
}

const fourthQuestion = () => {
  showMessage(`What do you want ${kitten.possessivePronoun} name to be? If you cant come up with a name, I can help - just give me the first letter `, 'bot')
}

const fifthQuestion = () => {
  setTimeout(()=> {
    showMessage(`And would you like ${kitten.personalPronoun} to prefer hanging out mostly indoors, or outdoors?`, 'bot')
    showButtons(['Indoors', 'Outdoors'])
  }, 1000)
}

const sixthQuestion = () => {
  showMessage(`Good choice! I'm actually kinda ${kitten.environmentPreference}y myself.`, 'bot')
  setTimeout(()=> {
    showMessage (`Now you have to decide if ${kitten.pronoun} should be furry or hairless?`, 'bot') 
    showButtons(['Furry', 'Hairless']) 
  }, 2000)
}

const seventhQuestion = () => {
  showMessage(`One last thing - color! White, brown, grey or black?`, 'bot')
  showButtons(['White', 'Brown', 'Grey', 'Black']) 
}

const eighthQuestion = () => {
  showMessage(`Ok ${kitten.ownerName}, please wait while KittenBot prepares your kitten...`)
  setTimeout(showMessage, 2000, `Drumroll please! Let us proudly present your kitten - ${kitten.pronoun} is ${kitten.color}, ${kitten.furState}, cosy, and loves ${kitten.activityPreference}. And ${kitten.possessivePronoun} name is ${kitten.name} the cat!`, 'bot') 
  setTimeout(showImage, 5000, kitten.imageSrc, 'bot') 
}

// Start code here
firstQuestion()



