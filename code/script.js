//const
const form = document.getElementById('form');
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper')
    //global variables/scope('bubble within bubble, biggest bubble')
let step = 1;


// Set up your eventlisteners here

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(step);

    //input
    const value = document.getElementById('input-value').value;


    chat.innerHTML += ` <div><p> ${value}, 
   </p></div>`;


    if (step === 1) {

        if (value === value) {

            chat.innerHTML += ` <div><p>  Hi ${value}, nice to meet you! 
            Let's make you a kitten! Should it be a girl or boy?
                    </p></div>`;
            step = 2;

        } else {
            chat.innerHTML += ` <div><p>no numbers input</p></div>`;
        }

    } else if (step === 2) {

        if (value === "girl") {

            chat.innerHTML += ` <div><p>super cool!!!</p></div>`;

        } else {

            chat.innerHTML += ` <div><p>super amazing!!!</p></div>`;
        }
    }
});



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.