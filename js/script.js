// Управление попапом
let popupButtonOpen = document.querySelector('.contacts-button');
  popupButtonOpen.onclick = function() {
    document.querySelector('.contactform').classList.add('popup-visibility');
  };

let popupButtonClose = document.querySelector('.button-close');
  popupButtonClose.onclick = function() {
    document.querySelector('.contactform').classList.remove('popup-visibility');
  };


// Слайдер
let sliderButtonOne = document.querySelector('.sider-controls-button-one');
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
};

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


