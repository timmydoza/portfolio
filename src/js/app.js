var overlay = document.getElementsByClassName('overlay')[0];
var underlay = document.getElementsByClassName('underlay')[0];
var img = document.getElementsByClassName('image-wrapper')[0];
var headerMax = 400; //pixels
var headerMin = 50;
var headerHeight = 100;
var ratio = headerMax / headerMin;

window.onscroll = function() {
  var scroll = window.scrollY;
  var offset = (scroll > headerMax) ? headerMin : scroll / ratio;
  underlay.style.height = 100 - offset + 'px'; //implicit type coersion is happening here
  underlay.style.opacity = (scroll > headerMax) ? 0.8 : scroll / (headerMax / 0.8);
  overlay.style.top = (scroll > headerMax) ?  headerHeight / 12 + 'px' : headerHeight / 3 - scroll / (ratio * 2) + 'px';
  img.style.backgroundPosition = '100% ' + (scroll / 3) + 'px';
};
