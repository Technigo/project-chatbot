const form = document.getElementById('form');
const chat = document.getElementById('chat');

form.addEventListener('submit', (event) => {
    // Prevent default form behaviour after submit - refreshing page
    event.preventDefault();

    // Assign input value to variable
    const value = document.getElementById('input-value').value;

    // Check if value from user is correct.
    // If yes, return code between lines 15-19
    // Else, return code between lines 21-25
    if (Number(value) === 4) {
        chat.innerHTML += `
            <div>
                <p>${value}</p>
            </div>
        `;
    } else {
        chat.innerHTML += `
            <div>
                <p>Hey, that is not correct value, try again</p>
            </div>
        `;
    }
});