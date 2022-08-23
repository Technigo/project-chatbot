# Project Name

Replace this readme with your own information about your project.

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

## View it live

Have you deployed your project somewhere? Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.

Hej och välkommen till restaurang x bokningsbot!
I vilket namn vill du boka bord?

        Caroline S

Vilken dag vill du boka bord? (Fredag eller Lördag)

Knapp: Fredag, Lördag

        Lördag

Vilken tid vill du boka för?

Drop-down: Frukost, Lunch, Middag

        Lunch

Hur många vill du boka för?

Text: litet sällskap prompt summering, stort mail

Sammanfattning + Vill du bekfräfta bokningen

Knapp: Ja, Nej

Välkommen till oss på Restaurang X!

    <select id="time">
      <option value="selected time">Select time</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
    </select>

     <select id="time">
      <option value="selected time">Select time</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
    </select>

    const select = document.getElementById('select')
select.addEventListener('change', () => nextQuestion(select.value))


if (dayBooking === 'friday') {
  inputWrapper.innerHTML = `
  <button id='lunch'>Lunch</button>
  <button id='dinner'>Dinner</button>
`
}

else if (dayBooking === 'saturday') {
  inputWrapper.innerHTML = `
  <button id='breakfast'>Breakfast</button>
  <button id='lunch'>Lunch</button>
  <button id='dinner'>Dinner</button>
  `
  document
  .getElementById('breakfast')
  .addEventListener('click', () => nextQuestion('guests'))
  document
  .getElementById('lunch')
  .addEventListener('click', () => nextQuestion('guests'))
  document
  .getElementById('dinner')
  .addEventListener('click', () => nextQuestion('guests'))
}

const time = (type) => {
  questionNumber++
  botReply(
    `Oh so you're in the mood for ? Great choice. Select something from the menu!`
  ) }

