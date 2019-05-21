var modal = document.querySelector('.modal');
var button = document.querySelector('.main-catalog__btn');

button.addEventListener('click', function() {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
  }
});
