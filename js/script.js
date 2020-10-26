// Управление попапом


let popup = document.querySelector('.contactform');
let popupForm = popup.querySelector('.contactform-grid');
let userName = popup.querySelector('[name="user-name"]');
let userEmail = popup.querySelector('[name="email"]');
let popupButtonOpen = document.querySelector('.contacts-button');
let popupButtonClose = popup.querySelector('.button-close');
popupButtonOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup-visibility');
});
popupButtonClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('popup-visibility');
  popup.classList.remove('form-error');
});
window.addEventListener('keydown', function(evt){
  if (evt.keyCode == 27 && popup.classList.contains('popup-visibility')) {
    popup.classList.remove('popup-visibility');
    popup.classList.remove('form-error');
  }
});
popupForm.addEventListener('submit', function(evt){
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popup.classList.remove('form-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('form-error');
  }

});
// Слайдер
// Так вроде по-симпатичнее
let slides = document.querySelectorAll('.slider-item')
let sliderButtons = document.querySelectorAll('.sider-controls-button')
let addSliderToggle = function(slide, button) {
  button.addEventListener('click', function() {
    slides.forEach(function(item){
      item.classList.remove('slide-current');
    });
    sliderButtons.forEach(function(item){
      item.classList.remove('current')
    })
    slide.classList.add('slide-current');
    button.classList.add('current');
  });
}
for (let i = 0; i < slides.length; i++) {
  addSliderToggle(slides[i], sliderButtons[i])
}

/*let sliderButtonOne = document.querySelector('.sider-controls-button-one');
let sliderButtonTwo = document.querySelector('.sider-controls-button-two');
let sliderButtonthree = document.querySelector('.sider-controls-button-three');
sliderButtonOne.onclick = function() {
  document.querySelector('.sider-controls-button-one').classList.add('current');
  document.querySelector('.sider-controls-button-two').classList.remove('current');
  document.querySelector('.sider-controls-button-three').classList.remove('current');
  document.querySelector('.slider-image-one').classList.add('slide-current');
  document.querySelector('.slider-image-two').classList.remove('slide-current');
  document.querySelector('.slider-image-three').classList.remove('slide-current');
};
sliderButtonTwo.onclick = function() {
  document.querySelector('.sider-controls-button-two').classList.add('current');
  document.querySelector('.sider-controls-button-one').classList.remove('current');
  document.querySelector('.sider-controls-button-three').classList.remove('current');
  document.querySelector('.slider-image-two').classList.add('slide-current');
  document.querySelector('.slider-image-one').classList.remove('slide-current');
  document.querySelector('.slider-image-three').classList.remove('slide-current');
};
sliderButtonthree.onclick = function() {
  document.querySelector('.sider-controls-button-three').classList.add('current');
  document.querySelector('.sider-controls-button-two').classList.remove('current');
  document.querySelector('.sider-controls-button-one').classList.remove('current');
  document.querySelector('.slider-image-three').classList.add('slide-current');
  document.querySelector('.slider-image-two').classList.remove('slide-current');
  document.querySelector('.slider-image-one').classList.remove('slide-current');
};*/

// Карта
let map;
function initMap() {
map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 59.939103, lng: 30.321542 },
  zoom: 17,
});
var marker = new google.maps.Marker({position: {lat: 59.938776, lng: 30.323727},
map: map,
title: 'Наш маркер: Большой театр',
icon: 'img/map-marker.png'});
google.maps.Map.prototype.markers = new Array();
};


