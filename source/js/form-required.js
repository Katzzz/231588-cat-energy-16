var submitBtn = document.querySelector('.form__btn');

submitBtn.addEventListener('click', function() {
  var inputs = document.querySelectorAll('input[required]');
  for(var i=0;i<inputs.length;i++){
    //inputs[i].classList.remove('form__list-item--required');
    inputs[i].classList.add('form__input');
    inputs[i].classList.add('form__input--required');
  }
});
