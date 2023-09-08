# Project Chatbot

This week's project is all about building a functional chatbot interface using JavaScript, HTML, and CSS. 

You'll create a captivating chatbot that can interact with users, ask questions, display messages, and respond with precision. 

## The problem
Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

* **Beginner's mistake**:
Planned the project with too many nodes where I lost myself in typography errors by the end.  Had to run the code with developper tools and Ctrl+f to understand their existence and open 2 copies of the script side by side for comparison and correction...

* Did not study the loops yet, but used 
```
setTimeout(() => {
      location.reload();
    }, 2000)
```
instead.


* Attempt to use ternary with functions failed :
//Ternary not functioning when answer is no, calling activitySelection oavsett -using if else instead, 
old code:
```
const handleConfirmation = (answer === "yes") ? showMessage(`Great!`, "bot") : setTimeout(() => {
showMessage(`This page will reload automatically`, "bot");
setTimeout(() => { 
location.reload(); }, 2000);
}, 1000);
```
// Another bug within the same code block:
using the following code:
```
showMessage(`This page will reload automatically`, "bot");
setTimeout(() => { 
location.reload(); }, 2000)
```
did not prevent the next function to appear even though the ternary condition was not satisfied i.e. answer === "no" , tried to nest it in another setTimeOut (function ()=> {},1000), but did not work neither.


* the **onchange** event works on <select> elements (for buttons: onclick)
https://www.w3schools.com/jsref/event_onchange.asp

* Had to include addEventListener "select" in the respective functions to invoke them
Had to use anonymous function to be able to invoke summarisingMessage passing arguments
```
document.getElementById('catamaran-time-slot').addEventListener('change', ((event) => {
      summarisingMessage(event, waterActivity)
```

* Forgot to declare my closure AddingBtn in the outer scope and did it in the inner scope instead, making the code not functional.  Debugging with dev tools helped understand my mistake.

* Thought at first that values of option for selection method should also be written like id with camelCase and not starting with numbers, but they actually can take "numbers" and . but read as strings.  Made the summarising message reflect better the time slots instead of "morning" or "afternoon".

* The
```
setTimeout (() => {},1000)
``` 
function used for better user experience as all messages appeared in blocks not visible to the eye as the user's sight is focused on changing buttons when interacting with buttons or select, the chat on user's side should prompt the answer simultaneously and the same answer selected or else weird feeling when other words added pops up (like the mind needs to process a new information on the msg).



* If I had more time,
- would have liked to combine different booked activities for the day and invoking this function (time restriction and lack of knowledge for restricting conflicting timeslots as they are here passed as strings),
- use the DOM to change background theme and bot icon mimicking a change of service accordlingly to the choices (spa, golf, boathouse and diner) made,
- take the time to think the code through locate any patterns I could have created a closure for, or simplifying the personalised messages in doing so and refactor.


## View it live

Link to the deployed project:

https://hotel-lebanian-chatbot.netlify.app/
