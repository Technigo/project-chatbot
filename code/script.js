
//With this I can just write chat in stead of alway using document.getElementById('chat'), kind of a short cut
const chat = document.getElementById('chat');
// Rest of the DOM selectors stored as short variables as well
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')





//question starts from 1 and after that ++
let questionNumber = 1

//botReply is a fuction that takes msg as it's parameter, that fuction is running a showMessage operation calling, 
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}



//MEMO: The showMessage function takes two arguments - the message, and the sender. 
//MEMO: You can pass any text as the message and either 'user' or 'bot' as the sender. 
//MEMO: This is handled with conditionals. 

//MEMO: += means you ad something, just = would mean you kind of replace content totally.
const showMessage = (message, sender) => { 
// if the sender is user, then send this part
  if (sender === 'user') {
  chat.innerHTML += `
  <section class="user-msg">
    <div class="bubble user-bubble">
      <p>${message}</p>
    </div>
    <img src="assets/user.png" alt="User" />  
  </section>
  `

  // but if the sender is bot, then send this part

} else if (sender === 'bot'){
 chat.innerHTML += `
 <section class="bot-msg">
  <img src="assets/bot.png" alt="Space Bot" />
  <div class="bubble bot-bubble">
    <p>${message}</p>
  </div>
</section>
`
}

//This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box. 
//So it “follows” the chat and scrolls down. Seems to work without with most of the modern browsers.
chat.scrollTop = chat.scrollHeight
} 

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)




  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => {
    firstBotAnswer(message)
    input.disabled = true;
}, 1400);
setTimeout(() => {
  showCategorySelection(message)
  input.disabled = false;
}, 3800);
    
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showOptionSelection(message), 1400)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showPaymentOptions(message), 1000)
  } else if (questionNumber === 5) {
    userReply(message)
    setTimeout(() => showPrice(message), 1400)
  } else {
    userReply(message)
    setTimeout(thankYou, 1400)
  }
}

setTimeout(()=> {
  // place here your code to display the first answer
  // setting the property disabled to true disables the input, so the user cannot interact in the meantime
   input.disabled = true;
   setTimeout(()=> {
  // place here your code to display the second answer
  // setting the property disabled to false enables the input, so the user will be able to interact again
   input.disabled = false;

   }, 1400);
}, 1000);

// Randomise answers starts here // Randomise answers starts here


let greetingPhrace = [
  "Hello fellow"
, "Ciao my friend"
, "Welcome Viking"
, "Howdy"
, "Haidi hou"
, "Salut Sailor"
, "Möö möö"
, "Hola Hola Coca Cola"
, "Hej komppis"
, "Moi muumio"
];
let greeting_id = greetingPhrace[Math.floor(Math.random() * greetingPhrace.length)];


let reactionPhrace = [
  "LOL"
, "OMG"
, "NO WAY"
, "VOE TAIVAHAN TALIKYNTTILÄT"
, "WOW"
, "HAHA"
, "TIRSK"
, "NÄMEN SNÄLLA DU"
];
let reaction_Id = reactionPhrace[Math.floor(Math.random() * reactionPhrace.length)];

let dollarVariaton = [
  "58 Giga Billio Dollars."
, "120 Dollars + Inergalactic taxes."
, "1500 000 000 000 000 000 000 000 000 000 Dollars."
, "Mega Giga Trilion Dollars."
, "One dollar Seventy-two cents."
, "700 Billion."
, "1 Dollar + your soul."
];
let dollar_Id = dollarVariaton[Math.floor(Math.random() * dollarVariaton.length)];

let diamondVariaton = [
  "Seven big diamonds."
, "23 small diamonds and one big one."
, "Five diamonds and let's say... a plastic pony."
, "🤔🤔🤔🤔 Neil Diamond!!! That's my price 💎😂 I think he has sold more than 130 million records worldwide! I hope you can wrap him in plastic. LOL!"
];
let diamond_Id = diamondVariaton[Math.floor(Math.random() * diamondVariaton.length)];

let icecreamVariaton = [
  "72 vanilla ice cream cones. 🍦"
, "One big vanilla ice cream coupe - in size of a Texas."
, "50 Ton of vanilla ice cream with 400 kilos of nonpareil."
];
let icecream_Id = icecreamVariaton[Math.floor(Math.random() * icecreamVariaton.length)];


