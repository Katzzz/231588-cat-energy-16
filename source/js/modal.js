var modal = document.querySelector('.modal');
var buttons = document.querySelectorAll('.main-catalog__btn');

for(var i=0;i<buttons.length;i++)
{
  buttons[i].addEventListener('click', function(e) {
    if (modal.classList.contains('modal--closed')) {
      modal.classList.remove('modal--closed');
      modal.classList.add('modal--opened');
    }
    e.preventDefault();
  });
}
