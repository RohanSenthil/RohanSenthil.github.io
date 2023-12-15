var slices = 9,
    angle = 360 / slices;
for (var i = 0; i < (slices -1); i++) {
  var slice = $('<div></div>');  
  slice.css('transform', 'rotateY(' + angle * i + 'deg)');
  $('.sphere').append(slice);
}

let menuBtn = document.getElementById('menu-btn');
let dropdownContent = document.getElementById('nav-dropdown-content');
let hamburger = document.getElementById('hamburger');
let closeBtn = document.getElementById('menu-close')

menuBtn.addEventListener('click', () => {
  let opened = dropdownContent.style.display == 'block';

  if (opened) {
    dropdownContent.style.display = 'none';
    closeBtn.style.display = 'none';
    hamburger.style.display = 'block'
  } else {
    hamburger.style.display = 'none'
    dropdownContent.style.display = 'block';
    closeBtn.style.display = 'block'
  }

})