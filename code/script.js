const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputValue = document.getElementById('name-input')
const sbmButton = document.getElementById('send-btn')
const inputWrapper = document.getElementById('input-wrapper')

let currentQuestion = 0

const botReply = (msg) => {
     showMessage(msg, 'bot')
   }
  
const userReply = (msg) => {
     showMessage(msg, 'user')
   }

 const showMessage = (message, sender) => {
   if (sender === 'user') {
     chat.innerHTML += `
       <section class="user-msg">
         <div class="bubble user-bubble">
           <p>${message}</p>
         </div>
         <img src="assets/user.png" alt="User" />  
       </section>
     `
   } else if (sender === 'bot') {
     chat.innerHTML += `
       <section class="bot-msg">
         <img src="assets/bot.png" alt="Bot" />
         <div class="bubble bot-bubble">
           <p>${message}</p>
         </div>
       </section>
     `
   }

  chat.scrollTop = chat.scrollHeight
 }

// Starts here
 const greeting = () => {
   showMessage(`Hello there, What's your name?`, 'bot')
 }
  
// Just to check it out, change 'bot' to 'user' here 👆


 const handleInput = (event) => {
   currentQuestion++
   event.preventDefault()

   console.log('our currentQuestion variable is:', currentQuestion)
   if (currentQuestion === 1) {
    handleNameQuestion()}
    else if (currentQuestion === 2) {
      languageQuestion()}
   }

  // Questions asked 
 
  const languageQuestion = (name) => {
    showMessage(`Hi ${name}, Welcome by learning Swedish which subject do you want to learn?`, 'bot')

    inputWrapper.innerHTML = `
      <button id="food">Food🥗</button>
      <button id="greetings">Greetings👋</button>
      <button id="jobs">Jobs👨‍⚖️</button>
    `
    document 
      .getElementById('food')
      .addEventListener('click', () => {askForType('food')})
    document
      .getElementById('greetings')
      .addEventListener('click', () => {askForType('greetings')})
    document
      .getElementById('jobs')
      .addEventListener('click', () => {askForType('jobs')})

      

      currentQuestion++
      console.log('Current question set to', currentQuestion)
   }

   

  //Question Functions

    const handleNameQuestion = () => {
      const name = inputValue.value

      showMessage(`My name is ${name}`, 'user')
      inputValue.value = ''   

      setTimeout(() => languageQuestion(name), 1500)
    }

   
    const askForType = (subject) => {
      if (subject === 'food') {
        showMessage(`I choose ${subject}`, 'user')
        showMessage(`Ok food it is! Translate: I like strawberries in Swedish.`, 'bot')
        // form.innerHTML = ''
        inputWrapper.innerHTML = `          
          <button id="good">Jag tycker om jordgubber</button>
          <button id="false">Ik hou van aardbeien</button>
          <button id="false0">Jag älskar jordgubber</button>
       `

        document 
        .getElementById('good')
        .addEventListener('click', () => {showMessage('That was the right answer', 'bot')

        {inputWrapper.innerHTML = `
        <button id="retry">Try again...</button>
        <button id="end">End Programming</button>
            `
            

            document
            .getElementById('retry')
            .addEventListener('click', () => {location.reload()})
            document
            .getElementById('end')
            .addEventListener('click', () => {showMessage('Congratiolations on completing the program!' , 'bot')})
       }
      })




        document
        .getElementById('false')
        .addEventListener('click', () => {showMessage('Sorry try again' , 'bot')})
        document
        .getElementById('false0')
        .addEventListener('click', () => {showMessage('Sorry try again' , 'bot')})



        currentQuestion++
        console.log('Current question is now', currentQuestion)

      }else if (subject === 'greetings') {
          showMessage(`I choose ${subject}`, 'user')
          showMessage(`Ok, greetings it is! translate: Hello, How are you in Swedish?`, 'bot')
     
          inputWrapper.innerHTML = `
          
          <button id="good">Hej hur mår du?</button>
          <button id="false">Hallo hoe gaat het?</button>
          <button id="false0">Var bor du?</button>
        `
        document 
        .getElementById('good')
        .addEventListener('click', () => {showMessage('That was the right answer', 'bot')

        {inputWrapper.innerHTML = `
        <button id="retry">Try again...</button>
        <button id="end">End Programming</button>
            `
            

            document
            .getElementById('retry')
            .addEventListener('click', () => {location.reload()})
            document
            .getElementById('end')
            .addEventListener('click', () => {showMessage('Congratiolations on completing the program!' , 'bot')})
       }
      })

        document
        .getElementById('false')
        .addEventListener('click', () => {showMessage('Sorry try again' , 'bot')})
        document
        .getElementById('false0')
        .addEventListener('click', () => {showMessage('Sorry try again' , 'bot')})

        currentQuestion++
        console.log('Current question is now', currentQuestion)


      }else {
        showMessage(`I choose ${subject}`, 'user')
        showMessage(`Ok, we will talk about jobs. translate this: My father is a judge`, 'bot')

          inputWrapper.innerHTML = `
    
          <button id="false">Min far är läkara</button>
          <button id="false0">Mijn vader is een rechter?</button>
          <button id="good">Min far är domare</button>
        
         `
         document
         .getElementById('false0')
         .addEventListener('click', () => {showMessage('Sorry try again' , 'bot')})
          document
          .getElementById('false')
          .addEventListener('click', () => {showMessage('Sorry try again', 'bot')
          })
         document
         .getElementById('good')
         .addEventListener('click', () => {showMessage('That was the right answer', 'bot')

         {inputWrapper.innerHTML = `
          <button id="retry">Try again...</button>
          <button id="end">End Programming</button>
              `
              

              document
              .getElementById('retry')
              .addEventListener('click', () => {location.reload()})
              document
              .getElementById('end')
              .addEventListener('click', () => {showMessage('Congratulations on completing the program!', 'bot')
              
          })
         }
        })
        

        currentQuestion++
        console.log('Current question is now', currentQuestion)

      }
 

    }     
form.addEventListener	('submit', handleInput)

    
setTimeout(greeting, 500)
