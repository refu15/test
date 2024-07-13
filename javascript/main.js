document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    menuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
});
