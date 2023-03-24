


const chat = document.getElementById('chat') 
const wrapper = document.getElementById('input-wrapper')
const form = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const sendBtn = document.getElementById('send')


const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// Removes bot typing effect

const removeTyping = () => {
  document.getElementById('preloader').style.display='none'
}
// This function will add a chat bubble in the correct place based on who the sender is
//without the ${message} the actual message(parameter) in const greetUser will not be passed, only string message. Only the parameter 'bot' 
function showMessage(message, sender) {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("Now the user is replying");
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/ananasanswer.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("Now the bot is replying");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/ananasbot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

//When website is loaded (we save), chatbot greets us:
//We put in the parameter time and give it contidions. This is our input that controls which output we get.
//We also put in the parameter timeGreetings, which is an array of greeting phrases. This becomes our output, depending on the time variable.
const greetUser = () => {

  botReply("Aloha what´s your Name?");

};

//We welcome the user (based on current time) with a delay of 1s
setTimeout(greetUser, 1000);
 

//Denna funktion (eventListener) gör att när användaren klickar på submit, så körs funktion igång. 
//Vi sätter en variabel på värdet vi får ut av firstName (från form input id i HTML) för att lättare återanvända den.
form.addEventListener('submit', (event) => {
  event.preventDefault()   //Hindrar från att formen autosparar innan vi har hunnit köra vår kod.
  
  const firstName = document.getElementById('name-input').value;
  showMessage(firstName, 'user')
// this funcyion delays the next question
  setTimeout(() => firstQuestion(firstName), 1000) 
})


//-- This function uses the first input after greetings (firstName) and adds a message from the bot containing that input. 
//At the same time, we want to prep the input form area for the next question. We REPLACE (not add) the content in the formWrapper with new HTML.
//question0

const firstQuestion= (firstName) => {

 botReply (`Welcome to the world of pinapples ${firstName}. What do you need today? Fun Fact, History or  order the pineapple?`)
setTimeout ( () => botReply ('First of all did you know that : The top of a pineapple, after cleaning and drying, can be planted in soil and a new plant will grow. '), 1300)

wrapper.innerHTML =`
<button id="fun-fact" > Fun Fact </button>)
<button id="history" > History </button>
<button id="order" > Send me a pineapple!! </button>`

//why has this eventlistneer started to show up as a bubble?
document.getElementById('fun-fact').addEventListener('click', () => userReplyOne('fun'))


document.getElementById('history').addEventListener('click', () => userReplyOne("history"))
document.getElementById('order').addEventListener('click', () => answerThree("order"))

}
//answer and first interaction

const userReplyOne = (chooseOne) => {  
if (chooseOne === 'fun'){
setTimeout ( 
    () =>
  userReply ("yey funfact"), 2000)

  setTimeout ( () =>
  botReply  ("Did you know that a pineapple is not an apple, or pine? It’s actually a berry!"), 3000)

  setTimeout ( () =>
  botReply ("Are you ready to order your pineapple? or do you need a little bit of history first?"), 4000)

  wrapper.innerHTML =`
  <button id="order" > Send me a pineapple!! </button>
  <button id="historyOne" > A little bit of history on my side </button> 
  `;
  //Button history has to go on its own

  //this one is separate at the end ifs so we dont get to many ifs
  document.getElementById('historyOne').addEventListener('click', () => answerTwo('historyEnd'))
  document.getElementById('order').addEventListener('click', () => answerThree( 'order'))

}
else if (chooseOne === "history") {

  setTimeout ( () =>
  userReply('so important to know the history'), 2000)

  setTimeout ( () =>
  botReply ("The pineapple plant is a tropical fruit that is indigenous to South America. Originally coming from the area between southern Brazil and Paraguay."), 1500)


  setTimeout ( () =>
  botReply ("Are you ready to order your pineapple? or mabey read some funfacts first?"), 3000),

  wrapper.innerHTML = `
<button id="fun-fact" > More fun facts </button>
  <button id="order" > Send me a pineapple!! </button>`
document.getElementById('fun-fact').addEventListener('click', () => answerTwo('funFactTwo')) //den går till en helt ny function med nya ifs!

  document.getElementById('order').addEventListener('click', () => answerThree('order'))

}}

answerTwo = (type) => {
  console.log ('working1')
  if (type === 'historyEnd'){

    setTimeout ( () =>
    botReply(`More history for the people: The pineapple spread throughout South America, the Caribbean, Central America and Mexico, where it was cultivated by the Mayas and the Aztecs. Columbus came across the pineapple in 1493 and took it back to Europe.`), 1500)

    setTimeout ( () =>
    botReply ('Are you ready to order your pineapple?'), 4000)

  wrapper.innerHTML =`
  <button id="order" > Yes </button>
 
  `;
  //egen function för den med slutklämmen

  document.getElementById('order').addEventListener('click', () => answerThree("order"))

} else if ( type === 'funFactTwo' ){
  console.log('vid fun fact nr 2')

  setTimeout ( () =>
  userReply ('More pineapples to the people'), 2000)
  setTimeout ( () =>
  botReply ('Pineapples were such a status symbol in 18th century England that you could rent one for the evening to take to a party.'), 3000)


  setTimeout ( () =>
  botReply ('Are you ready to order your pineapple?'), 4000)

  wrapper.innerHTML =`
<button id="order" > Yes </button>

`;

document.getElementById('order').addEventListener('click', () => answerThree("order"))

}}

const answerThree = (fin) => {

 if (fin === 'order') {

  setTimeout ( () =>
  userReply ("Of course I want to order! finally I get my own Pineapple"), 2000)
   
  setTimeout ( () =>
  botReply ('Perfect choose your size here.'), 3000)

    //fixa en knapp för de olika storlekarna sen en form för mail
wrapper. innerHTML = `

<label for="select your fruit"></label>

<select id="select">
    <option value="" selected disabled>--What kind of pineapple do you want=?--</option>
    <option value="Gianormous">Gianormous</option>
    <option value="Medium Pineapple">Not to big</option>
    <option value="Small Pineapple">Small</option>
    <option value=" Piña colada">Piña colada</option>
    <option value="frozen pineapple">Frozen </option>
    <option value=" at a beach">At a beach</option>
</select>`
   }
const select = document.getElementById('select')
select.addEventListener('change', () => endForm(select.value))

}

    
    // This wont work?
  const endForm = (pineapple) => {
    setTimeout ( () =>
    botReply (`Yey thanx for orderinge a ${pineapple } write your name and e mail and we will send you information on where to get your happy pineapple`), 2000)

wrapper.innerHTML=
`<form>

<input id="email" name="email" type="email" required placeholder= "e-mail">


<button id="button" > Send </button>
</form>`


document.getElementById('email').addEventListener('click', () => thankYou())
document.getElementById('button').addEventListener('click', () => thankYou())
} 

//these wont work!
const thankYou =() => {
  setTimeout ( () =>
  botReply ("Pineapples are international symbols of welcome and are a symbolic way of saying “you are perfect” when presented to someone."), 2000)
setTimeout ( () =>
botReply ('Thank you for ordering hope to see you again!'), 3000)

}