// Randomise answers ends here// Randomise answers ends here







const firstGreeting = () => {
  questionNumber = 1
  botReply(`${greeting_id}, What's your name?`)
}

const firstBotAnswer = (msg) => {
  botReply(`${reaction_Id}, your name is ${msg}?!? 😂😂😂 You humans are so funny. ❤️❤️❤️`) 
}
const showCategorySelection = (msg) => {
    botReply('BTW, I have some stolen goodies for you – straight from outer space!!! What would make you happy today?!?')
    questionNumber++
  inputWrapper.innerHTML = `
    <button id="planetsBtn">Planets</button>
    <button id="spacejunkBtn">Space Junk</button>
    <button id="stardustBtn">Stardust</button>
  `
  document
    .getElementById('planetsBtn')
    .addEventListener('click', () => nextQuestion('planets'))
  document
    .getElementById('spacejunkBtn')
    .addEventListener('click', () => nextQuestion('spacejunk'))
  document
    .getElementById('stardustBtn')
    .addEventListener('click', () => nextQuestion('stardust'))
    questionNumber++
  
  }




const showOptionSelection = (type) => {
  questionNumber++

  botReply(
    `Oh so you're in the mood for ${type}? Great choice. Today's specials below.`
  )

  if (type === 'planets') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇What kinds of planets?👇</option>
        <option value="saturnus">Saturnus 🪐</option>
        <option value="pluto">Pluto 👀 (YEP, still a planet for the rest of us 👽)</option>
        <option value="random planet">BOOM! Random planet from another galaxy 👾</option>
      </select>
    `
  } else if (type === 'spacejunk') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇What kinds of space junk?👇</option>
        <option value="Old American Satellites">Old American Satellites 🛰</option>
        <option value="Stolen Data Unit">Stolen Data Unit from Space X 😎</option>
        <option value="Laika's Space Suit">🐶 Laika's Space Suit (Rare Collectable)</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 What kinds of stardust?👇</option>
        <option value="Black Crystals">Black Crystals, hand-picked from black holes 😱</option>
        <option value="Pink Unicorn Poo">Pink Unicorn Poo</option>
        <option value="Lactose Free Star Dust">Regular Star Dust (Lactose Free)</option>
      </select>
    `
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

const showPaymentOptions = (paymentoptions) => {
  questionNumber++

  botReply(`${paymentoptions} coming up! Do you want to pay with cash 💰, diamonds 💎, or vanilla ice cream 🍦?`)

  inputWrapper.innerHTML = `
    <button id="cash">💰</button>
    <button id="diamonds">💎</button>
    <button id="ice cream">🍦</button>
  `

  document
    .getElementById('cash')
    .addEventListener('click', () => nextQuestion('cash'))
    document
    .getElementById('diamonds')
    .addEventListener('click', () => nextQuestion('diamonds'))    
  document
    .getElementById('ice cream')
    .addEventListener('click', () => nextQuestion('ice cream'))
}




const showPrice = (payment) => {
  questionNumber++

  let price
  if (payment === 'cash') {
    price = `${dollar_Id} 💰`;
  } else if (payment === 'diamonds'){
    price = `${diamond_Id} 💎`;
  } else if (payment === 'ice cream'){
    price = `${icecream_Id}`;
  }

  botReply(
    `Ok then, the total price will be ${price}  Are you sure you want to order this?`
  )

  inputWrapper.innerHTML = `
    <button id="restart">NO</button>
    <button id="confirm">YES</button>
  `

  document.getElementById('restart').addEventListener('click', () => {
    location.reload()
    return false
  })
  document
    .getElementById('confirm')
    .addEventListener('click', () => nextQuestion('Yes!'))
}

const thankYou = () => {
  botReply(`OK! 👽 Your order delivery will arrive any minute now 🛸 Have a heavenly day!`)
  inputWrapper.innerHTML = ``
}

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})


//This is a fuction that displays the message.
//setTimeout (fuctionName, timeToWait in milliseconds)
setTimeout(firstGreeting, 800)
