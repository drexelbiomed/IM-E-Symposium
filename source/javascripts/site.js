//= require jquery3
//= require popper
//= require bootstrap-sprockets

var slideUpSlow = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    duration: 1500,
    easing: 'ease-out'
};

var marketingBoxes = {
  delay: 1500, 
  interval: 200, 
  distance:'100%',
  origin: 'bottom',
  opacity: 0,
  duration: 500,
  easing: 'ease-in'
};

ScrollReveal().reveal('.headline', slideUpSlow);
// ScrollReveal().reveal('.headline', { duration: 2000 });
ScrollReveal().reveal('.col-sm', marketingBoxes);

// var node = document.querySelector('#cake');
// var nodeList = document.querySelectorAll('.cookies');
// var nodeArray = [
//     document.querySelector('#pie'),
//     document.querySelector('#spoon'),
//     document.querySelector('#ice-cream')
// ];

// ScrollReveal().reveal(node);
// ScrollReveal().reveal(nodeList);
// ScrollReveal().reveal(nodeArray);


// ScrollReveal().reveal('.item', { delay: 250 });
// ScrollReveal().reveal('.item', { duration: 500 });
// ScrollReveal().reveal('.item', { delay: 375, reset: true });

// // Is the same as...

// ScrollReveal().reveal('.item', {
//     delay: 375,
//     duration: 500,
//     reset: true
// });