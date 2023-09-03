# Project Name

Replace this readme with your own information about your project.

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

## The problem

Beginner's mistake:
Planned the project with too many nodes where I lost myself in typography errors by the end.  Had to run the code with developper tools and Ctrl+f to understand their existence and open 2 copies of the script side by side for comparison and correction...

Did not study the loops yet, but used 
setTimeout(() => {
      location.reload();
    }, 2000)
instead.


Attempt to use ternary with functions failed :
//Ternary not functioning when answer is no, calling activitySelection oavsett -using if else instead, 
old code:
const handleConfirmation = (answer === "yes") ? showMessage(`Great!`, "bot") : setTimeout(() => {
showMessage(`This page will reload automatically`, "bot");
setTimeout(() => { 
location.reload(); }, 2000);
}, 1000);
// Another bug within the same code block:
using the following code:
showMessage(`This page will reload automatically`, "bot");
setTimeout(() => { 
location.reload(); }, 2000)
did not prevent the next function to appear even though the ternary condition was not satisfied i.e. answer === "no" , tried to nest it in another setTimeOut (function ()=> {},1000), but did not work neither.


the onchange event works on <select> elements (for buttons: onclick)
https://www.w3schools.com/jsref/event_onchange.asp

Had to include addEventListener "select" in the respective functions to invoke them
Had to use anonymous function to be able to invoke summarisingMessage passing arguments
document.getElementById('catamaran-time-slot').addEventListener('change', ((event) => {
      summarisingMessage(event, waterActivity)

Forgot to declare my closure AddingBtn in the outer scope and did it in the inner scope instead, making the code not functional.  Debugging with dev tools helped understand my mistake.

Thought at first that values of option for selection method should also be written like id with camelCase and not starting with numbers, but they actually can take "numbers" and . but read as strings.  Made the summarising message reflect better the time slots instead of "morning" or "afternoon".

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

## View it live

Have you deployed your project somewhere? Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
