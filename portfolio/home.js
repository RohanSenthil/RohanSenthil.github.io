var slices = 9,
    angle = 360 / slices;
for (var i = 0; i < (slices -1); i++) {
  var slice = $('<div></div>');  
  slice.css('transform', 'rotateY(' + angle * i + 'deg)');
  $('.sphere').append(slice);
}