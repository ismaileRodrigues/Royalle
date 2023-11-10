

$(document).ready(function () {
  $('.banner').slick({
    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


currentFlickity.on('pointerUp', function (event, pointer) {
  currentFlickity.player.play();
});



function openNav() {
  let openbtn = document.querySelector('.openbtn')
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

  openbtn.style.display = 'none';

}

function closeNav() {
  let openbtn = document.querySelector('.openbtn')
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  openbtn.style.display = 'block';
}