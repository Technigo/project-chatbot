const form = document.getElementById('form');
const chat = document.getElementById('chat');
const send = document.getElementById('send')
const input = document.getElementById('input-value')

let questionNumber = 1; 

const nextQuestion = (message) => {
    /*console.log('questionNumber', questionNumber) */
  
    if (questionNumber === 1) {
      input.value = ''
      setTimeout(() => questionOne(message), 1000)
      
    } else if (questionNumber === 2) {
        
        input.value = ''
      setTimeout(() => questionTwo(message), 1000)
    } else if (questionNumber === 3) {
        input.value = ''
        setTimeout(() => questionThree(message), 1000)
    } else if (questionNumber === 4) {
      input.value = ''
        setTimeout(() => questionFour(message), 1000)
    } else {
        //setTimeout(thankYou, 1000)
        input.value = ''
          setTimeout(() => questionFour(message), 1000)
      }
  }

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default 

    // Assign input value to variable
    const value = document.getElementById('input-value').value;
    nextQuestion(value);

}
);  


/*send.addEventListener('click', () => nextQuestion()) // Denna är SUPERVIKTIG, det ÄR DENNA SOM SÄTTER IGÅNG FRÅGORNA
input.addEventListener('keypress', (event) => { nextQuestion()
}) */


const questionOne = () => { 
    questionNumber++;

    chat.innerHTML += `
        <div>
            <p> Welcome to our booking system!</p>
            <p> 
            Please select what floor you would like to book your room in number, 
            (1 for floor 1, 2 for floor 2, 3 for floor 3)
            </p>
        </div>
    `;
    
}

    


const questionTwo = (value) => {

    console.log(value);
    questionNumber++;
    if (value == 1) {
        chat.innerHTML += `
        <div>
            <p> Thank you. You have selected 1st Floor. Now please select what room </p>
            <p> For Room in floor 1 Zebra Press: z</p>
            <p> For Room in floor 1 Lions Press: l</p>
            <p> For Room in floor 1 tiger Press: t</p>
        </div>
        `;
    } else if (value == 2) {
        chat.innerHTML += `
            <div>
                <p> Thank you. You have selected 2nd Floor. Now please select what room </p>
                <p> For Room in floor 2 Zebra Press: z</p>
                <p> For Room in floor 2 Lions Press: l</p>
                <p> For Room in floor 2 tiger Press: t</p>
            </div>
        `;
    
    } else if (value == 3) {
            chat.innerHTML += `
            <div>
                <p> Thank you. You have selected 3rd Floor. Now please select what room </p>
                <p> For Room in floor 3 Zebra Press: z</p>
                <p> For Room in floor 3 Lions Press: l</p>
                <p> For Room in floor 3 tiger Press: t</p>
            </div>
        `; 
    
    } else {
            chat.innerHTML += `
            <div>
                <p>Select a number vvvvvbetween 1-3</p>
            </div>
        `;}
        
    }

    

const questionThree = (value) => {
    console.log(value);
    questionNumber++;
        if (value == "z") {
            chat.innerHTML += `
                <div>
                    <p> QUESTION 3 </p>
                    <p> For 30 minute press: 1</p>
                    <p> For 60 minute press: 2</p>
                    <p> For 90 minute press: 3</p>
                </div>
            `;
        } else if (value == "l") {
            chat.innerHTML += `
                <div>
                    <p> QUESTION 3 </p>
                    <p> For 30 minute press: 1</p>
                    <p> For 60 minute press: 2</p>
                    <p> For 90 minute press: 3</p>
                </div>
            `;
        
        } else if (value == "t") {
            chat.innerHTML += `
                <div>
                    <p> QUESTION 3 </p>
                    <p> For 30 minute press: 1</p>
                    <p> For 60 minute press: 2</p>
                    <p> For 90 minute press: 3</p>
                </div>
            `; } else {
            chat.innerHTML += `
                <div>
                    <p>Select a number between 1-3 QUESTION 3333333</p>
                </div>
            `;} }

const questionFour = (value) => {
    console.log(value);
        if (value == 1) {
            chat.innerHTML += `
            <div>
            <p> You have booked 30 minutes </p>
            </div>
        `;
} else if (value == 2) {
    chat.innerHTML += `
        <div>
        <p> You have booked 60 minutes </p>
        </div>
    `;
                    
} else if (value == 3) {
    chat.innerHTML += `
        <div>
        <p> You have booked 90 minutes </p>
        </div>
    `; } else {
    chat.innerHTML += `
        <div>
        <p>Error: Select a number between 1-3</p>
        </div>
    `;} }











