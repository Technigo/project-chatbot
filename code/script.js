// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

// sound files added for future reference
const bottrack = new Audio('./assets/zoltartrack.mp3')
const zoltarSound = () => {
      bottrack.play()
      bottrack.volume = 0.2
}
const usertrack = new Audio('./assets/usertrack.mp3')
const userSound = () => {
      usertrack.play()
      usertrack.volume = 0.2
}
const throatsing = new Audio('./assets/introsong.mp3')
const introSound = () => {
      throatsing.play()
      throatsing.volume = 0.1
    }


//Bot/user reply with sounds shortened function
const botReply = (msg) => {
  showMessage(msg, 'bot')
  zoltarSound()
}

const userReply = (msg) => {
  showMessage(msg, 'user')
  userSound()
}

const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/th.jfif" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/zoltar.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  chat.scrollTop = chat.scrollHeight
}


// function to swap from one question to the next
const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => fortuneYesNo(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showFortune(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => chosenFortune(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showPrice(message), 1000)
    input.value = ''
  } else {
    userReply(message)
    setTimeout(thankYou(message), 1000)
  }
}

// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Greetings child, tell me your name`)
}

const fortuneYesNo = (msg) => {
  questionNumber++
  botReply(`Well met, ${msg}! Will you tell me of your deepset desires?`)
  // had to insert introsound here due to browsers blocking .play on page load without user interaction
  throatsing.play()

  inputWrapper.innerHTML = `
    <button id="yesBtn">Yes</button>
    <button id="noBtn">No</button>
  `

  document
    .getElementById('yesBtn')
    .addEventListener('click', () => nextQuestion('yes'))
  document
    .getElementById('noBtn')
    .addEventListener('click', () => nextQuestion('no'))
}

const showFortune = (type) => {
  questionNumber++

  if (type === 'yes') {

     botReply ('So be it, choose wisely')

    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Tell me of...</option>
        <option value="future">my future</option>
        <option value="family">the fate of my family</option>
        <option value="..wait, I just want to be big">Wait, I think I just want to be big</option>
      </select>
    `
  } else {
    botReply('Very well, be gone then.'),
    setTimeout(location.reload(), 3000)
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion('Tell me of my ' + select.value))
}

const chosenFortune = (type) => {
  questionNumber++
  
  if (type === 'future') {
    setTimeout(botReply(
      `*Excessive flipping of cards*
      ...There's yet more work to be done for you,
      I see greatness at the cost of great strife...
      `), 1000)
  } else if (type === 'family') {
    setTimeout(botReply(
      `*Closes his eyes, turns his head facing upwards hymning something eerie while rubbing his crystal ball*
      ...Hmmm...your family...You must nurture all relationships. 
      Alas, the number of times you will meet are finite.`), 1000)
  } else {
    setTimeout(botReply('Really, this again!? *Slams his crystal ball onto the table*...I recall things not ending up the way it was hoped for the last time someone recieved such a gift'), 1000)
  }
  
  inputWrapper.innerHTML = `
  <button id="stalling">So...?</button>
`

document
  .getElementById('stalling')
  .addEventListener('click', () => {nextQuestion('So...?')})
}

const showPrice = () => {
  questionNumber++;
  setTimeout(
    botReply(
      "I hope my guidance will find you peace of mind. With that said, this is no charity."
    ),
    1000
  );
  inputWrapper.innerHTML = `
  <input id="input" type="number" />
  <button id="pay" class="send-btn">$ pay up</button>
  `;
  const money = document.getElementById("input");
  document.getElementById("pay").addEventListener("click", () => {
    nextQuestion(money.value);
  });
};
const thankYou = (amount) => {
  if (amount > 20) {
    botReply(`*Takes his money, closes his eyes and sits in silence*`);
  } else {
    botReply(
      `Keep you money, such an inadequate sum is not worthy of my attention`
    );
  }
  inputWrapper.innerHTML = `
  <button id="leave">Thank you, oh great Zoltar</button>`;
  document
    .getElementById("leave")
    .addEventListener("click", () => setTimeout(location.reload(), 3000));
};

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

// When website loaded, chatbot asks first question.
setTimeout(greeting, 1000)
