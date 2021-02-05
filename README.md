# Chat bot

**Mission:** 
- *Create a chat bot using setTimeout and inserting html via DOM selectors*

**Requirements:**
- [x] *Complete all iterations*
  <br>
  (❗ - Each iteration has its own git commit for ease of verification )
- [x] *Work on your CSS skills, change the styling.*
- [x] *How is the user answering the questions? Choose the form elements that you think fit the purpose best.*
- [x] *Add sound effects to the chat*
- [ ] *Refactor the code to learn more about different approaches with functions*
  <br>
  (❗ - I tried to figure out a way to do this, but since my logic involved a game loop I couldn't understand how to do this without adding unnecessary code)
- [x] *Use setTimeout() to show the user that the bot is processing/loading/typing if you choose to use setTimeout() for all the bot's answers*


***

## Workflow

### Brainstorm
I began by sketching a general idea of what I wanted the chat bot to do.
<br>
As an homage to the early games of Zork (text-based adventure game) and Dungeons and Dragons, I decided to create my own hybrid of them. So the bot would be like the DungeonMaster of the game and describe an enemy encounter. Then the user would get to choose actions to execute. All the damage calculations and hit rolls would be handled in the background using classes and logic loops.
<br>
<br>
Here is my first draft of the logic and control flow for the chat bot: [DOCUMENT](https://docs.google.com/document/d/1Jdt6Ls3rQ6cZ4SeckF0hii9QUtowCwrwgDWfiy-FR5s/edit?usp=sharing)

### Working the Iterations
As required I worked through the iterations as described on the project brief. I made sure to keep my initial brainstorm design in mind as I created the timeout control flow.
<br>
Also I made sure to change the setup of classes and elements to fit a BEM-methodology, since I wanted to practice that method more sinec last weeks project. 

### Working with Classes
I then continued with adding classes. 
- I decided to have a master class called **Encounter** (that contained everything the main script file needed to handle the logic behind). 
- That master class then contained instances of another children of the parent class called **Combatant**
- The children of the **Combatant** could either be a hero or an enemy. 

I am unsure if this approach was the most efficient one. I based this setup off of my previous experience in game design (where I've mostly programmed in C#).

### Just working it!
When I had the classes decided I just kept iterating on my game logic and added more and more complex functions; until I git the desired result.
<br>
It did get a bit intense, but I had sooooo much fun doing this part! 😃 Hopefully it shows in the end result. 

### The Code clean-up
The last push of this project for the app logic was a code clean up. I went through each file and added block comments ontop of complicated functions describing the logic.
<br>
Hopefully the code is a bit more easier to follow after that.

***

## Reflections
In general this project was a blast to do. I got into a great flow when I began adding the more complex functions. Time just flew by and I am now truly sure about my choice to become a developer! 😊
<br>
Issues that came up:
- I did struggle a bit with keeping the code understandable. That is why I decided to have a proper clean-up phase (more on that above 👆)
- I did intend on adding buffs to the hero combatant as well, however time got away from me. So even though I made functions to dynamically add buffs to heroes and enemies, only enemies currently have buffs added to them. 
<br>

If I were to continue on this project / start over I would:
- I would add the aforementioned hero buffs 
- I would also like to add critical hit calculations
- Work more on the setup of the classes (perhaps find a better/more efficient way) - Maybe after a few weeks on this course I can go back and refactor those classes with my new knowledge.

<br>

***

## View it live
https://dungeon-bot.netlify.app

