const hero = document.getElementById('hero-img');
const para = document.getElementById('paraimg');

window.addEventListener('scroll', zoomHero);
function zoomHero() {
  let offset = window.pageYOffset - para.offsetTop;
  hero.style.backgroundSize = 100 + window.pageYOffset / 12 + '%';
  para.style.backgroundPositionY = offset * 0.7 + "px";
}

