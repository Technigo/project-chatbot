// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');
const submit = document.getElementById('submit');
const sendButton = document.getElementById('send');

const greetUser = () => {
  showMessage("Welcome to your experience, what's your name?", "bot");
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  // Just to check it out, change 'bot' to 'user' here 👆
};

const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  showMessage(`My name is ${name}.`, 'user');
  nameInput.value = ''

  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  setTimeout(() => experienceOption(name), 1000);
};

const experienceOption = (name) => {
  showMessage(`Nice to meet you ${name}! Which experience do you want to book?`, 'bot');

  inputWrapper.innerHTML += //add three experience buttons
`<button id="bali-btn" type="submit">Bali</button>
<button id="bali-btn" type="submit">Iceland</button>
<button id="bali-btn" type="submit">Hawaii</button>`

document
.getElementById('bali-btn')
.addEventListener('click', () => {
  showMessage('I want to go to Bali', 'user');
  setTimeout(showMessage('Bali, what a great choice! That will be 5000€ please', 'bot'), 1000);
  //add some code in here to add answer options for next message
})
document
.getElementById('iceland-btn')
.addEventListener('click', () => {
  showMessage('I want to go to Iceland', 'user');
  setTimeout(showMessage('Iceland, what a great choice! That will be 5000€ please', 'bot'), 1000);
  //add some code in here to add answer options for next message
  
})
document
.getElementById('hawaii-btn')
.addEventListener('click', () => {
  showMessage('I want to go to Hawaii', 'user');
  setTimeout(showMessage('Hawaii, what a great choice! That will be 5000€ please', 'bot'), 1000);
  //add some code in here to add answer options for next message
})
};


//funtionen med tre buttons här. här ska det vara innerhtm inget else if chat.innerhtml slut ppå section.

//här kommer const handleSend event prevent deafault som står där nere.

//kalla på showmessage name input och user.

//kalla på gettheexperiencechoices kolla på settimeout typ 2000?

//

const showMessage = (msg, sender) => {
  if (sender === 'user') {
    chat.innerHTML +=  `
    <section class="user-msg">
      <div class="bubble user-bubble">
        <p>${msg}</p>
      </div>
      <img src="assets/user.png" alt="user bot" />  
    </section>`;
  } else if (sender === 'bot') {
    chat.innerHTML +=  `
    <section class="bot-msg">
    <img src="assets/bot.png" alt="chat bot" /> 
      <div class="bubble bot-bubble">
        <p>${msg}</p>
      </div> 
    </section>`;
  }
 
};

greetUser();

//här vill jag hämta vad jag skriver när jag trycker på send, kalla på handleSend. här lägga till eventlistner. send button . add eventlistner. click, handle send.

//gör samma grej som du gjort för tre knapparna som för sendknappen etc. gör en funktion för tre kanpparna kul du har valt paddla.

const handleSend = (event) => {
  //eventpreventdeafault googla
  const showMessage //name-input.value för att få värdet värdet prova logga båda.
  console.log("nina");
  //

  handleSend();//kalla på den i en settimeout getthe experinec och tom parantes.
  // behöver bara ha som greetuser fast handlesend som pratar inte innerhtml.
};
//gör en ny funtion. kopiera html ska komma tre button här så en ny funktion efter den om boten ska svara ett `normnarl`svar så skriver jag samma som ovan alltså greetuser osv.






    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;



// Starts here







// Set up your eventlisteners here - add eventlistner googla på det
form.addEventListener('submit', handleNameInput);
form.addEventListener('submit', function(event){
  event.preventDefault() //prevent the form from autosubmitting
})



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
