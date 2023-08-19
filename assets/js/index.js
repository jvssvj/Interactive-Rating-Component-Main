let buttons = document.querySelectorAll('.buttons-content button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    buttons.forEach(btn => btn.style.backgroundColor = 'hsl(213, 19%, 18%)');

    button.style.backgroundColor = 'hsl(25, 97%, 53%)';
    button.style.color = 'hsl(0, 0%, 100%)'
  });
});


form.addEventListener('click',function(ev){
  ev.preventDefault()
})

  let btns = document.querySelector('.buttons-content')
  let rating = document.querySelector('#rate')
  let submit = document.getElementById('submit')
  let card1 = document.querySelector('#disablecard1') //Display: none
  let card2 = document.querySelector('#card2') // Display: grid

  
  btns.addEventListener('click', function(event) {
    let numberSelect = event.target.innerText
    rating.innerText = numberSelect

    if(numberSelect >0 || numberSelect <=5) {
      submit.addEventListener('click', function(){
        card1.style.display = 'none'
        card2.style.display = 'grid'

        function reloadPage() {
          setTimeout(function() {
              location.reload();
          }, 7000); 
      }
        reloadPage()

      })
    }
  })

