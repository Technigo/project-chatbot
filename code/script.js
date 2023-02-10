
const chat = document.getElementById('chat') //when I need to get this element i can use chat
const wrapper = document.getElementById('input-wrapper')
const form = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const sendBtn = document.getElementById('send')

let questionNumber = 0

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
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("Now the bot is replying");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
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

  botReply("Aloha what´s your Name?", "bot");

};

//We welcome the user (based on current time) with a delay of 1s
setTimeout(greetUser, 1000);
 

//Denna funktion (eventListener) gör att när användaren klickar på submit, så körs följande funktion igång. 
//Vi sätter en variabel på värdet vi får ut av firstName (från form input id i HTML) för att lättare återanvända den.
form.addEventListener('submit', (event) => {
  event.preventDefault()   //Hindrar från att formen autosparar innan vi har hunnit köra vår kod.
  
  const firstName = document.getElementById('name-input').value;
  showMessage(firstName, 'user')
           //Här kollar vi att vi får ut rätt värde, kan kommentera ut sen.

  //showMessage(firstName, 'user');    //Steg 2 i koden är att vi ropar på funktionen "showMessage", där vi lägger in våra två argument (firstName, user) i parametrarna.

  setTimeout(() => firstQuestion(firstName), 1000)      //Denna kod gör att vi väntar 1s innan vi kör igång nästa funktion/fråga, efter att usern har svarat.
})


//-- This function uses the first input after greetings (firstName) and adds a message from the bot containing that input. 
//At the same time, we want to prep the input form area for the next question. We REPLACE (not add) the content in the formWrapper with new HTML.
//question0

const firstQuestion= (firstName) => {


botReply(`Welcome to the world of pinapples ${firstName}. What do you need today? Fun Fact, History or rightaway to order?`)

console.log(wrapper);

wrapper.innerHTML =`
<button id="fun-fact" > Fun Fact </button>
<button id="history" > History </button>
<button id="order" > Send me a pineapple!! </button>`;

//Förstå mig bättre på eventliteners och varför det funkar nu och inte innan (hur gör man så de inte är kvar hela tiden?)
document.getElementById('fun-fact').addEventListener('click', () => userReplyOne())


document.getElementById('history').addEventListener('click', () => answerTwoHistory())
document.getElementById('order').addEventListener('click', () => ThreeOrder())

}



// user replys
const userReplyOne = () => {  

 


  userReply("yey funfact")

  botReply ("here is som fun fact")

  botReply ("cklick on another button for something else")

  wrapper.innerHTML =`
  <button id="history" > History </button>
  <button id="order" > Send me a pineapple!! </button>`;


  document.getElementById('history').addEventListener('click', () => answerTwoHistory())
  document.getElementById('order').addEventListener('click', () => ThreeOrder())
}

const answerTwoHistory = () => {
  

  userReply('so important to know the history')


  botReply(`yey u cose history`)

  wrapper.innerHTML = `
  <button id="fun-fact" > Fun Fact </button>

  <button id="order" > Send me a pineapple!! </button>`

  document.getElementById('order').addEventListener('click', () => choose ('order'))

  //Förstå mig bättre på eventliteners och varför det funkar nu och inte innan (hur gör man så de inte är kvar hela tiden?)
  document.getElementById('fun-fact').addEventListener('click', () => choose('fun'))



} 
 
const choose = (choose) => {

  if (choose == 'fun'){
    botReply('aloha sum fun yeah...')
  

  wrapper.innerHTML = `
  <button id="fun-fact" > history </button>

  <button id="order" > Send me a pineapple!! </button>`

  document.getElementById('order').addEventListener('click', () => ThreeOrder())

  //Förstå mig bättre på eventliteners och varför det funkar nu och inte innan (hur gör man så de inte är kvar hela tiden?)
  document.getElementById('fun-fact').addEventListener('click', () => answerTwoHistory())

  }

else if (choose == 'order'){ 
  
  botReply('aloha sum arribayeah...')
  

wrapper.innerHTML = `
<button id="fun-fact" > history </button>

<button id="order" > Send me a pineapple!! </button>`

document.getElementById('order').addEventListener('click', () => ThreeOrder())

//Förstå mig bättre på eventliteners och varför det funkar nu och inte innan (hur gör man så de inte är kvar hela tiden?)
document.getElementById('fun-fact').addEventListener('click', () => answerTwoHistory())
}}






//bot replys
// here I write fun-fact 








  const ThreeOrder = () => {
    questionNumber = 4

    userReply ("finaly I get my own Pineapple")
   
    botReply ('Make the order here')

    //fixa en knapp för de olika storlekarna sen en form för mail


    botReply ('Gracias')
  }

