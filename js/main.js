$( document ).ready(function() {

      window.addEventListener('scroll', function(){
        let header = document.querySelector('header');
        let pageTop = document.querySelector('#btnScrolltoTop');
        let windowPosition = window.scrollY > 73;
        header.classList.toggle('scrolling-active', windowPosition);
        pageTop.classList.toggle('active', windowPosition);
      })
      
      const btnScrolltoTop = document.querySelector('#btnScrolltoTop');
      btnScrolltoTop.addEventListener('click', function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
      });
    $(".col-places").slice(0,5).show()
    $("#load-more").on('click', function(e){
        e.preventDefault();
        $(".col-places:hidden").slice(0, 3).slideDown()
        if($(".col-places:hidden").length == 0){
          $("#load-more").fadeOut('slow')
        }
    })   
    $(".col-product").slice(0,4).show()
    $("#product-more").on('click', function(e){
        e.preventDefault();
        $(".col-product:hidden").slice(0, 2).slideDown()
        if($(".col-product:hidden").length == 0){
          $("#product-more").fadeOut('slow')
        }
    })

    $(".number-count").counterUp({
      delay: 10,
      time: 3000
    });


    $('.btn-bar').click(function(){
      $('.nava-nav ul').toggleClass('show');
    })
    
    const menuBtn = document.querySelector('.btn-bar');
    let header = document.querySelector('header');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
    
      if(!menuOpen) {
        menuBtn.classList.add('open');
        header.classList.add('scrolling-active');
        menuOpen = true;
      }else{
        menuBtn.classList.remove('open');
        // header.classList.remove('scrolling-active');
        menuOpen = false;
      }
    
    });
});