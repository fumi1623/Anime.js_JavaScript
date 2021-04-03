// var test1 = anime({
//   targets: ['.square'],
//   translateX: '13.5rem',
//   scale: function(el, index) {
//     return index * 80;
//   },
//   direction: 'alternate',
//   // loop: true
// });

var test2 = anime({
  targets: '.square',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
});