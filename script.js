const bilder = document.querySelectorAll('.slide');
let aktuellesBild = 0;

setInterval(function() {
    bilder[aktuellesBild].classList.remove('aktiv');
    aktuellesBild = (aktuellesBild + 1) % bilder.length;
    bilder[aktuellesBild].classList.add('aktiv');
}, 5000);

const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

burgerBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('offen');
    burgerBtn.classList.toggle('aktiv');
});

document.addEventListener('click', function(e) {
    if (!burgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('offen');
        burgerBtn.classList.remove('aktiv');
    }
});