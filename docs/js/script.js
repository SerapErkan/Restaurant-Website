
  $(document).ready(function() {
    // navbar toggling
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle();
    });

    // navbar background change in scroll
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if(position >= 80){
            $('.navbar').addClass('bg-navbar');
        } else {
            $('.navbar').removeClass('bg-navbar');
        }
    });

    $('.page.x1').on('click', function() {
      $('.author-item.page-1').css('left', 0);
      $('.author-item.page-2').css('left', '-500%');
      $('.author-item.page-3').css('left', '-500%');
    });
    
    $('.page.x2').on('click', function() {
      $('.author-item.page-1').css('left', '-500%');
      $('.author-item.page-2').css('left', 0);
      $('.author-item.page-3').css('left', '-500%');
    });
    
    $('.page.x3').on('click', function() {
      $('.author-item.page-1').css('left', '-500%');
      $('.author-item.page-2').css('left', '-500%');
      $('.author-item.page-3').css('left', 0);
    });


  });


  // --js
// // İlgili sayfa öğelerini seçme
// const x1 = document.querySelector('.page.x1');
// const x2 = document.querySelector('.page.x2');
// const x3 = document.querySelector('.page.x3');
// const page1 = document.querySelector('.author-item.page-1');
// const page2 = document.querySelector('.author-item.page-2');
// const page3 = document.querySelector('.author-item.page-3');

// // // x1 tıklandığında
// x1.addEventListener('click', function() {
//   page1.style.left= 0;
//   page2.style.left= "-500%"
//   page3.style.left= "-500%";
// });

// // // x2 tıklandığında
//  x2.addEventListener('click', function() {
//   page1.style.left="-500%"
//   page3.style.left="-500%";
//   page2.style.left= 0;

// });


// x3.addEventListener('click', function() {
//   page1.style.left= "-500%"
//   page2.style.left= "-500%";
//   page3.style.left= 0;

// });
