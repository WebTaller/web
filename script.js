window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('bg-transparent', window.scrollY > 0);
});
