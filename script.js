// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
//   .add({
//     targets: '.ml2 .letter',
//     scale: [6,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70*i
//   })
//   .add({
//     targets: '.ml2',
//     opacity: 1,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });  

var tl= new TimelineMax();

tl
.fromTo('#top', 1.7 ,{
  top:'100%',
  opacity: 0
}, {
  top: '0%',
  opacity: 1,
  ease: Expo.easeInOut    
})
.fromTo('#bottom', 1.7 ,{
  height:'0%',
  opacity: 0
}, {
  height: '60%',
  opacity: 1,
 ease: Expo.easeInOut    
},'-=1.7')
.fromTo('.hoverLine', 2,{
    top:'100%'
}, {
    top: '15%',
   ease: Expo.easeInOut    
}) 
.fromTo('.Btn', 1,{
  width:'0px',
  height:'0px'
}, {
  width:'45px',
  height:'45px',
  ease: Expo.easeInOut    
},'-=1.5') 





















var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    delay: 200
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 6],
    easing: "easeOutExpo",
    duration: 900,
    delay: 200
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    delay: 100,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11 .line',
    opacity: 0
  }).add({
    targets: '.ml11',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



var menu = document.querySelector('#menuBtn');
var menuPage = document.querySelector('#menuPage');
var Page = document.querySelector('#Page');
var CloseMenu = document.querySelector('#CloseMenu');

menu.addEventListener('click', function(){
  menuPage.style.height = '100%';
  Page.style.display = 'initial';
  var Tl= new TimelineMax();

Tl
  .fromTo('#MenuLink1', 1,{
    top:'4%',
    opacity: 0
  }, {
    top:'20%',
    opacity: 1,
    ease: Expo.easeInOut    
  },) 
  .fromTo('#MenuLink2', 1,{
    top:'4%',
    opacity: 0
  }, {
    top:'40%',
    opacity: 1,
    ease: Expo.easeInOut    
  },'-=1') 
  .fromTo('#MenuLink3', 1,{
    top:'4%',
    opacity: 0
  }, {
    top:'60%',
    opacity: 1,
    ease: Expo.easeInOut    
  },'-=1') 
  .fromTo('#MenuLink4', 1,{
    top:'4%',
    opacity: 0
  }, {
    top:'80%',
    opacity: 1,
    ease: Expo.easeInOut    
  },'-=1') 
});


CloseMenu.addEventListener('click', function(){
  menuPage.style.height = '0%';
  Page.style.display = 'none';
});



var IncreaseBtn = document.querySelector('#IncreaseBtn');
var MainNav = document.querySelector('#MainNav');

IncreaseBtn.addEventListener('click', function(){
  if(MainNav.style.fontSize = '15px'){
    MainNav.style.fontSize = '18px';
  }
  else if (MainNav.style.fontSize = '18px'){
    MainNav.style.fontSize = '15px'
  }
});







