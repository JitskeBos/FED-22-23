// https://www.w3schools.com/howto/howto_js_countdown.asp

var counterelement = document.getElementById("demo");

if(counterelement !== null) {
  // Set the date we're counting down to
  var countDownDate = new Date("Feb 21, 2024 08:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
} 

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav')

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
})

const mand_btn = document.querySelector('.mand');
const shopping_cart = document.querySelector('.shopping-cart')
const kruis_btn = document.querySelector('.kruis');

mand_btn.addEventListener('click', function () {
  mand_btn.classList.toggle('isActive');
  shopping_cart.classList.toggle('isActive');
  kruis_btn.classList.toggle('isActive');
})

kruis_btn.addEventListener('click', function () {
  mand_btn.classList.toggle('isActive');
  shopping_cart.classList.toggle('isActive');
  kruis_btn.classList.toggle('isActive');
})


var hearts = document.querySelectorAll('.heart');
const empty = document.querySelector('.empty');
const jasje = document.querySelector('.jasje');

hearts.forEach((heart) => {
  heart.addEventListener('click', function() {
    console.log('Ik ben geklikt');
    hearts.classList.toggle('.isActive');
    empty.classList.toggle('.isActive');
    jasje.classList.toggle('.isActive');
  })
})



var dropKnopjes = document.querySelectorAll('.clickMe');
var dropdownMenu = document.querySelectorAll('.dropdownMenu');

console.log(dropKnopjes);

dropKnopjes.forEach(function(element) {
  element.addEventListener('click', function() {
    console.log('dropKnopjes');
    dropdownMenu.classList.toggle('.isActive');
  });
})
