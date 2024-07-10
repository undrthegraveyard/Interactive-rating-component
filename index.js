const ratingOptions = document.querySelectorAll('.rating-option'); 
const submitButton = document.querySelector('button'); 
const ratingState = document.querySelector('.rating-state'); 
const thankyouState = document.querySelector('.thank-you-state'); 
let selectedRating = document.getElementById('selected-rating'); 

let rating = 0; 

ratingOptions.forEach(option => {
  option.addEventListener('click',(event)=> {
    rating = option.dataset.rating;
    ratingOptions.forEach(option => option.classList.remove('selected'));
    option.classList.add('selected');
  })
})

submitButton.addEventListener('click', (event) => {
  if (rating !== 0) { 
    ratingState.style.display = 'none'; 
    thankyouState.style.display = 'flex'; 
    selectedRating.textContent = rating; 
  } else {
    alert('Please select a rating before submitting'); 
  }
});