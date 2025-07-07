// TOGGLE CLASS ACTIVE

const navbarNav = document.querySelector('.navbar-nav');

// HAMBURGER DI KLIK
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// MENEKAN DI LUAR SIDEBAR
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})