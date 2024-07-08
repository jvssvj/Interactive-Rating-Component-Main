let buttonsRating = document.querySelectorAll('.btn--rating');
let buttonsRatingDiv = document.querySelector('.component__form__btns')
let ratingSpan = document.querySelector('#rate')
let submitButton = document.querySelector('#submit')
let frm = document.querySelector('#component__form')
let component = document.querySelector('#component') //Display: none
let cardRatingResult = document.querySelector('#card__rating__result') // Display: grid

frm.addEventListener('submit', (ev) => {
  ev.preventDefault()
})

document.querySelector('#return__component__btn').addEventListener('click', () => {
  window.location.href = 'index.html'
})

function buttonsRatingStyle() {
  buttonsRating.forEach(button => {
    button.addEventListener('click', () => {
      
      buttonsRating.forEach(btn => btn.style.backgroundColor = 'hsl(213, 19%, 18%)');
  
      button.style.backgroundColor = 'hsl(25, 97%, 53%)';
      button.style.color = 'hsl(0, 0%, 100%)'
    });
  });
}

frm.addEventListener('submit', (ev) => {
  ev.preventDefault()
})

function getRating() {
  buttonsRatingDiv.addEventListener('click', function(event) {
    let numberSelect = event.target.innerText
    ratingSpan.innerText = numberSelect
  
    submitButton.addEventListener('click', function() {
      
      if(numberSelect > 0 || numberSelect <=5) {
        component.style.display = 'none'
        cardRatingResult.style.display = 'grid'
      } 
    })

  })
}

buttonsRatingStyle()
getRating()