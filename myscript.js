const hero = document.getElementById('hero-img');
window.addEventListener('scroll', zoomHero);
function zoomHero(){
  hero.style.backgroundSize = 100 +window.pageYOffset/12+'%';
}

