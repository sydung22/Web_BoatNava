$( document ).ready(function() {
    window.addEventListener('scroll', function(){
        let header = document.querySelector('header');
        let windowPosition = window.scrollY > 73;
        header.classList.toggle('scrolling-active', windowPosition);
      })
});