//const
const form = document.getElementById('form');
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper')

//global variables/scope('bubble within bubble, biggest bubble')
let step = 1;

// or onResponse (naming function)

const handleResponse = (textToPrint) => {
    chat.innerHTML += ` <section> <div><p>  ${textToPrint}
        </p></div></section>`;

}

const validateResponse = (valueFromUser, correctAnswer) => {

    return valueFromUser === correctAnswer;

}


// Set up your eventlisteners here

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(step);

    //INPUT!

    var value = document.getElementById('input-value').value;


    chat.innerHTML += ` <div><p> ${value} </p></div>`;


    if (step === 1) {

        if (validateResponse(value, value)) {

            handleResponse('hi, nice name! Lets make you a kitten! Should it be a girl or boy or does not matter?');

            step = 2;
        } else {
            handleResponse('${value} !!!');

        }
    } else if (step === 2) {

        if (value === value) {

            handleResponse('Alright! What do you want to name your kitten ? ');

            step = 3;
        } else {

            handleResponse('Cool! What do you want to name your kitten?');
        }
    } else if (step === 3) {

        if (value === value) {
            handleResponse('Here is ! There you go, Have a nice day!');
        }


    }


});