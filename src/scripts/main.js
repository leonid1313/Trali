'use strict';

const buttonsHeart = document.querySelectorAll('.card-hover-button__like');
const spanHeart = document.querySelector('.personal-nav-item-span-heart');

const buttonsLibra = document.querySelectorAll('.card-hover-button__compare');
const spanLibra = document.querySelector('.personal-nav-item-span-libra');

const buttonsCard = document.querySelectorAll('.presentation__button');
const spanCard = document.querySelector('.personal-nav-item-span-card');

let indexCard = 15;

buttonsCard.forEach((buttonCard) => {
  buttonCard.addEventListener('click', function() {
    spanCard.innerHTML = indexCard += 1;
  });
});

let indexHeart = 0;

spanHeart.hidden = true;

buttonsHeart.forEach((buttonHeart) => {
  buttonHeart.addEventListener('click', function() {
    spanHeart.innerHTML = indexHeart += 1;

    if (typeof spanHeart.innerHTML === 'string') {
      spanHeart.hidden = false;
    }
  });
});

let indexLibra = 0;

spanLibra.hidden = true;

buttonsLibra.forEach((buttonLibra) => {
  buttonLibra.addEventListener('click', function() {
    spanLibra.innerHTML = indexLibra += 1;

    if (typeof spanLibra.innerHTML === 'string') {
      spanLibra.hidden = false;
    }
  });
});

const container = document.querySelectorAll('.card__image');
const buttons = document.querySelectorAll('.card-hover-button__view');
const buttonClose = document.querySelector('.button-close');

buttonClose.addEventListener('click', function() {
  buttonClose.classList.remove('close');

  container.forEach((elem) => {
    elem.classList.remove('show');
  });
});

for (let i = 0; i <= buttons.length; i += 1) {
  buttons[i].onclick = function(e) {
    const a = this.id;

    for (let j = 0; j < container.length; j++) {
      if (a === container[i].id) {
        buttons[i].addEventListener('click', function() {
          container[i].classList.add('show');
          buttonClose.classList.add('close');
        });
      }
    }
  };
}
