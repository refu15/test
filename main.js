const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {
console.log('ok!');
  ham.classList.toggle('active');
  nav.classList.toggle('active');

});
