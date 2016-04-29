var overlay = document.getElementsByClassName('overlay')[0];
var underlay = document.getElementsByClassName('underlay')[0];
var img = document.getElementsByClassName('image-wrapper')[0];
var logo = document.getElementsByClassName('name')[0];
var headerMax = 400; //pixels
var headerMin = 50;
var headerHeight = 100;
var ratio = headerMax / headerMin;

window.onload = window.onscroll = function() {
  var scroll = window.scrollY;
  var offset = Math.min(scroll / ratio, headerMin);

  //Adjusts size of header
  underlay.style.height = 100 - offset + 'px';
  overlay.style.height = 100 - offset + 'px';

  //Adjusts opacity of header
  underlay.style.opacity = Math.min(0.8, scroll / (headerMax / 0.8));

  //Adjusts size of logo
  logo.style.fontSize = Math.min(headerMax, scroll) / -headerMax + 3 + 'em';

  //Adjusts left margin of logo
  logo.style.marginLeft = 10 - Math.min(headerMax, scroll) * (3 / headerMax) + '%';

  //parallax effect
  img.style.backgroundPosition = '100% ' + (scroll / 3) + 'px';
};
