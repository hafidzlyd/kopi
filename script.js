// toggle class active
const Navbarnav = document.querySelector('.Navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  Navbarnav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !Navbarnav.contains(e.target)) {
        Navbarnav.classList.remove('active');
    }
});