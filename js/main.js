$( document ).ready(function() {
    window.addEventListener('scroll', function(){
        let header = document.querySelector('header');
        let windowPosition = window.scrollY > 73;
        header.classList.toggle('scrolling-active', windowPosition);
      })

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
});