document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.querySelector('.mobile-header nav');

    menuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
});
