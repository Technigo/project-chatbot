//const
const form = document.getElementById('form');
const chat = document.getElementById('chat');
//global variables/scope('bubble within bubble, biggest bubble')
let step = 1;
// Set up your eventlisteners here

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(step);

    //input
    const value = document.getElementById('input-value').value;

    Step = 2;
    chat.innerHTML += ` <div><p>Hi ${value}, Nice Name you got!</p></div>`;

});



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.