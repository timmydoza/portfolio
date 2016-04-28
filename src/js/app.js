var overlay = document.getElementsByClassName('overlay')[0];
var underlay = document.getElementsByClassName('underlay')[0];
var headerHeight = 100; //pixels

window.onscroll = function() {
  var offset = (window.scrollY > headerHeight) ? headerHeight / 2 : window.scrollY / 2;
  underlay.style.height = headerHeight - offset + 'px'; //implicit type coersion is happening here
  underlay.style.opacity = (window.scrollY > headerHeight) ? 0.8 : window.scrollY / (headerHeight / 0.8);
  overlay.style.top = (window.scrollY > headerHeight) ?  headerHeight / 12 + 'px' : headerHeight / 3 - window.scrollY / 4 + 'px';
};
