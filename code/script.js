
const chat = document.getElementById('chat') //when I need to get this element i can use chat
const wrapper = document.getElementById('input-wrapper')
const form = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const sendBtn = document.getElementById('send')

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
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

/*const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showFoodTypes(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showMenu(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showDishSize(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showPrice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}*/


//When website is loaded (we save), chatbot greets us:
//We put in the parameter time and give it contidions. This is our input that controls which output we get.
//We also put in the parameter timeGreetings, which is an array of greeting phrases. This becomes our output, depending on the time variable.
const greetUser = () => {
  questionNumber = 1
  botReply("Aloha what´s your Name?", "bot");

};

//We welcome the user (based on current time) with a delay of 1s
setTimeout(greetUser, 1000);
 

//Denna funktion (eventListener) gör att när användaren klickar på submit, så körs följande funktion igång. 
//Vi sätter en variabel på värdet vi får ut av firstName (från form input id i HTML) för att lättare återanvända den.
form.addEventListener('submit', (event) => {
  event.preventDefault()   //Hindrar från att formen autosparar innan vi har hunnit köra vår kod.
  
  const firstName = document.getElementById('name-input').value;
  console.log(firstName)            //Här kollar vi att vi får ut rätt värde, kan kommentera ut sen.

  showMessage(firstName, 'user');    //Steg 2 i koden är att vi ropar på funktionen "showMessage", där vi lägger in våra två argument (firstName, user) i parametrarna.

  setTimeout(() => recognize(firstName), 1000)      //Denna kod gör att vi väntar 1s innan vi kör igång nästa funktion/fråga, efter att usern har svarat.
})


//-- This function uses the first input after greetings (firstName) and adds a message from the bot containing that input. 
//At the same time, we want to prep the input form area for the next question. We REPLACE (not add) the content in the formWrapper with new HTML.
//question0

const recognize = (firstName) => {

botReply(`Welcome to the world of pinapples ${firstName}. What do you need today? Fun Fact or History?`)

console.log(wrapper);

wrapper.innerHTML =`
<button id="fun-fact" > Fun Fact </button>
<button id="history" > History </button>
<button id="order" > Send me a pineapple!! </button>`;

//Förstå mig bättre på eventliteners och varför det funkar nu och inte innan (hur gör man så de inte är kvar hela tiden?)
document.getElementById('fun-fact').addEventListener('click', ()=> {

  botReply("yey funfact", 'user')
  setTimeout (() => ('fun-fact', 'bot')), 5000
})
document.getElementById('history').addEventListener('click' , 
() => { botReply("history history history!")
setTimeout(() => ('history' , 'bot')),5000  
}) 
document.getElementById('order').addEventListener('click' , 
() => { botReply("Yes buy some pineapples", )
setTimeout(() => ('order' , 'bot')),5000  
})   

//Denna kod gör att vi väntar 1s innan vi kör igång nästa funktion/fråga, efter att usern har svarat.
setTimeout(() => nextQuestion(), 5000)  

}


const nextQuestion = () => {  
  console.log(botReply)

  
  botReply( 'what did you think? you want  some history or are you ready to buy your pineapple?.')
  
  wrapper.innerHTML =`
  <button id="history" > History </button>
  <button id="order" > Send me a pineapple!! </button>`;

  //Förstå mig bättre på eventliteners och varför det funkar nu och inte innan (hur gör man så de inte är kvar hela tiden?)
  document.getElementById('history').addEventListener('click' , 
  () => { history()
  setTimeout(() => history(), 5000)
  }) 
  document.getElementById('order').addEventListener('click' , 
  () => { botReply("Yes buy some pineapples", )
  setTimeout(() => order(), 5000 )
  }) 
  
} 

const history =() => {

botReply( 'HEJSAN.')

wrapper.innerHTML =`
  <button id="fun-fact" > Fun fact</button>
  <button id="order" > Send me a pineapple!! </button>`;

 /* document.getElementById('fun-fact').addEventListener('click' , 
  () => { botReply("hej hej history!")
  setTimeout(() => ('history' , 'bot')),1000  
  }) 
  document.getElementById('order').addEventListener('click' , 
  () => { botReply("Yes buy some pineapples", )
  setTimeout(() => ('order' , 'bot')),1000  
  }) */

}

const Order =() => {

  botReply( 'yo.')
  
  wrapper.innerHTML =`
    <button id="fun-fact" > Fun fact</button>
    <button id="order" > Send me a pineapple!! </button>`;
  
    /*document.getElementById('fun-fact').addEventListener('click' , 
    () => { botReply("hej hej history!")
    setTimeout(() => ('history' , 'bot')),1000  
    }) 
    document.getElementById('order').addEventListener('click' , 
    () => { botReply("Yes buy some pineapples", )
    setTimeout(() => ('order' , 'bot')),1000  
    }) */
  
  }
  
