// main.js

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-header');

    menuBtn.addEventListener('click', function() {
        mobileNav.style.display = mobileNav.style.display === 'none' ? 'block' : 'none';
    });
});
document.getElementById('menu-btn').addEventListener('click', function () {
    var nav = document.querySelector('.mobile-nav');
    nav.classList.toggle('active');
});
