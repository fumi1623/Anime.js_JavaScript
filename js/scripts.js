// var test1 = anime({
//   targets: ['.square'],
//   translateX: '13.5rem',
//   scale: function(el, index) {
//     return index * 80;
//   },
//   direction: 'alternate',
//   // loop: true
// });

// var test2 = anime({
//   targets: '.square',
//   scale: [
//     {value: .1, easing: 'easeOutSine', duration: 500},
//     {value: 1, easing: 'easeInOutQuad', duration: 1200}
//   ],
//   delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
// });

//jquery
// $("#squares :nth-child(1n)").css("top", "calc(10px + ((1n - 1) * 25) px)")

// var tl = anime.timeline({
//   easing: 'easeOutExpo',
//   duration: 5000
// });

// tl
// .add({
//   targets: '.square',
//   translateX: 250,
// }, '-=600')


anime({
  targets: '.square',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
  loop: true
});