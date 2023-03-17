window.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.header-btn');
  const domContainer = document.querySelector('#global-container');
  const coverContainer = document.querySelector('#container-cover');
  const body = document.querySelector('body');

  btn.addEventListener('click', function() {
    domContainer.classList.add('navOpen');

    if(domContainer.className == "navOpen") {
      body.classList.add('hidden');

      coverContainer.addEventListener('click', function() {
        domContainer.classList.remove('navOpen');
        body.classList.remove('hidden');
      })
    };
  })

})


//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    allowTouchMove: false,
    speed: 1000,
    autoplay: {
      delay:2500
    }
  });