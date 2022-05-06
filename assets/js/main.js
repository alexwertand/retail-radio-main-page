let hamburger = document.querySelector('.hamburger'),
    bodyEl = document.getElementsByTagName('body')[0],
    moibileMenuEl = document.querySelector('.mobile-menu');

console.log(bodyEl);

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    bodyEl.classList.toggle('mobile-menu-open');
    bodyEl.classList.toggle('overflow-hidden');
    moibileMenuEl.classList.toggle('d-none');
});