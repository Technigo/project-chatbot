const form = document.getElementById('form');
const chat = document.getElementById('chat');

let question = 1;

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default 

    // Assign input value to variable
    const value = document.getElementById('input-value').value;

        if (value !== null) {
            chat.innerHTML += `
                <div>
                    <p> Welcome to our booking system!</p>
                    <p> 
                    Please select what floor you would like to book your room in number, 
                    (1 for floor 1, 2 for floor 2, 3 for floor 3)
                    </p>
                </div>
            `;
            questionTwo(value)
        } else {
            chat.innerHTML += `
                <div>
                    <p>Please enter your name</p>
                </div>
            `;
        } }
    
    
); 
    


const questionTwo = (value) => {
    question++
    if (value === 1) {
        chat.innerHTML += `
            <div>
                <p> Thank you. You have selected 1st Floor. Now please select what room </p>
                <p> For Room Zebra Press: Z</p>
                <p> For Room Lion Press: L</p>
                <p> For Room tiger Press: T</p>
            </div>
        `;
    } else if (value === 2) {
        chat.innerHTML += `
            <div>
                <p> Thank you. You have selected 2nd Floor. Now please select what room </p>
                <p> For Room Zebra Press: Z</p>
                <p> For Room Lion Press: L</p>
                <p> For Room tiger Press: T</p>
            </div>
        `;
    
    } else if (value === 3) {
        chat.innerHTML += `
            <div>
                <p> Thank you. You have selected 3rd Floor. Now please select what room </p>
                <p> For Room Zebra Press: Z</p>
                <p> For Room Lion Press: L</p>
                <p> For Room tiger Press: T</p>
            </div>
        `; } else {
        chat.innerHTML += `
            <div>
                <p>Select a number between 1-3</p>
            </div>
        `;}
        
    }

    

const questionThree = () => {
    question++
    if (value !==null) {
        if (value == z) {
            chat.innerHTML += `
                <div>
                    <p> Thank you. You have selected 1st Floor. Now please select what room </p>
                    <p> For Room Zebra Press: Z</p>
                    <p> For Room Lion Press: L</p>
                    <p> For Room tiger Press: T</p>
                </div>
            `;
        } else if (value == l) {
            chat.innerHTML += `
                <div>
                    <p> Thank you. You have selected 2nd Floor. Now please select what room </p>
                    <p> For Room Zebra Press: Z</p>
                    <p> For Room Lion Press: L</p>
                    <p> For Room tiger Press: T</p>
                </div>
            `;
        
        } else if (value == t) {
            chat.innerHTML += `
                <div>
                    <p> Thank you. You have selected 3rd Floor. Now please select what room </p>
                    <p> For Room Zebra Press: Z</p>
                    <p> For Room Lion Press: L</p>
                    <p> For Room tiger Press: T</p>
                </div>
            `; } else {
            chat.innerHTML += `
                <div>
                    <p>Select a number between 1-3</p>
                </div>
            `;}
    } else {
        chat.innerHTML += `
            <div>
                <p>Select a room</p>
            </div>
        `;} 
    }


// Next Question
const nextQuestion = (event) => {
    if (question===1){
        QuestionOne()
    } else if (question===2) {
        questionTwo()
    } else {
        questionThree()
    }
}









/*----------------------------------------------*/
/*form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default 

    // Assign input value to variable
    const value = document.getElementById('input-value');
}); */





